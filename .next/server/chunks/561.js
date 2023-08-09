exports.id = 561;
exports.ids = [561];
exports.modules = {

/***/ 3502:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 3380, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 3106));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 954, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 1598))

/***/ }),

/***/ 3106:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Header)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
// EXTERNAL MODULE: ./node_modules/next/navigation.js
var navigation = __webpack_require__(7114);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1440);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(2451);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/react-icons/ri/index.esm.js
var index_esm = __webpack_require__(418);
;// CONCATENATED MODULE: ./src/_mocks/courseJson.ts
const iconStr = "/assets/icons/Web-dev";
const appIconStr = "/assets/icons/app-dev";
const ThrreDStr = "/assets/icons/3d";
const TwoDStr = "/assets/icons/2d";
const gameDevIcon = "/assets/icons/game-dev";
const programingIcon = "/assets/icons/programing";
const basicomputerIcon = "/assets/icons/basic-computer";
const courses = [
    {
        name: "Web Development Course",
        description: "Learn to build entire web applications from start to finish on one of the most versatile tech stacks : MongoDB, Express.js, React.js and Node.js (MERN stack).",
        slug: "web-development",
        bannerImg: "",
        stats: [
            "3 Months",
            5,
            "Medium",
            "Offline"
        ],
        softwareCovered: [
            `${iconStr}/HTML.png`,
            `${iconStr}/Git.png`,
            `${iconStr}/js.svg`,
            `${iconStr}/node.svg`,
            `${iconStr}/mongo.svg`,
            `${iconStr}/MySQL.png`,
            `${iconStr}/expressjs.png`,
            `${iconStr}/aws.png`,
            `${iconStr}/babel_logo.svg`,
            `${iconStr}/webpack.svg`
        ],
        subCourses: [
            {
                courseImg: "/assets/images/web-dev/front.png",
                heading: "Front End Web Development Course",
                skillLevel: "Intermediate",
                duration: "3 Months",
                description: "Our Basic Web Development Course offers beginner-friendly learning experience, equipping you with the essential skills to build responsive web applications using Vs Code, HTML, CSS, JavaScript, React and Git."
            },
            {
                courseImg: "/assets/images/web-dev/fullStack.png",
                heading: "Full Stack Web Development Course",
                skillLevel: "Advanced",
                duration: "6 Months",
                description: "Our Basic Web Development Course offers beginner-friendly learning experience, equipping you with the essential skills to build responsive web applications using Vs Code, HTML, CSS, JavaScript, React and Git."
            }
        ]
    },
    {
        name: "App Development Course",
        description: "In App development course you will learn object-oriented programming from start to finish on one of the most versatile tech stacks for making platform independent is : Flutter, dart",
        slug: "app-development",
        bannerImg: "/assets/images/app.png",
        width: 1200,
        subCourses: [
            {
                courseImg: "/assets/images/app/app-card-img1.png",
                heading: "Basic App Development Course",
                skillLevel: "Intermediate",
                duration: "3 Months",
                description: "Our Basic App Development Course offers a comprehensive and hands-on learning experience, equipping you with the fundamental skills to build your own mobile applications using Flutter, manage data efficiently, implement version control with Git, and leverage the power of Firebase for seamless backend integration."
            },
            {
                courseImg: "/assets/images/app/app-card-img-2.png",
                heading: "Advance App Development Course",
                skillLevel: "Advanced",
                duration: "6 Months",
                description: "Our Advanced Basic App Development Course offers a comprehensive and intensive learning experience,  Data Management, Git, Firebase, and Android development. This advanced course is designed to equip you with the expertise required to build powerful, feature-rich applications for various platforms."
            }
        ],
        stats: [
            "3 Months",
            6,
            "Medium",
            "Offline"
        ],
        softwareCovered: [
            `${appIconStr}/android studio.png`,
            `${appIconStr}/Dart.png`,
            `${appIconStr}/firebase.png`,
            `${appIconStr}/Flutter.png`,
            `${appIconStr}/Java.png`,
            `${appIconStr}/Kotlin.png`
        ]
    },
    {
        name: "Game Development Course",
        description: "Our Game Development program is designed to unleash your creativity and equip you with the skills needed to create interactive and engaging games across various platforms with the Tech Stack of: Unity,C#,photon.",
        slug: "game-development",
        bannerImg: "/assets/images/game/game_1.webp",
        width: 600,
        subCourses: [
            {
                courseImg: "/assets/images/game/game-card.png",
                heading: "Basic Game Development Course",
                skillLevel: "Intermediate",
                duration: "3 Months",
                description: "Our Basic Game Development Course offers an exciting and hands-on learning experience, introducing you to the fundamentals of game development using C#, Unity, and Photon. Whether youre a beginner with little or no programming experience or a hobbyist looking to dive into game development."
            },
            {
                courseImg: "/assets/images/game/game-card-img-2.png",
                heading: "Advance Game Development Course",
                skillLevel: "Advanced",
                duration: "6 Months",
                description: "Our Advanced Game Development Course offers a comprehensive and hands-on learning experience, empowering you to become a proficient game developer using C Sharp, Unity, Photon, Photoshop, Illustrator, and Blender."
            }
        ],
        stats: [
            "3 Months",
            5,
            "Medium",
            "Offline"
        ],
        softwareCovered: [
            `${gameDevIcon}/CSharp.png`,
            `${gameDevIcon}/Unity.png`,
            `${gameDevIcon}/photon_1.png`
        ]
    },
    {
        name: "3D Graphics Course",
        description: "Our course offers a comprehensive introduction to the fascinating realm of 3D graphics. You will learn the principles and techniques behind creating realistic 3D models, environments, animations, and special effects.",
        slug: "3d-graphics",
        width: 600,
        subCourses: [
            {
                courseImg: "/assets/images/3d/3d1_1.png",
                heading: "Basic 3D Graphics Course",
                skillLevel: "Intermediate",
                duration: "3 Months",
                description: "Our Basic 3D Graphics Course offers a hands-on and comprehensive learning experience, introducing you to the world of 3D graphics using industry-standard software like Blender and Substance. Whether youre a beginner with no prior 3D experience or a creative enthusiast looking to venture into 3D art, this course is the perfect gateway to unleash your artistic potential."
            },
            {
                courseImg: "/assets/images/3d/3d-card-img.png",
                heading: "Advance 3D Graphics Course",
                skillLevel: "Advanced",
                duration: "6 Months",
                description: "Our Basic 3D Graphics Course offers a hands-on and comprehensive learning experience, introducing you to the world of 3D graphics using industry-standard software like Blender and Substance. Whether youre a beginner with no prior 3D experience or a creative enthusiast looking to venture into 3D art, this course is the perfect gateway to unleash your artistic potential."
            }
        ],
        animate: true,
        bannerImg: "/assets/images/3d/3d_1.webp",
        stats: [
            "6 Months",
            10,
            "Medium",
            "Offline"
        ],
        softwareCovered: [
            `${ThrreDStr}/blender.png`,
            `${ThrreDStr}/substance.png`,
            `${ThrreDStr}/zbrush.png`
        ]
    },
    {
        name: "2D Graphics Course",
        description: "Our course offers a comprehensive introduction to the exciting field of 2D graphics. You will learn the principles and techniques behind creating visually appealing 2D artwork, illustrations, animations, and user interfaces.",
        slug: "2d-graphics",
        width: 1200,
        subCourses: [
            {
                courseImg: "/assets/images/2d/2d2_1.png",
                heading: "Basic 2D Graphics Course",
                skillLevel: "Intermediate",
                duration: "3 Months",
                description: "Our Basic 2D Graphics Course offers an immersive and practical learning experience, equipping you with the essential skills to work with industry-standard software like Photoshop, Illustrator, and InDesign. Whether you are a beginner with no prior design experience or a creative enthusiast looking to enhance your graphic design skills, this course is the perfect starting point for you."
            },
            {
                courseImg: "/assets/images/2d/2d1.png",
                heading: "Advance 2D Graphics Course",
                skillLevel: "Advanced",
                duration: "6 Months",
                description: "Our Advanced 2D Graphics Course offers an intensive and hands-on learning experience, empowering you to become a skilled graphic designer proficient in Adobe Photoshop, Illustrator, InDesign, and After Effects. This course is designed for experienced designers or individuals seeking to specialize in advanced graphic design techniques and motion graphics."
            }
        ],
        bannerImg: "/assets/images/2d/2d_1.png",
        stats: [
            "2 Months",
            5,
            "Medium",
            "Offline"
        ],
        softwareCovered: [
            `${TwoDStr}/after_effects.png`,
            `${TwoDStr}/AI.png`,
            `${TwoDStr}/audition.png`,
            `${TwoDStr}/indesign.png`,
            `${TwoDStr}/Photoshop.png`,
            `${TwoDStr}/premiere.png`,
            `${TwoDStr}/xd.png`
        ]
    },
    {
        name: "Programing Course",
        description: "Our Programming course is designed to equip you with the knowledge and skills needed to become a proficient programmer and open doors to exciting career opportunities..",
        slug: "programing",
        bannerImg: "/assets/images/programing/programing.webp",
        width: 500,
        subCourses: [
            {
                courseImg: "/assets/images/game/game-card.png",
                heading: "Basic Programing  Course",
                skillLevel: "Intermediate",
                duration: "3 Months",
                description: "Our C Programming Course offers a comprehensive and hands-on learning experience, introducing you to the fundamentals of C programming. Whether youre a beginner with no prior programming experience or an aspiring programmer looking to strengthen your coding skills, this course is the perfect starting point for you."
            },
            {
                courseImg: "/assets/images/game/game-card-img-2.png",
                heading: "Advance Programing Course",
                skillLevel: "Advanced",
                duration: "6 Months",
                description: "Our C Programming Advanced Course offers a comprehensive and hands-on learning experience, introducing you to the fundamentals of C programming. Whether youre a beginner with no prior programming experience or an aspiring programmer looking to strengthen your coding skills, this course is the perfect starting point for you."
            }
        ],
        stats: [
            "2 Months",
            5,
            "Medium",
            "Offline"
        ],
        softwareCovered: [
            `${programingIcon}/c.png`,
            `${programingIcon}/c++.png`,
            `${programingIcon}/nympy1.png`,
            `${programingIcon}/pandas.png`,
            `${programingIcon}/python.png`,
            `${programingIcon}/sql.png`
        ]
    },
    {
        name: "Basic Computer Course",
        description: "Our Programming course is designed to equip you with the knowledge and skills needed to become a proficient programmer and open doors to exciting career opportunities..",
        slug: "basic-computer",
        bannerImg: "/assets/images/basic-computer/basicComputer.webp",
        width: 700,
        subCourses: [
            {
                courseImg: "/assets/images/game/game-card.png",
                heading: "Basic Computer  Course",
                skillLevel: "Intermediate",
                duration: "3 Months",
                description: "Our basic Fundamental Computer Course offers a beginner-friendly and hands-on learning experience, introducing you to the fundamental software applications like Microsoft Word and PowerPoint. Whether you are a student, a working professional, or an individual eager to enhance your computer literacy, this course is the perfect starting point for you."
            },
            {
                courseImg: "/assets/images/game/game-card-img-2.png",
                heading: "Advance Computer Course",
                skillLevel: "Advanced",
                duration: "6 Months",
                description: "Our advanced Fundamental Computer Course offers a comprehensive and beginner-friendly learning experience, introducing you to the fundamental software applications like Microsoft Word, Microsoft Excel, Tally, and PowerPoint. Whether you are a student, a working professional, or an individual looking to enhance your computer literacy, this course is the perfect starting point for you."
            }
        ],
        stats: [
            "2 Months",
            5,
            "Medium",
            "Offline"
        ],
        softwareCovered: [
            `${basicomputerIcon}/excel.png`,
            `${basicomputerIcon}/powerpoint.png`,
            `${basicomputerIcon}/tally.png`,
            `${basicomputerIcon}/word.png`
        ]
    }
];


