"use strict";
(() => {
var exports = {};
exports.id = 428;
exports.ids = [428];
exports.modules = {

/***/ 2081:
/***/ ((module) => {

module.exports = require("child_process");

/***/ }),

/***/ 3663:
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ 9523:
/***/ ((module) => {

module.exports = require("dns");

/***/ }),

/***/ 2361:
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ 7147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 3685:
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ 5687:
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ 1808:
/***/ ((module) => {

module.exports = require("net");

/***/ }),

/***/ 2037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 1017:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 5477:
/***/ ((module) => {

module.exports = require("punycode");

/***/ }),

/***/ 2781:
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ 4404:
/***/ ((module) => {

module.exports = require("tls");

/***/ }),

/***/ 7310:
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ 3837:
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ 9796:
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ 726:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  headerHooks: () => (/* binding */ headerHooks),
  originalPathname: () => (/* binding */ originalPathname),
  requestAsyncStorage: () => (/* binding */ requestAsyncStorage),
  routeModule: () => (/* binding */ routeModule),
  serverHooks: () => (/* binding */ serverHooks),
  staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),
  staticGenerationBailout: () => (/* binding */ staticGenerationBailout)
});

// NAMESPACE OBJECT: ./src/app/api/sendEmail/route.ts
var route_namespaceObject = {};
__webpack_require__.r(route_namespaceObject);
__webpack_require__.d(route_namespaceObject, {
  POST: () => (POST)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/node-polyfill-headers.js
var node_polyfill_headers = __webpack_require__(2394);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-route/module.js
var app_route_module = __webpack_require__(9692);
var module_default = /*#__PURE__*/__webpack_require__.n(app_route_module);
// EXTERNAL MODULE: ./node_modules/next/dist/server/web/exports/next-response.js
var next_response = __webpack_require__(9335);
// EXTERNAL MODULE: ./node_modules/nodemailer/lib/nodemailer.js
var nodemailer = __webpack_require__(4098);
;// CONCATENATED MODULE: ./src/app/api/sendEmail/route.ts
// api/sendEmail.ts


async function POST(request) {
    const body = await request.json() // res now contains body
    ;
    const { name, email, message } = body;
    console.log("body==>", body);
    // Validate the data (you can add more validation if needed)
    if (name == "" || email == "" || message == "") {
        console.log("i am under water", body);
        return next_response/* default */.Z.json({
            status: 400,
            error: "Name, email, and message are required"
        });
    }
    try {
        // Use environment variables for SMTP configuration
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT),
            secure: process.env.SMTP_SECURE === "true",
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.NODEMAILER_PW
            }
        });
        const html = `
      <html>

      
        <body>
        <div className="flex justify-center bg-slate-400 items-center">
         <tr>
            <th style="border: 1px solid black; padding: 8px; background-color: #f2f2f2;">Name</th>
            <th style="border: 1px solid black; padding: 8px; background-color: #f2f2f2;" >Email</th>
            <th style="border: 1px solid black; padding: 8px; background-color: #f2f2f2;" >Message</th>
          </tr>
          <tr>
            <td style="border: 1px solid black; padding: 8px;" >${name}</td>
            <td  style="border: 1px solid black; padding: 8px;">${email}</td>
            <td  style="border: 1px solid black; padding: 8px;" >${message}</td>
          </tr>
        </div>
          
        </body>
      </html>
    `;
        await transporter.sendMail({
            from: process.env.SMTP_USER,
            to: email,
            subject: "New Contact Form Submission",
            // text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
            html: html
        });
        return next_response/* default */.Z.json({
            status: 200,
            message: "Email sent successfully"
        });
    } catch (error) {
        return next_response/* default */.Z.json({
            status: 500,
            error: "Something went wrong, please try again later"
        });
    }
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fapi%2FsendEmail%2Froute&name=app%2Fapi%2FsendEmail%2Froute&pagePath=private-next-app-dir%2Fapi%2FsendEmail%2Froute.ts&appDir=%2Fmedia%2Fansh%2FMy%20FIles%2FInept%20Projects%2FNew%20SkillsYard%2Fskils-yard-app%2Fsrc%2Fapp&appPaths=%2Fapi%2FsendEmail%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!

    

    

    

    const options = {"definition":{"kind":"APP_ROUTE","page":"/api/sendEmail/route","pathname":"/api/sendEmail","filename":"route","bundlePath":"app/api/sendEmail/route"},"resolvedPagePath":"/media/ansh/My FIles/Inept Projects/New SkillsYard/skils-yard-app/src/app/api/sendEmail/route.ts","nextConfigOutput":""}
    const routeModule = new (module_default())({
      ...options,
      userland: route_namespaceObject,
    })

    // Pull out the exports that we need to expose from the module. This should
    // be eliminated when we've moved the other routes to the new format. These
    // are used to hook into the route.
    const {
      requestAsyncStorage,
      staticGenerationAsyncStorage,
      serverHooks,
      headerHooks,
      staticGenerationBailout
    } = routeModule

    const originalPathname = "/api/sendEmail/route"

    

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [697,565,501,92], () => (__webpack_exec__(726)));
module.exports = __webpack_exports__;

})();