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
exports.id = "pages/api/apiopenai";
exports.ids = ["pages/api/apiopenai"];
exports.modules = {

/***/ "openai":
/*!*************************!*\
  !*** external "openai" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("openai");

/***/ }),

/***/ "(api)/./pages/api/apiopenai.ts":
/*!********************************!*\
  !*** ./pages/api/apiopenai.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\nconst { Configuration , OpenAIApi  } = __webpack_require__(/*! openai */ \"openai\");\nasync function handler(req, res) {\n    const configuration = new Configuration({\n        organization: process.env.OPENAI_ORG,\n        apiKey: process.env.OPENAI_API_KEY\n    });\n    const openai = new OpenAIApi(configuration);\n    const promptVariable = `${process.env.PROMPTTRAIN} ${req.body.prompt}.`;\n    console.log(promptVariable);\n    try {\n        const completionApi = await openai.createCompletion({\n            model: \"text-davinci-003\",\n            prompt: promptVariable,\n            temperature: 0.7,\n            max_tokens: 800,\n            top_p: 1,\n            frequency_penalty: 0,\n            presence_penalty: 0\n        });\n        const responseApi = completionApi.data.choices[0].text;\n        return res.status(200).json({\n            response: responseApi\n        });\n    } catch (error) {\n        return res.status(400).json({\n            response: error\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXBpb3BlbmFpLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxNQUFNLEVBQUVBLGNBQWEsRUFBRUMsVUFBUyxFQUFFLEdBQUdDLG1CQUFPQSxDQUFDLHNCQUFRO0FBSXRDLGVBQWVDLFFBQzFCQyxHQUFtQixFQUNuQkMsR0FBb0IsRUFDcEI7SUFDQyxNQUFNQyxnQkFBZ0IsSUFBSU4sY0FBYztRQUNyQ08sY0FBY0MsUUFBUUMsR0FBRyxDQUFDQyxVQUFVO1FBQ3BDQyxRQUFRSCxRQUFRQyxHQUFHLENBQUNHLGNBQWM7SUFDdEM7SUFDQSxNQUFNQyxTQUFTLElBQUlaLFVBQVVLO0lBRTdCLE1BQU1RLGlCQUFrQixDQUFDLEVBQUVOLFFBQVFDLEdBQUcsQ0FBQ00sV0FBVyxDQUFDLENBQUMsRUFBRVgsSUFBSVksSUFBSSxDQUFDQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBRXhFQyxRQUFRQyxHQUFHLENBQUNMO0lBRVosSUFBSTtRQUNBLE1BQU1NLGdCQUFnQixNQUFNUCxPQUFPUSxnQkFBZ0IsQ0FBQztZQUNoREMsT0FBTztZQUNQTCxRQUFRSDtZQUNSUyxhQUFhO1lBQ2JDLFlBQVk7WUFDWkMsT0FBTztZQUNQQyxtQkFBbUI7WUFDbkJDLGtCQUFrQjtRQUNwQjtRQUdKLE1BQU1DLGNBQWNSLGNBQWNTLElBQUksQ0FBQ0MsT0FBTyxDQUFDLEVBQUUsQ0FBQ0MsSUFBSTtRQUN0RCxPQUFPMUIsSUFBSTJCLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFBRUMsVUFBVU47UUFBVztJQUNyRCxFQUFFLE9BQU9PLE9BQU87UUFDWixPQUFPOUIsSUFBSTJCLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFBRUMsVUFBVUM7UUFBSztJQUNuRDtBQUNGLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ib3RiZWVoaWdoLy4vcGFnZXMvYXBpL2FwaW9wZW5haS50cz8wMmQwIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgQ29uZmlndXJhdGlvbiwgT3BlbkFJQXBpIH0gPSByZXF1aXJlKFwib3BlbmFpXCIpO1xuaW1wb3J0IHsgZXJyb3IgfSBmcm9tICdjb25zb2xlJztcbmltcG9ydCB0eXBlIHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gJ25leHQnXG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIoXG4gICAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcbiAgICByZXM6IE5leHRBcGlSZXNwb25zZSxcbiAgKSB7XG4gICAgIGNvbnN0IGNvbmZpZ3VyYXRpb24gPSBuZXcgQ29uZmlndXJhdGlvbih7XG4gICAgICAgIG9yZ2FuaXphdGlvbjogcHJvY2Vzcy5lbnYuT1BFTkFJX09SRyxcbiAgICAgICAgYXBpS2V5OiBwcm9jZXNzLmVudi5PUEVOQUlfQVBJX0tFWSxcbiAgICB9KTtcbiAgICBjb25zdCBvcGVuYWkgPSBuZXcgT3BlbkFJQXBpKGNvbmZpZ3VyYXRpb24pO1xuICBcbiAgICBjb25zdCBwcm9tcHRWYXJpYWJsZSA9ICBgJHtwcm9jZXNzLmVudi5QUk9NUFRUUkFJTn0gJHtyZXEuYm9keS5wcm9tcHR9LmBcblxuICAgIGNvbnNvbGUubG9nKHByb21wdFZhcmlhYmxlKVxuICBcbiAgICB0cnkge1xuICAgICAgICBjb25zdCBjb21wbGV0aW9uQXBpID0gYXdhaXQgb3BlbmFpLmNyZWF0ZUNvbXBsZXRpb24oe1xuICAgICAgICAgICAgbW9kZWw6IFwidGV4dC1kYXZpbmNpLTAwM1wiLFxuICAgICAgICAgICAgcHJvbXB0OiBwcm9tcHRWYXJpYWJsZSxcbiAgICAgICAgICAgIHRlbXBlcmF0dXJlOiAwLjcsXG4gICAgICAgICAgICBtYXhfdG9rZW5zOiA4MDAsXG4gICAgICAgICAgICB0b3BfcDogMSxcbiAgICAgICAgICAgIGZyZXF1ZW5jeV9wZW5hbHR5OiAwLFxuICAgICAgICAgICAgcHJlc2VuY2VfcGVuYWx0eTogMCxcbiAgICAgICAgICB9KTsgXG4gICAgXG4gICAgXG4gICAgICBjb25zdCByZXNwb25zZUFwaSA9IGNvbXBsZXRpb25BcGkuZGF0YS5jaG9pY2VzWzBdLnRleHQ7XG4gICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oeyByZXNwb25zZTogcmVzcG9uc2VBcGl9KVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7IHJlc3BvbnNlOiBlcnJvcn0pXG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJDb25maWd1cmF0aW9uIiwiT3BlbkFJQXBpIiwicmVxdWlyZSIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJjb25maWd1cmF0aW9uIiwib3JnYW5pemF0aW9uIiwicHJvY2VzcyIsImVudiIsIk9QRU5BSV9PUkciLCJhcGlLZXkiLCJPUEVOQUlfQVBJX0tFWSIsIm9wZW5haSIsInByb21wdFZhcmlhYmxlIiwiUFJPTVBUVFJBSU4iLCJib2R5IiwicHJvbXB0IiwiY29uc29sZSIsImxvZyIsImNvbXBsZXRpb25BcGkiLCJjcmVhdGVDb21wbGV0aW9uIiwibW9kZWwiLCJ0ZW1wZXJhdHVyZSIsIm1heF90b2tlbnMiLCJ0b3BfcCIsImZyZXF1ZW5jeV9wZW5hbHR5IiwicHJlc2VuY2VfcGVuYWx0eSIsInJlc3BvbnNlQXBpIiwiZGF0YSIsImNob2ljZXMiLCJ0ZXh0Iiwic3RhdHVzIiwianNvbiIsInJlc3BvbnNlIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/apiopenai.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/apiopenai.ts"));
module.exports = __webpack_exports__;

})();