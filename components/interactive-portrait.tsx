// interactive-portrait.tsx

"use client"

import { useEffect, useRef, useState } from "react"
import * as THREE from "three"

export default function InteractivePortrait() {
  const containerRef = useRef<HTMLDivElement>(null)
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null)
  const animationFrameRef = useRef<number>()
  const [webGLAvailable, setWebGLAvailable] = useState(true)


  useEffect(() => {
    if (!containerRef.current) return

    const container = containerRef.current
    const width = container.clientWidth
    const height = container.clientHeight

    // Check WebGL availability
    const canvas = document.createElement('canvas')
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl')

    if (!gl) {
      console.warn('WebGL is not available. Using fallback rendering.')
      // Set fallback state
      setWebGLAvailable(false)
      return
    }

    const gu = {
      time: { value: 0 },
      dTime: { value: 0 },
      aspect: { value: width / height },
    }

    const scene = new THREE.Scene()
    scene.background = new THREE.Color(0xffffff)

    const camera = new THREE.OrthographicCamera(width / -2, width / 2, height / 2, height / -2, 0.1, 1000)
    camera.position.z = 1

    let renderer: THREE.WebGLRenderer

    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    } catch (error) {
      console.error('Failed to create WebGL renderer:', error)
      setWebGLAvailable(false)
      return
    }
    renderer.setSize(width, height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    container.appendChild(renderer.domElement)
    rendererRef.current = renderer

    class Blob {
      renderer: THREE.WebGLRenderer
      fbTexture: { value: THREE.FramebufferTexture }
      rtOutput: THREE.WebGLRenderTarget
      uniforms: {
        pointer: { value: THREE.Vector2 }
        pointerDown: { value: number }
        pointerRadius: { value: number }
        pointerDuration: { value: number }
      }
      rtScene: THREE.Mesh
      rtCamera: THREE.Camera

      constructor(renderer: THREE.WebGLRenderer) {
        this.renderer = renderer
        this.fbTexture = { value: new THREE.FramebufferTexture(width, height) }
        this.rtOutput = new THREE.WebGLRenderTarget(width, height)
        this.uniforms = {
          pointer: { value: new THREE.Vector2().setScalar(10) },
          pointerDown: { value: 1 },
          pointerRadius: { value: 0.45 },
          pointerDuration: { value: 3.5 },
        }

        const handleMouseMove = (event: MouseEvent) => {
          const rect = container.getBoundingClientRect()
          this.uniforms.pointer.value.x = ((event.clientX - rect.left) / width) * 2 - 1
          this.uniforms.pointer.value.y = -((event.clientY - rect.top) / height) * 2 + 1
        }

        const handleMouseLeave = () => {
          this.uniforms.pointer.value.setScalar(10)
        }

        container.addEventListener("mousemove", handleMouseMove)
        container.addEventListener("mouseleave", handleMouseLeave)

        this.rtScene = new THREE.Mesh(
          new THREE.PlaneGeometry(2, 2),
          new THREE.MeshBasicMaterial({
            color: 0x000000,
            onBeforeCompile: (shader) => {
              shader.uniforms.dTime = gu.dTime
              shader.uniforms.aspect = gu.aspect
              shader.uniforms.pointer = this.uniforms.pointer
              shader.uniforms.pointerDown = this.uniforms.pointerDown
              shader.uniforms.pointerRadius = this.uniforms.pointerRadius
              shader.uniforms.pointerDuration = this.uniforms.pointerDuration
              shader.uniforms.fbTexture = this.fbTexture
              shader.uniforms.time = gu.time
              shader.fragmentShader = `
                uniform float dTime, aspect, pointerDown, pointerRadius, pointerDuration, time;
                uniform vec2 pointer;
                uniform sampler2D fbTexture;
                float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123); }
                float noise(vec2 p) {
                  vec2 i = floor(p); vec2 f = fract(p); f = f*f*(3.0-2.0*f);
                  float a = hash(i); float b = hash(i + vec2(1.,0.)); float c = hash(i + vec2(0.,1.)); float d = hash(i + vec2(1.,1.));
                  return mix(mix(a,b,f.x),mix(c,d,f.x),f.y);
                }
                ${shader.fragmentShader}
              `.replace(
                `#include <color_fragment>`,
                `#include <color_fragment>
                float rVal = texture2D(fbTexture, vUv).r;
                rVal -= clamp(dTime / pointerDuration, 0., 0.02);
                rVal = clamp(rVal, 0., 1.);
                float f = 0.;
                if (pointerDown > 0.5) {
                  vec2 uv = (vUv - 0.5) * 2. * vec2(aspect, 1.);
                  vec2 mouse = pointer * vec2(aspect, 1.);
                  vec2 toMouse = uv - mouse;
                  float angle = atan(toMouse.y, toMouse.x);
                  float dist = length(toMouse);
                  float noiseVal = noise(vec2(angle*3. + time*0.2, dist*5.));
                  float noiseVal2 = noise(vec2(angle*5. - time*0.1, dist*3. + time*0.5));
                  float radiusVariation = 0.8 + noiseVal*0.3 + noiseVal2*0.2;
                  float organicRadius = pointerRadius * radiusVariation;
                  f = 1. - smoothstep(organicRadius*0.0, organicRadius*1.5, dist);
                  f *= 0.9 + noiseVal*0.1;
                }
                rVal += f * 0.15;
                rVal = clamp(rVal, 0., 1.);
                diffuseColor.rgb = vec3(rVal);
                `,
              )
            },
          }),
        )
        this.rtScene.material.defines = { USE_UV: "" }
        this.rtCamera = new THREE.Camera()
      }

      render() {
        this.renderer.setRenderTarget(this.rtOutput)
        this.renderer.render(this.rtScene, this.rtCamera)
        this.renderer.copyFramebufferToTexture(this.fbTexture.value)
        this.renderer.setRenderTarget(null)
      }
    }

    const blob = new Blob(renderer)

    const textureLoader = new THREE.TextureLoader()
    const baseTexture = textureLoader.load("/images/1.png", (texture) => {
      const img = texture.image
      const imgAspect = img.width / img.height
      const containerAspect = width / height
      let planeWidth, planeHeight
      if (imgAspect > containerAspect) {
        planeWidth = width
        planeHeight = width / imgAspect
      } else {
        planeHeight = height
        planeWidth = height * imgAspect
      }
      baseImage.geometry.dispose()
      baseImage.geometry = new THREE.PlaneGeometry(planeWidth, planeHeight)
      helmetImage.geometry.dispose()
      helmetImage.geometry = new THREE.PlaneGeometry(planeWidth, planeHeight)
    })

    const helmetTexture = textureLoader.load("/images/2.png")

    baseTexture.colorSpace = THREE.SRGBColorSpace
    helmetTexture.colorSpace = THREE.SRGBColorSpace

    const baseImageMaterial = new THREE.MeshBasicMaterial({ map: baseTexture, transparent: true, alphaTest: 0.0 })
    const baseImage = new THREE.Mesh(new THREE.PlaneGeometry(width, height), baseImageMaterial)
    scene.add(baseImage)

    // Load the wallpaper texture
    const wallpaperTexture = textureLoader.load("/images/Blue wallpaper.jpg")
    wallpaperTexture.colorSpace = THREE.SRGBColorSpace

    // Update material to partial transparent to show wallpaper
    const bgPlaneMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true })
    bgPlaneMaterial.defines = { USE_UV: "" }

    bgPlaneMaterial.onBeforeCompile = (shader) => {
      shader.uniforms.texBlob = { value: blob.rtOutput.texture }
      shader.uniforms.time = gu.time
      shader.uniforms.uWallpaper = { value: wallpaperTexture } // Pass wallpaper to shader

      let vertexShader = shader.vertexShader
      vertexShader = vertexShader.replace("void main() {", "varying vec4 vPosProj;\nvoid main() {")
      vertexShader = vertexShader.replace(
        "#include <project_vertex>",
        "#include <project_vertex>\nvPosProj = gl_Position;",
      )
      shader.vertexShader = vertexShader

      shader.fragmentShader = `
        uniform sampler2D texBlob; 
        uniform sampler2D uWallpaper; // Wallpaper uniform
        uniform float time; 
        varying vec4 vPosProj;

        // Função de ruído simples
        float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453123);}
        float noise(vec2 p){vec2 i=floor(p);vec2 f=fract(p);f=f*f*(3.-2.*f);float a=hash(i);float b=hash(i+vec2(1.,0.));float c=hash(i+vec2(0.,1.));float d=hash(i+vec2(1.,1.));return mix(mix(a,b,f.x),mix(c,d,f.x),f.y);}
        
        // Função de ruído orgânico (fBm)
        float fbm(vec2 p) {
            float value = 0.0;
            float amplitude = 0.5;
            for (int i = 0; i < 4; i++) {
                value += amplitude * noise(p);
                p *= 2.1;
                amplitude *= 0.3;
            }
            return value;
        }

        ${shader.fragmentShader}
      `.replace(
        `#include <clipping_planes_fragment>`,
        `
        // A lógica da máscara continua a mesma
        vec2 blobUV=((vPosProj.xy/vPosProj.w)+1.)*0.5;
        vec4 blobData=texture(texBlob,blobUV);
        if(blobData.r<0.02)discard;

        // <<< LÓGICA ATUALIZADA PARA ANIMAÇÃO LÍQUIDA (DOMAIN WARPING) >>>

        // 2. Coordenada base da textura (controla o "zoom")
        vec2 uv = vUv * 3.5;

        // 3. Cria um "campo de distorção" que muda com o tempo
        // Este é o nosso "líquido invisível" que vai mover a textura
        vec2 distortionField = vUv * 2.0;
        float distortion = fbm(distortionField + time * 0.1); 

        // 4. Aplica a distorção (warp) às coordenadas da textura principal
        float distortionStrength = 0.4; 
        vec2 warpedUv = uv + (distortion - 0.5) * distortionStrength;
        
        // 5. Gera o valor final do ruído para manter detalhes se necessário, mas vamos usar a imagem
        float n = fbm(warpedUv);

        // Usar a imagem do wallpaper com coordenadas levemente distorcidas para efeito líquido
        // Usamos vUv original para manter a escala da imagem correta, mas somamos a distorção
        vec2 wallpaperUV = vUv + (distortion - 0.5) * 0.1; 
        vec4 wallpaperColor = texture(uWallpaper, wallpaperUV);

        // Mistura suave nas bordas se desejar, ou apenas usa a cor
        diffuseColor.rgb = wallpaperColor.rgb;
        
        // Opcional: Adicionar um pouco de brilho baseado no ruído líquido
        // float highlight = smoothstep(0.4, 0.6, n);
        // diffuseColor.rgb += highlight * 0.1;

        #include <clipping_planes_fragment>
        `,
      )
    }

    const bgPlane = new THREE.Mesh(new THREE.PlaneGeometry(width, height), bgPlaneMaterial)
    scene.add(bgPlane)

    const helmetImageMaterial = new THREE.MeshBasicMaterial({ map: helmetTexture, transparent: true, alphaTest: 0.0 })

    helmetImageMaterial.onBeforeCompile = (shader) => {
      shader.uniforms.texBlob = { value: blob.rtOutput.texture }
      let vertexShader = shader.vertexShader
      vertexShader = vertexShader.replace("void main() {", "varying vec4 vPosProj;\nvoid main() {")
      vertexShader = vertexShader.replace(
        "#include <project_vertex>",
        "#include <project_vertex>\nvPosProj = gl_Position;",
      )
      shader.vertexShader = vertexShader
      shader.fragmentShader = `
        uniform sampler2D texBlob; varying vec4 vPosProj;
        ${shader.fragmentShader}
      `.replace(
        `#include <clipping_planes_fragment>`,
        `
        vec2 blobUV=((vPosProj.xy/vPosProj.w)+1.)*0.5;
        vec4 blobData=texture(texBlob,blobUV);
        // if(blobData.r<0.02)discard; // Removed hard discard
        diffuseColor.a *= smoothstep(0.0, 0.2, blobData.r); // Added smooth alpha transition
        #include <clipping_planes_fragment>
        `,
      )
    }

    const helmetImage = new THREE.Mesh(new THREE.PlaneGeometry(width, height), helmetImageMaterial)
    scene.add(helmetImage)

    baseImage.position.z = 0.0
    bgPlane.position.z = 0.05
    helmetImage.position.z = 0.1

    const clock = new THREE.Clock()
    let t = 0

    const animate = () => {
      const dt = clock.getDelta()
      t += dt
      gu.time.value = t
      gu.dTime.value = dt
      blob.render()
      renderer.render(scene, camera)
      animationFrameRef.current = requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      const newWidth = container.clientWidth
      const newHeight = container.clientHeight
      camera.left = newWidth / -2
      camera.right = newWidth / 2
      camera.top = newHeight / 2
      camera.bottom = newHeight / -2
      camera.updateProjectionMatrix()
      renderer.setSize(newWidth, newHeight)
      gu.aspect.value = newWidth / newHeight
      if (baseTexture.image) {
        const img = baseTexture.image
        const imgAspect = img.width / img.height
        const containerAspect = newWidth / newHeight
        let planeWidth, planeHeight
        if (imgAspect > containerAspect) {
          planeWidth = newWidth
          planeHeight = newWidth / imgAspect
        } else {
          planeHeight = newHeight
          planeWidth = newHeight * imgAspect
        }
        baseImage.geometry.dispose()
        baseImage.geometry = new THREE.PlaneGeometry(planeWidth, planeHeight)
        helmetImage.geometry.dispose()
        helmetImage.geometry = new THREE.PlaneGeometry(planeWidth, planeHeight)

        bgPlane.geometry.dispose()
        bgPlane.geometry = new THREE.PlaneGeometry(newWidth, newHeight)
      }
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current)
      if (rendererRef.current) {
        container.removeChild(rendererRef.current.domElement)
        rendererRef.current.dispose()
      }
      scene.traverse((object) => {
        if (object instanceof THREE.Mesh) {
          object.geometry.dispose()
          if (object.material) {
            if (Array.isArray(object.material)) {
              object.material.forEach((material) => material.dispose())
            } else {
              object.material.dispose()
            }
          }
        }
      })
      baseTexture.dispose()
      helmetTexture.dispose()
      blob.rtOutput.dispose()
    }
  }, [])

  // Fallback rendering when WebGL is not available
  if (!webGLAvailable) {
    return (
      <div
        className="absolute inset-0 w-full h-full bg-[#1a1f1a] flex items-center justify-center overflow-hidden"
        style={{ touchAction: "none" }}
      >
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Fallback static image */}
          <img
            src="/images/1.png"
            alt="Portrait"
            className="max-w-full max-h-full object-contain"
            style={{ filter: "contrast(1.1) brightness(0.95)" }}
          />

          {/* Optional overlay image */}
          <img
            src="/images/2.png"
            alt="Helmet overlay"
            className="absolute max-w-full max-h-full object-contain"
            style={{ mixBlendMode: "normal", opacity: 0.9 }}
          />

          {/* Inspired by text */}
          <img
            src="/images/inspired-by-lando-norris.png"
            alt="Inspired by Faheem Ali"
            className="absolute bottom-4 left-4 z-10 pointer-events-none"
            style={{ maxWidth: "120px", width: "120px", height: "auto" }}
          />

        </div>
      </div>
    )
  }

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full bg-[#1a1f1a] cursor-crosshair overflow-hidden"
      style={{ touchAction: "none" }}
    >
      <img
        src="/images/inspired-by-lando-norris.png"
        alt="Inspired by Faheem Ali"
        className="absolute bottom-4 left-4 z-10 pointer-events-none"
        style={{ maxWidth: "120px", width: "120px", height: "auto" }}
      />
    </div>
  )
}
