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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./helpers/context/authContext.js":
/*!****************************************!*\
  !*** ./helpers/context/authContext.js ***!
  \****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AuthContextProvider\": () => (/* binding */ AuthContextProvider),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! socket.io-client */ \"socket.io-client\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([socket_io_client__WEBPACK_IMPORTED_MODULE_3__]);\nsocket_io_client__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\nconst AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.createContext)();\nconst AuthContextProvider = ({ children  })=>{\n    const { 0: userLoggedIn , 1: setUserLoggedIn  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const { 0: find , 1: setFind  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const socket = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();\n    const Api = \"https://dreamwebbackend.herokuapp.com\";\n    const { 0: users , 1: setUsers  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        socket.current = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\"ws://localhost:27017\");\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        socket.current.on(\"getOnlineUsers\", (OnlineUsers)=>{\n            setUsers(OnlineUsers);\n        });\n    }, []);\n    async function getUserLoggedIn() {\n        try {\n            const usersloggedIn = await axios__WEBPACK_IMPORTED_MODULE_1___default().get(\"/api/Auth/login\", {\n                withCredentials: true\n            });\n            setUserLoggedIn(usersloggedIn.data);\n        } catch (err) {}\n    }\n    async function getUserinfo() {\n        try {\n            const usersloggedIn = await axios__WEBPACK_IMPORTED_MODULE_1___default().get(\"/api/Auth/find\", {\n                withCredentials: true\n            });\n            setFind(usersloggedIn.data);\n        } catch (err) {}\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        async function getSession() {\n            try {\n                await axios__WEBPACK_IMPORTED_MODULE_1___default().get(Api + \"/session\", {\n                    withCredentials: true\n                });\n            } catch (err) {}\n        }\n        getSession();\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        getUserLoggedIn();\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        getUserinfo();\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n        value: {\n            userLoggedIn,\n            getUserLoggedIn,\n            find,\n            Api,\n            users\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"F:\\\\FARDIN\\\\frontend\\\\helpers\\\\context\\\\authContext.js\",\n        lineNumber: 58,\n        columnNumber: 5\n    }, undefined));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AuthContext);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9oZWxwZXJzL2NvbnRleHQvYXV0aENvbnRleHQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUF5QjtBQUMwQztBQUNsQztBQUVqQyxLQUFLLENBQUNNLFdBQVcsaUJBQUdMLG9EQUFhO0FBRXpCLEtBQUssQ0FBQ00sbUJBQW1CLElBQUksQ0FBQ0MsQ0FBQUEsUUFBUSxFQUFDLENBQUMsR0FBSyxDQUFDO0lBRWxELEtBQUssTUFBRUMsWUFBWSxNQUFHQyxlQUFlLE1BQUlQLCtDQUFRLENBQUMsS0FBSztJQUN2RCxLQUFLLE1BQUVRLElBQUksTUFBR0MsT0FBTyxNQUFJVCwrQ0FBUSxDQUFDLEtBQUs7SUFDdkMsS0FBSyxDQUFDVSxNQUFNLEdBQUdULDZDQUFNO0lBQ3JCLEtBQUssQ0FBQ1UsR0FBRyxHQUFHLENBQXVDO0lBQ25ELEtBQUssTUFBRUMsS0FBSyxNQUFFQyxRQUFRLE1BQUliLCtDQUFRLENBQUMsSUFBSTtJQUV2Q0QsZ0RBQVMsS0FBTyxDQUFDO1FBQ2ZXLE1BQU0sQ0FBQ0ksT0FBTyxHQUFHWiw0REFBRSxDQUFDLENBQXNCO0lBQzNDLENBQUMsRUFBRyxDQUFDLENBQUM7SUFFUEgsZ0RBQVMsS0FBTyxDQUFDO1FBQ2RXLE1BQU0sQ0FBQ0ksT0FBTyxDQUFDQyxFQUFFLENBQUMsQ0FBZ0Isa0JBQUdDLFdBQVcsR0FBSSxDQUFDO1lBQ2xESCxRQUFRLENBQUNHLFdBQVc7UUFDdkIsQ0FBQztJQUNILENBQUMsRUFBQyxDQUFDLENBQUM7bUJBRVVDLGVBQWUsR0FBRyxDQUFDO1FBQ2hDLEdBQUcsRUFBQztZQUNGLEtBQUssQ0FBQ0MsYUFBYSxHQUFHLEtBQUssQ0FBQ3JCLGdEQUFTLENBQUMsQ0FBaUIsa0JBQUMsQ0FBQ3VCO2dCQUFBQSxlQUFlLEVBQUMsSUFBSTtZQUFBLENBQUM7WUFDOUViLGVBQWUsQ0FBQ1csYUFBYSxDQUFDRyxJQUFJO1FBQ3BDLENBQUMsQ0FBQyxLQUFLLEVBQUNDLEdBQUcsRUFBQyxDQUFDLENBQUM7SUFDaEIsQ0FBQzttQkFFVUMsV0FBVyxHQUFHLENBQUM7UUFDNUIsR0FBRyxFQUFDO1lBQ0osS0FBSyxDQUFDTCxhQUFhLEdBQUcsS0FBSyxDQUFDckIsZ0RBQVMsQ0FBQyxDQUFnQixpQkFBQyxDQUFDdUI7Z0JBQUFBLGVBQWUsRUFBQyxJQUFJO1lBQUEsQ0FBQztZQUM3RVgsT0FBTyxDQUFDUyxhQUFhLENBQUNHLElBQUk7UUFDMUIsQ0FBQyxDQUNELEtBQUssRUFBQ0MsR0FBRyxFQUFDLENBQUMsQ0FBQztJQUNkLENBQUM7SUFFRHZCLGdEQUFTLEtBQU8sQ0FBQzt1QkFDQXlCLFVBQVUsR0FBRyxDQUFDO1lBQzNCLEdBQUcsRUFBQztnQkFDSCxLQUFLLENBQUMzQixnREFBUyxDQUFFYyxHQUFHLEdBQUcsQ0FBVSxXQUFDLENBQUNTO29CQUFBQSxlQUFlLEVBQUMsSUFBSTtnQkFBQSxDQUFDO1lBQ3pELENBQUMsQ0FBQyxLQUFLLEVBQUNFLEdBQUcsRUFBQyxDQUFDLENBQUM7UUFDZCxDQUFDO1FBQ0xFLFVBQVU7SUFDVixDQUFDLEVBQUMsQ0FBQyxDQUFDO0lBQ0p6QixnREFBUyxLQUFPLENBQUM7UUFDakJrQixlQUFlO0lBQ2YsQ0FBQyxFQUFDLENBQUMsQ0FBQztJQUVKbEIsZ0RBQVMsS0FBTyxDQUFDO1FBQ2Z3QixXQUFXO0lBQ2IsQ0FBQyxFQUFDLENBQUMsQ0FBQztJQUdBLE1BQU0sNkVBQ0xwQixXQUFXLENBQUNzQixRQUFRO1FBQUNDLEtBQUssRUFBRSxDQUFDO1lBQUNwQixZQUFZO1lBQUVXLGVBQWU7WUFBRVQsSUFBSTtZQUFHRyxHQUFHO1lBQUVDLEtBQUs7UUFBQSxDQUFDO2tCQUM1RVAsUUFBUTs7Ozs7O0FBSWhCLENBQUM7QUFFRCxpRUFBZUYsV0FBVyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2ViLXNob3AvLi9oZWxwZXJzL2NvbnRleHQvYXV0aENvbnRleHQuanM/Yjg5ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgeyBjcmVhdGVDb250ZXh0ICwgdXNlRWZmZWN0LCB1c2VTdGF0ZSAsdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgaW8gZnJvbSAnc29ja2V0LmlvLWNsaWVudCc7XHJcblxyXG5jb25zdCBBdXRoQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcclxuXHJcbiBleHBvcnQgY29uc3QgQXV0aENvbnRleHRQcm92aWRlciA9ICh7Y2hpbGRyZW4gfSkgPT4ge1xyXG5cclxuICAgIGNvbnN0IFt1c2VyTG9nZ2VkSW4gLCBzZXRVc2VyTG9nZ2VkSW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2ZpbmQgLCBzZXRGaW5kXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IHNvY2tldCA9IHVzZVJlZigpO1xyXG4gICAgY29uc3QgQXBpID0gXCJodHRwczovL2RyZWFtd2ViYmFja2VuZC5oZXJva3VhcHAuY29tXCJcclxuICAgIGNvbnN0IFt1c2VycyAsc2V0VXNlcnNdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgc29ja2V0LmN1cnJlbnQgPSBpbyhcIndzOi8vbG9jYWxob3N0OjI3MDE3XCIpXHJcbiAgICAgfSAsIFtdKTtcclxuIFxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgIHNvY2tldC5jdXJyZW50Lm9uKFwiZ2V0T25saW5lVXNlcnNcIiAsIE9ubGluZVVzZXJzID0+IHtcclxuICAgICAgICAgIHNldFVzZXJzKE9ubGluZVVzZXJzKVxyXG4gICAgICAgfSlcclxuICAgICB9LFtdKTtcclxuXHJcbiAgICBhc3luYyBmdW5jdGlvbiBnZXRVc2VyTG9nZ2VkSW4oKSB7XHJcbiAgICAgIHRyeXtcclxuICAgICAgICBjb25zdCB1c2Vyc2xvZ2dlZEluID0gYXdhaXQgYXhpb3MuZ2V0KFwiL2FwaS9BdXRoL2xvZ2luXCIse3dpdGhDcmVkZW50aWFsczp0cnVlfSk7XHJcbiAgICAgICAgc2V0VXNlckxvZ2dlZEluKHVzZXJzbG9nZ2VkSW4uZGF0YSk7ICBcclxuICAgICAgfSBjYXRjaChlcnIpe31cclxuICAgIH1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGdldFVzZXJpbmZvKCkge1xyXG4gIHRyeXtcclxuICBjb25zdCB1c2Vyc2xvZ2dlZEluID0gYXdhaXQgYXhpb3MuZ2V0KFwiL2FwaS9BdXRoL2ZpbmRcIix7d2l0aENyZWRlbnRpYWxzOnRydWV9KTtcclxuICBzZXRGaW5kKHVzZXJzbG9nZ2VkSW4uZGF0YSk7ICBcclxuICB9XHJcbiAgY2F0Y2goZXJyKXt9XHJcbn1cclxuXHJcbnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgYXN5bmMgZnVuY3Rpb24gZ2V0U2Vzc2lvbigpIHtcclxuICAgIHRyeXtcclxuICAgICBhd2FpdCBheGlvcy5nZXQoIEFwaSArIFwiL3Nlc3Npb25cIix7d2l0aENyZWRlbnRpYWxzOnRydWV9KTtcclxuICAgIH0gY2F0Y2goZXJyKXt9XHJcbiAgICB9XHJcbmdldFNlc3Npb24oKTtcclxufSxbXSk7XHJcbnVzZUVmZmVjdCgoKSA9PiB7XHJcbmdldFVzZXJMb2dnZWRJbigpXHJcbn0sW10pO1xyXG5cclxudXNlRWZmZWN0KCgpID0+IHtcclxuICBnZXRVc2VyaW5mbygpXHJcbn0sW10pO1xyXG5cclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICA8QXV0aENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgdXNlckxvZ2dlZEluICxnZXRVc2VyTG9nZ2VkSW4gLGZpbmQgICxBcGkgLHVzZXJzfX0gPlxyXG4gICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9BdXRoQ29udGV4dC5Qcm92aWRlcj5cclxuICAgICkgXHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBdXRoQ29udGV4dDtcclxuXHJcblxyXG4iXSwibmFtZXMiOlsiYXhpb3MiLCJjcmVhdGVDb250ZXh0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VSZWYiLCJpbyIsIkF1dGhDb250ZXh0IiwiQXV0aENvbnRleHRQcm92aWRlciIsImNoaWxkcmVuIiwidXNlckxvZ2dlZEluIiwic2V0VXNlckxvZ2dlZEluIiwiZmluZCIsInNldEZpbmQiLCJzb2NrZXQiLCJBcGkiLCJ1c2VycyIsInNldFVzZXJzIiwiY3VycmVudCIsIm9uIiwiT25saW5lVXNlcnMiLCJnZXRVc2VyTG9nZ2VkSW4iLCJ1c2Vyc2xvZ2dlZEluIiwiZ2V0Iiwid2l0aENyZWRlbnRpYWxzIiwiZGF0YSIsImVyciIsImdldFVzZXJpbmZvIiwiZ2V0U2Vzc2lvbiIsIlByb3ZpZGVyIiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./helpers/context/authContext.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_home_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/home.css */ \"./styles/home.css\");\n/* harmony import */ var _styles_home_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_home_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_routes_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/routes.css */ \"./styles/routes.css\");\n/* harmony import */ var _styles_routes_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_routes_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_Admin_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Admin.css */ \"./styles/Admin.css\");\n/* harmony import */ var _styles_Admin_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Admin_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles_responsive_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/responsive.css */ \"./styles/responsive.css\");\n/* harmony import */ var _styles_responsive_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_responsive_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _helpers_context_authContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../helpers/context/authContext */ \"./helpers/context/authContext.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_helpers_context_authContext__WEBPACK_IMPORTED_MODULE_6__]);\n_helpers_context_authContext__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_helpers_context_authContext__WEBPACK_IMPORTED_MODULE_6__.AuthContextProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"F:\\\\FARDIN\\\\frontend\\\\pages\\\\_app.js\",\n            lineNumber: 11,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"F:\\\\FARDIN\\\\frontend\\\\pages\\\\_app.js\",\n        lineNumber: 10,\n        columnNumber: 10\n    }, this));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUE4QjtBQUNIO0FBQ0U7QUFDRDtBQUNLO0FBQ21DO1NBRzNEQyxLQUFLLENBQUMsQ0FBQyxDQUFDQyxTQUFTLEdBQUVDLFNBQVMsRUFBQyxDQUFDLEVBQUUsQ0FBQztJQUN4QyxNQUFNLDZFQUFFSCw2RUFBbUI7OEZBQ2hCRSxTQUFTO2VBQUtDLFNBQVM7Ozs7Ozs7Ozs7O0FBRXBDLENBQUM7QUFFRCxpRUFBZUYsS0FBSyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYi1zaG9wLy4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuY3NzJztcbmltcG9ydCAnLi4vc3R5bGVzL2hvbWUuY3NzJztcbmltcG9ydCAnLi4vc3R5bGVzL3JvdXRlcy5jc3MnO1xuaW1wb3J0ICcuLi9zdHlsZXMvQWRtaW4uY3NzJztcbmltcG9ydCAnLi4vc3R5bGVzL3Jlc3BvbnNpdmUuY3NzJztcbmltcG9ydCB7IEF1dGhDb250ZXh0UHJvdmlkZXIgfSBmcm9tICcuLi9oZWxwZXJzL2NvbnRleHQvYXV0aENvbnRleHQnO1xuXG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICByZXR1cm4gPEF1dGhDb250ZXh0UHJvdmlkZXI+XG4gICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICAgICAgPC9BdXRoQ29udGV4dFByb3ZpZGVyPlxufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcFxuIl0sIm5hbWVzIjpbIkF1dGhDb250ZXh0UHJvdmlkZXIiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/Admin.css":
/*!**************************!*\
  !*** ./styles/Admin.css ***!
  \**************************/
/***/ (() => {



/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "./styles/home.css":
/*!*************************!*\
  !*** ./styles/home.css ***!
  \*************************/
/***/ (() => {



/***/ }),

/***/ "./styles/responsive.css":
/*!*******************************!*\
  !*** ./styles/responsive.css ***!
  \*******************************/
/***/ (() => {



/***/ }),

/***/ "./styles/routes.css":
/*!***************************!*\
  !*** ./styles/routes.css ***!
  \***************************/
/***/ (() => {



/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "socket.io-client":
/*!***********************************!*\
  !*** external "socket.io-client" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = import("socket.io-client");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();