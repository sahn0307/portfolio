"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./src/app/components/Navbar.js":
/*!**************************************!*\
  !*** ./src/app/components/Navbar.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Navbar; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/AuthContext */ \"(app-pages-browser)/./src/app/context/AuthContext.js\");\n// app/components/Navbar.js\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction Navbar() {\n    _s();\n    const { user } = (0,_context_AuthContext__WEBPACK_IMPORTED_MODULE_2__.useAuth)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: \"bg-gray-800\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center justify-between h-16\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex items-center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex-shrink-0\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                href: \"/\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"text-white text-2xl font-bold\",\n                                    children: \"Logo\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/sungjin/Development/code/phase-5/capstone/client/src/app/components/Navbar.js\",\n                                    lineNumber: 17,\n                                    columnNumber: 17\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/sungjin/Development/code/phase-5/capstone/client/src/app/components/Navbar.js\",\n                                lineNumber: 16,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/sungjin/Development/code/phase-5/capstone/client/src/app/components/Navbar.js\",\n                            lineNumber: 15,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"hidden md:block\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"ml-10 flex items-baseline space-x-4\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                        href: \"/\",\n                                        className: \"text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium\",\n                                        children: \"Home\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/sungjin/Development/code/phase-5/capstone/client/src/app/components/Navbar.js\",\n                                        lineNumber: 22,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                        href: \"/cards\",\n                                        className: \"text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium\",\n                                        children: \"Cards\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/sungjin/Development/code/phase-5/capstone/client/src/app/components/Navbar.js\",\n                                        lineNumber: 25,\n                                        columnNumber: 17\n                                    }, this),\n                                    user ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                                href: \"/collection\",\n                                                className: \"text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium\",\n                                                children: \"Collection\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/sungjin/Development/code/phase-5/capstone/client/src/app/components/Navbar.js\",\n                                                lineNumber: 30,\n                                                columnNumber: 21\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                                href: \"/profile\",\n                                                className: \"text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium\",\n                                                children: \"Profile\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/sungjin/Development/code/phase-5/capstone/client/src/app/components/Navbar.js\",\n                                                lineNumber: 33,\n                                                columnNumber: 21\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                                href: \"/logout\",\n                                                className: \"text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium\",\n                                                children: \"Logout\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/sungjin/Development/code/phase-5/capstone/client/src/app/components/Navbar.js\",\n                                                lineNumber: 36,\n                                                columnNumber: 21\n                                            }, this)\n                                        ]\n                                    }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                                href: \"/signup\",\n                                                className: \"text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium\",\n                                                children: \"Signup\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/sungjin/Development/code/phase-5/capstone/client/src/app/components/Navbar.js\",\n                                                lineNumber: 42,\n                                                columnNumber: 21\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                                href: \"/login\",\n                                                className: \"text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium\",\n                                                children: \"Login\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/sungjin/Development/code/phase-5/capstone/client/src/app/components/Navbar.js\",\n                                                lineNumber: 45,\n                                                columnNumber: 21\n                                            }, this)\n                                        ]\n                                    }, void 0, true)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/sungjin/Development/code/phase-5/capstone/client/src/app/components/Navbar.js\",\n                                lineNumber: 21,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/sungjin/Development/code/phase-5/capstone/client/src/app/components/Navbar.js\",\n                            lineNumber: 20,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/sungjin/Development/code/phase-5/capstone/client/src/app/components/Navbar.js\",\n                    lineNumber: 14,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/sungjin/Development/code/phase-5/capstone/client/src/app/components/Navbar.js\",\n                lineNumber: 13,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/sungjin/Development/code/phase-5/capstone/client/src/app/components/Navbar.js\",\n            lineNumber: 12,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/sungjin/Development/code/phase-5/capstone/client/src/app/components/Navbar.js\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, this);\n}\n_s(Navbar, \"9ep4vdl3mBfipxjmc+tQCDhw6Ik=\", false, function() {\n    return [\n        _context_AuthContext__WEBPACK_IMPORTED_MODULE_2__.useAuth\n    ];\n});\n_c = Navbar;\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9OYXZiYXIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLDJCQUEyQjs7O0FBR0U7QUFDb0I7QUFFbEMsU0FBU0U7O0lBQ3RCLE1BQU0sRUFBRUMsSUFBSSxFQUFFLEdBQUdGLDZEQUFPQTtJQUV4QixxQkFDRSw4REFBQ0c7UUFBSUMsV0FBVTtrQkFDYiw0RUFBQ0M7WUFBSUQsV0FBVTtzQkFDYiw0RUFBQ0M7Z0JBQUlELFdBQVU7MEJBQ2IsNEVBQUNDO29CQUFJRCxXQUFVOztzQ0FDYiw4REFBQ0M7NEJBQUlELFdBQVU7c0NBQ2IsNEVBQUNMLGlEQUFJQTtnQ0FBQ08sTUFBSzswQ0FDVCw0RUFBQ0M7b0NBQUtILFdBQVU7OENBQWdDOzs7Ozs7Ozs7Ozs7Ozs7O3NDQUdwRCw4REFBQ0M7NEJBQUlELFdBQVU7c0NBQ2IsNEVBQUNDO2dDQUFJRCxXQUFVOztrREFDYiw4REFBQ0wsaURBQUlBO3dDQUFDTyxNQUFLO3dDQUFJRixXQUFVO2tEQUE0Rjs7Ozs7O2tEQUdySCw4REFBQ0wsaURBQUlBO3dDQUFDTyxNQUFLO3dDQUFTRixXQUFVO2tEQUE0Rjs7Ozs7O29DQUd6SEYscUJBQ0M7OzBEQUNFLDhEQUFDSCxpREFBSUE7Z0RBQUNPLE1BQUs7Z0RBQWNGLFdBQVU7MERBQTRGOzs7Ozs7MERBRy9ILDhEQUFDTCxpREFBSUE7Z0RBQUNPLE1BQUs7Z0RBQVdGLFdBQVU7MERBQTRGOzs7Ozs7MERBRzVILDhEQUFDTCxpREFBSUE7Z0RBQUNPLE1BQUs7Z0RBQVVGLFdBQVU7MERBQTRGOzs7Ozs7O3FFQUs3SDs7MERBQ0UsOERBQUNMLGlEQUFJQTtnREFBQ08sTUFBSztnREFBVUYsV0FBVTswREFBNEY7Ozs7OzswREFHM0gsOERBQUNMLGlEQUFJQTtnREFBQ08sTUFBSztnREFBU0YsV0FBVTswREFBNEY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFZOUk7R0FsRHdCSDs7UUFDTEQseURBQU9BOzs7S0FERkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jb21wb25lbnRzL05hdmJhci5qcz85MDgxIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGFwcC9jb21wb25lbnRzL05hdmJhci5qc1xuJ3VzZSBjbGllbnQnO1xuXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHsgdXNlQXV0aCB9IGZyb20gJy4uL2NvbnRleHQvQXV0aENvbnRleHQnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXZiYXIoKSB7XG4gIGNvbnN0IHsgdXNlciB9ID0gdXNlQXV0aCgpO1xuXG4gIHJldHVybiAoXG4gICAgPG5hdiBjbGFzc05hbWU9XCJiZy1ncmF5LTgwMFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy03eGwgbXgtYXV0byBweC00IHNtOnB4LTYgbGc6cHgtOFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBoLTE2XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LXNocmluay0wXCI+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC13aGl0ZSB0ZXh0LTJ4bCBmb250LWJvbGRcIj5Mb2dvPC9zcGFuPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGlkZGVuIG1kOmJsb2NrXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWwtMTAgZmxleCBpdGVtcy1iYXNlbGluZSBzcGFjZS14LTRcIj5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiIGNsYXNzTmFtZT1cInRleHQtZ3JheS0zMDAgaG92ZXI6YmctZ3JheS03MDAgaG92ZXI6dGV4dC13aGl0ZSBweC0zIHB5LTIgcm91bmRlZC1tZCB0ZXh0LXNtIGZvbnQtbWVkaXVtXCI+XG4gICAgICAgICAgICAgICAgICBIb21lXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY2FyZHNcIiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktMzAwIGhvdmVyOmJnLWdyYXktNzAwIGhvdmVyOnRleHQtd2hpdGUgcHgtMyBweS0yIHJvdW5kZWQtbWQgdGV4dC1zbSBmb250LW1lZGl1bVwiPlxuICAgICAgICAgICAgICAgICAgQ2FyZHNcbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAge3VzZXIgPyAoXG4gICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2NvbGxlY3Rpb25cIiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktMzAwIGhvdmVyOmJnLWdyYXktNzAwIGhvdmVyOnRleHQtd2hpdGUgcHgtMyBweS0yIHJvdW5kZWQtbWQgdGV4dC1zbSBmb250LW1lZGl1bVwiPlxuICAgICAgICAgICAgICAgICAgICAgIENvbGxlY3Rpb25cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Byb2ZpbGVcIiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktMzAwIGhvdmVyOmJnLWdyYXktNzAwIGhvdmVyOnRleHQtd2hpdGUgcHgtMyBweS0yIHJvdW5kZWQtbWQgdGV4dC1zbSBmb250LW1lZGl1bVwiPlxuICAgICAgICAgICAgICAgICAgICAgIFByb2ZpbGVcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2xvZ291dFwiIGNsYXNzTmFtZT1cInRleHQtZ3JheS0zMDAgaG92ZXI6YmctZ3JheS03MDAgaG92ZXI6dGV4dC13aGl0ZSBweC0zIHB5LTIgcm91bmRlZC1tZCB0ZXh0LXNtIGZvbnQtbWVkaXVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgTG9nb3V0XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3NpZ251cFwiIGNsYXNzTmFtZT1cInRleHQtZ3JheS0zMDAgaG92ZXI6YmctZ3JheS03MDAgaG92ZXI6dGV4dC13aGl0ZSBweC0zIHB5LTIgcm91bmRlZC1tZCB0ZXh0LXNtIGZvbnQtbWVkaXVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgU2lnbnVwXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9sb2dpblwiIGNsYXNzTmFtZT1cInRleHQtZ3JheS0zMDAgaG92ZXI6YmctZ3JheS03MDAgaG92ZXI6dGV4dC13aGl0ZSBweC0zIHB5LTIgcm91bmRlZC1tZCB0ZXh0LXNtIGZvbnQtbWVkaXVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgTG9naW5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L25hdj5cbiAgKTtcbn0iXSwibmFtZXMiOlsiTGluayIsInVzZUF1dGgiLCJOYXZiYXIiLCJ1c2VyIiwibmF2IiwiY2xhc3NOYW1lIiwiZGl2IiwiaHJlZiIsInNwYW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/Navbar.js\n"));

/***/ })

});