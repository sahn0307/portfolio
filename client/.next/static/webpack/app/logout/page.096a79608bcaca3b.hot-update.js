"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/logout/page",{

/***/ "(app-pages-browser)/./node_modules/next/dist/api/navigation.js":
/*!**************************************************!*\
  !*** ./node_modules/next/dist/api/navigation.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _client_components_navigation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../client/components/navigation */ \"(app-pages-browser)/./node_modules/next/dist/client/components/navigation.js\");\n/* harmony import */ var _client_components_navigation__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_client_components_navigation__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _client_components_navigation__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== \"default\") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _client_components_navigation__WEBPACK_IMPORTED_MODULE_0__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)\n/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);\n\n\n//# sourceMappingURL=navigation.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYXBpL25hdmlnYXRpb24uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWdEOztBQUVoRCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2FwaS9uYXZpZ2F0aW9uLmpzPzcxNTUiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0ICogZnJvbSBcIi4uL2NsaWVudC9jb21wb25lbnRzL25hdmlnYXRpb25cIjtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bmF2aWdhdGlvbi5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./node_modules/next/dist/api/navigation.js\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/app/logout/page.js":
/*!********************************!*\
  !*** ./src/app/logout/page.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Logout; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context/AuthContext */ \"(app-pages-browser)/./src/app/context/AuthContext.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n// app/logout/page.js\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction Logout() {\n    _s();\n    const { logout } = (0,_context_AuthContext__WEBPACK_IMPORTED_MODULE_1__.useAuth)();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const handleLogout = async ()=>{\n        try {\n            const response = await fetch(\"http://localhost:5555/api/v1/logout\", {\n                method: \"DELETE\",\n                credentials: \"include\"\n            });\n            if (response.ok) {\n                logout();\n                router.push(\"/login\");\n            } else {\n                console.error(\"Logout error:\", response.statusText);\n            // Handle logout error, e.g., display error message\n            }\n        } catch (error) {\n            console.error(\"Logout error:\", error);\n        // Handle network or other errors\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Logout\"\n            }, void 0, false, {\n                fileName: \"/Users/sungjin/Development/code/phase-5/capstone/client/src/app/logout/page.js\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleLogout,\n                children: \"Logout\"\n            }, void 0, false, {\n                fileName: \"/Users/sungjin/Development/code/phase-5/capstone/client/src/app/logout/page.js\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/sungjin/Development/code/phase-5/capstone/client/src/app/logout/page.js\",\n        lineNumber: 32,\n        columnNumber: 5\n    }, this);\n}\n_s(Logout, \"LNBn1ylxMeSsyhIBl0APy3Nh/IQ=\", false, function() {\n    return [\n        _context_AuthContext__WEBPACK_IMPORTED_MODULE_1__.useAuth,\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Logout;\nvar _c;\n$RefreshReg$(_c, \"Logout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvbG9nb3V0L3BhZ2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLHFCQUFxQjs7O0FBRzRCO0FBQ0w7QUFFN0IsU0FBU0U7O0lBQ3RCLE1BQU0sRUFBRUMsTUFBTSxFQUFFLEdBQUdILDZEQUFPQTtJQUMxQixNQUFNSSxTQUFTSCwwREFBU0E7SUFFeEIsTUFBTUksZUFBZTtRQUNuQixJQUFJO1lBQ0YsTUFBTUMsV0FBVyxNQUFNQyxNQUFNLHVDQUF1QztnQkFDbEVDLFFBQVE7Z0JBQ1JDLGFBQWE7WUFDZjtZQUVBLElBQUlILFNBQVNJLEVBQUUsRUFBRTtnQkFDZlA7Z0JBQ0FDLE9BQU9PLElBQUksQ0FBQztZQUNkLE9BQU87Z0JBQ0xDLFFBQVFDLEtBQUssQ0FBQyxpQkFBaUJQLFNBQVNRLFVBQVU7WUFDbEQsbURBQW1EO1lBQ3JEO1FBQ0YsRUFBRSxPQUFPRCxPQUFPO1lBQ2RELFFBQVFDLEtBQUssQ0FBQyxpQkFBaUJBO1FBQy9CLGlDQUFpQztRQUNuQztJQUNGO0lBRUEscUJBQ0UsOERBQUNFOzswQkFDQyw4REFBQ0M7MEJBQUc7Ozs7OzswQkFDSiw4REFBQ0M7Z0JBQU9DLFNBQVNiOzBCQUFjOzs7Ozs7Ozs7Ozs7QUFHckM7R0E5QndCSDs7UUFDSEYseURBQU9BO1FBQ1hDLHNEQUFTQTs7O0tBRkZDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvbG9nb3V0L3BhZ2UuanM/NmM0OCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBhcHAvbG9nb3V0L3BhZ2UuanNcbid1c2UgY2xpZW50JztcblxuaW1wb3J0IHsgdXNlQXV0aCB9IGZyb20gJy4uL2NvbnRleHQvQXV0aENvbnRleHQnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9uYXZpZ2F0aW9uJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9nb3V0KCkge1xuICBjb25zdCB7IGxvZ291dCB9ID0gdXNlQXV0aCgpO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICBjb25zdCBoYW5kbGVMb2dvdXQgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6NTU1NS9hcGkvdjEvbG9nb3V0Jywge1xuICAgICAgICBtZXRob2Q6ICdERUxFVEUnLFxuICAgICAgICBjcmVkZW50aWFsczogJ2luY2x1ZGUnLFxuICAgICAgfSk7XG5cbiAgICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICBsb2dvdXQoKTtcbiAgICAgICAgcm91dGVyLnB1c2goJy9sb2dpbicpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignTG9nb3V0IGVycm9yOicsIHJlc3BvbnNlLnN0YXR1c1RleHQpO1xuICAgICAgICAvLyBIYW5kbGUgbG9nb3V0IGVycm9yLCBlLmcuLCBkaXNwbGF5IGVycm9yIG1lc3NhZ2VcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcignTG9nb3V0IGVycm9yOicsIGVycm9yKTtcbiAgICAgIC8vIEhhbmRsZSBuZXR3b3JrIG9yIG90aGVyIGVycm9yc1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDE+TG9nb3V0PC9oMT5cbiAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlTG9nb3V0fT5Mb2dvdXQ8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn0iXSwibmFtZXMiOlsidXNlQXV0aCIsInVzZVJvdXRlciIsIkxvZ291dCIsImxvZ291dCIsInJvdXRlciIsImhhbmRsZUxvZ291dCIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJjcmVkZW50aWFscyIsIm9rIiwicHVzaCIsImNvbnNvbGUiLCJlcnJvciIsInN0YXR1c1RleHQiLCJkaXYiLCJoMSIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/logout/page.js\n"));

/***/ })

});