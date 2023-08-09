"use strict";
exports.id = 241;
exports.ids = [241];
exports.modules = {

/***/ 5241:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ components_Placements)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/react.shared-subset.js
var react_shared_subset = __webpack_require__(2947);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(4178);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./src/_mocks/company.ts
const companyIcons = [
    "/assets/icons/google.svg",
    "/assets/icons/microsoft.svg",
    "/assets/icons/adobe.svg",
    "/assets/icons/walmart.svg",
    "/assets/icons/amazon.svg",
    "/assets/icons/oyo.svg",
    "/assets/icons/flipkart.svg",
    "/assets/icons/samsung.svg",
    "/assets/icons/facebook.svg"
];


;// CONCATENATED MODULE: ./src/components/Placements.tsx




const Placements = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: "px-4 md:px-8 mt-20",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                        className: "text-greenish-light text-2xl p-2 font-bold",
                        children: "PLACEMENTS"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                        className: "text-blacky-default text-3xl md:text-4xl font-bold",
                        children: "Get Placed in Top Companies"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "flex flex-wrap md:gap-12 gap-6  md:px-20 px-10 mt-10 w-full",
                children: companyIcons.map((icon, idx)=>/*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        src: icon,
                        className: "mx-auto w-20 md:w-24 lg:w-32",
                        width: 130,
                        height: 100,
                        alt: "icon"
                    }, idx))
            })
        ]
    });
};
/* harmony default export */ const components_Placements = (Placements);


/***/ })

};
;