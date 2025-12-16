"use client"

import { use, useState } from "react"

export default function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> | { slug: string } }) {
    // Handle both sync and async params for Next.js compatibility
    const resolvedParams = params instanceof Promise ? use(params) : params
    const slug = resolvedParams.slug

    const [isHovered, setIsHovered] = useState(false)

    return (
        <div style={{
            minHeight: '100vh',
            background: '#282c20',
            color: 'white',
            padding: '20px 20px 40px'
        }}>
            {/* Header */}
            <div style={{
                maxWidth: '1600px',
                margin: '0 auto'
            }}>
                {/* Project Title */}
                <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                    <h1 style={{
                        fontSize: '3.5rem',
                        fontWeight: '900',
                        textTransform: 'uppercase',
                        letterSpacing: '-2px',
                        marginBottom: '-10px',
                        background: 'linear-gradient(135deg, white 0%, #c8ff00 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text'
                    }}>
                        {slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                    </h1>
                    <p style={{
                        fontSize: '1.25rem',
                        color: 'rgba(255, 255, 255, 0.7)',
                        maxWidth: '600px',
                        margin: '0 auto'
                    }}>
                        Advanced mechanical design and engineering
                    </p>
                </div>

                {/* Main Image Placeholder */}
                <div style={{
                    width: '100%',
                    height: '700px',
                    background: 'linear-gradient(135deg, #3a3f32 0%, #4a4f42 100%)',
                    borderRadius: '20px',
                    position: 'relative',
                    overflow: 'hidden',
                    border: '2px solid rgba(200, 255, 0, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '60px'
                }}>
                    <div style={{
                        position: 'relative',
                        zIndex: 1,
                        textAlign: 'center',
                        color: 'rgba(200, 255, 0, 0.6)'
                    }}>
                        <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ marginBottom: '16px', opacity: 0.6 }}>
                            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                            <polyline points="9 22 9 12 15 12 15 22" />
                        </svg>
                        <p style={{
                            fontSize: '1.25rem',
                            fontWeight: '600',
                            textTransform: 'uppercase',
                            letterSpacing: '2px'
                        }}>
                            Project Render
                        </p>
                    </div>
                </div>

                {/* Project Content */}
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    {/* Overview and Specifications Grid */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gap: '40px',
                        marginBottom: '60px'
                    }}>
                        {/* Overview */}
                        <div>
                            <h2 style={{
                                fontSize: '2rem',
                                fontWeight: '800',
                                color: '#c8ff00',
                                textTransform: 'uppercase',
                                letterSpacing: '-1px',
                                marginBottom: '24px',
                                borderLeft: '4px solid #c8ff00',
                                paddingLeft: '20px'
                            }}>
                                Project Overview
                            </h2>
                            <p style={{
                                fontSize: '1.125rem',
                                lineHeight: '1.8',
                                color: 'rgba(255, 255, 255, 0.85)',
                                textAlign: 'justify'
                            }}>
                                This Autodesk Inventor project showcases advanced CAD modeling and mechanical engineering design principles.
                                The project demonstrates comprehensive understanding of engineering fundamentals, manufacturing processes,
                                and design optimization techniques. Created with precision and attention to detail, this design exemplifies
                                professional-grade mechanical engineering work.
                            </p>
                        </div>

                        {/* Specifications */}
                        <div>
                            <h2 style={{
                                fontSize: '2rem',
                                fontWeight: '800',
                                color: '#c8ff00',
                                textTransform: 'uppercase',
                                letterSpacing: '-1px',
                                marginBottom: '24px',
                                borderLeft: '4px solid #c8ff00',
                                paddingLeft: '20px'
                            }}>
                                Technical Specifications
                            </h2>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                {[
                                    'CAD Software: Autodesk Inventor',
                                    'Design Type: Mechanical Assembly',
                                    'Precision: Industrial Grade',
                                    'File Format: .ipt, .iam, .idw',
                                    'Analysis: FEA Validated'
                                ].map((spec, index) => (
                                    <div key={index} style={{
                                        display: 'flex',
                                        alignItems: 'flex-start',
                                        gap: '12px',
                                        padding: '14px 20px',
                                        background: 'rgba(58, 63, 50, 0.4)',
                                        borderRadius: '8px',
                                        border: '1px solid rgba(200, 255, 0, 0.15)',
                                        fontSize: '0.95rem',
                                        color: 'rgba(255, 255, 255, 0.9)'
                                    }}>
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#c8ff00" strokeWidth="3" style={{ flexShrink: 0, marginTop: '2px' }}>
                                            <polyline points="20 6 9 17 4 12" />
                                        </svg>
                                        {spec}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Gallery */}
                    <div>
                        <h2 style={{
                            fontSize: '2rem',
                            fontWeight: '800',
                            color: '#c8ff00',
                            textTransform: 'uppercase',
                            letterSpacing: '-1px',
                            marginBottom: '24px',
                            borderLeft: '4px solid #c8ff00',
                            paddingLeft: '20px'
                        }}>
                            Design Gallery
                        </h2>
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                            gap: '20px',
                            marginBottom: '60px'
                        }}>
                            {[1, 2, 3, 4].map((num) => (
                                <div key={num} style={{
                                    aspectRatio: '1',
                                    borderRadius: '12px',
                                    overflow: 'hidden',
                                    border: '2px solid rgba(200, 255, 0, 0.2)',
                                    background: 'linear-gradient(135deg, #3a3f32 0%, #4a4f42 100%)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'rgba(200, 255, 0, 0.5)',
                                    fontWeight: '600',
                                    textTransform: 'uppercase',
                                    letterSpacing: '1px'
                                }}>
                                    View {num}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Bottom Button */}
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        marginTop: '60px',
                        marginBottom: '40px'
                    }}>
                        <a
                            href="/inventor"
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: isHovered ? '12px' : '8px',
                                background: isHovered ? '#c8ff00' : 'rgba(40, 44, 32, 0.95)',
                                color: isHovered ? '#282c20' : '#c8ff00',
                                textDecoration: 'none',
                                fontWeight: '700',
                                fontSize: '0.95rem',
                                padding: '14px 28px',
                                borderRadius: '8px',
                                border: `2px solid ${isHovered ? '#c8ff00' : 'rgba(200, 255, 0, 0.4)'}`,
                                transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
                                backdropFilter: 'blur(10px)',
                                boxShadow: isHovered ? '0 10px 40px rgba(200, 255, 0, 0.4)' : '0 4px 20px rgba(0, 0, 0, 0.3)',
                                transform: isHovered ? 'translateY(-5px) scale(1.05)' : 'translateY(0) scale(1)',
                                cursor: 'pointer'
                            }}
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{
                                transform: isHovered ? 'translateX(-3px)' : 'translateX(0)',
                                transition: 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)'
                            }}>
                                <path d="M19 12H5M12 19l-7-7 7-7" />
                            </svg>
                            Back to Projects
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