;// CONCATENATED MODULE: ./src/components/Header.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 






function Header() {
    const pathname = (0,navigation.usePathname)();
    const [isOpen, setOpen] = (0,react_.useState)(false);
    const [isMenu, setIsMenu] = (0,react_.useState)(false);
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("header", {
            className: "w-full fixed top-0 shadow-lg bg-white z-40",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "py-2 md:py-1 px-3 sm:px-7 lg:px-10 xl:px-14 flex flex-wrap justify-between items-center",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: "/assets/images/header-logo.png",
                            alt: "SkillsYard",
                            width: 125,
                            height: 30,
                            className: "lg:w-44"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        onClick: ()=>{
                            setIsMenu(!isMenu);
                        },
                        "data-collapse-toggle": "navbar-dropdown",
                        type: "button",
                        className: "inline-flex items-center p-2 ml-3 text-sm rounded-lg md:hidden",
                        "aria-controls": "navbar-dropdown",
                        "aria-expanded": "false",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                            className: "text-greenish-light w-6 h-6",
                            "aria-hidden": "true",
                            fill: "currentColor",
                            viewBox: "0 0 20 20",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                fillRule: "evenodd",
                                d: "M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",
                                clipRule: "evenodd"
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: `${!isMenu ? "hidden" : "block"}  text-white w-full md:block md:w-auto`,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                            onMouseOver: ()=>{
                                setIsMenu(true);
                            },
                            onMouseLeave: ()=>{
                                setIsMenu(false);
                            },
                            className: "flex flex-col justify-center p-2 md:p-0 md:flex-row md:items-center",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        className: "text-sm md:text-[15px] lg:text-lg lg:leading-5 md:hidden",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                            className: `block font-medium p-2 mx-0 rounded-md hover:text-greenish-light ease-in line duration-300 md:rounded-lg md:p-1 md:py-6 md:mx-1 lg:mx-[6px] xl:mx-[10px] ${pathname === "/" ? "text-greenish-light" : "text-blacky-light"}`,
                                            children: "Home"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/courses",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                        className: "text-sm relative md:text-[15px] lg:text-lg lg:leading-5 main",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h3", {
                                                onMouseOver: ()=>{
                                                    setOpen(true);
                                                },
                                                onMouseLeave: ()=>{
                                                    setOpen(false);
                                                },
                                                className: `flex items-center justify-between font-medium p-2 mx-0 rounded-md hover:text-greenish-light ease-in duration-300 md:rounded-lg md:p-1 md:py-6 md:mx-1 lg:mx-[6px] xl:mx-[10px] ${pathname === "/courses" ? "text-greenish-light" : "text-blacky-light"}`,
                                                children: [
                                                    "Courses",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        style: {
                                                            float: "right"
                                                        },
                                                        className: "arrow",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(index_esm/* RiArrowDropDownLine */.kc8, {
                                                            size: 25
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: `absolute z-10 w-[18rem] font-normal flex justify-center ${isOpen ? "block" : "hidden"}`,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                                    onMouseOver: ()=>{
                                                        setOpen(true);
                                                    },
                                                    onMouseLeave: ()=>{
                                                        setOpen(false);
                                                    },
                                                    className: "px-5 py-3 bg-white text-grayish-light text-sm md:text-base rounded-md shadow-lg w-full",
                                                    children: courses.map((item, id)=>/*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "/course/" + item.slug,
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                className: "block my-2 px-6 md:px-4 py-2 font-medium rounded-md hover:text-white hover:bg-greenish-light ease-in duration-300",
                                                                children: item.name
                                                            })
                                                        }, id))
                                                })
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/showcase",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        className: "text-sm md:text-[15px] lg:text-lg lg:leading-5",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                            className: `block font-medium p-2 mx-0 rounded-md hover:text-greenish-light ease-in line duration-300 md:rounded-lg md:p-1 md:py-6 md:mx-1 lg:mx-[6px] xl:mx-[10px] ${pathname === "/showcase" ? "text-greenish-light" : "text-blacky-light"}`,
                                            children: "Showcase"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/placement",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        className: "text-sm md:text-[15px] lg:text-lg lg:leading-5",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                            className: `block font-medium p-2 mx-0 rounded-md hover:text-greenish-light ease-in line duration-300 md:rounded-lg md:p-1 md:py-6 md:mx-1 lg:mx-[6px] xl:mx-[10px] ${pathname === "/placement" ? "text-greenish-light" : "text-blacky-light"}`,
                                            children: "Placement"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/about",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        className: "text-sm md:text-[15px] lg:text-lg lg:leading-5",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                            className: `block font-medium p-2 mx-0 rounded-md hover:text-greenish-light ease-in line duration-300 md:rounded-lg md:p-1 md:py-6 md:mx-1 lg:mx-[6px] xl:mx-[10px] ${pathname === "/about" ? "text-greenish-light" : "text-blacky-light"}`,
                                            children: "About Us"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/contact-us",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        className: "text-sm md:text-[15px] lg:text-lg lg:leading-5",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                            className: `block font-medium p-2 mx-0 rounded-md hover:text-greenish-light ease-in line duration-300 md:rounded-lg md:p-1 md:py-6 md:mx-1 lg:mx-[6px] xl:mx-[10px] ${pathname === "/contact-us" ? "text-greenish-light" : "text-blacky-light"}`,
                                            children: "Contact Us"
                                        })
                                    })
                                })
                            ]
                        })
                    })
                ]
            })
        })
    });
}


/***/ }),

/***/ 1598:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ components_Loader)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(2451);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./src/app/Loading.tsx



const Loading = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "w-screen h-screen flex justify-center items-center",
        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
            src: "/assets/images/header-logo.png",
            alt: "SkillsYard",
            width: 140,
            height: 30,
            className: "lg:w-80 animate-growreveal"
        })
    });
};
/* harmony default export */ const app_Loading = (Loading);

