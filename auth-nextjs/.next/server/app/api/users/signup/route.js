"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/users/signup/route";
exports.ids = ["app/api/users/signup/route"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "child_process":
/*!********************************!*\
  !*** external "child_process" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("child_process");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "dns":
/*!**********************!*\
  !*** external "dns" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("dns");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "net":
/*!**********************!*\
  !*** external "net" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("net");

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ "tls":
/*!**********************!*\
  !*** external "tls" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("tls");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fusers%2Fsignup%2Froute&page=%2Fapi%2Fusers%2Fsignup%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fusers%2Fsignup%2Froute.ts&appDir=D%3A%5CProjects%5Cnext-js%5Cauth-nextjs%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CProjects%5Cnext-js%5Cauth-nextjs&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fusers%2Fsignup%2Froute&page=%2Fapi%2Fusers%2Fsignup%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fusers%2Fsignup%2Froute.ts&appDir=D%3A%5CProjects%5Cnext-js%5Cauth-nextjs%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CProjects%5Cnext-js%5Cauth-nextjs&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var D_Projects_next_js_auth_nextjs_src_app_api_users_signup_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/users/signup/route.ts */ \"(rsc)/./src/app/api/users/signup/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/users/signup/route\",\n        pathname: \"/api/users/signup\",\n        filename: \"route\",\n        bundlePath: \"app/api/users/signup/route\"\n    },\n    resolvedPagePath: \"D:\\\\Projects\\\\next-js\\\\auth-nextjs\\\\src\\\\app\\\\api\\\\users\\\\signup\\\\route.ts\",\n    nextConfigOutput,\n    userland: D_Projects_next_js_auth_nextjs_src_app_api_users_signup_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/users/signup/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZ1c2VycyUyRnNpZ251cCUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGdXNlcnMlMkZzaWdudXAlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZ1c2VycyUyRnNpZ251cCUyRnJvdXRlLnRzJmFwcERpcj1EJTNBJTVDUHJvamVjdHMlNUNuZXh0LWpzJTVDYXV0aC1uZXh0anMlNUNzcmMlNUNhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPUQlM0ElNUNQcm9qZWN0cyU1Q25leHQtanMlNUNhdXRoLW5leHRqcyZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXNHO0FBQ3ZDO0FBQ2M7QUFDMEI7QUFDdkc7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdIQUFtQjtBQUMzQztBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxpRUFBaUU7QUFDekU7QUFDQTtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUN1SDs7QUFFdkgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hdXRoLW5leHRqcy8/NjMzMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCJEOlxcXFxQcm9qZWN0c1xcXFxuZXh0LWpzXFxcXGF1dGgtbmV4dGpzXFxcXHNyY1xcXFxhcHBcXFxcYXBpXFxcXHVzZXJzXFxcXHNpZ251cFxcXFxyb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvdXNlcnMvc2lnbnVwL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvdXNlcnMvc2lnbnVwXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS91c2Vycy9zaWdudXAvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCJEOlxcXFxQcm9qZWN0c1xcXFxuZXh0LWpzXFxcXGF1dGgtbmV4dGpzXFxcXHNyY1xcXFxhcHBcXFxcYXBpXFxcXHVzZXJzXFxcXHNpZ251cFxcXFxyb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmNvbnN0IG9yaWdpbmFsUGF0aG5hbWUgPSBcIi9hcGkvdXNlcnMvc2lnbnVwL3JvdXRlXCI7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHNlcnZlckhvb2tzLFxuICAgICAgICBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIG9yaWdpbmFsUGF0aG5hbWUsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fusers%2Fsignup%2Froute&page=%2Fapi%2Fusers%2Fsignup%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fusers%2Fsignup%2Froute.ts&appDir=D%3A%5CProjects%5Cnext-js%5Cauth-nextjs%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CProjects%5Cnext-js%5Cauth-nextjs&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/users/signup/route.ts":
/*!*******************************************!*\
  !*** ./src/app/api/users/signup/route.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var _dbConfig_dbConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/dbConfig/dbConfig */ \"(rsc)/./src/dbConfig/dbConfig.ts\");\n/* harmony import */ var _models_userModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/models/userModel */ \"(rsc)/./src/models/userModel.js\");\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bcryptjs */ \"(rsc)/./node_modules/bcryptjs/index.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _helpers_mailer___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/helpers/mailer. */ \"(rsc)/./src/helpers/mailer..ts\");\n\n\n\n\n\n(0,_dbConfig_dbConfig__WEBPACK_IMPORTED_MODULE_0__.connect)();\nasync function POST(request) {\n    try {\n        const reqBody = await request.json();\n        const { username, email, password } = reqBody;\n        console.log(reqBody);\n        //check if user already exists\n        const user = await _models_userModel__WEBPACK_IMPORTED_MODULE_1__[\"default\"].findOne({\n            email\n        });\n        if (user) {\n            return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n                error: \"User already exists\"\n            }, {\n                status: 400\n            });\n        }\n        //hash password\n        const salt = await bcryptjs__WEBPACK_IMPORTED_MODULE_3___default().genSalt(10);\n        const hashedPassword = await bcryptjs__WEBPACK_IMPORTED_MODULE_3___default().hash(password, salt);\n        const newUser = new _models_userModel__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n            username,\n            email,\n            password: hashedPassword\n        });\n        const savedUser = await newUser.save();\n        console.log(savedUser);\n        //send verification email\n        await (0,_helpers_mailer___WEBPACK_IMPORTED_MODULE_4__.sendEmail)({\n            email,\n            emailType: \"VERIFY\",\n            userId: savedUser._id\n        });\n        return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n            message: \"User created successfully\",\n            success: true,\n            savedUser\n        });\n    } catch (error) {\n        return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n            error: error.message\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS91c2Vycy9zaWdudXAvcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUE4QztBQUNUO0FBQ2tCO0FBQ3ZCO0FBQ2M7QUFFOUNBLDJEQUFPQTtBQUVBLGVBQWVLLEtBQUtDLE9BQW1CO0lBQ3pDLElBQUc7UUFDQSxNQUFNQyxVQUFVLE1BQU1ELFFBQVFFLElBQUk7UUFDbEMsTUFBTSxFQUFDQyxRQUFRLEVBQUNDLEtBQUssRUFBQ0MsUUFBUSxFQUFDLEdBQUdKO1FBQ2xDSyxRQUFRQyxHQUFHLENBQUNOO1FBRVosOEJBQThCO1FBQzlCLE1BQU1PLE9BQU8sTUFBTWIseURBQUlBLENBQUNjLE9BQU8sQ0FBQztZQUFDTDtRQUFLO1FBQ3RDLElBQUdJLE1BQUs7WUFDSixPQUFPWixxREFBWUEsQ0FBQ00sSUFBSSxDQUFDO2dCQUFDUSxPQUFNO1lBQXFCLEdBQUU7Z0JBQUNDLFFBQU87WUFBRztRQUN0RTtRQUVBLGVBQWU7UUFDZixNQUFNQyxPQUFPLE1BQU1mLHVEQUFnQixDQUFDO1FBQ3BDLE1BQU1pQixpQkFBaUIsTUFBTWpCLG9EQUFhLENBQUNRLFVBQVNPO1FBRXBELE1BQU1JLFVBQVUsSUFBSXJCLHlEQUFJQSxDQUFDO1lBQ3JCUTtZQUNBQztZQUNBQyxVQUFTUztRQUNiO1FBSUEsTUFBTUcsWUFBWSxNQUFNRCxRQUFRRSxJQUFJO1FBQ3BDWixRQUFRQyxHQUFHLENBQUNVO1FBRVoseUJBQXlCO1FBQ3pCLE1BQU1uQiwyREFBU0EsQ0FBQztZQUFDTTtZQUFNZSxXQUFVO1lBQVNDLFFBQU9ILFVBQVVJLEdBQUc7UUFBQTtRQUU5RCxPQUFPekIscURBQVlBLENBQUNNLElBQUksQ0FBQztZQUNyQm9CLFNBQVE7WUFDUkMsU0FBUTtZQUNSTjtRQUNKO0lBRUgsRUFBQyxPQUFNUCxPQUFVO1FBQ2QsT0FBT2QscURBQVlBLENBQUNNLElBQUksQ0FBQztZQUFDUSxPQUFNQSxNQUFNWSxPQUFPO1FBQUEsR0FBRTtZQUFDWCxRQUFPO1FBQUc7SUFDN0Q7QUFDTCIsInNvdXJjZXMiOlsid2VicGFjazovL2F1dGgtbmV4dGpzLy4vc3JjL2FwcC9hcGkvdXNlcnMvc2lnbnVwL3JvdXRlLnRzPzE2ZjYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJAL2RiQ29uZmlnL2RiQ29uZmlnXCI7XHJcbmltcG9ydCBVc2VyIGZyb20gXCJAL21vZGVscy91c2VyTW9kZWxcIlxyXG5pbXBvcnQgeyBOZXh0UmVxdWVzdCxOZXh0UmVzcG9uc2UgfSBmcm9tIFwibmV4dC9zZXJ2ZXJcIjtcclxuaW1wb3J0IGJjcnlwdGpzIGZyb20gXCJiY3J5cHRqc1wiO1xyXG5pbXBvcnQgeyBzZW5kRW1haWwgfSBmcm9tIFwiQC9oZWxwZXJzL21haWxlci5cIjtcclxuXHJcbmNvbm5lY3QoKVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBPU1QocmVxdWVzdDpOZXh0UmVxdWVzdCkge1xyXG4gICAgIHRyeXtcclxuICAgICAgICBjb25zdCByZXFCb2R5ID0gYXdhaXQgcmVxdWVzdC5qc29uKClcclxuICAgICAgICBjb25zdCB7dXNlcm5hbWUsZW1haWwscGFzc3dvcmR9ID0gcmVxQm9keTtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXFCb2R5KTtcclxuICAgIFxyXG4gICAgICAgIC8vY2hlY2sgaWYgdXNlciBhbHJlYWR5IGV4aXN0c1xyXG4gICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBVc2VyLmZpbmRPbmUoe2VtYWlsfSlcclxuICAgICAgICBpZih1c2VyKXtcclxuICAgICAgICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHtlcnJvcjpcIlVzZXIgYWxyZWFkeSBleGlzdHNcIn0se3N0YXR1czo0MDB9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy9oYXNoIHBhc3N3b3JkXHJcbiAgICAgICAgY29uc3Qgc2FsdCA9IGF3YWl0IGJjcnlwdGpzLmdlblNhbHQoMTApXHJcbiAgICAgICAgY29uc3QgaGFzaGVkUGFzc3dvcmQgPSBhd2FpdCBiY3J5cHRqcy5oYXNoKHBhc3N3b3JkLHNhbHQpO1xyXG5cclxuICAgICAgICBjb25zdCBuZXdVc2VyID0gbmV3IFVzZXIoe1xyXG4gICAgICAgICAgICB1c2VybmFtZSxcclxuICAgICAgICAgICAgZW1haWwsXHJcbiAgICAgICAgICAgIHBhc3N3b3JkOmhhc2hlZFBhc3N3b3JkLFxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICBcclxuXHJcbiAgICAgICAgY29uc3Qgc2F2ZWRVc2VyID0gYXdhaXQgbmV3VXNlci5zYXZlKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coc2F2ZWRVc2VyKTtcclxuXHJcbiAgICAgICAgLy9zZW5kIHZlcmlmaWNhdGlvbiBlbWFpbFxyXG4gICAgICAgIGF3YWl0IHNlbmRFbWFpbCh7ZW1haWwsZW1haWxUeXBlOlwiVkVSSUZZXCIsdXNlcklkOnNhdmVkVXNlci5faWR9KVxyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7XHJcbiAgICAgICAgICAgIG1lc3NhZ2U6XCJVc2VyIGNyZWF0ZWQgc3VjY2Vzc2Z1bGx5XCIsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6dHJ1ZSxcclxuICAgICAgICAgICAgc2F2ZWRVc2VyXHJcbiAgICAgICAgfSlcclxuICAgICBcclxuICAgICB9Y2F0Y2goZXJyb3I6YW55KXtcclxuICAgICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oe2Vycm9yOmVycm9yLm1lc3NhZ2V9LHtzdGF0dXM6NTAwfSlcclxuICAgICB9XHJcbn0iXSwibmFtZXMiOlsiY29ubmVjdCIsIlVzZXIiLCJOZXh0UmVzcG9uc2UiLCJiY3J5cHRqcyIsInNlbmRFbWFpbCIsIlBPU1QiLCJyZXF1ZXN0IiwicmVxQm9keSIsImpzb24iLCJ1c2VybmFtZSIsImVtYWlsIiwicGFzc3dvcmQiLCJjb25zb2xlIiwibG9nIiwidXNlciIsImZpbmRPbmUiLCJlcnJvciIsInN0YXR1cyIsInNhbHQiLCJnZW5TYWx0IiwiaGFzaGVkUGFzc3dvcmQiLCJoYXNoIiwibmV3VXNlciIsInNhdmVkVXNlciIsInNhdmUiLCJlbWFpbFR5cGUiLCJ1c2VySWQiLCJfaWQiLCJtZXNzYWdlIiwic3VjY2VzcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/users/signup/route.ts\n");

