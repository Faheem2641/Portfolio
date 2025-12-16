module.exports = [
"[project]/Downloads/Portfolio/app/projects/language/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LanguagePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Portfolio/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Portfolio/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Portfolio/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
const languages = [
    {
        name: "English",
        proficiency: 95,
        level: "Fluent",
        flag: "🇬🇧"
    },
    {
        name: "Urdu",
        proficiency: 100,
        level: "Native",
        flag: "🇵🇰"
    },
    {
        name: "Arabic",
        proficiency: 70,
        level: "Intermediate",
        flag: "🇸🇦"
    }
];
function LanguagePage() {
    const [hoveredIndex, setHoveredIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            minHeight: '100vh',
            background: '#282c20',
            color: 'white',
            padding: '40px 20px'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                maxWidth: '1400px',
                margin: '0 auto',
                marginBottom: '60px'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: -20
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: 0.6
                    },
                    style: {
                        textAlign: 'center',
                        marginBottom: '60px'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            style: {
                                fontSize: 'clamp(3rem, 8vw, 6rem)',
                                fontWeight: '900',
                                textTransform: 'uppercase',
                                letterSpacing: '-3px',
                                marginBottom: '20px',
                                background: 'linear-gradient(135deg, white 0%, #c8ff00 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text'
                            },
                            children: "Languages"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/Portfolio/app/projects/language/page.tsx",
                            lineNumber: 42,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                fontSize: '1.25rem',
                                color: 'rgba(255, 255, 255, 0.7)',
                                maxWidth: '600px',
                                margin: '0 auto',
                                lineHeight: '1.6'
                            },
                            children: "Communication across cultures, connecting through words"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/Portfolio/app/projects/language/page.tsx",
                            lineNumber: 55,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/Portfolio/app/projects/language/page.tsx",
                    lineNumber: 36,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: '40px',
                        maxWidth: '1200px',
                        margin: '0 auto',
                        marginBottom: '80px'
                    },
                    children: languages.map((language, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 30
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            transition: {
                                duration: 0.5,
                                delay: index * 0.1
                            },
                            onMouseEnter: ()=>setHoveredIndex(index),
                            onMouseLeave: ()=>setHoveredIndex(null),
                            style: {
                                background: hoveredIndex === index ? 'rgba(58, 63, 50, 0.6)' : 'rgba(58, 63, 50, 0.4)',
                                borderRadius: '20px',
                                padding: '40px',
                                border: hoveredIndex === index ? '2px solid rgba(200, 255, 0, 0.6)' : '2px solid rgba(200, 255, 0, 0.2)',
                                transition: 'all 0.3s ease',
                                backdropFilter: 'blur(10px)',
                                transform: hoveredIndex === index ? 'translateY(-5px)' : 'translateY(0)',
                                boxShadow: hoveredIndex === index ? '0 20px 40px rgba(0, 0, 0, 0.3)' : '0 4px 20px rgba(0, 0, 0, 0.2)',
                                position: 'relative',
                                overflow: 'hidden'
                            },
                            children: [
                                language.flag && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        fontSize: '4rem',
                                        marginBottom: '20px',
                                        textAlign: 'center',
                                        filter: hoveredIndex === index ? 'none' : 'grayscale(50%)',
                                        transition: 'filter 0.3s ease'
                                    },
                                    children: language.flag
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/Portfolio/app/projects/language/page.tsx",
                                    lineNumber: 104,
                                    columnNumber: 33
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    style: {
                                        fontSize: '2rem',
                                        fontWeight: '800',
                                        marginBottom: '10px',
                                        textAlign: 'center',
                                        color: '#c8ff00',
                                        textTransform: 'uppercase',
                                        letterSpacing: '-1px'
                                    },
                                    children: language.name
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/Portfolio/app/projects/language/page.tsx",
                                    lineNumber: 116,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        fontSize: '1rem',
                                        color: 'rgba(255, 255, 255, 0.7)',
                                        textAlign: 'center',
                                        marginBottom: '30px',
                                        textTransform: 'uppercase',
                                        letterSpacing: '1px',
                                        fontWeight: '600'
                                    },
                                    children: language.level
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/Portfolio/app/projects/language/page.tsx",
                                    lineNumber: 129,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        marginBottom: '20px'
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "150",
                                        height: "150",
                                        style: {
                                            transform: 'rotate(-90deg)'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                cx: "75",
                                                cy: "75",
                                                r: "65",
                                                fill: "none",
                                                stroke: "rgba(200, 255, 0, 0.1)",
                                                strokeWidth: "10"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/Portfolio/app/projects/language/page.tsx",
                                                lineNumber: 150,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].circle, {
                                                cx: "75",
                                                cy: "75",
                                                r: "65",
                                                fill: "none",
                                                stroke: "#c8ff00",
                                                strokeWidth: "10",
                                                strokeLinecap: "round",
                                                initial: {
                                                    strokeDasharray: "0 408.4"
                                                },
                                                animate: {
                                                    strokeDasharray: `${language.proficiency / 100 * 408.4} 408.4`
                                                },
                                                transition: {
                                                    duration: 1,
                                                    delay: index * 0.1 + 0.3,
                                                    ease: "easeOut"
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/Portfolio/app/projects/language/page.tsx",
                                                lineNumber: 159,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                x: "75",
                                                y: "75",
                                                textAnchor: "middle",
                                                dy: "7",
                                                fontSize: "24",
                                                fontWeight: "bold",
                                                fill: "white",
                                                style: {
                                                    transform: 'rotate(90deg)',
                                                    transformOrigin: '75px 75px'
                                                },
                                                children: [
                                                    language.proficiency,
                                                    "%"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/Portfolio/app/projects/language/page.tsx",
                                                lineNumber: 174,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/Portfolio/app/projects/language/page.tsx",
                                        lineNumber: 148,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/Portfolio/app/projects/language/page.tsx",
                                    lineNumber: 142,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        width: '100%',
                                        height: '8px',
                                        background: 'rgba(200, 255, 0, 0.1)',
                                        borderRadius: '4px',
                                        overflow: 'hidden'
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                        initial: {
                                            width: 0
                                        },
                                        animate: {
                                            width: `${language.proficiency}%`
                                        },
                                        transition: {
                                            duration: 1,
                                            delay: index * 0.1 + 0.5,
                                            ease: "easeOut"
                                        },
                                        style: {
                                            height: '100%',
                                            background: 'linear-gradient(90deg, #c8ff00 0%, #a0d000 100%)',
                                            borderRadius: '4px'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/Portfolio/app/projects/language/page.tsx",
                                        lineNumber: 197,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/Portfolio/app/projects/language/page.tsx",
                                    lineNumber: 190,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, language.name, true, {
                            fileName: "[project]/Downloads/Portfolio/app/projects/language/page.tsx",
                            lineNumber: 76,
                            columnNumber: 25
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Downloads/Portfolio/app/projects/language/page.tsx",
                    lineNumber: 67,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: 'flex',
                        justifyContent: 'center',
                        marginTop: '60px'
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "/",
                        style: {
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '10px',
                            background: 'rgba(40, 44, 32, 0.95)',
                            color: '#c8ff00',
                            textDecoration: 'none',
                            fontWeight: '700',
                            fontSize: '0.95rem',
                            padding: '14px 28px',
                            borderRadius: '8px',
                            border: '2px solid rgba(200, 255, 0, 0.4)',
                            transition: 'all 0.3s ease',
                            backdropFilter: 'blur(10px)',
                            textTransform: 'uppercase',
                            letterSpacing: '1px'
                        },
                        onMouseEnter: (e)=>{
                            e.currentTarget.style.background = '#c8ff00';
                            e.currentTarget.style.color = '#282c20';
                            e.currentTarget.style.transform = 'translateY(-2px)';
                            e.currentTarget.style.boxShadow = '0 10px 30px rgba(200, 255, 0, 0.3)';
                        },
                        onMouseLeave: (e)=>{
                            e.currentTarget.style.background = 'rgba(40, 44, 32, 0.95)';
                            e.currentTarget.style.color = '#c8ff00';
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = 'none';
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                width: "20",
                                height: "20",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "2.5",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M19 12H5M12 19l-7-7 7-7"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/Portfolio/app/projects/language/page.tsx",
                                    lineNumber: 251,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Downloads/Portfolio/app/projects/language/page.tsx",
                                lineNumber: 250,
                                columnNumber: 25
                            }, this),
                            "Back to Home"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/Portfolio/app/projects/language/page.tsx",
                        lineNumber: 218,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Downloads/Portfolio/app/projects/language/page.tsx",
                    lineNumber: 213,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/Portfolio/app/projects/language/page.tsx",
            lineNumber: 31,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/Downloads/Portfolio/app/projects/language/page.tsx",
        lineNumber: 24,
        columnNumber: 9
    }, this);
}
}),
];

//# sourceMappingURL=Downloads_Portfolio_app_projects_language_page_tsx_f2930c19._.js.map