;// CONCATENATED MODULE: ./src/components/Loader.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 


const Loader = ({ children })=>{
    const [loading, setLoading] = (0,react_.useState)(true);
    (0,react_.useEffect)(()=>{
        setTimeout(()=>setLoading(false), 1000);
    }, [
        loading
    ]);
    return loading ? /*#__PURE__*/ jsx_runtime_.jsx(app_Loading, {}) : children;
};
/* harmony default export */ const components_Loader = (Loader);


/***/ }),

/***/ 479:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   r: () => (/* binding */ courses)
/* harmony export */ });
const iconStr = "/assets/icons/Web-dev";
const appIconStr = "/assets/icons/app-dev";
const ThrreDStr = "/assets/icons/3d";
const TwoDStr = "/assets/icons/2d";
const gameDevIcon = "/assets/icons/game-dev";
const programingIcon = "/assets/icons/programing";
const basicomputerIcon = "/assets/icons/basic-computer";
const courses = [
    {
        name: "Web Development Course",
        description: "Learn to build entire web applications from start to finish on one of the most versatile tech stacks : MongoDB, Express.js, React.js and Node.js (MERN stack).",
        slug: "web-development",
        bannerImg: "",
        stats: [
            "3 Months",
            5,
            "Medium",
            "Offline"
        ],
        softwareCovered: [
            `${iconStr}/HTML.png`,
            `${iconStr}/Git.png`,
            `${iconStr}/js.svg`,
            `${iconStr}/node.svg`,
            `${iconStr}/mongo.svg`,
            `${iconStr}/MySQL.png`,
            `${iconStr}/expressjs.png`,
            `${iconStr}/aws.png`,
            `${iconStr}/babel_logo.svg`,
            `${iconStr}/webpack.svg`
        ],
        subCourses: [
            {
                courseImg: "/assets/images/web-dev/front.png",
                heading: "Front End Web Development Course",
                skillLevel: "Intermediate",
                duration: "3 Months",
                description: "Our Basic Web Development Course offers beginner-friendly learning experience, equipping you with the essential skills to build responsive web applications using Vs Code, HTML, CSS, JavaScript, React and Git."
            },
            {
                courseImg: "/assets/images/web-dev/fullStack.png",
                heading: "Full Stack Web Development Course",
                skillLevel: "Advanced",
                duration: "6 Months",
                description: "Our Basic Web Development Course offers beginner-friendly learning experience, equipping you with the essential skills to build responsive web applications using Vs Code, HTML, CSS, JavaScript, React and Git."
            }
        ]
    },
    {
        name: "App Development Course",
        description: "In App development course you will learn object-oriented programming from start to finish on one of the most versatile tech stacks for making platform independent is : Flutter, dart",
        slug: "app-development",
        bannerImg: "/assets/images/app.png",
        width: 1200,
        subCourses: [
            {
                courseImg: "/assets/images/app/app-card-img1.png",
                heading: "Basic App Development Course",
                skillLevel: "Intermediate",
                duration: "3 Months",
                description: "Our Basic App Development Course offers a comprehensive and hands-on learning experience, equipping you with the fundamental skills to build your own mobile applications using Flutter, manage data efficiently, implement version control with Git, and leverage the power of Firebase for seamless backend integration."
            },
            {
                courseImg: "/assets/images/app/app-card-img-2.png",
                heading: "Advance App Development Course",
                skillLevel: "Advanced",
                duration: "6 Months",
                description: "Our Advanced Basic App Development Course offers a comprehensive and intensive learning experience,  Data Management, Git, Firebase, and Android development. This advanced course is designed to equip you with the expertise required to build powerful, feature-rich applications for various platforms."
            }
        ],
        stats: [
            "3 Months",
            6,
            "Medium",
            "Offline"
        ],
        softwareCovered: [
            `${appIconStr}/android studio.png`,
            `${appIconStr}/Dart.png`,
            `${appIconStr}/firebase.png`,
            `${appIconStr}/Flutter.png`,
            `${appIconStr}/Java.png`,
            `${appIconStr}/Kotlin.png`
        ]
    },
    {
        name: "Game Development Course",
        description: "Our Game Development program is designed to unleash your creativity and equip you with the skills needed to create interactive and engaging games across various platforms with the Tech Stack of: Unity,C#,photon.",
        slug: "game-development",
        bannerImg: "/assets/images/game/game_1.webp",
        width: 600,
        subCourses: [
            {
                courseImg: "/assets/images/game/game-card.png",
                heading: "Basic Game Development Course",
                skillLevel: "Intermediate",
                duration: "3 Months",
                description: "Our Basic Game Development Course offers an exciting and hands-on learning experience, introducing you to the fundamentals of game development using C#, Unity, and Photon. Whether youre a beginner with little or no programming experience or a hobbyist looking to dive into game development."
            },
            {
                courseImg: "/assets/images/game/game-card-img-2.png",
                heading: "Advance Game Development Course",
                skillLevel: "Advanced",
                duration: "6 Months",
                description: "Our Advanced Game Development Course offers a comprehensive and hands-on learning experience, empowering you to become a proficient game developer using C Sharp, Unity, Photon, Photoshop, Illustrator, and Blender."
            }
        ],
        stats: [
            "3 Months",
            5,
            "Medium",
            "Offline"
        ],
        softwareCovered: [
            `${gameDevIcon}/CSharp.png`,
            `${gameDevIcon}/Unity.png`,
            `${gameDevIcon}/photon_1.png`
        ]
    },
    {
        name: "3D Graphics Course",
        description: "Our course offers a comprehensive introduction to the fascinating realm of 3D graphics. You will learn the principles and techniques behind creating realistic 3D models, environments, animations, and special effects.",
        slug: "3d-graphics",
        width: 600,
        subCourses: [
            {
                courseImg: "/assets/images/3d/3d1_1.png",
                heading: "Basic 3D Graphics Course",
                skillLevel: "Intermediate",
                duration: "3 Months",
                description: "Our Basic 3D Graphics Course offers a hands-on and comprehensive learning experience, introducing you to the world of 3D graphics using industry-standard software like Blender and Substance. Whether youre a beginner with no prior 3D experience or a creative enthusiast looking to venture into 3D art, this course is the perfect gateway to unleash your artistic potential."
            },
            {
                courseImg: "/assets/images/3d/3d-card-img.png",
                heading: "Advance 3D Graphics Course",
                skillLevel: "Advanced",
                duration: "6 Months",
                description: "Our Basic 3D Graphics Course offers a hands-on and comprehensive learning experience, introducing you to the world of 3D graphics using industry-standard software like Blender and Substance. Whether youre a beginner with no prior 3D experience or a creative enthusiast looking to venture into 3D art, this course is the perfect gateway to unleash your artistic potential."
            }
        ],
        animate: true,
        bannerImg: "/assets/images/3d/3d_1.webp",
        stats: [
            "6 Months",
            10,
            "Medium",
            "Offline"
        ],
        softwareCovered: [
            `${ThrreDStr}/blender.png`,
            `${ThrreDStr}/substance.png`,
            `${ThrreDStr}/zbrush.png`
        ]
    },
    {
        name: "2D Graphics Course",
        description: "Our course offers a comprehensive introduction to the exciting field of 2D graphics. You will learn the principles and techniques behind creating visually appealing 2D artwork, illustrations, animations, and user interfaces.",
        slug: "2d-graphics",
        width: 1200,
        subCourses: [
            {
                courseImg: "/assets/images/2d/2d2_1.png",
                heading: "Basic 2D Graphics Course",
                skillLevel: "Intermediate",
                duration: "3 Months",
                description: "Our Basic 2D Graphics Course offers an immersive and practical learning experience, equipping you with the essential skills to work with industry-standard software like Photoshop, Illustrator, and InDesign. Whether you are a beginner with no prior design experience or a creative enthusiast looking to enhance your graphic design skills, this course is the perfect starting point for you."
            },
            {
                courseImg: "/assets/images/2d/2d1.png",
                heading: "Advance 2D Graphics Course",
                skillLevel: "Advanced",
                duration: "6 Months",
                description: "Our Advanced 2D Graphics Course offers an intensive and hands-on learning experience, empowering you to become a skilled graphic designer proficient in Adobe Photoshop, Illustrator, InDesign, and After Effects. This course is designed for experienced designers or individuals seeking to specialize in advanced graphic design techniques and motion graphics."
            }
        ],
        bannerImg: "/assets/images/2d/2d_1.png",
        stats: [
            "2 Months",
            5,
            "Medium",
            "Offline"
        ],
        softwareCovered: [
            `${TwoDStr}/after_effects.png`,
            `${TwoDStr}/AI.png`,
            `${TwoDStr}/audition.png`,
            `${TwoDStr}/indesign.png`,
            `${TwoDStr}/Photoshop.png`,
            `${TwoDStr}/premiere.png`,
            `${TwoDStr}/xd.png`
        ]
    },
    {
        name: "Programing Course",
        description: "Our Programming course is designed to equip you with the knowledge and skills needed to become a proficient programmer and open doors to exciting career opportunities..",
        slug: "programing",
        bannerImg: "/assets/images/programing/programing.webp",
        width: 500,
        subCourses: [
            {
                courseImg: "/assets/images/game/game-card.png",
                heading: "Basic Programing  Course",
                skillLevel: "Intermediate",
                duration: "3 Months",
                description: "Our C Programming Course offers a comprehensive and hands-on learning experience, introducing you to the fundamentals of C programming. Whether youre a beginner with no prior programming experience or an aspiring programmer looking to strengthen your coding skills, this course is the perfect starting point for you."
            },
            {
                courseImg: "/assets/images/game/game-card-img-2.png",
                heading: "Advance Programing Course",
                skillLevel: "Advanced",
                duration: "6 Months",
                description: "Our C Programming Advanced Course offers a comprehensive and hands-on learning experience, introducing you to the fundamentals of C programming. Whether youre a beginner with no prior programming experience or an aspiring programmer looking to strengthen your coding skills, this course is the perfect starting point for you."
            }
        ],
        stats: [
            "2 Months",
            5,
            "Medium",
            "Offline"
        ],
        softwareCovered: [
            `${programingIcon}/c.png`,
            `${programingIcon}/c++.png`,
            `${programingIcon}/nympy1.png`,
            `${programingIcon}/pandas.png`,
            `${programingIcon}/python.png`,
            `${programingIcon}/sql.png`
        ]
    },
    {
        name: "Basic Computer Course",
        description: "Our Programming course is designed to equip you with the knowledge and skills needed to become a proficient programmer and open doors to exciting career opportunities..",
        slug: "basic-computer",
        bannerImg: "/assets/images/basic-computer/basicComputer.webp",
        width: 700,
        subCourses: [
            {
                courseImg: "/assets/images/game/game-card.png",
                heading: "Basic Computer  Course",
                skillLevel: "Intermediate",
                duration: "3 Months",
                description: "Our basic Fundamental Computer Course offers a beginner-friendly and hands-on learning experience, introducing you to the fundamental software applications like Microsoft Word and PowerPoint. Whether you are a student, a working professional, or an individual eager to enhance your computer literacy, this course is the perfect starting point for you."
            },
            {
                courseImg: "/assets/images/game/game-card-img-2.png",
                heading: "Advance Computer Course",
                skillLevel: "Advanced",
                duration: "6 Months",
                description: "Our advanced Fundamental Computer Course offers a comprehensive and beginner-friendly learning experience, introducing you to the fundamental software applications like Microsoft Word, Microsoft Excel, Tally, and PowerPoint. Whether you are a student, a working professional, or an individual looking to enhance your computer literacy, this course is the perfect starting point for you."
            }
        ],
        stats: [
            "2 Months",
            5,
            "Medium",
            "Offline"
        ],
        softwareCovered: [
            `${basicomputerIcon}/excel.png`,
            `${basicomputerIcon}/powerpoint.png`,
            `${basicomputerIcon}/tally.png`,
            `${basicomputerIcon}/word.png`
        ]
    }
];



