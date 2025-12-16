"use client"

import { useState, useRef, useEffect } from "react"

interface AnsysProject {
    id: number;
    title: string;
    description: string;
    category: string;
    slug: string;
}

const projects: AnsysProject[] = [
    { id: 1, title: "Thermal Analysis", description: "Advanced heat transfer simulation", category: "CFD", slug: "thermal-analysis" },
    { id: 2, title: "Structural Analysis", description: "Stress and strain modeling", category: "Structural", slug: "structural-analysis" },
    { id: 3, title: "Fluid Dynamics", description: "Computational fluid dynamics study", category: "CFD", slug: "fluid-dynamics" },
    { id: 4, title: "Modal Analysis", description: "Vibration and frequency analysis", category: "Dynamic", slug: "modal-analysis" },
    { id: 5, title: "Fatigue Study", description: "Material fatigue life prediction", category: "Structural", slug: "fatigue-study" },
    { id: 6, title: "Electromagnetics", description: "EM field simulation", category: "EM", slug: "electromagnetics" },
];

export default function AnsysSection() {
    const [isPaused, setIsPaused] = useState(false)
    const scrollContainerRef = useRef<HTMLDivElement>(null)
    const animationRef = useRef<number>()
    const pauseTimeoutRef = useRef<NodeJS.Timeout>()

    useEffect(() => {
        const container = scrollContainerRef.current
        if (!container || isPaused) return

        const scroll = () => {
            if (container && !isPaused) {
                container.scrollLeft += 1

                if (container.scrollLeft >= container.scrollWidth / 2) {
                    container.scrollLeft = 0
                }
            }
            animationRef.current = requestAnimationFrame(scroll)
        }

        animationRef.current = requestAnimationFrame(scroll)

        return () => {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current)
            }
        }
    }, [isPaused])

    const handleScroll = (direction: 'left' | 'right') => {
        const container = scrollContainerRef.current
        if (!container) return

        const scrollAmount = 630

        container.scrollBy({
            left: direction === 'right' ? scrollAmount : -scrollAmount,
            behavior: 'smooth'
        })

        setIsPaused(true)

        if (pauseTimeoutRef.current) {
            clearTimeout(pauseTimeoutRef.current)
        }

        pauseTimeoutRef.current = setTimeout(() => {
            setIsPaused(false)
        }, 3000)
    }

    return (
        <section className="ansys-section">
            {/* Header Section */}
            <div className="ansys-header">
                <h1 className="ansys-title">
                    <span className="accent">ANSYS</span> Projects
                </h1>
                <p className="ansys-description">
                    Computational analysis and engineering simulation projects
                </p>
            </div>

            {/* Scrolling Cards Section */}
            <div className="cards-wrapper">
                <div
                    ref={scrollContainerRef}
                    className="cards-container"
                >
                    <div className="cards-track">
                        {[...projects, ...projects, ...projects].map((project, index) => (
                            <div key={`${project.id}-${index}`} className="project-card">
                                <div className="card-image-placeholder">
                                    <div className="image-overlay">
                                        <span className="category-badge">{project.category}</span>
                                    </div>
                                </div>
                                <div className="card-content">
                                    <h3 className="card-title">{project.title}</h3>
                                    <p className="card-description">{project.description}</p>
                                    <a href={`/projects/ansys/${project.slug}`} className="card-button">View Project</a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Scroll Control Buttons */}
                <div className="scroll-controls">
                    <button
                        className="scroll-btn scroll-btn-left"
                        onClick={() => handleScroll('left')}
                        aria-label="Scroll left"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                            <path d="M15 18l-6-6 6-6" />
                        </svg>
                    </button>

                    <button
                        className="scroll-btn scroll-btn-right"
                        onClick={() => handleScroll('right')}
                        aria-label="Scroll right"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                            <path d="M9 18l6-6-6-6" />
                        </svg>
                    </button>
                </div>

                {/* Navigation Button */}
                <div className="nav-buttons">
                    <a href="/" className="nav-btn home-btn">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                            <polyline points="9 22 9 12 15 12 15 22" />
                        </svg>
                        HOME
                    </a>
                </div>
            </div>

            <style jsx>{`
                .ansys-section {
                    margin: 0;
                    background: #282c20;
                    min-height: 100vh;
                    position: relative;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: flex-start;
                    padding-top: 20px;
                    overflow: hidden;
                    padding-bottom: 120px;
                }
                
                .ansys-header {
                    position: relative;
                    z-index: 5;
                    text-align: center;
                    padding: 15px 20px 20px;
                    margin-bottom: 30px;
                }
                
                .ansys-title {
                    font-size: 3.5rem;
                    font-weight: 900;
                    color: white;
                    text-transform: uppercase;
                    letter-spacing: -2px;
                    margin-bottom: -10px;
                }
                
                @media (min-width: 768px) {
                    .ansys-title {
                        font-size: 5rem;
                    }
                }
                
                @media (min-width: 1024px) {
                    .ansys-title {
                        font-size: 6rem;
                    }
                }
                
                .ansys-title .accent {
                    color: #c8ff00;
                }
                
                .ansys-description {
                    font-size: 1.125rem;
                    color: rgba(255, 255, 255, 0.7);
                    max-width: 800px;
                    margin: 0 auto;
                }
                
                @media (min-width: 768px) {
                    .ansys-description {
                        font-size: 1.25rem;
                    }
                }

                .cards-wrapper {
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 30px;
                }

                .cards-container {
                    width: 100%;
                    overflow-x: scroll;
                    overflow-y: hidden;
                    position: relative;
                    padding: 30px 0;
                    scrollbar-width: none;
                    -ms-overflow-style: none;
                    mask-image: linear-gradient(
                        to right,
                        transparent,
                        black 10%,
                        black 90%,
                        transparent
                    );
                    -webkit-mask-image: linear-gradient(
                        to right,
                        transparent,
                        black 10%,
                        black 90%,
                        transparent
                    );
                }

                .cards-container::-webkit-scrollbar {
                    display: none;
                }

                .cards-track {
                    display: flex;
                    gap: 30px;
                    width: fit-content;
                    padding: 0 10%;
                }

                .project-card {
                    flex-shrink: 0;
                    width: 600px;
                    background: rgba(58, 63, 50, 0.5);
                    border-radius: 16px;
                    overflow: hidden;
                    border: 2px solid rgba(200, 255, 0, 0.2);
                    transition: all 0.4s ease;
                    backdrop-filter: blur(10px);
                }

                .project-card:hover {
                    transform: translateY(-10px) scale(1.02);
                    border-color: rgba(200, 255, 0, 0.6);
                    box-shadow: 
                        0 20px 40px rgba(0, 0, 0, 0.4),
                        0 0 30px rgba(200, 255, 0, 0.2);
                }

                .card-image-placeholder {
                    width: 100%;
                    height: 400px;
                    background: linear-gradient(135deg, #3a3f32 0%, #4a4f42 100%);
                    position: relative;
                    overflow: hidden;
                }

                .card-image-placeholder::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: -100%;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(
                        90deg,
                        transparent,
                        rgba(200, 255, 0, 0.1),
                        transparent
                    );
                    animation: shimmer 3s infinite;
                }

                @keyframes shimmer {
                    0% {
                        left: -100%;
                    }
                    100% {
                        left: 100%;
                    }
                }

                .image-overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    display: flex;
                    align-items: flex-start;
                    justify-content: flex-end;
                    padding: 16px;
                }

                .category-badge {
                    background: rgba(200, 255, 0, 0.9);
                    color: #282c20;
                    padding: 6px 14px;
                    border-radius: 20px;
                    font-size: 0.75rem;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                }

                .card-content {
                    padding: 24px;
                }

                .card-title {
                    font-size: 1.5rem;
                    font-weight: 800;
                    color: white;
                    margin-bottom: 12px;
                    text-transform: uppercase;
                    letter-spacing: -0.5px;
                }

                .card-description {
                    font-size: 0.95rem;
                    color: rgba(255, 255, 255, 0.7);
                    margin-bottom: 20px;
                    line-height: 1.6;
                }

                .card-button {
                    width: 100%;
                    background: transparent;
                    color: #c8ff00;
                    border: 2px solid #c8ff00;
                    padding: 12px 24px;
                    borderRadius: 8px;
                    font-weight: 700;
                    font-size: 0.875rem;
                    text-transform: uppercase;
                    letter-spacing: 1.5px;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    display: block;
                    text-align: center;
                    text-decoration: none;
                }

                .card-button:hover {
                    background: #c8ff00;
                    color: #282c20;
                    transform: translateY(-2px);
                    box-shadow: 0 4px 20px rgba(200, 255, 0, 0.4);
                }

                .scroll-controls {
                    display: flex;
                    gap: 20px;
                    justify-content: center;
                    align-items: center;
                    z-index: 100;
                }

                .scroll-btn {
                    width: 60px;
                    height: 60px;
                    border-radius: 50%;
                    background: rgba(40, 44, 32, 0.9);
                    border: 2px solid rgba(200, 255, 0, 0.4);
                    color: #c8ff00;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    backdrop-filter: blur(10px);
                }

                .scroll-btn:hover {
                    background: #c8ff00;
                    color: #282c20;
                    border-color: #c8ff00;
                    transform: scale(1.1);
                    box-shadow: 0 8px 25px rgba(200, 255, 0, 0.4);
                }
                
                .nav-buttons {
                    display: flex;
                    gap: 20px;
                    z-index: 100;
                    justify-content: center;
                }
                
                .nav-btn {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    background: rgba(40, 44, 32, 0.95);
                    color: #c8ff00;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 1.5px;
                    padding: 12px 24px;
                    border-radius: 8px;
                    text-decoration: none;
                    border: 2px solid rgba(200, 255, 0, 0.4);
                    transition: all 0.3s ease;
                    font-size: 0.875rem;
                    backdrop-filter: blur(10px);
                }
                
                .nav-btn:hover {
                    background: #c8ff00;
                    color: #282c20;
                    border-color: #c8ff00;
                    transform: translateY(-2px);
                    box-shadow: 0 4px 20px rgba(200, 255, 0, 0.4);
                }
                
                .nav-btn svg {
                    transition: transform 0.3s ease;
                }
                
                .home-btn:hover svg {
                    transform: scale(1.1);
                }
            `}</style>
        </section>
    )
}
