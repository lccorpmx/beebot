"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/textarea.js":
/*!********************************!*\
  !*** ./components/textarea.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\n\nconst textarea = ()=>{\n    _s();\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [prompt, setPrompt] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleClick = async (e)=>{\n        e.preventDefault();\n        setLoading(true);\n        const res = await fetch(\"/api/apiopenai\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                prompt: prompt\n            })\n        });\n        if (res.status !== 200) {\n            setLoading(false);\n            setError(true);\n            return;\n        }\n        const dataReal = await res.json();\n        setData(dataReal.response);\n        setLoading(false);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"m-5\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mb-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            className: \"block text-white font-bold mb-2\",\n                            htmlFor: \"lifestyle\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"border-yellow-500 border-b-4 w-1/5 rounded\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/arturozillirios/Documents/BeeHigh/beebot/components/textarea.js\",\n                                    lineNumber: 43,\n                                    columnNumber: 13\n                                }, undefined),\n                                \"Ayudame contandome tu dia para hacer la mejor seleccion para ti:\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/arturozillirios/Documents/BeeHigh/beebot/components/textarea.js\",\n                            lineNumber: 42,\n                            columnNumber: 9\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                            rows: 6,\n                            onChange: (e)=>setPrompt(e.target.value),\n                            type: \"text\",\n                            name: \"prompt\",\n                            className: \"bg-white border-yellow-500 border-4 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline\",\n                            placeholder: \"Detalla tu estilo de vida:\"\n                        }, void 0, false, {\n                            fileName: \"/Users/arturozillirios/Documents/BeeHigh/beebot/components/textarea.js\",\n                            lineNumber: 47,\n                            columnNumber: 9\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/arturozillirios/Documents/BeeHigh/beebot/components/textarea.js\",\n                    lineNumber: 41,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: handleClick,\n                    className: \"bg-white hover:bg-yellow-500 text-gray-800 font-bold py-2 px-4 border border-gray-400 rounded shadow\",\n                    children: \"Enviar\"\n                }, void 0, false, {\n                    fileName: \"/Users/arturozillirios/Documents/BeeHigh/beebot/components/textarea.js\",\n                    lineNumber: 55,\n                    columnNumber: 7\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    className: \"block text-yellow-500 font-bold mb-2 pt-6\",\n                    htmlFor: \"lifestyle\",\n                    children: error ? \"Lo sentimos, intentalo mas tarde\" : {\n                        data\n                    }\n                }, void 0, false, {\n                    fileName: \"/Users/arturozillirios/Documents/BeeHigh/beebot/components/textarea.js\",\n                    lineNumber: 60,\n                    columnNumber: 7\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/arturozillirios/Documents/BeeHigh/beebot/components/textarea.js\",\n            lineNumber: 40,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/arturozillirios/Documents/BeeHigh/beebot/components/textarea.js\",\n        lineNumber: 39,\n        columnNumber: 5\n    }, undefined);\n};\n_s(textarea, \"7P3befZEpF4hLS2C5rwX29gl/jk=\");\n_c = textarea;\n/* harmony default export */ __webpack_exports__[\"default\"] = (textarea);\nvar _c;\n$RefreshReg$(_c, \"textarea\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3RleHRhcmVhLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBMEI7QUFDTztBQUdqQyxNQUFNRSxXQUFXLElBQU07O0lBRXJCLE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHSCwrQ0FBUUEsQ0FBQyxLQUFLO0lBQzFDLE1BQU0sQ0FBQ0ksUUFBUUMsVUFBVSxHQUFHTCwrQ0FBUUEsQ0FBQztJQUNyQyxNQUFNLENBQUNNLE1BQU1DLFFBQVEsR0FBR1AsK0NBQVFBLENBQUM7SUFDakMsTUFBTSxDQUFDUSxPQUFPQyxTQUFTLEdBQUdULCtDQUFRQSxDQUFDLEtBQUs7SUFFMUMsTUFBTVUsY0FBYyxPQUFPQyxJQUFNO1FBQy9CQSxFQUFFQyxjQUFjO1FBRWhCVCxXQUFXLElBQUk7UUFDZixNQUFNVSxNQUFNLE1BQU1DLE1BQU0sa0JBQWtCO1lBQ3hDQyxRQUFRO1lBQ1JDLFNBQVM7Z0JBQ1AsZ0JBQWdCO1lBQ2xCO1lBQ0FDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQztnQkFDbkJmLFFBQVFBO1lBQ1Y7UUFDRjtRQUVBLElBQUlTLElBQUlPLE1BQU0sS0FBSyxLQUFLO1lBQ3RCakIsV0FBVyxLQUFLO1lBQ2hCTSxTQUFTLElBQUk7WUFDYjtRQUNGLENBQUM7UUFFRCxNQUFNWSxXQUFXLE1BQU1SLElBQUlTLElBQUk7UUFDL0JmLFFBQVFjLFNBQVNFLFFBQVE7UUFDekJwQixXQUFXLEtBQUs7SUFFbEI7SUFFQSxxQkFDRSw4REFBQ3FCO2tCQUNHLDRFQUFDQztZQUFJQyxXQUFVOzs4QkFDZiw4REFBQ0Q7b0JBQUlDLFdBQVU7O3NDQUNmLDhEQUFDQzs0QkFBTUQsV0FBVTs0QkFBa0NFLFNBQVE7OzhDQUN2RCw4REFBQ0M7b0NBQUVILFdBQVU7Ozs7OztnQ0FBaUQ7Ozs7Ozs7c0NBSWxFLDhEQUFDekI7NEJBQVM2QixNQUFNOzRCQUNkQyxVQUFVLENBQUNwQixJQUFNTixVQUFVTSxFQUFFcUIsTUFBTSxDQUFDQyxLQUFLOzRCQUN6Q0MsTUFBTTs0QkFDTkMsTUFBTTs0QkFDTlQsV0FBVTs0QkFDVlUsYUFBWTs7Ozs7Ozs7Ozs7OzhCQUdoQiw4REFBQ0M7b0JBQU9DLFNBQVM1QjtvQkFBYWdCLFdBQVU7OEJBQXVHOzs7Ozs7OEJBSy9JLDhEQUFDQztvQkFBTUQsV0FBVTtvQkFBNENFLFNBQVE7OEJBQ25FcEIsUUFBTSxxQ0FBbUM7d0JBQUNGO29CQUFJLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT3ZEO0dBL0RNTDtLQUFBQTtBQWlFTiwrREFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3RleHRhcmVhLmpzP2U2N2QiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cblxuY29uc3QgdGV4dGFyZWEgPSAoKSA9PiB7XG5cbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpXG4gICAgY29uc3QgW3Byb21wdCwgc2V0UHJvbXB0XSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZSgnJylcbiAgICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gYXN5bmMgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcblxuICAgIHNldExvYWRpbmcodHJ1ZSlcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnL2FwaS9hcGlvcGVuYWknLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIHByb21wdDogcHJvbXB0LFxuICAgICAgfSksXG4gICAgfSlcblxuICAgIGlmIChyZXMuc3RhdHVzICE9PSAyMDApIHtcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpXG4gICAgICBzZXRFcnJvcih0cnVlKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgZGF0YVJlYWwgPSBhd2FpdCByZXMuanNvbigpXG4gICAgc2V0RGF0YShkYXRhUmVhbC5yZXNwb25zZSlcbiAgICBzZXRMb2FkaW5nKGZhbHNlKVxuICAgIFxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8Zm9ybT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtLTVcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi00XCI+XG4gICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJibG9jayB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBtYi0yXCIgaHRtbEZvcj1cImxpZmVzdHlsZVwiPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYm9yZGVyLXllbGxvdy01MDAgYm9yZGVyLWItNCB3LTEvNSByb3VuZGVkXCI+PC9wPlxuICAgICAgICAgIEF5dWRhbWUgY29udGFuZG9tZSB0dSBkaWEgcGFyYSBoYWNlciBsYSBtZWpvciBzZWxlY2Npb24gcGFyYSB0aTpcbiAgICAgICAgICBcbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPHRleHRhcmVhIHJvd3M9ezZ9XG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRQcm9tcHQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgIHR5cGU9eyd0ZXh0J31cbiAgICAgICAgICBuYW1lPXsncHJvbXB0J31cbiAgICAgICAgICBjbGFzc05hbWU9XCJiZy13aGl0ZSBib3JkZXIteWVsbG93LTUwMCBib3JkZXItNCByb3VuZGVkIHctZnVsbCBweS0yIHB4LTMgdGV4dC1ncmF5LTcwMCBsZWFkaW5nLXRpZ2h0IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpzaGFkb3ctb3V0bGluZVwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJEZXRhbGxhIHR1IGVzdGlsbyBkZSB2aWRhOlwiXG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlQ2xpY2t9IGNsYXNzTmFtZT1cImJnLXdoaXRlIGhvdmVyOmJnLXllbGxvdy01MDAgdGV4dC1ncmF5LTgwMCBmb250LWJvbGQgcHktMiBweC00IGJvcmRlciBib3JkZXItZ3JheS00MDAgcm91bmRlZCBzaGFkb3dcIj5cbiAgICAgICAgRW52aWFyXG4gICAgICA8L2J1dHRvbj5cblxuICAgICAgXG4gICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC15ZWxsb3ctNTAwIGZvbnQtYm9sZCBtYi0yIHB0LTZcIiBodG1sRm9yPVwibGlmZXN0eWxlXCI+XG4gICAgICAge2Vycm9yP1wiTG8gc2VudGltb3MsIGludGVudGFsbyBtYXMgdGFyZGVcIjp7ZGF0YX19XG4gICAgICA8L2xhYmVsPlxuXG5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9mb3JtPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdGV4dGFyZWE7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInRleHRhcmVhIiwibG9hZGluZyIsInNldExvYWRpbmciLCJwcm9tcHQiLCJzZXRQcm9tcHQiLCJkYXRhIiwic2V0RGF0YSIsImVycm9yIiwic2V0RXJyb3IiLCJoYW5kbGVDbGljayIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInJlcyIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5Iiwic3RhdHVzIiwiZGF0YVJlYWwiLCJqc29uIiwicmVzcG9uc2UiLCJmb3JtIiwiZGl2IiwiY2xhc3NOYW1lIiwibGFiZWwiLCJodG1sRm9yIiwicCIsInJvd3MiLCJvbkNoYW5nZSIsInRhcmdldCIsInZhbHVlIiwidHlwZSIsIm5hbWUiLCJwbGFjZWhvbGRlciIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/textarea.js\n"));

/***/ })

});