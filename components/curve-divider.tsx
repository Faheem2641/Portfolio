import React from "react"

interface CurveDividerProps {
    topColor: string
    bottomColor: string
    // If true, the curve goes down (U shape), creating a concave top for the bottom section.
    // If false (default), the curve goes up (Hill shape), creating a concave bottom for the top section.
    concaveTop?: boolean
    className?: string
}

export function CurveDivider({ topColor, bottomColor, concaveTop = false, className = "" }: CurveDividerProps) {
    return (
        <div className={`relative w-full overflow-hidden leading-[0] ${className}`} style={{ height: "80px" }}>
            <svg
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1200 120"
                preserveAspectRatio="none"
                className="relative block w-full h-full"
                style={{ display: "block" }}
            >
                {/* Helper layout: 
            The rect fills the background with the top color.
            The path draws the bottom color shape.
        */}
                <rect x="0" y="0" width="1200" height="120" fill={topColor} />

                {concaveTop ? (
                    // Concave Top for bottom section (U shape of Top Color hanging down)
                    // Actually, to get 'concave top', we need the TOP color to hang down.
                    // So we fill the rect with BOTTOM color, and draw the TOP color path? 
                    // Let's stick to the rect=topColor pattern.
                    // We want the Bottom Color to be 'scooped out'.
                    // So we draw the Bottom Color starting low, going high on edges? No, that's Hill.
                    // U shape: High on sides, low in middle.
                    // Path of Bottom Color: M0,0 L0,120 L1200,120 L1200,0 Q600,120 0,0 ? No.
                    // Let's just draw the shape of the Bottom Color.
                    // If Concave Top (U shape gap), the Bottom Color fills the bottom part, but the top edge is U shaped.
                    // So: M0,120 L1200,120 L1200,0 Q600,120 0,0 Z -- This creates a slope down and up?
                    // Let's use a standard path for "Dip".
                    // M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z
                    // Easier simple quad curve.
                    <path
                        d="M0,0 L0,120 L1200,120 L1200,0 Q600,120 0,0 Z"
                        fill={bottomColor}
                    />
                ) : (
                    // Convex Top for bottom section / Concave Bottom for top section (Hill shape)
                    // The Bottom Color forms a Hill.
                    // M0,120 L1200,120 L1200,50 Q600,-50 0,50 Z
                    <path
                        d="M0,120 L1200,120 L1200,60 Q600,-40 0,60 Z" // Adjusted control points for a nice symmetrical arc
                        fill={bottomColor}
                    />
                )}
            </svg>
        </div>
    )
}