/***/ }),

/***/ "(rsc)/./src/dbConfig/dbConfig.ts":
/*!**********************************!*\
  !*** ./src/dbConfig/dbConfig.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   connect: () => (/* binding */ connect)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function connect() {\n    try {\n        mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.MONGO);\n        const connection = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().connection);\n        connection.on(\"connected\", ()=>{\n            console.log(\"mongodb connected successfully\");\n        });\n        connection.on(\"error\", ()=>{\n            console.log(\"MongoDB connection error\");\n        });\n    } catch (error) {\n        console.log(\"something goes wrong\");\n        console.log(error);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvZGJDb25maWcvZGJDb25maWcudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQStCO0FBRXhCLGVBQWVDO0lBQ2xCLElBQUk7UUFDQUQsdURBQWdCLENBQUNFLFFBQVFDLEdBQUcsQ0FBQ0MsS0FBSztRQUNsQyxNQUFNQyxhQUFhTCw0REFBbUI7UUFDdENLLFdBQVdDLEVBQUUsQ0FBQyxhQUFZO1lBQ3RCQyxRQUFRQyxHQUFHLENBQUM7UUFDaEI7UUFDQUgsV0FBV0MsRUFBRSxDQUFDLFNBQVE7WUFDakJDLFFBQVFDLEdBQUcsQ0FBQztRQUNqQjtJQUNKLEVBQUUsT0FBT0MsT0FBTztRQUNaRixRQUFRQyxHQUFHLENBQUM7UUFDWkQsUUFBUUMsR0FBRyxDQUFDQztJQUNoQjtBQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXV0aC1uZXh0anMvLi9zcmMvZGJDb25maWcvZGJDb25maWcudHM/YzA3OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCJcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjb25uZWN0KCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBtb25nb29zZS5jb25uZWN0KHByb2Nlc3MuZW52Lk1PTkdPISk7XHJcbiAgICAgICAgY29uc3QgY29ubmVjdGlvbiA9IG1vbmdvb3NlLmNvbm5lY3Rpb247XHJcbiAgICAgICAgY29ubmVjdGlvbi5vbignY29ubmVjdGVkJywoKT0+e1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnbW9uZ29kYiBjb25uZWN0ZWQgc3VjY2Vzc2Z1bGx5Jyk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICBjb25uZWN0aW9uLm9uKCdlcnJvcicsKCk9PntcclxuICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdNb25nb0RCIGNvbm5lY3Rpb24gZXJyb3InKTtcclxuICAgICAgICB9KVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInNvbWV0aGluZyBnb2VzIHdyb25nXCIpXHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICB9XHJcbn0iXSwibmFtZXMiOlsibW9uZ29vc2UiLCJjb25uZWN0IiwicHJvY2VzcyIsImVudiIsIk1PTkdPIiwiY29ubmVjdGlvbiIsIm9uIiwiY29uc29sZSIsImxvZyIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/dbConfig/dbConfig.ts\n");