/***/ }),

/***/ 4917:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout),
  metadata: () => (/* binding */ metadata)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/react.shared-subset.js
var react_shared_subset = __webpack_require__(2947);
// EXTERNAL MODULE: ./src/app/globals.css
var globals = __webpack_require__(5023);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(4178);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./src/app/Loading.tsx



const Loading = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "w-screen h-screen flex justify-center items-center",
        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
            src: "/assets/images/header-logo.png",
            alt: "SkillsYard",
            width: 140,
            height: 30,
            className: "lg:w-80 animate-growreveal"
        })
    });
};
/* harmony default export */ const app_Loading = (Loading);

// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(1363);
;// CONCATENATED MODULE: ./src/components/Header.tsx

const proxy = (0,module_proxy.createProxy)(String.raw`/media/ansh/My FIles/Inept Projects/New SkillsYard/skils-yard-app/src/components/Header.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const Header = (__default__);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(5124);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/react-icons/lia/index.esm.js
var index_esm = __webpack_require__(473);
// EXTERNAL MODULE: ./node_modules/react-icons/ai/index.esm.js
var ai_index_esm = __webpack_require__(1436);
// EXTERNAL MODULE: ./node_modules/react-icons/md/index.esm.js
var md_index_esm = __webpack_require__(7193);
// EXTERNAL MODULE: ./node_modules/react-icons/io/index.esm.js
var io_index_esm = __webpack_require__(4497);
// EXTERNAL MODULE: ./node_modules/react-icons/im/index.esm.js
var im_index_esm = __webpack_require__(925);
// EXTERNAL MODULE: ./src/_mocks/courseJson.ts
var courseJson = __webpack_require__(479);
;// CONCATENATED MODULE: ./src/components/Footer.tsx









const media = [
    {
        path: "https://www.facebook.com/",
        icon: index_esm/* LiaFacebookF */.rdu
    },
    {
        path: "https://www.instagram.com/",
        icon: ai_index_esm/* AiFillInstagram */.t0C
    },
    {
        path: "https://www.twitter.com/",
        icon: index_esm/* LiaTwitter */.sUP
    },
    {
        path: "https://www.linkedin.com/",
        icon: index_esm/* LiaLinkedinIn */.KCg
    },
    {
        path: "https://www.youtube.com/",
        icon: ai_index_esm/* AiFillYoutube */.b1v
    }
];
const links = [
    {
        path: "/",
        title: "Home"
    },
    {
        path: "/about",
        title: "About Us"
    },
    {
        path: "/showcase",
        title: "Showcase"
    },
    {
        path: "/placement",
        title: "Placement"
    },
    {
        path: "/contact-us",
        title: "Contact Us"
    }
];
function Footer() {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
            className: "text-white bg-blacky-light px-8 sm:px-10 lg:px-14 mt-12 sm:mt-16 lg:mt-24",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "py-8 sm:py-10 flex flex-col md:flex-row flex-wrap justify-between gap-8 md:gap-0 border-b border-greenish-light",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex flex-col lg:justify-center sm:mt-10 lg:mt-0 gap-5",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                        src: "/assets/images/footer-logo.png",
                                        alt: "SkillsYard",
                                        width: 120,
                                        height: 30,
                                        className: "lg:w-44"
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
                                    className: "text-base leading-6",
                                    children: [
                                        "SkillsYard is provided top-quality ",
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                        " education and training."
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "flex items-center gap-3 text-xl text-blacky-light",
                                    children: media.map((item, id)=>{
                                        const Icon = item.icon;
                                        return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: item.path,
                                            target: "_blank",
                                            className: "p-[6px] bg-white rounded-full ease-in duration-300 hover:bg-greenish-light hover:text-white",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(Icon, {})
                                        }, id);
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex flex-col items-start",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                    className: "text-xl leading-5",
                                    children: "Quick Links"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "my-3 border-b-2 border-greenish-light w-16"
                                }),
                                links.map((item, id)=>/*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: item.path,
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                            className: "my-1 list-none flex items-center text-base ease-in duration-300 hover:text-greenish-light",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(io_index_esm/* IoMdArrowDropright */.am, {
                                                    className: "text-greenish-light"
                                                }),
                                                " ",
                                                item.title
                                            ]
                                        })
                                    }, id))
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex flex-col items-start",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                    className: "text-xl leading-5",
                                    children: "Top Courses"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "my-3 border-b-2 border-greenish-light w-16"
                                }),
                                courseJson/* courses */.r.map((item, id)=>/*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/course/" + item.slug,
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                            className: "my-1 list-none flex items-center text-base ease-in duration-300 hover:text-greenish-light",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(io_index_esm/* IoMdArrowDropright */.am, {
                                                    className: "text-greenish-light"
                                                }),
                                                item.name
                                            ]
                                        })
                                    }, id))
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex flex-col",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                    className: "text-xl leading-5",
                                    children: "Get In Touch"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "my-3 border-b-2 border-greenish-light w-16"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                    className: "text-sm lg:text-base",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                            className: "my-1 flex items-center gap-3",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(md_index_esm/* MdLocationPin */.vcr, {
                                                    className: "text-greenish-light"
                                                }),
                                                "Sant Nagar, Burari, Delhi-110084"
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                            className: "my-1 flex items-center gap-3",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(md_index_esm/* MdEmail */.ixJ, {
                                                    className: "text-greenish-light"
                                                }),
                                                "info@skillsyard.com"
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                            className: "my-1 flex items-center gap-3",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(im_index_esm/* ImPhone */.MdO, {
                                                    className: "text-greenish-light"
                                                }),
                                                "+91 9625781411"
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "py-6 sm:py-8 flex flex-col sm:flex-row justify-between",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                            className: "text-center",
                            children: [
                                "Copyright @ 2023",
                                " ",
                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "https://skillsyard.com/",
                                    target: "_self",
                                    className: "text-greenish-light",
                                    children: "SkillsYard."
                                }),
                                " ",
                                "All Rights Reserved."
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                            className: "hidden sm:block",
                            children: [
                                "2023 • Powered by",
                                " ",
                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "https://ineptstudio.com/",
                                    target: "_blank",
                                    className: "text-greenish-light",
                                    children: "Inept Studio."
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./src/components/Loader.tsx

const Loader_proxy = (0,module_proxy.createProxy)(String.raw`/media/ansh/My FIles/Inept Projects/New SkillsYard/skils-yard-app/src/components/Loader.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: Loader_esModule, $$typeof: Loader_$$typeof } = Loader_proxy;
const Loader_default_ = Loader_proxy.default;


