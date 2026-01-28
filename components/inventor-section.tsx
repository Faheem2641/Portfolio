"use client"

import { useState, useRef, useEffect } from "react"

interface InventorProject {
    id: number;
    title: string;
    description: string;
    category: string;
    slug: string;
}

const projects: InventorProject[] = [
    {
        id: 1,
        title: "Mechanical Assembly",
        description: "Complex mechanical assembly with over 500 parts, fully constrained and simulated.",
        category: "Assembly",
        slug: "mechanical-assembly"
    },
    {
        id: 2,
        title: "Sheet Metal Design",
        description: "Precision sheet metal enclosure design with flat pattern generation.",
        category: "Fabrication",
        slug: "sheet-metal"
    },
    {
        id: 3,
        title: "CNC Machining",
        description: "5-axis CNC machining path optimization and tooling setup.",
        category: "Production",
        slug: "cnc-machining"
    },
    {
        id: 4,
        title: "Finite Element",
        description: "Stress analysis and safety factor calculation for critical components.",
        category: "Analysis",
        slug: "finite-element"
    },
    {
        id: 5,
        title: "Parametric Model",
        description: "iLogic integration for automated design configuration and updates.",
        category: "Design Auto",
        slug: "parametric-model"
    },
    {
        id: 6,
        title: "Mold Design",
        description: "Injection mold core and cavity design with cooling channel analysis.",
        category: "Manufacturing",
        slug: "mold-design"
    },
    {
        id: 7,
        title: "Frame Generator",
        description: "Rapid creation and analysis of structural steel frames and trusses.",
        category: "Structure",
        slug: "frame-generator"
    },
    {
        id: 8,
        title: "Tube & Pipe",
        description: "3D routing of rigid pipes, bent tubes, and flexible hoses.",
        category: "Routing",
        slug: "tube-pipe"
    },
];

export default function InventorSection() {
    const [isPaused, setIsPaused] = useState(false)
    const scrollContainerRef = useRef<HTMLDivElement>(null)
    const animationRef = useRef<number | null>(null)
    const pauseTimeoutRef = useRef<NodeJS.Timeout | null>(null)

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
        <section className="inventor-section">
            {/* Header Section */}
            <div className="inventor-header">
                <h1 className="inventor-title">
                    <span className="accent">AUTODESK</span> INVENTOR
                </h1>
                <p className="inventor-description">
                    Advanced 3D mechanical design, simulation, and documentation projects
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
                                    <a href={`/projects/inventor/${project.slug}`} className="card-button">View Project</a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Scroll Control Buttons - Absolute Left/Right */}
                <div className="scroll-controls-left">
                    <button
                        className="scroll-btn scroll-btn-left"
                        onClick={() => handleScroll('left')}
                        aria-label="Scroll left"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                            <path d="M15 18l-6-6 6-6" />
                        </svg>
                    </button>
                </div>

                <div className="scroll-controls-right">
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
                .inventor-section {
                    margin: 0;
                    background: #0a192f;
                    min-height: 100vh;
                    position: relative;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: flex-start;
                    padding-top: 140px;
                    overflow: hidden;
                    padding-bottom: 120px;
                }
                
                .inventor-header {
                    position: relative;
                    z-index: 5;
                    text-align: center;
                    padding: 15px 20px 20px;
                    margin-bottom: 30px;
                }
                
                .inventor-title {
                    font-size: 3.5rem;
                    font-weight: 900;
                    color: white;
                    text-transform: uppercase;
                    letter-spacing: -2px;
                    margin-bottom: -10px;
                }
                
                @media (min-width: 768px) {
                    .inventor-title {
                        font-size: 5rem;
                    }
                }
                
                @media (min-width: 1024px) {
                    .inventor-title {
                        font-size: 6rem;
                    }
                }
                
                .inventor-title .accent {
                    color: #e8e8e3;
                }
                
                .inventor-description {
                    font-size: 1.125rem;
                    color: rgba(255, 255, 255, 0.7);
                    max-width: 800px;
                    margin: 0 auto;
                }
                
                @media (min-width: 768px) {
                    .inventor-description {
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
                    background: transparent;
                    border-radius: 16px;
                    overflow: hidden;
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    transition: all 0.4s ease;
                }

                .project-card:hover {
                    transform: translateY(-5px);
                    border-color: rgba(232, 232, 227, 0.4);
                    background: rgba(255, 255, 255, 0.02);
                }

                .card-image-placeholder {
                    width: 100%;
                    height: 400px;
                    background: linear-gradient(135deg, #0a192f 0%, #1e3a8a 100%);
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
                        rgba(232, 232, 227, 0.1),
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
                    background: rgba(232, 232, 227, 0.9);
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
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    background: transparent;
                    color: #e8e8e3;
                    border: none;
                    padding: 0;
                    font-weight: 700;
                    font-size: 0.875rem;
                    text-transform: uppercase;
                    letter-spacing: 2px;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    text-decoration: none;
                    margin-top: 10px;
                }

                .card-button::after {
                    content: '→';
                    transition: transform 0.3s ease;
                }

                .card-button:hover {
                    color: white;
                    transform: translateX(5px);
                    background: transparent;
                    box-shadow: none;
                }

                .card-button:hover::after {
                    transform: translateX(5px);
                }

                .scroll-controls-left {
                    position: absolute;
                    left: 20px;
                    top: 50%;
                    transform: translateY(-50%);
                    z-index: 100;
                }

                .scroll-controls-right {
                    position: absolute;
                    right: 20px;
                    top: 50%;
                    transform: translateY(-50%);
                    z-index: 100;
                }

                .scroll-btn {
                    width: 60px;
                    height: 60px;
                    border-radius: 50%;
                    background: rgba(40, 44, 32, 0.9);
                    border: 2px solid rgba(232, 232, 227, 0.4);
                    color: #e8e8e3;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    backdrop-filter: blur(10px);
                }

                .scroll-btn:hover {
                    background: #e8e8e3;
                    color: #282c20;
                    border-color: #e8e8e3;
                    transform: scale(1.1);
                    box-shadow: 0 8px 25px rgba(232, 232, 227, 0.4);
                }

                .nav-buttons {
                    display: flex;
                    gap: 20px;
                    z-index: 100;
                    justify-content: center;
                    margin-top: 30px;
                }
                
                .nav-btn {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    background: rgba(40, 44, 32, 0.95);
                    color: #e8e8e3;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 1.5px;
                    padding: 12px 24px;
                    border-radius: 8px;
                    text-decoration: none;
                    border: 2px solid rgba(232, 232, 227, 0.4);
                    transition: all 0.3s ease;
                    font-size: 0.875rem;
                    backdrop-filter: blur(10px);
                }
                
                .nav-btn:hover {
                    background: #e8e8e3;
                    color: #282c20;
                    border-color: #e8e8e3;
                    transform: translateY(-2px);
                    box-shadow: 0 4px 20px rgba(232, 232, 227, 0.4);
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