/***/ }),

/***/ "(rsc)/./src/helpers/mailer..ts":
/*!********************************!*\
  !*** ./src/helpers/mailer..ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   sendEmail: () => (/* binding */ sendEmail)\n/* harmony export */ });\n/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nodemailer */ \"(rsc)/./node_modules/nodemailer/lib/nodemailer.js\");\n/* harmony import */ var _models_userModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/models/userModel */ \"(rsc)/./src/models/userModel.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bcryptjs */ \"(rsc)/./node_modules/bcryptjs/index.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst sendEmail = async ({ email, emailType, userId })=>{\n    try {\n        // create a hased token\n        const hashedToken = await bcryptjs__WEBPACK_IMPORTED_MODULE_2___default().hash(userId.toString(), 10);\n        if (emailType === \"VERIFY\") {\n            await _models_userModel__WEBPACK_IMPORTED_MODULE_1__[\"default\"].findByIdAndUpdate(userId, {\n                verifyToken: hashedToken,\n                verifyTokenExpiry: Date.now() + 3600000\n            });\n        } else if (emailType === \"RESET\") {\n            await _models_userModel__WEBPACK_IMPORTED_MODULE_1__[\"default\"].findByIdAndUpdate(userId, {\n                forgotPasswordToken: hashedToken,\n                forgotPasswordTokenExpiry: Date.now() + 3600000\n            });\n        }\n        var transport = nodemailer__WEBPACK_IMPORTED_MODULE_0__.createTransport({\n            host: \"sandbox.smtp.mailtrap.io\",\n            port: 2525,\n            auth: {\n                user: \"eb93911d40a133\",\n                pass: \"1173837abd79e7\"\n            }\n        });\n        const mailOptions = {\n            from: \"iminvis777.com\",\n            to: email,\n            subject: emailType === \"VERIFY\" ? \"Verify your email\" : \"Reset your password\",\n            html: `<p>Click <a href=\"${process.env.DOMAIN}/${emailType === \"VERIFY\" ? \"verifyemail\" : \"resetpass\"}?token=${hashedToken}\">here</a> to ${emailType === \"VERIFY\" ? \"verify your email\" : \"reset your password\"}\r\n            or copy and paste the link below in your browser. <br> ${process.env.DOMAIN}/verifyemail?token=${hashedToken}\r\n            </p>`\n        };\n        const mailresponse = await transport.sendMail(mailOptions);\n        return mailresponse;\n    } catch (error) {\n        throw new Error(error.message);\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvaGVscGVycy9tYWlsZXIuLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQW9DO0FBQ0U7QUFDTjtBQUd6QixNQUFNRyxZQUFZLE9BQU0sRUFBQ0MsS0FBSyxFQUFFQyxTQUFTLEVBQUVDLE1BQU0sRUFBSztJQUN6RCxJQUFJO1FBQ0EsdUJBQXVCO1FBQ3ZCLE1BQU1DLGNBQWMsTUFBTUwsb0RBQWEsQ0FBQ0ksT0FBT0csUUFBUSxJQUFJO1FBRTNELElBQUlKLGNBQWMsVUFBVTtZQUN4QixNQUFNSix5REFBSUEsQ0FBQ1MsaUJBQWlCLENBQUNKLFFBQ3pCO2dCQUFDSyxhQUFhSjtnQkFBYUssbUJBQW1CQyxLQUFLQyxHQUFHLEtBQUs7WUFBTztRQUMxRSxPQUFPLElBQUlULGNBQWMsU0FBUTtZQUM3QixNQUFNSix5REFBSUEsQ0FBQ1MsaUJBQWlCLENBQUNKLFFBQ3pCO2dCQUFDUyxxQkFBcUJSO2dCQUFhUywyQkFBMkJILEtBQUtDLEdBQUcsS0FBSztZQUFPO1FBQzFGO1FBRUEsSUFBSUcsWUFBWWpCLHVEQUEwQixDQUFDO1lBQ3ZDbUIsTUFBTTtZQUNOQyxNQUFNO1lBQ05DLE1BQU07Z0JBQ0pDLE1BQU07Z0JBQ05DLE1BQU07WUFDUjtRQUNGO1FBR0YsTUFBTUMsY0FBYztZQUNoQkMsTUFBTTtZQUNOQyxJQUFJdEI7WUFDSnVCLFNBQVN0QixjQUFjLFdBQVcsc0JBQXNCO1lBQ3hEdUIsTUFBTSxDQUFDLGtCQUFrQixFQUFFQyxRQUFRQyxHQUFHLENBQUNDLE1BQU0sQ0FBQyxDQUFDLEVBQUUxQixjQUFZLFdBQVMsZ0JBQWMsWUFBWSxPQUFPLEVBQUVFLFlBQVksY0FBYyxFQUFFRixjQUFjLFdBQVcsc0JBQXNCLHNCQUFzQjttRUFDbkosRUFBRXdCLFFBQVFDLEdBQUcsQ0FBQ0MsTUFBTSxDQUFDLG1CQUFtQixFQUFFeEIsWUFBWTtnQkFDekcsQ0FBQztRQUNUO1FBRUEsTUFBTXlCLGVBQWUsTUFBTWYsVUFBVWdCLFFBQVEsQ0FDNUNUO1FBQ0QsT0FBT1E7SUFFWCxFQUFFLE9BQU9FLE9BQVc7UUFDaEIsTUFBTSxJQUFJQyxNQUFNRCxNQUFNRSxPQUFPO0lBQ2pDO0FBQ0osRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2F1dGgtbmV4dGpzLy4vc3JjL2hlbHBlcnMvbWFpbGVyLi50cz82MGEyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBub2RlbWFpbGVyIGZyb20gJ25vZGVtYWlsZXInO1xyXG5pbXBvcnQgVXNlciBmcm9tIFwiQC9tb2RlbHMvdXNlck1vZGVsXCI7XHJcbmltcG9ydCBiY3J5cHRqcyBmcm9tICdiY3J5cHRqcyc7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IHNlbmRFbWFpbCA9IGFzeW5jKHtlbWFpbCwgZW1haWxUeXBlLCB1c2VySWR9OmFueSkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICAvLyBjcmVhdGUgYSBoYXNlZCB0b2tlblxyXG4gICAgICAgIGNvbnN0IGhhc2hlZFRva2VuID0gYXdhaXQgYmNyeXB0anMuaGFzaCh1c2VySWQudG9TdHJpbmcoKSwgMTApXHJcblxyXG4gICAgICAgIGlmIChlbWFpbFR5cGUgPT09IFwiVkVSSUZZXCIpIHtcclxuICAgICAgICAgICAgYXdhaXQgVXNlci5maW5kQnlJZEFuZFVwZGF0ZSh1c2VySWQsIFxyXG4gICAgICAgICAgICAgICAge3ZlcmlmeVRva2VuOiBoYXNoZWRUb2tlbiwgdmVyaWZ5VG9rZW5FeHBpcnk6IERhdGUubm93KCkgKyAzNjAwMDAwfSlcclxuICAgICAgICB9IGVsc2UgaWYgKGVtYWlsVHlwZSA9PT0gXCJSRVNFVFwiKXtcclxuICAgICAgICAgICAgYXdhaXQgVXNlci5maW5kQnlJZEFuZFVwZGF0ZSh1c2VySWQsIFxyXG4gICAgICAgICAgICAgICAge2ZvcmdvdFBhc3N3b3JkVG9rZW46IGhhc2hlZFRva2VuLCBmb3Jnb3RQYXNzd29yZFRva2VuRXhwaXJ5OiBEYXRlLm5vdygpICsgMzYwMDAwMH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHZhciB0cmFuc3BvcnQgPSBub2RlbWFpbGVyLmNyZWF0ZVRyYW5zcG9ydCh7XHJcbiAgICAgICAgICAgIGhvc3Q6IFwic2FuZGJveC5zbXRwLm1haWx0cmFwLmlvXCIsXHJcbiAgICAgICAgICAgIHBvcnQ6IDI1MjUsXHJcbiAgICAgICAgICAgIGF1dGg6IHtcclxuICAgICAgICAgICAgICB1c2VyOiBcImViOTM5MTFkNDBhMTMzXCIsXHJcbiAgICAgICAgICAgICAgcGFzczogXCIxMTczODM3YWJkNzllN1wiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAgICAgY29uc3QgbWFpbE9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgIGZyb206ICdpbWludmlzNzc3LmNvbScsXHJcbiAgICAgICAgICAgIHRvOiBlbWFpbCxcclxuICAgICAgICAgICAgc3ViamVjdDogZW1haWxUeXBlID09PSBcIlZFUklGWVwiID8gXCJWZXJpZnkgeW91ciBlbWFpbFwiIDogXCJSZXNldCB5b3VyIHBhc3N3b3JkXCIsXHJcbiAgICAgICAgICAgIGh0bWw6IGA8cD5DbGljayA8YSBocmVmPVwiJHtwcm9jZXNzLmVudi5ET01BSU59LyR7ZW1haWxUeXBlPT09XCJWRVJJRllcIj9cInZlcmlmeWVtYWlsXCI6XCJyZXNldHBhc3NcIn0/dG9rZW49JHtoYXNoZWRUb2tlbn1cIj5oZXJlPC9hPiB0byAke2VtYWlsVHlwZSA9PT0gXCJWRVJJRllcIiA/IFwidmVyaWZ5IHlvdXIgZW1haWxcIiA6IFwicmVzZXQgeW91ciBwYXNzd29yZFwifVxyXG4gICAgICAgICAgICBvciBjb3B5IGFuZCBwYXN0ZSB0aGUgbGluayBiZWxvdyBpbiB5b3VyIGJyb3dzZXIuIDxicj4gJHtwcm9jZXNzLmVudi5ET01BSU59L3ZlcmlmeWVtYWlsP3Rva2VuPSR7aGFzaGVkVG9rZW59XHJcbiAgICAgICAgICAgIDwvcD5gXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBtYWlscmVzcG9uc2UgPSBhd2FpdCB0cmFuc3BvcnQuc2VuZE1haWxcclxuICAgICAgICAobWFpbE9wdGlvbnMpO1xyXG4gICAgICAgIHJldHVybiBtYWlscmVzcG9uc2U7XHJcblxyXG4gICAgfSBjYXRjaCAoZXJyb3I6YW55KSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgfVxyXG59Il0sIm5hbWVzIjpbIm5vZGVtYWlsZXIiLCJVc2VyIiwiYmNyeXB0anMiLCJzZW5kRW1haWwiLCJlbWFpbCIsImVtYWlsVHlwZSIsInVzZXJJZCIsImhhc2hlZFRva2VuIiwiaGFzaCIsInRvU3RyaW5nIiwiZmluZEJ5SWRBbmRVcGRhdGUiLCJ2ZXJpZnlUb2tlbiIsInZlcmlmeVRva2VuRXhwaXJ5IiwiRGF0ZSIsIm5vdyIsImZvcmdvdFBhc3N3b3JkVG9rZW4iLCJmb3Jnb3RQYXNzd29yZFRva2VuRXhwaXJ5IiwidHJhbnNwb3J0IiwiY3JlYXRlVHJhbnNwb3J0IiwiaG9zdCIsInBvcnQiLCJhdXRoIiwidXNlciIsInBhc3MiLCJtYWlsT3B0aW9ucyIsImZyb20iLCJ0byIsInN1YmplY3QiLCJodG1sIiwicHJvY2VzcyIsImVudiIsIkRPTUFJTiIsIm1haWxyZXNwb25zZSIsInNlbmRNYWlsIiwiZXJyb3IiLCJFcnJvciIsIm1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/helpers/mailer..ts\n");