/* harmony default export */ const Loader = (Loader_default_);
;// CONCATENATED MODULE: ./src/components/Whatsapp.tsx
/* eslint-disable @next/next/no-img-element */ 

const WhatsAppButton = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("a", {
        href: "https://wa.me/919625781411",
        className: "fixed right-4 bottom-4 p-4 bg-green-500 text-white z-50 rounded-full shadow-lg hover:bg-green-600",
        target: "_blank",
        rel: "noopener noreferrer",
        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
            className: "w-[2em]",
            src: "/whatsapp.svg",
            alt: "whatsapp icon"
        })
    });
};
/* harmony default export */ const Whatsapp = (WhatsAppButton);

;// CONCATENATED MODULE: ./src/app/layout.tsx








const metadata = {
    title: "Skills Yard",
    description: "Skills Yard Website"
};
function RootLayout({ children }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("html", {
        lang: "en",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("head", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "preconnect",
                        href: "https://fonts.googleapis.com"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "preconnect",
                        href: "https://fonts.gstatic.com"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        href: "https://fonts.googleapis.com/css2?family=Roboto&display=swap",
                        rel: "stylesheet"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("body", {
                children: /*#__PURE__*/ jsx_runtime_.jsx(Loader, {
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_shared_subset.Suspense, {
                        fallback: /*#__PURE__*/ jsx_runtime_.jsx(app_Loading, {}),
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(Header, {}),
                            /*#__PURE__*/ jsx_runtime_.jsx(Whatsapp, {}),
                            children,
                            /*#__PURE__*/ jsx_runtime_.jsx(Footer, {})
                        ]
                    })
                })
            })
        ]
    });
}


/***/ }),

/***/ 3881:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85);
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__);
  

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((props) => {
    const imageData = {"type":"image/x-icon","sizes":"any"}
    const imageUrl = (0,next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__.fillMetadataSegment)(".", props.params, "favicon.ico")

    return [{
      ...imageData,
      url: imageUrl + "",
    }]
  });

/***/ }),

/***/ 5023:
/***/ (() => {



/***/ })

};
;