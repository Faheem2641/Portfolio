module.exports = [
"[project]/Downloads/Portfolio/components/header.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Portfolio/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Portfolio/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/Downloads/Portfolio/node_modules/lucide-react/dist/esm/icons/menu.js [app-ssr] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/Downloads/Portfolio/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Portfolio/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Portfolio/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function Header() {
    const [menuOpen, setMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [logoColor, setLogoColor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("dark");
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [lastScrollY, setLastScrollY] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleScroll = ()=>{
            const currentScroll = window.scrollY;
            // Determine visibility
            if (currentScroll < 10) {
                setIsVisible(true);
            } else if (currentScroll > lastScrollY) {
                setIsVisible(false); // Scrolling down
            } else {
                setIsVisible(true); // Scrolling up
            }
            setLastScrollY(currentScroll);
            setScrolled(currentScroll >= 300);
            let newColor = "dark";
            if (currentScroll > 2) {
                newColor = "white";
            }
            const headerOffset = 100 // Approximate header height
            ;
            const masonry = document.getElementById("masonry-gallery");
            if (masonry) {
                const rect = masonry.getBoundingClientRect();
                if (rect.top <= headerOffset && rect.bottom > headerOffset) {
                    const progress = (headerOffset - rect.top) / rect.height;
                    if (progress > 0.65) {
                        newColor = "dark";
                    }
                }
            }
            const helmets = document.getElementById("helmets");
            if (helmets) {
                const rect = helmets.getBoundingClientRect();
                if (rect.top <= headerOffset && rect.bottom > headerOffset) {
                    newColor = "white";
                }
            }
            const social = document.getElementById("social-section");
            if (social) {
                const rect = social.getBoundingClientRect();
                if (rect.top <= headerOffset && rect.bottom > headerOffset) {
                    newColor = "dark";
                }
            }
            const techSpecs = document.getElementById("tech-specs");
            if (techSpecs) {
                const rect = techSpecs.getBoundingClientRect();
                if (rect.top <= headerOffset && rect.bottom > headerOffset) {
                    newColor = "dark";
                }
            }
            setLogoColor(newColor);
        };
        window.addEventListener("scroll", handleScroll);
        return ()=>window.removeEventListener("scroll", handleScroll);
    }, [
        lastScrollY
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (menuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [
        menuOpen
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].header, {
                initial: {
                    y: -100
                },
                animate: {
                    y: isVisible ? 0 : -100
                },
                transition: {
                    duration: 0.3
                },
                className: `fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${scrolled ? "backdrop-blur-md" : "bg-transparent"}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto px-4 md:px-6 flex items-center justify-between h-16",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                x: -20
                            },
                            animate: {
                                opacity: 1,
                                x: 0
                            },
                            transition: {
                                delay: 0.2
                            },
                            className: "flex flex-col justify-center items-start mix-blend-difference",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: `font-brier text-5xl md:text-6xl leading-none mt-6 tracking-tight font-bold transition-colors duration-300 ${logoColor === "white" ? "text-white" : "text-lorenzo-dark"}`,
                                    children: "FAHEEM ALI"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/Portfolio/components/header.tsx",
                                    lineNumber: 105,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: `text-xs md:text-sm uppercase tracking-widest font-bold pl-1 transition-colors duration-300 ${logoColor === "white" ? "text-white/80" : "text-lorenzo-dark/80"}`,
                                    children: "Mechanical Engineering Undergraduate"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/Portfolio/components/header.tsx",
                                    lineNumber: 111,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/Portfolio/components/header.tsx",
                            lineNumber: 99,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                x: 20
                            },
                            animate: {
                                opacity: 1,
                                x: 0
                            },
                            transition: {
                                delay: 0.3
                            },
                            className: "flex items-center gap-4 mix-blend-difference",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].button, {
                                whileHover: {
                                    scale: 1.1
                                },
                                whileTap: {
                                    scale: 0.9
                                },
                                onClick: ()=>setMenuOpen(!menuOpen),
                                className: "p-2 bg-lorenzo-dark/80 border border-white/30 hover:bg-lorenzo-dark rounded-lg transition-colors text-white px-3 py-2.5",
                                "aria-label": "Menu",
                                children: menuOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    className: "w-6 h-6"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/Portfolio/components/header.tsx",
                                    lineNumber: 132,
                                    columnNumber: 27
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                    className: "w-6 h-6"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/Portfolio/components/header.tsx",
                                    lineNumber: 132,
                                    columnNumber: 55
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Downloads/Portfolio/components/header.tsx",
                                lineNumber: 125,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Downloads/Portfolio/components/header.tsx",
                            lineNumber: 119,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/Portfolio/components/header.tsx",
                    lineNumber: 98,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/Portfolio/components/header.tsx",
                lineNumber: 91,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: menuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    exit: {
                        opacity: 0
                    },
                    transition: {
                        duration: 0.3
                    },
                    className: "fixed inset-0 bg-lorenzo-dark/95 backdrop-blur-xl z-40 flex items-center justify-center",
                    onClick: ()=>setMenuOpen(false),
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].nav, {
                        initial: "closed",
                        animate: "open",
                        exit: "closed",
                        variants: {
                            open: {
                                transition: {
                                    staggerChildren: 0.1,
                                    delayChildren: 0.2
                                }
                            },
                            closed: {
                                transition: {
                                    staggerChildren: 0.05,
                                    staggerDirection: -1
                                }
                            }
                        },
                        className: "text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].ul, {
                                className: "space-y-6 text-4xl md:text-6xl font-black uppercase text-white",
                                children: [
                                    "HOME",
                                    "MISSION",
                                    "GALLERY",
                                    "HELMETS",
                                    "STORE",
                                    "CONTACT"
                                ].map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].li, {
                                        variants: {
                                            open: {
                                                opacity: 1,
                                                y: 0,
                                                rotate: 0
                                            },
                                            closed: {
                                                opacity: 0,
                                                y: 20,
                                                rotate: -5
                                            }
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: `#${item.toLowerCase()}`,
                                            className: "inline-block hover:text-lorenzo-accent transition-colors duration-300 hover:scale-110 transform",
                                            onClick: ()=>setMenuOpen(false),
                                            children: item
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/Portfolio/components/header.tsx",
                                            lineNumber: 167,
                                            columnNumber: 21
                                        }, this)
                                    }, item, false, {
                                        fileName: "[project]/Downloads/Portfolio/components/header.tsx",
                                        lineNumber: 160,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/Downloads/Portfolio/components/header.tsx",
                                lineNumber: 158,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                variants: {
                                    open: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    closed: {
                                        opacity: 0,
                                        y: 20
                                    }
                                },
                                className: "mt-12 flex justify-center gap-6",
                                children: [
                                    "INSTAGRAM",
                                    "TIKTOK",
                                    "YOUTUBE"
                                ].map((social)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].a, {
                                        whileHover: {
                                            scale: 1.1,
                                            color: "#c8f550"
                                        },
                                        href: "#",
                                        className: "text-sm font-bold text-white/60 hover:text-lorenzo-accent transition-colors",
                                        children: social
                                    }, social, false, {
                                        fileName: "[project]/Downloads/Portfolio/components/header.tsx",
                                        lineNumber: 186,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/Downloads/Portfolio/components/header.tsx",
                                lineNumber: 178,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/Portfolio/components/header.tsx",
                        lineNumber: 148,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Downloads/Portfolio/components/header.tsx",
                    lineNumber: 140,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/Portfolio/components/header.tsx",
                lineNumber: 138,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/Downloads/Portfolio/components/interactive-portrait.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// interactive-portrait.tsx
__turbopack_context__.s([
    "default",
    ()=>InteractivePortrait
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Portfolio/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Portfolio/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Portfolio/node_modules/three/build/three.core.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/Portfolio/node_modules/three/build/three.module.js [app-ssr] (ecmascript) <locals>");
"use client";
;
;
;
function InteractivePortrait() {
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const rendererRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const animationFrameRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!containerRef.current) return;
        const container = containerRef.current;
        const width = container.clientWidth;
        const height = container.clientHeight;
        const gu = {
            time: {
                value: 0
            },
            dTime: {
                value: 0
            },
            aspect: {
                value: width / height
            }
        };
        const scene = new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Scene"]();
        scene.background = new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color"](0xffffff);
        const camera = new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OrthographicCamera"](width / -2, width / 2, height / 2, height / -2, 0.1, 1000);
        camera.position.z = 1;
        const renderer = new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["WebGLRenderer"]({
            antialias: true,
            alpha: true
        });
        renderer.setSize(width, height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        // Safety check: only append if container still exists
        if (container && container.parentElement) {
            container.appendChild(renderer.domElement);
        }
        rendererRef.current = renderer;
        class Blob {
            renderer;
            fbTexture;
            rtOutput;
            uniforms;
            rtScene;
            rtCamera;
            constructor(renderer){
                this.renderer = renderer;
                this.fbTexture = {
                    value: new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FramebufferTexture"](width, height)
                };
                this.rtOutput = new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebGLRenderTarget"](width, height);
                this.uniforms = {
                    pointer: {
                        value: new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector2"]().setScalar(10)
                    },
                    pointerDown: {
                        value: 1
                    },
                    pointerRadius: {
                        value: 0.45
                    },
                    pointerDuration: {
                        value: 3.5
                    }
                };
                const handleMouseMove = (event)=>{
                    const rect = container.getBoundingClientRect();
                    this.uniforms.pointer.value.x = (event.clientX - rect.left) / width * 2 - 1;
                    this.uniforms.pointer.value.y = -((event.clientY - rect.top) / height) * 2 + 1;
                };
                const handleMouseLeave = ()=>{
                    this.uniforms.pointer.value.setScalar(10);
                };
                container.addEventListener("mousemove", handleMouseMove);
                container.addEventListener("mouseleave", handleMouseLeave);
                this.rtScene = new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"](new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PlaneGeometry"](2, 2), new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MeshBasicMaterial"]({
                    color: 0x000000,
                    onBeforeCompile: (shader)=>{
                        shader.uniforms.dTime = gu.dTime;
                        shader.uniforms.aspect = gu.aspect;
                        shader.uniforms.pointer = this.uniforms.pointer;
                        shader.uniforms.pointerDown = this.uniforms.pointerDown;
                        shader.uniforms.pointerRadius = this.uniforms.pointerRadius;
                        shader.uniforms.pointerDuration = this.uniforms.pointerDuration;
                        shader.uniforms.fbTexture = this.fbTexture;
                        shader.uniforms.time = gu.time;
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
              `.replace(`#include <color_fragment>`, `#include <color_fragment>
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
                `);
                    }
                }));
                this.rtScene.material.defines = {
                    USE_UV: ""
                };
                this.rtCamera = new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Camera"]();
            }
            render() {
                this.renderer.setRenderTarget(this.rtOutput);
                this.renderer.render(this.rtScene, this.rtCamera);
                this.renderer.copyFramebufferToTexture(this.fbTexture.value);
                this.renderer.setRenderTarget(null);
            }
        }
        const blob = new Blob(renderer);
        const textureLoader = new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TextureLoader"]();
        const baseTexture = textureLoader.load("/images/1.png", (texture)=>{
            const img = texture.image;
            const imgAspect = img.width / img.height;
            const containerAspect = width / height;
            let planeWidth, planeHeight;
            if (imgAspect > containerAspect) {
                planeWidth = width;
                planeHeight = width / imgAspect;
            } else {
                planeHeight = height;
                planeWidth = height * imgAspect;
            }
            baseImage.geometry.dispose();
            baseImage.geometry = new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PlaneGeometry"](planeWidth, planeHeight);
            helmetImage.geometry.dispose();
            helmetImage.geometry = new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PlaneGeometry"](planeWidth, planeHeight);
        });
        const helmetTexture = textureLoader.load("/images/2.png");
        baseTexture.colorSpace = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SRGBColorSpace"];
        helmetTexture.colorSpace = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SRGBColorSpace"];
        const baseImageMaterial = new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MeshBasicMaterial"]({
            map: baseTexture,
            transparent: true,
            alphaTest: 0.0
        });
        const baseImage = new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"](new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PlaneGeometry"](width, height), baseImageMaterial);
        scene.add(baseImage);
        const bgPlaneMaterial = new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MeshBasicMaterial"]({
            color: 0x1a1f1a,
            transparent: true
        });
        bgPlaneMaterial.defines = {
            USE_UV: ""
        };
        bgPlaneMaterial.onBeforeCompile = (shader)=>{
            shader.uniforms.texBlob = {
                value: blob.rtOutput.texture
            };
            shader.uniforms.time = gu.time;
            let vertexShader = shader.vertexShader;
            vertexShader = vertexShader.replace("void main() {", "varying vec4 vPosProj;\nvoid main() {");
            vertexShader = vertexShader.replace("#include <project_vertex>", "#include <project_vertex>\nvPosProj = gl_Position;");
            shader.vertexShader = vertexShader;
            shader.fragmentShader = `
        uniform sampler2D texBlob; 
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
      `.replace(`#include <clipping_planes_fragment>`, `
        // A lógica da máscara continua a mesma
        vec2 blobUV=((vPosProj.xy/vPosProj.w)+1.)*0.5;
        vec4 blobData=texture(texBlob,blobUV);
        if(blobData.r<0.02)discard;

        // <<< LÓGICA ATUALIZADA PARA ANIMAÇÃO LÍQUIDA (DOMAIN WARPING) >>>

        // 1. Define as cores
        vec3 colorBg = vec3(1.0);
        vec3 colorSoftShape = vec3(0.92);
        vec3 colorLine = vec3(0.8);

        // 2. Coordenada base da textura (controla o "zoom")
        vec2 uv = vUv * 3.5;

        // 3. Cria um "campo de distorção" que muda com o tempo
        // Este é o nosso "líquido invisível" que vai mover a textura
        vec2 distortionField = vUv * 2.0;
        float distortion = fbm(distortionField + time * 0.1); // O campo de distorção se move lentamente

        // 4. Aplica a distorção (warp) às coordenadas da textura principal
        // Usamos o 'distortion' para empurrar as coordenadas 'uv'
        float distortionStrength = 0.4; // <-- CONTROLE A INTENSIDADE AQUI
        vec2 warpedUv = uv + (distortion - 0.5) * distortionStrength;
        
        // 5. Gera o valor final do ruído a partir das coordenadas distorcidas
        float n = fbm(warpedUv);

        // O resto da lógica para desenhar as formas e linhas permanece o mesmo
        float softShapeMix = smoothstep(0.1, 0.9, sin(n * 3.0));
        vec3 baseColor = mix(colorBg, colorSoftShape, softShapeMix);
        float linePattern = fract(n * 15.0);
        float lineMix = 1.0 - smoothstep(0.49, 0.51, linePattern);
        vec3 finalColor = mix(baseColor, colorLine, lineMix);

        diffuseColor.rgb = finalColor;
        #include <clipping_planes_fragment>
        `);
        };
        const bgPlane = new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"](new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PlaneGeometry"](width, height), bgPlaneMaterial);
        scene.add(bgPlane);
        const helmetImageMaterial = new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MeshBasicMaterial"]({
            map: helmetTexture,
            transparent: true,
            alphaTest: 0.0
        });
        helmetImageMaterial.onBeforeCompile = (shader)=>{
            shader.uniforms.texBlob = {
                value: blob.rtOutput.texture
            };
            let vertexShader = shader.vertexShader;
            vertexShader = vertexShader.replace("void main() {", "varying vec4 vPosProj;\nvoid main() {");
            vertexShader = vertexShader.replace("#include <project_vertex>", "#include <project_vertex>\nvPosProj = gl_Position;");
            shader.vertexShader = vertexShader;
            shader.fragmentShader = `
        uniform sampler2D texBlob; varying vec4 vPosProj;
        ${shader.fragmentShader}
      `.replace(`#include <clipping_planes_fragment>`, `
        vec2 blobUV=((vPosProj.xy/vPosProj.w)+1.)*0.5;
        vec4 blobData=texture(texBlob,blobUV);
        // if(blobData.r<0.02)discard; // Removed hard discard
        diffuseColor.a *= smoothstep(0.0, 0.2, blobData.r); // Added smooth alpha transition
        #include <clipping_planes_fragment>
        `);
        };
        const helmetImage = new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"](new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PlaneGeometry"](width, height), helmetImageMaterial);
        scene.add(helmetImage);
        baseImage.position.z = 0.0;
        bgPlane.position.z = 0.05;
        helmetImage.position.z = 0.1;
        const clock = new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Clock"]();
        let t = 0;
        const animate = ()=>{
            const dt = clock.getDelta();
            t += dt;
            gu.time.value = t;
            gu.dTime.value = dt;
            blob.render();
            renderer.render(scene, camera);
            animationFrameRef.current = requestAnimationFrame(animate);
        };
        animate();
        const handleResize = ()=>{
            const newWidth = container.clientWidth;
            const newHeight = container.clientHeight;
            camera.left = newWidth / -2;
            camera.right = newWidth / 2;
            camera.top = newHeight / 2;
            camera.bottom = newHeight / -2;
            camera.updateProjectionMatrix();
            renderer.setSize(newWidth, newHeight);
            gu.aspect.value = newWidth / newHeight;
            if (baseTexture.image) {
                const img = baseTexture.image;
                const imgAspect = img.width / img.height;
                const containerAspect = newWidth / newHeight;
                let planeWidth, planeHeight;
                if (imgAspect > containerAspect) {
                    planeWidth = newWidth;
                    planeHeight = newWidth / imgAspect;
                } else {
                    planeHeight = newHeight;
                    planeWidth = newHeight * imgAspect;
                }
                baseImage.geometry.dispose();
                baseImage.geometry = new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PlaneGeometry"](planeWidth, planeHeight);
                helmetImage.geometry.dispose();
                helmetImage.geometry = new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PlaneGeometry"](planeWidth, planeHeight);
                bgPlane.geometry.dispose();
                bgPlane.geometry = new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PlaneGeometry"](newWidth, newHeight);
            }
        };
        window.addEventListener("resize", handleResize);
        return ()=>{
            try {
                window.removeEventListener("resize", handleResize);
                if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
                if (rendererRef.current) {
                    // Check if container and domElement still exist before removing
                    if (container && container.contains(rendererRef.current.domElement)) {
                        container.removeChild(rendererRef.current.domElement);
                    }
                    rendererRef.current.dispose();
                }
                scene.traverse((object)=>{
                    if (object instanceof __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"]) {
                        object.geometry.dispose();
                        if (object.material) {
                            if (Array.isArray(object.material)) {
                                object.material.forEach((material)=>material.dispose());
                            } else {
                                object.material.dispose();
                            }
                        }
                    }
                });
                baseTexture.dispose();
                helmetTexture.dispose();
                blob.rtOutput.dispose();
            } catch (error) {
                console.warn("Error during InteractivePortrait cleanup:", error);
            }
        };
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        className: "fixed inset-0 w-full h-full bg-[#1a1f1a] cursor-crosshair overflow-hidden",
        style: {
            touchAction: "none"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
            src: "/images/inspired-by-lando-norris.png",
            alt: "Inspired by Faheem Ali",
            className: "absolute bottom-4 left-4 z-10 pointer-events-none",
            style: {
                maxWidth: "120px",
                width: "120px",
                height: "auto"
            }
        }, void 0, false, {
            fileName: "[project]/Downloads/Portfolio/components/interactive-portrait.tsx",
            lineNumber: 377,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Downloads/Portfolio/components/interactive-portrait.tsx",
        lineNumber: 372,
        columnNumber: 5
    }, this);
}
}),
"[project]/Downloads/Portfolio/components/signature-marquee-section.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SignatureMarqueeSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Portfolio/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Portfolio/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
"use client";
;
;
function SignatureMarqueeSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative w-full h-full flex flex-col items-center justify-center z-0 overflow-hidden",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full flex flex-col gap-4 md:gap-8 py-10 select-none pointer-events-none",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full overflow-hidden flex",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "flex whitespace-nowrap",
                        animate: {
                            x: [
                                0,
                                -1000
                            ]
                        },
                        // Let's start from -1000 to 0 to move RIGHT, or use negative keyframes for Left.
                        // Moving RIGHT: x: [-1000, 0]
                        transition: {
                            x: {
                                repeat: Number.POSITIVE_INFINITY,
                                repeatType: "loop",
                                duration: 20,
                                ease: "linear"
                            }
                        },
                        children: [
                            ...Array(4)
                        ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "font-[family-name:var(--font-brier)] text-[12vw] md:text-[8vw] text-[#D1FF1C] leading-[0.9] tracking-tight px-4",
                                children: "REDEFINING LIMITS REDEFINING LIMITS REDEFINING LIMITS REDEFINING LIMITS"
                            }, i, false, {
                                fileName: "[project]/Downloads/Portfolio/components/signature-marquee-section.tsx",
                                lineNumber: 26,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Downloads/Portfolio/components/signature-marquee-section.tsx",
                        lineNumber: 11,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Downloads/Portfolio/components/signature-marquee-section.tsx",
                    lineNumber: 10,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full overflow-hidden flex",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "flex whitespace-nowrap",
                        animate: {
                            x: [
                                0,
                                -1000
                            ]
                        },
                        transition: {
                            x: {
                                repeat: Number.POSITIVE_INFINITY,
                                repeatType: "loop",
                                duration: 25,
                                ease: "linear"
                            }
                        },
                        children: [
                            ...Array(4)
                        ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "font-[family-name:var(--font-oswald)] font-bold uppercase text-[12vw] md:text-[8vw] text-white leading-[0.9] tracking-tighter px-4",
                                children: "FIGHTING FOR VICTORIES FIGHTING FOR VICTORIES FIGHTING FOR VICTORIES FIGHTING FOR VICTORIES"
                            }, i, false, {
                                fileName: "[project]/Downloads/Portfolio/components/signature-marquee-section.tsx",
                                lineNumber: 52,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Downloads/Portfolio/components/signature-marquee-section.tsx",
                        lineNumber: 39,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Downloads/Portfolio/components/signature-marquee-section.tsx",
                    lineNumber: 38,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/Portfolio/components/signature-marquee-section.tsx",
            lineNumber: 8,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Downloads/Portfolio/components/signature-marquee-section.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
}),
"[project]/Downloads/Portfolio/components/hero-section.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HeroSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Portfolio/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Portfolio/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Portfolio/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Portfolio/node_modules/framer-motion/dist/es/value/use-scroll.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Portfolio/node_modules/framer-motion/dist/es/value/use-transform.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Portfolio/node_modules/framer-motion/dist/es/value/use-spring.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$components$2f$interactive$2d$portrait$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Portfolio/components/interactive-portrait.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$components$2f$signature$2d$marquee$2d$section$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Portfolio/components/signature-marquee-section.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function HeroSection() {
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isReady, setIsReady] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Wait for preloader (2.5s + buffer)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const timer = setTimeout(()=>setIsReady(true), 2600);
        return ()=>clearTimeout(timer);
    }, []);
    const { scrollYProgress } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useScroll"])({
        target: containerRef,
        offset: [
            "start start",
            "end end"
        ]
    });
    const smoothProgress = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSpring"])(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });
    // Phase 1: Shrink Portrait (0% -> 40%)
    // Maps scroll 0-0.4 to scale 1-0.45
    const rawScale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransform"])(smoothProgress, [
        0,
        0.4
    ], [
        1,
        0.45
    ]);
    const scale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSpring"])(rawScale, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });
    // Phase 2: Text Parallax (0% -> 80%)
    // Text moves slightly to create depth
    const textOpacity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransform"])(smoothProgress, [
        0,
        0.3
    ], [
        0,
        1
    ]);
    // Phase 3: Exit (60% -> 100%)
    // Everything slides up to reveal next section
    const exitY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransform"])(smoothProgress, [
        0.6,
        1
    ], [
        "0%",
        "-100%"
    ]);
    const exitOpacity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransform"])(smoothProgress, [
        0.7,
        1
    ], [
        1,
        0
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: containerRef,
        className: "relative h-[150vh] bg-[#1a1f1a]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center bg-background",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: "absolute inset-0 z-0 flex items-center justify-center pointer-events-none",
                    style: {
                        y: exitY,
                        opacity: exitOpacity
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "w-full h-full flex items-center justify-center opacity-0",
                        style: {
                            opacity: textOpacity
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$components$2f$signature$2d$marquee$2d$section$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/Downloads/Portfolio/components/hero-section.tsx",
                            lineNumber: 62,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Downloads/Portfolio/components/hero-section.tsx",
                        lineNumber: 58,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Downloads/Portfolio/components/hero-section.tsx",
                    lineNumber: 51,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: "relative z-10 w-full h-full flex items-center justify-center",
                    style: {
                        scale: scale,
                        y: exitY,
                        opacity: exitOpacity
                    },
                    children: isReady && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$components$2f$interactive$2d$portrait$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/Downloads/Portfolio/components/hero-section.tsx",
                        lineNumber: 75,
                        columnNumber: 23
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Downloads/Portfolio/components/hero-section.tsx",
                    lineNumber: 67,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/Portfolio/components/hero-section.tsx",
            lineNumber: 49,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Downloads/Portfolio/components/hero-section.tsx",
        lineNumber: 48,
        columnNumber: 5
    }, this);
}
}),
"[project]/Downloads/Portfolio/components/mission-section.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MissionSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Portfolio/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Portfolio/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Portfolio/node_modules/framer-motion/dist/es/value/use-scroll.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Portfolio/node_modules/framer-motion/dist/es/value/use-transform.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Portfolio/node_modules/framer-motion/dist/es/utils/use-in-view.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
function MissionSection() {
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const imageRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [signatureDrawn, setSignatureDrawn] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [scrollProgress, setScrollProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const isInView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useInView"])(sectionRef, {
        once: true,
        amount: 0.3
    });
    const { scrollYProgress } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useScroll"])({
        target: sectionRef,
        offset: [
            "start end",
            "end start"
        ]
    });
    const imageScale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransform"])(scrollYProgress, [
        0,
        0.3,
        0.6
    ], [
        1.2,
        1,
        0.2
    ]);
    const imageY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransform"])(scrollYProgress, [
        0,
        0.3,
        0.6
    ], [
        0,
        0,
        -200
    ]);
    const imageOpacity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransform"])(scrollYProgress, [
        0,
        0.2,
        0.4,
        0.6
    ], [
        0,
        1,
        1,
        0
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isInView) {
            setTimeout(()=>setSignatureDrawn(true), 800);
        }
    }, [
        isInView
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleScroll = ()=>{
            if (sectionRef.current) {
                const rect = sectionRef.current.getBoundingClientRect();
                const sectionHeight = rect.height;
                const scrolled = -rect.top;
                const progress = Math.min(Math.max(scrolled / sectionHeight, 0), 1);
                setScrollProgress(progress);
            }
        };
        window.addEventListener("scroll", handleScroll, {
            passive: true
        });
        handleScroll();
        return ()=>window.removeEventListener("scroll", handleScroll);
    }, []);
    const getTextTransform = ()=>{
        if (scrollProgress < 0.2) {
            const progress = scrollProgress / 0.2;
            return {
                opacity: progress,
                transform: `translateX(${(1 - progress) * -50}px)`
            };
        }
        return {
            opacity: 1,
            transform: "translateX(0px)"
        };
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "mission",
        ref: sectionRef,
        className: "relative h-auto bg-lorenzo-dark text-lorenzo-text-light py-4 flex items-center justify-center",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-6 md:px-12",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative h-32 flex items-center justify-center mt-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: "/images/image-removebg-preview.png",
                        className: "h-full w-auto max-h-[120px] object-contain"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/Portfolio/components/mission-section.tsx",
                        lineNumber: 80,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Downloads/Portfolio/components/mission-section.tsx",
                    lineNumber: 79,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight text-balance leading-[1.1] xl:text-8xl",
                        children: [
                            '"The fewer moving parts,',
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/Downloads/Portfolio/components/mission-section.tsx",
                                lineNumber: 89,
                                columnNumber: 13
                            }, this),
                            "the ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-lorenzo-accent font-brier leading-[1.1]",
                                children: "better"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/Portfolio/components/mission-section.tsx",
                                lineNumber: 90,
                                columnNumber: 17
                            }, this),
                            '."',
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/Downloads/Portfolio/components/mission-section.tsx",
                                lineNumber: 91,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-2xl md:text-3xl lg:text-4xl font-normal normal-case tracking-normal mt-4 block opacity-80",
                                children: "— Christian Huygens"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/Portfolio/components/mission-section.tsx",
                                lineNumber: 92,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/Portfolio/components/mission-section.tsx",
                        lineNumber: 87,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Downloads/Portfolio/components/mission-section.tsx",
                    lineNumber: 86,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/Portfolio/components/mission-section.tsx",
            lineNumber: 65,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Downloads/Portfolio/components/mission-section.tsx",
        lineNumber: 60,
        columnNumber: 5
    }, this);
}
}),
"[project]/Downloads/Portfolio/components/interactive-clean.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InteractiveClean",
    ()=>InteractiveClean
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Portfolio/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Portfolio/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Portfolio/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Portfolio/node_modules/next/image.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
// --- AQUI É O SEGREDO DA MÁSCARA SVG ---
// Você tem duas opções:
// 1. Usar uma imagem da pasta public: `url('/images/minha-forma.svg')`
// 2. Usar o SVG direto aqui (Data URI) como fiz abaixo.
// Este é um exemplo de uma mancha de tinta/lama vetorial.
// Se você tiver o SEU código SVG, você pode salvar um arquivo .svg na pasta public
// e mudar essa linha para: const SVG_MASK = "url('/seu-arquivo.svg')"
const SVG_MASK = `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 250' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='10' y='10' width='180' height='230' rx='20' ry='20' fill='%23000'/%3E%3C/svg%3E")`;
function InteractiveClean() {
    const [isHovered, setIsHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const displayCanvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const maskCanvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const dirtyImageRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const cleanImageRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const lastMousePos = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [cursorPos, setCursorPos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        x: 0,
        y: 0
    });
    // Ajuste o tamanho do pincel conforme a sua forma
    const BRUSH_SIZE = 120;
    const BRUSH_HARDNESS = 0.2;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const dirtyImg = document.createElement("img");
        dirtyImg.src = "/images/Faheem-Ali-SUJO.jpg";
        dirtyImg.onload = ()=>{
            dirtyImageRef.current = dirtyImg;
            renderFrame();
        };
        const cleanImg = document.createElement("img");
        cleanImg.src = "/images/Faheem-Ali-LIMPO.jpg";
        cleanImg.onload = ()=>{
            cleanImageRef.current = cleanImg;
            renderFrame();
        };
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const displayCanvas = displayCanvasRef.current;
        const maskCanvas = maskCanvasRef.current;
        if (!displayCanvas || !maskCanvas || !containerRef.current) return;
        const resizeCanvas = ()=>{
            const width = containerRef.current.clientWidth;
            const height = containerRef.current.clientHeight;
            displayCanvas.width = width;
            displayCanvas.height = height;
            maskCanvas.width = width;
            maskCanvas.height = height;
            renderFrame();
        };
        resizeCanvas();
        window.addEventListener("resize", resizeCanvas);
        return ()=>window.removeEventListener("resize", resizeCanvas);
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let animationFrameId;
        const fadeLoop = ()=>{
            const maskCanvas = maskCanvasRef.current;
            const maskCtx = maskCanvas?.getContext("2d");
            if (maskCtx && maskCanvas) {
                maskCtx.globalCompositeOperation = "destination-out";
                maskCtx.fillStyle = "rgba(0, 0, 0, 0.01)";
                maskCtx.fillRect(0, 0, maskCanvas.width, maskCanvas.height);
                maskCtx.globalCompositeOperation = "source-over";
                renderFrame();
            }
            animationFrameId = requestAnimationFrame(fadeLoop);
        };
        fadeLoop();
        return ()=>cancelAnimationFrame(animationFrameId);
    }, []);
    const renderFrame = ()=>{
        const displayCanvas = displayCanvasRef.current;
        const maskCanvas = maskCanvasRef.current;
        const displayCtx = displayCanvas?.getContext("2d");
        if (!displayCtx || !displayCanvas || !maskCanvas) return;
        if (!dirtyImageRef.current || !cleanImageRef.current) return;
        const width = displayCanvas.width;
        const height = displayCanvas.height;
        displayCtx.clearRect(0, 0, width, height);
        const dirtyImg = dirtyImageRef.current;
        const cleanImg = cleanImageRef.current;
        const scale = Math.max(width / dirtyImg.width, height / dirtyImg.height);
        const x = (width - dirtyImg.width * scale) / 2;
        const y = (height - dirtyImg.height * scale) / 2;
        displayCtx.save();
        displayCtx.globalCompositeOperation = "source-over";
        displayCtx.drawImage(maskCanvas, 0, 0);
        displayCtx.globalCompositeOperation = "source-out";
        displayCtx.drawImage(dirtyImg, x, y, dirtyImg.width * scale, dirtyImg.height * scale);
        displayCtx.globalCompositeOperation = "destination-over";
        displayCtx.drawImage(cleanImg, x, y, cleanImg.width * scale, cleanImg.height * scale);
        displayCtx.restore();
    };
    const drawBrush = (ctx, x, y)=>{
        ctx.globalCompositeOperation = "source-over";
        const gradient = ctx.createRadialGradient(x, y, BRUSH_SIZE * BRUSH_HARDNESS, x, y, BRUSH_SIZE / 2);
        gradient.addColorStop(0, "rgba(255, 255, 255, 1)");
        gradient.addColorStop(0.5, "rgba(255, 255, 255, 0.5)");
        gradient.addColorStop(1, "rgba(255, 255, 255, 0)");
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(x, y, BRUSH_SIZE / 2, 0, Math.PI * 2);
        ctx.fill();
    };
    const handleMouseMove = (e)=>{
        if (!containerRef.current || !maskCanvasRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const currentX = e.clientX - rect.left;
        const currentY = e.clientY - rect.top;
        setCursorPos({
            x: currentX,
            y: currentY
        });
        const maskCtx = maskCanvasRef.current.getContext("2d");
        if (!maskCtx) return;
        if (lastMousePos.current) {
            const { x: lastX, y: lastY } = lastMousePos.current;
            const dist = Math.hypot(currentX - lastX, currentY - lastY);
            const angle = Math.atan2(currentY - lastY, currentX - lastX);
            const step = 5;
            for(let i = 0; i < dist; i += step){
                const interpX = lastX + Math.cos(angle) * i;
                const interpY = lastY + Math.sin(angle) * i;
                drawBrush(maskCtx, interpX, interpY);
            }
        } else {
            drawBrush(maskCtx, currentX, currentY);
        }
        lastMousePos.current = {
            x: currentX,
            y: currentY
        };
        renderFrame();
    };
    const handleMouseLeave = ()=>{
        setIsHovered(false);
        lastMousePos.current = null;
    };
    return(// Container principal que segura a sombra
    // Nota: Quando usamos Mask Image, o 'box-shadow' normal é cortado.
    // Temos que usar 'filter: drop-shadow' para a sombra seguir a forma do SVG.
    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative w-full h-full",
        style: {
            filter: "drop-shadow(0px 15px 25px rgba(0,0,0,0.6))"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: containerRef,
            className: "relative w-full h-full select-none touch-none group cursor-none bg-gray-900",
            style: {
                // --- AQUI A MÁGICA ACONTECE ---
                // O WebkitMaskImage é para Chrome/Safari/Edge
                // O MaskImage é para Firefox/Padrão
                WebkitMaskImage: SVG_MASK,
                maskImage: SVG_MASK,
                WebkitMaskSize: "contain",
                maskSize: "contain",
                WebkitMaskRepeat: "no-repeat",
                maskRepeat: "no-repeat",
                WebkitMaskPosition: "center",
                maskPosition: "center"
            },
            onMouseEnter: ()=>setIsHovered(true),
            onMouseLeave: handleMouseLeave,
            onMouseMove: handleMouseMove,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                    ref: displayCanvasRef,
                    className: "absolute inset-0 w-full h-full"
                }, void 0, false, {
                    fileName: "[project]/Downloads/Portfolio/components/interactive-clean.tsx",
                    lineNumber: 195,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                    ref: maskCanvasRef,
                    className: "hidden"
                }, void 0, false, {
                    fileName: "[project]/Downloads/Portfolio/components/interactive-clean.tsx",
                    lineNumber: 196,
                    columnNumber: 9
                }, this),
                isHovered && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: "absolute z-50 pointer-events-none",
                    style: {
                        width: 200,
                        height: 200,
                        x: cursorPos.x - 100,
                        y: cursorPos.y - 100
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        src: "/images/panov0.png",
                        alt: "Cleaning Cloth",
                        width: 200,
                        height: 200,
                        className: "w-full h-full object-contain drop-shadow-2xl rotate-12"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/Portfolio/components/interactive-clean.tsx",
                        lineNumber: 208,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Downloads/Portfolio/components/interactive-clean.tsx",
                    lineNumber: 199,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/Portfolio/components/interactive-clean.tsx",
            lineNumber: 172,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Downloads/Portfolio/components/interactive-clean.tsx",
        lineNumber: 166,
        columnNumber: 5
    }, this));
}
}),
"[project]/Downloads/Portfolio/components/bike-showcase.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BikeShowcase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Portfolio/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Portfolio/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$components$2f$interactive$2d$clean$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Portfolio/components/interactive-clean.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Portfolio/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function AnimatedCounter({ target, label, unit = "" }) {
    const [count, setCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const duration = 2000;
        const steps = 60;
        const increment = target / steps;
        const stepDuration = duration / steps;
        let current = 0;
        const timer = setInterval(()=>{
            current += increment;
            if (current >= target) {
                setCount(target);
                clearInterval(timer);
            } else {
                setCount(Math.floor(current));
            }
        }, stepDuration);
        return ()=>clearInterval(timer);
    }, [
        target
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "text-right",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-xs uppercase tracking-wider text-black/60 mb-2",
                children: label
            }, void 0, false, {
                fileName: "[project]/Downloads/Portfolio/components/bike-showcase.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-6xl md:text-8xl font-black text-black",
                children: [
                    count,
                    unit
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/Portfolio/components/bike-showcase.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/Portfolio/components/bike-showcase.tsx",
        lineNumber: 37,
        columnNumber: 5
    }, this);
}
function BikeShowcase() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative bg-lorenzo-dark px-6 md:px-12 overflow-hidden py-16",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-[1920px] mx-auto",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-center items-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        scale: 0.95
                    },
                    whileInView: {
                        opacity: 1,
                        scale: 1
                    },
                    transition: {
                        duration: 1
                    },
                    viewport: {
                        once: true
                    },
                    className: "relative w-full aspect-[4/5] md:aspect-square max-w-lg",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$components$2f$interactive$2d$clean$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InteractiveClean"], {}, void 0, false, {
                        fileName: "[project]/Downloads/Portfolio/components/bike-showcase.tsx",
                        lineNumber: 59,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Downloads/Portfolio/components/bike-showcase.tsx",
                    lineNumber: 52,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/Portfolio/components/bike-showcase.tsx",
                lineNumber: 51,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Downloads/Portfolio/components/bike-showcase.tsx",
            lineNumber: 50,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Downloads/Portfolio/components/bike-showcase.tsx",
        lineNumber: 49,
        columnNumber: 5
    }, this);
}
}),
"[project]/Downloads/Portfolio/components/social-section.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SocialSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Portfolio/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Portfolio/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Portfolio/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
const handIcons = [
    "/images/icon/icon-hand1.png",
    "/images/icon/icon-hand2.png",
    "/images/icon/icon-hand3.png",
    "/images/icon/icon-hand4.png",
    "/images/icon/icon-hand6.png"
];
function SocialSection() {
    const [currentIconIndex, setCurrentIconIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const interval = setInterval(()=>{
            setCurrentIconIndex((prev)=>(prev + 1) % handIcons.length);
        }, 1200) // Slower for smoother flow
        ;
        return ()=>clearInterval(interval);
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "social-section",
        className: "relative bg-[#F5F1E8] text-black py-16 px-6 md:px-12 overflow-hidden",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative h-32 flex items-center justify-center mt-8",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative h-full w-auto max-h-[60px] aspect-square",
                        children: handIcons.map((icon, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0
                                },
                                animate: {
                                    opacity: index === currentIconIndex ? 1 : 0
                                },
                                transition: {
                                    duration: 0.8
                                },
                                className: "absolute inset-0",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: icon || "/placeholder.svg",
                                    className: "h-full w-full object-contain",
                                    alt: "Animated hand icon"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/Portfolio/components/social-section.tsx",
                                    lineNumber: 38,
                                    columnNumber: 17
                                }, this)
                            }, icon, false, {
                                fileName: "[project]/Downloads/Portfolio/components/social-section.tsx",
                                lineNumber: 31,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Downloads/Portfolio/components/social-section.tsx",
                        lineNumber: 29,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Downloads/Portfolio/components/social-section.tsx",
                    lineNumber: 27,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: 0.8
                    },
                    viewport: {
                        once: true
                    },
                    className: "text-center mb-2.5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-5xl md:text-7xl font-black uppercase leading-none leading-[2.25] text-lorenzo-dark lg:text-6xl",
                            children: "WHAT'S UP"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/Portfolio/components/social-section.tsx",
                            lineNumber: 55,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-4xl md:text-6xl font-brier mt-2 lg:text-6xl leading-10 text-lorenzo-dark",
                            children: "ON SOCIALS"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/Portfolio/components/social-section.tsx",
                            lineNumber: 58,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/Portfolio/components/social-section.tsx",
                    lineNumber: 48,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: 0.8,
                        delay: 0.8
                    },
                    viewport: {
                        once: true
                    },
                    className: "text-center space-y-2 mt-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-lg md:text-xl font-serif text-black/80 font-medium",
                            children: "Let’s Connect"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/Portfolio/components/social-section.tsx",
                            lineNumber: 70,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap justify-center gap-6",
                            children: [
                                {
                                    label: "EMAIL",
                                    href: "mailto:fali.ug24smme@student.nust.edu.pk"
                                },
                                {
                                    label: "GITHUB",
                                    href: "https://github.com/Faheem2641"
                                },
                                {
                                    label: "LINKEDIN",
                                    href: "https://www.linkedin.com/in/faheem-ali-b87293373/"
                                },
                                {
                                    label: "RESUME",
                                    href: "#"
                                }
                            ].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].a, {
                                    href: item.href,
                                    whileHover: {
                                        scale: 1.05
                                    },
                                    whileTap: {
                                        scale: 0.95
                                    },
                                    transition: {
                                        type: "spring",
                                        stiffness: 400,
                                        damping: 17
                                    },
                                    className: "inline-flex items-center justify-center border border-black/20 rounded-full px-8 py-3 backdrop-blur-sm bg-black/5 hover:bg-black/10 transition-colors",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-black uppercase text-sm tracking-wider text-black",
                                        children: item.label
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/Portfolio/components/social-section.tsx",
                                        lineNumber: 87,
                                        columnNumber: 17
                                    }, this)
                                }, item.label, false, {
                                    fileName: "[project]/Downloads/Portfolio/components/social-section.tsx",
                                    lineNumber: 79,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/Downloads/Portfolio/components/social-section.tsx",
                            lineNumber: 72,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/Portfolio/components/social-section.tsx",
                    lineNumber: 63,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/Portfolio/components/social-section.tsx",
            lineNumber: 26,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Downloads/Portfolio/components/social-section.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
}),
"[project]/Downloads/Portfolio/lib/gallery-data.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "galleryImages",
    ()=>galleryImages
]);
const galleryImages = [
    {
        src: "/images/5_12_2024.jpg",
        alt: "Faheem Ali racing action 1",
        aspect: "aspect-[3/4]",
        title: "AUTODESK INVENTOR",
        slug: "autodesk-inventor",
        description: "Detailed exploration of Autodesk Inventor projects and designs. Showcasing 3D modeling, assembly creation, and mechanical design optimization."
    },
    {
        src: "/images/aaa.png",
        alt: "Faheem Ali racing action 2",
        aspect: "aspect-[4/3]",
        title: "ANSYS",
        slug: "ansys",
        description: "Advanced simulations and analysis using ANSYS software. Focusing on finite element analysis (FEA) and structural integrity testing."
    },
    {
        src: "/images/Brotherhood.jpg",
        alt: "Faheem Ali racing action 3",
        aspect: "aspect-[3/4]",
        title: "VOLUNTEER",
        slug: "volunteer",
        description: "Community service and volunteer work experiences. engaging with local communities and contributing to social causes."
    },
    {
        src: "/images/download (1).jpg",
        alt: "Faheem Ali racing action 4",
        aspect: "aspect-[4/3]",
        title: "PRODUCTION MACHINING",
        slug: "production-machining",
        description: "Hands-on experience with production machining and manufacturing processes. Utilizing lathes, mills, and other industrial equipment."
    },
    {
        src: "/images/55.jpg",
        alt: "Faheem Ali racing action 5",
        aspect: "aspect-[3/4]",
        title: "RESEARCH AND PUBLICATIONS",
        slug: "research-and-publications",
        description: "Academic and practical research initiatives in engineering. Investigating new materials, methodologies, and technological advancements."
    },
    {
        src: "/images/R.png",
        alt: "Faheem Ali racing action 6",
        aspect: "aspect-[4/3]",
        title: "CLUBS & SOCIETIES",
        slug: "clubs-and-societies",
        description: "Active participation and leadership in university clubs and societies. Organizing events, workshops, and collaborative projects."
    },
    {
        src: "/images/💻.jpg",
        alt: "Faheem Ali podium 1",
        aspect: "aspect-[3/4]",
        title: "WEB DEVELOPMENT",
        slug: "web-development",
        description: "Full-stack web development projects and portfolio work. Building responsive, dynamic, and user-friendly web applications."
    },
    {
        src: "/images/Short-Term Achievement.jpg",
        alt: "Faheem Ali podium 2",
        aspect: "aspect-[4/3]",
        title: "EDUCATION",
        slug: "education",
        description: "Academic background, degrees, and certifications. Highlighting major coursework, achievements, and educational milestones."
    },
    {
        src: "/images/download (4).jpg",
        alt: "Faheem Ali podium 3",
        aspect: "aspect-[3/4]",
        title: "LANGUAGE",
        slug: "language",
        description: "Computer-Aided Design projects showcasing technical skills. Creating precise 2D drafts and complex 3D models for engineering applications."
    },
    {
        src: "/images/faheem-ali-box.png",
        alt: "Motocross bike",
        aspect: "aspect-[4/3]",
        title: "CFD ANALYSIS",
        slug: "cfd-analysis",
        description: "Computational Fluid Dynamics analysis for aerodynamic optimization. Simulating fluid flow to improve performance and efficiency."
    },
    {
        src: "/images/faheem-ali-box3.png",
        alt: "Showroom 1",
        aspect: "aspect-[3/4]",
        title: "COMMUNITY SERVICE",
        slug: "community-service",
        description: "Impactful community service initiatives and contributions. dedicated to making a positive difference in the lives of others."
    },
    {
        src: "/images/faheem-ali-box2.png",
        alt: "Showroom 2",
        aspect: "aspect-[4/3]",
        title: "CNC MACHINING",
        slug: "cnc-machining",
        description: "Precision CNC machining projects and fabrication techniques. Programming and operating CNC machines for high-tolerance parts."
    }
];
}),
"[project]/Downloads/Portfolio/components/masonry-gallery-section.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MasonryGallerySection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Portfolio/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Portfolio/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Portfolio/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Portfolio/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Portfolio/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Portfolio/node_modules/framer-motion/dist/es/value/use-scroll.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Portfolio/node_modules/framer-motion/dist/es/value/use-transform.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$lib$2f$gallery$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Portfolio/lib/gallery-data.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
function MasonryGallerySection() {
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { scrollYProgress } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useScroll"])({
        target: sectionRef,
        offset: [
            "start start",
            "end end"
        ]
    });
    // Background transition: Dark Green -> Dark Green -> White
    const backgroundColor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransform"])(scrollYProgress, [
        0,
        0.6,
        0.9
    ], [
        "#282c20",
        "#ccc",
        "#ffffff"
    ]);
    // Y Movement: Move grid up to reveal all images
    // Starts at 0vh and moves up to -80vh to show bottom images
    const y = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransform"])(scrollYProgress, [
        0,
        1
    ], [
        "0vh",
        "-80vh"
    ]);
    const column1 = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$lib$2f$gallery$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["galleryImages"].filter((_, i)=>i % 3 === 0);
    const column2 = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$lib$2f$gallery$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["galleryImages"].filter((_, i)=>i % 3 === 1);
    const column3 = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$lib$2f$gallery$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["galleryImages"].filter((_, i)=>i % 3 === 2);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: sectionRef,
        id: "masonry-gallery",
        className: "relative",
        style: {
            height: "200vh"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
            className: "sticky top-0 h-screen w-full overflow-hidden",
            style: {
                backgroundColor
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                style: {
                    y
                },
                className: "relative w-full max-w-[1400px] mx-auto px-4 md:px-8 pt-2 pb-12",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col md:flex-row gap-4 w-full",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-4 w-full md:w-1/3",
                            children: column1.map((image, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(MasonryCard, {
                                    image: image,
                                    index: index * 3
                                }, `col1-${index}`, false, {
                                    fileName: "[project]/Downloads/Portfolio/components/masonry-gallery-section.tsx",
                                    lineNumber: 45,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/Downloads/Portfolio/components/masonry-gallery-section.tsx",
                            lineNumber: 43,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-4 w-full md:w-1/3",
                            children: column2.map((image, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(MasonryCard, {
                                    image: image,
                                    index: index * 3 + 1
                                }, `col2-${index}`, false, {
                                    fileName: "[project]/Downloads/Portfolio/components/masonry-gallery-section.tsx",
                                    lineNumber: 52,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/Downloads/Portfolio/components/masonry-gallery-section.tsx",
                            lineNumber: 50,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-4 w-full md:w-1/3",
                            children: column3.map((image, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(MasonryCard, {
                                    image: image,
                                    index: index * 3 + 2
                                }, `col3-${index}`, false, {
                                    fileName: "[project]/Downloads/Portfolio/components/masonry-gallery-section.tsx",
                                    lineNumber: 59,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/Downloads/Portfolio/components/masonry-gallery-section.tsx",
                            lineNumber: 57,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/Portfolio/components/masonry-gallery-section.tsx",
                    lineNumber: 41,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/Portfolio/components/masonry-gallery-section.tsx",
                lineNumber: 40,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Downloads/Portfolio/components/masonry-gallery-section.tsx",
            lineNumber: 39,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Downloads/Portfolio/components/masonry-gallery-section.tsx",
        lineNumber: 31,
        columnNumber: 5
    }, this);
}
function MasonryCard({ image, index }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0,
            y: 50
        },
        whileInView: {
            opacity: 1,
            y: 0
        },
        transition: {
            duration: 0.5,
            delay: 0.1
        },
        viewport: {
            once: true,
            margin: "-50px"
        },
        className: `relative overflow-hidden rounded-xl shadow-2xl transition-all duration-500 ${image.title === "CLUBS & SOCIETIES" ? "bg-white" : "bg-gray-900/20"} border-2 border-transparent w-full ${image.aspect} group`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            href: `/projects/${image.slug}`,
            className: "block w-full h-full",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    src: image.src || "/placeholder.svg",
                    alt: image.alt,
                    fill: true,
                    className: `${image.title === "CLUBS & SOCIETIES" ? "object-contain" : "object-cover"} transition-transform duration-700 group-hover:scale-110`,
                    sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
                    quality: 95
                }, void 0, false, {
                    fileName: "[project]/Downloads/Portfolio/components/masonry-gallery-section.tsx",
                    lineNumber: 79,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute bottom-4 left-4 bg-black/60 backdrop-blur-md px-4 py-2 rounded-lg border border-white/10",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-white text-sm font-medium tracking-wide uppercase",
                        children: image.title
                    }, void 0, false, {
                        fileName: "[project]/Downloads/Portfolio/components/masonry-gallery-section.tsx",
                        lineNumber: 88,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Downloads/Portfolio/components/masonry-gallery-section.tsx",
                    lineNumber: 87,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/Portfolio/components/masonry-gallery-section.tsx",
            lineNumber: 78,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Downloads/Portfolio/components/masonry-gallery-section.tsx",
        lineNumber: 71,
        columnNumber: 5
    }, this);
}
}),
"[project]/Downloads/Portfolio/components/interactive-schedule.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InteractiveSchedule",
    ()=>InteractiveSchedule
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Portfolio/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Portfolio/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Portfolio/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Portfolio/node_modules/next/image.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const scheduleData = [
    {
        id: 1,
        round: "1",
        title: "Manufacture of Industrial Equipment",
        description: "From design through fabrication, erection & commissioning - we deliver complete electrical solutions for industrial projects.",
        image: "/images/faheem-ali-podio3.png"
    },
    {
        id: 2,
        round: "2",
        title: "Medical Equipment Design and Manufacture",
        description: "Advanced medical equipment design and manufacturing and solutions.",
        image: "/images/faheem-ali-podio5.png"
    },
    {
        id: 3,
        round: "3",
        title: "Lighting Solution Design and Manufacture",
        description: "Providing optic solution design and manufacture for advanced optical systems.",
        image: "/images/faheem-ali-podio4.png"
    },
    {
        id: 4,
        round: "4",
        title: "Electronic Product Design and Manufacture",
        description: "Optimize your products on-demand to secure essential certifications.",
        image: "/images/faheem-ali-podio7.png"
    },
    {
        id: 5,
        round: "5",
        title: "Solutions for Holography",
        description: "We provide graphics, photo-realistic rendering and computational photography services for diverse visual needs.",
        image: "/images/faheem-ali-podio3.png"
    }
];
function InteractiveSchedule() {
    const [hoveredEvent, setHoveredEvent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full bg-[#0a0e1a] py-20 md:py-32 relative overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto px-4 md:px-8 relative z-10 max-w-7xl",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute left-0 right-0 top-0 bottom-0 flex items-center justify-center pointer-events-none",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "w-full h-full absolute",
                                style: {
                                    minHeight: '100%'
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: `M 15% 15% L 35% 15% L 35% 35% L 65% 35% L 65% 55% L 35% 55% L 35% 75% L 65% 75% L 65% 85%`,
                                    stroke: "rgba(59, 130, 246, 0.3)",
                                    strokeWidth: "2",
                                    fill: "none",
                                    className: "hidden md:block"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/Portfolio/components/interactive-schedule.tsx",
                                    lineNumber: 57,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Downloads/Portfolio/components/interactive-schedule.tsx",
                                lineNumber: 56,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Downloads/Portfolio/components/interactive-schedule.tsx",
                            lineNumber: 55,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-12 md:space-y-0",
                            children: scheduleData.map((item, index)=>{
                                const isEven = index % 2 === 0;
                                const isLeft = isEven;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        opacity: 0,
                                        y: 20
                                    },
                                    whileInView: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    viewport: {
                                        once: true
                                    },
                                    transition: {
                                        delay: index * 0.1
                                    },
                                    className: `relative flex items-center ${isLeft ? 'md:justify-start' : 'md:justify-end'} mb-16 md:mb-24`,
                                    onMouseEnter: ()=>setHoveredEvent(item.id),
                                    onMouseLeave: ()=>setHoveredEvent(null),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `w-full md:w-[45%] ${isLeft ? 'md:text-right md:pr-20' : 'md:text-left md:pl-20'}`,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-[#0f1420] border border-white/10 rounded-lg p-6 md:p-8 hover:border-lorenzo-accent/50 transition-all duration-300 group",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "font-[family-name:var(--font-oswald)] font-bold text-2xl md:text-3xl text-white mb-3 group-hover:text-lorenzo-accent transition-colors",
                                                        children: item.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/Portfolio/components/interactive-schedule.tsx",
                                                        lineNumber: 91,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-white/60 text-sm md:text-base leading-relaxed",
                                                        children: item.description
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/Portfolio/components/interactive-schedule.tsx",
                                                        lineNumber: 94,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/Portfolio/components/interactive-schedule.tsx",
                                                lineNumber: 90,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/Portfolio/components/interactive-schedule.tsx",
                                            lineNumber: 86,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute left-1/2 -translate-x-1/2 hidden md:flex items-center justify-center w-16 h-16 rounded-full bg-[#1a2332] border-4 border-[#0a0e1a] ring-2 ring-blue-500/30 z-10",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-[family-name:var(--font-oswald)] font-bold text-2xl text-white",
                                                children: item.round
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/Portfolio/components/interactive-schedule.tsx",
                                                lineNumber: 102,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/Portfolio/components/interactive-schedule.tsx",
                                            lineNumber: 101,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "md:hidden absolute -left-2 top-6 flex items-center justify-center w-12 h-12 rounded-full bg-[#1a2332] border-4 border-[#0a0e1a] ring-2 ring-blue-500/30",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-[family-name:var(--font-oswald)] font-bold text-xl text-white",
                                                children: item.round
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/Portfolio/components/interactive-schedule.tsx",
                                                lineNumber: 109,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/Portfolio/components/interactive-schedule.tsx",
                                            lineNumber: 108,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, item.id, true, {
                                    fileName: "[project]/Downloads/Portfolio/components/interactive-schedule.tsx",
                                    lineNumber: 74,
                                    columnNumber: 17
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/Downloads/Portfolio/components/interactive-schedule.tsx",
                            lineNumber: 68,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/Portfolio/components/interactive-schedule.tsx",
                    lineNumber: 53,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/Portfolio/components/interactive-schedule.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-50 w-[300px] md:w-[400px] aspect-[3/4] mix-blend-normal",
                children: hoveredEvent && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        scale: 0.9,
                        rotate: -5
                    },
                    animate: {
                        opacity: 1,
                        scale: 1,
                        rotate: 0
                    },
                    exit: {
                        opacity: 0,
                        scale: 0.9,
                        rotate: 5
                    },
                    transition: {
                        duration: 0.15,
                        ease: "backOut"
                    },
                    className: "w-full h-full relative rounded-xl overflow-hidden shadow-2xl",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            src: scheduleData.find((d)=>d.id === hoveredEvent)?.image || "",
                            alt: "Preview",
                            fill: true,
                            className: "object-cover"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/Portfolio/components/interactive-schedule.tsx",
                            lineNumber: 131,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/Portfolio/components/interactive-schedule.tsx",
                            lineNumber: 137,
                            columnNumber: 13
                        }, this)
                    ]
                }, hoveredEvent, true, {
                    fileName: "[project]/Downloads/Portfolio/components/interactive-schedule.tsx",
                    lineNumber: 123,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/Portfolio/components/interactive-schedule.tsx",
                lineNumber: 121,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/Portfolio/components/interactive-schedule.tsx",
        lineNumber: 50,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=Downloads_Portfolio_070d9875._.js.map