/***/ }),

/***/ "(rsc)/./src/models/userModel.js":
/*!*********************************!*\
  !*** ./src/models/userModel.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst userSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    username: {\n        type: String,\n        required: [\n            true,\n            \"Please provide a username\"\n        ],\n        unique: true\n    },\n    email: {\n        type: String,\n        required: [\n            true,\n            \"Please provide a email\"\n        ],\n        unique: true\n    },\n    password: {\n        type: String,\n        required: [\n            true,\n            \"Please provide a password\"\n        ]\n    },\n    isVerfied: {\n        type: Boolean,\n        default: false\n    },\n    isAdmin: {\n        type: Boolean,\n        default: false\n    },\n    forgotPasswordToken: String,\n    forgotPasswordTokenExpiry: Date,\n    verifyToken: String,\n    verifyTokenExpiry: Date\n});\nconst User = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).users || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"users\", userSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (User);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbW9kZWxzL3VzZXJNb2RlbC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0M7QUFFaEMsTUFBTUMsYUFBYSxJQUFJRCx3REFBZSxDQUFDO0lBQ25DRyxVQUFVO1FBQ05DLE1BQU1DO1FBQ05DLFVBQVU7WUFBQztZQUFNO1NBQTRCO1FBQzdDQyxRQUFRO0lBQ1o7SUFDQUMsT0FBTztRQUNISixNQUFNQztRQUNOQyxVQUFVO1lBQUM7WUFBTTtTQUF5QjtRQUMxQ0MsUUFBUTtJQUNaO0lBQ0FFLFVBQVU7UUFDTkwsTUFBTUM7UUFDTkMsVUFBVTtZQUFDO1lBQU07U0FBNEI7SUFDakQ7SUFDQUksV0FBVztRQUNQTixNQUFNTztRQUNOQyxTQUFTO0lBQ2I7SUFDQUMsU0FBUztRQUNMVCxNQUFNTztRQUNOQyxTQUFTO0lBQ2I7SUFDQUUscUJBQXFCVDtJQUNyQlUsMkJBQTJCQztJQUMzQkMsYUFBYVo7SUFDYmEsbUJBQW1CRjtBQUN2QjtBQUVBLE1BQU1HLE9BQU9uQix3REFBZSxDQUFDcUIsS0FBSyxJQUFJckIscURBQWMsQ0FBQyxTQUFTQztBQUU5RCxpRUFBZWtCLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hdXRoLW5leHRqcy8uL3NyYy9tb2RlbHMvdXNlck1vZGVsLmpzP2M0ZGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiO1xyXG5cclxuY29uc3QgdXNlclNjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoe1xyXG4gICAgdXNlcm5hbWU6IHtcclxuICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgcmVxdWlyZWQ6IFt0cnVlLCBcIlBsZWFzZSBwcm92aWRlIGEgdXNlcm5hbWVcIl0sXHJcbiAgICAgICAgdW5pcXVlOiB0cnVlLFxyXG4gICAgfSxcclxuICAgIGVtYWlsOiB7XHJcbiAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgIHJlcXVpcmVkOiBbdHJ1ZSwgXCJQbGVhc2UgcHJvdmlkZSBhIGVtYWlsXCJdLFxyXG4gICAgICAgIHVuaXF1ZTogdHJ1ZSxcclxuICAgIH0sXHJcbiAgICBwYXNzd29yZDoge1xyXG4gICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICByZXF1aXJlZDogW3RydWUsIFwiUGxlYXNlIHByb3ZpZGUgYSBwYXNzd29yZFwiXSxcclxuICAgIH0sXHJcbiAgICBpc1ZlcmZpZWQ6IHtcclxuICAgICAgICB0eXBlOiBCb29sZWFuLFxyXG4gICAgICAgIGRlZmF1bHQ6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIGlzQWRtaW46IHtcclxuICAgICAgICB0eXBlOiBCb29sZWFuLFxyXG4gICAgICAgIGRlZmF1bHQ6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIGZvcmdvdFBhc3N3b3JkVG9rZW46IFN0cmluZyxcclxuICAgIGZvcmdvdFBhc3N3b3JkVG9rZW5FeHBpcnk6IERhdGUsXHJcbiAgICB2ZXJpZnlUb2tlbjogU3RyaW5nLFxyXG4gICAgdmVyaWZ5VG9rZW5FeHBpcnk6IERhdGUsXHJcbn0pXHJcblxyXG5jb25zdCBVc2VyID0gbW9uZ29vc2UubW9kZWxzLnVzZXJzIHx8IG1vbmdvb3NlLm1vZGVsKFwidXNlcnNcIiwgdXNlclNjaGVtYSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVc2VyOyJdLCJuYW1lcyI6WyJtb25nb29zZSIsInVzZXJTY2hlbWEiLCJTY2hlbWEiLCJ1c2VybmFtZSIsInR5cGUiLCJTdHJpbmciLCJyZXF1aXJlZCIsInVuaXF1ZSIsImVtYWlsIiwicGFzc3dvcmQiLCJpc1ZlcmZpZWQiLCJCb29sZWFuIiwiZGVmYXVsdCIsImlzQWRtaW4iLCJmb3Jnb3RQYXNzd29yZFRva2VuIiwiZm9yZ290UGFzc3dvcmRUb2tlbkV4cGlyeSIsIkRhdGUiLCJ2ZXJpZnlUb2tlbiIsInZlcmlmeVRva2VuRXhwaXJ5IiwiVXNlciIsIm1vZGVscyIsInVzZXJzIiwibW9kZWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/models/userModel.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/nodemailer","vendor-chunks/bcryptjs"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fusers%2Fsignup%2Froute&page=%2Fapi%2Fusers%2Fsignup%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fusers%2Fsignup%2Froute.ts&appDir=D%3A%5CProjects%5Cnext-js%5Cauth-nextjs%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CProjects%5Cnext-js%5Cauth-nextjs&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();