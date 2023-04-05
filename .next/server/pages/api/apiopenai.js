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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\nconst { Configuration , OpenAIApi  } = __webpack_require__(/*! openai */ \"openai\");\nasync function handler(req, res) {\n    const configuration = new Configuration({\n        organization: process.env.OPENAI_ORG,\n        apiKey: process.env.OPENAI_API_KEY\n    });\n    const openai = new OpenAIApi(configuration);\n    const promptVariable = `${process.env.PROMPTTRAIN} ${req.body.prompt}`;\n    try {\n        const completionApi = await openai.createCompletion({\n            model: \"text-davinci-003\",\n            prompt: promptVariable,\n            temperature: 0.7,\n            max_tokens: 400,\n            top_p: 1,\n            frequency_penalty: 0,\n            presence_penalty: 0\n        });\n        const responseApi = completionApi.data.choices[0].text;\n        return res.status(200).json({\n            response: responseApi\n        });\n    } catch (error) {\n        return res.status(400).json({\n            response: error\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXBpb3BlbmFpLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxNQUFNLEVBQUVBLGNBQWEsRUFBRUMsVUFBUyxFQUFFLEdBQUdDLG1CQUFPQSxDQUFDLHNCQUFRO0FBSXRDLGVBQWVDLFFBQzFCQyxHQUFtQixFQUNuQkMsR0FBb0IsRUFDcEI7SUFDQyxNQUFNQyxnQkFBZ0IsSUFBSU4sY0FBYztRQUNyQ08sY0FBY0MsUUFBUUMsR0FBRyxDQUFDQyxVQUFVO1FBQ3BDQyxRQUFRSCxRQUFRQyxHQUFHLENBQUNHLGNBQWM7SUFDdEM7SUFDQSxNQUFNQyxTQUFTLElBQUlaLFVBQVVLO0lBRTdCLE1BQU1RLGlCQUFrQixDQUFDLEVBQUVOLFFBQVFDLEdBQUcsQ0FBQ00sV0FBVyxDQUFDLENBQUMsRUFBRVgsSUFBSVksSUFBSSxDQUFDQyxNQUFNLENBQUMsQ0FBQztJQUd2RSxJQUFJO1FBQ0EsTUFBTUMsZ0JBQWdCLE1BQU1MLE9BQU9NLGdCQUFnQixDQUFDO1lBQ2hEQyxPQUFPO1lBQ1BILFFBQVFIO1lBQ1JPLGFBQWE7WUFDYkMsWUFBWTtZQUNaQyxPQUFPO1lBQ1BDLG1CQUFtQjtZQUNuQkMsa0JBQWtCO1FBQ3BCO1FBR0osTUFBTUMsY0FBY1IsY0FBY1MsSUFBSSxDQUFDQyxPQUFPLENBQUMsRUFBRSxDQUFDQyxJQUFJO1FBQ3RELE9BQU94QixJQUFJeUIsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUFFQyxVQUFVTjtRQUFXO0lBQ3JELEVBQUUsT0FBT08sT0FBTztRQUNaLE9BQU81QixJQUFJeUIsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUFFQyxVQUFVQztRQUFLO0lBQ25EO0FBQ0YsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2JvdGJlZWhpZ2gvLi9wYWdlcy9hcGkvYXBpb3BlbmFpLnRzPzAyZDAiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBDb25maWd1cmF0aW9uLCBPcGVuQUlBcGkgfSA9IHJlcXVpcmUoXCJvcGVuYWlcIik7XG5pbXBvcnQgeyBlcnJvciB9IGZyb20gJ2NvbnNvbGUnO1xuaW1wb3J0IHR5cGUgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSAnbmV4dCdcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihcbiAgICByZXE6IE5leHRBcGlSZXF1ZXN0LFxuICAgIHJlczogTmV4dEFwaVJlc3BvbnNlLFxuICApIHtcbiAgICAgY29uc3QgY29uZmlndXJhdGlvbiA9IG5ldyBDb25maWd1cmF0aW9uKHtcbiAgICAgICAgb3JnYW5pemF0aW9uOiBwcm9jZXNzLmVudi5PUEVOQUlfT1JHLFxuICAgICAgICBhcGlLZXk6IHByb2Nlc3MuZW52Lk9QRU5BSV9BUElfS0VZLFxuICAgIH0pO1xuICAgIGNvbnN0IG9wZW5haSA9IG5ldyBPcGVuQUlBcGkoY29uZmlndXJhdGlvbik7XG4gIFxuICAgIGNvbnN0IHByb21wdFZhcmlhYmxlID0gIGAke3Byb2Nlc3MuZW52LlBST01QVFRSQUlOfSAke3JlcS5ib2R5LnByb21wdH1gXG5cbiAgXG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgY29tcGxldGlvbkFwaSA9IGF3YWl0IG9wZW5haS5jcmVhdGVDb21wbGV0aW9uKHtcbiAgICAgICAgICAgIG1vZGVsOiBcInRleHQtZGF2aW5jaS0wMDNcIixcbiAgICAgICAgICAgIHByb21wdDogcHJvbXB0VmFyaWFibGUsXG4gICAgICAgICAgICB0ZW1wZXJhdHVyZTogMC43LFxuICAgICAgICAgICAgbWF4X3Rva2VuczogNDAwLFxuICAgICAgICAgICAgdG9wX3A6IDEsXG4gICAgICAgICAgICBmcmVxdWVuY3lfcGVuYWx0eTogMCxcbiAgICAgICAgICAgIHByZXNlbmNlX3BlbmFsdHk6IDAsXG4gICAgICAgICAgfSk7IFxuICAgIFxuICAgIFxuICAgICAgY29uc3QgcmVzcG9uc2VBcGkgPSBjb21wbGV0aW9uQXBpLmRhdGEuY2hvaWNlc1swXS50ZXh0O1xuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgcmVzcG9uc2U6IHJlc3BvbnNlQXBpfSlcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oeyByZXNwb25zZTogZXJyb3J9KVxuICB9XG59XG4iXSwibmFtZXMiOlsiQ29uZmlndXJhdGlvbiIsIk9wZW5BSUFwaSIsInJlcXVpcmUiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwiY29uZmlndXJhdGlvbiIsIm9yZ2FuaXphdGlvbiIsInByb2Nlc3MiLCJlbnYiLCJPUEVOQUlfT1JHIiwiYXBpS2V5IiwiT1BFTkFJX0FQSV9LRVkiLCJvcGVuYWkiLCJwcm9tcHRWYXJpYWJsZSIsIlBST01QVFRSQUlOIiwiYm9keSIsInByb21wdCIsImNvbXBsZXRpb25BcGkiLCJjcmVhdGVDb21wbGV0aW9uIiwibW9kZWwiLCJ0ZW1wZXJhdHVyZSIsIm1heF90b2tlbnMiLCJ0b3BfcCIsImZyZXF1ZW5jeV9wZW5hbHR5IiwicHJlc2VuY2VfcGVuYWx0eSIsInJlc3BvbnNlQXBpIiwiZGF0YSIsImNob2ljZXMiLCJ0ZXh0Iiwic3RhdHVzIiwianNvbiIsInJlc3BvbnNlIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/apiopenai.ts\n");

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