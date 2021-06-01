self["webpackHotUpdate_N_E"]("pages/posts/[slug]",{

/***/ "./components/footer.js":
/*!******************************!*\
  !*** ./components/footer.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _svgs_twitter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./svgs/twitter */ "./components/svgs/twitter.js");
/* harmony import */ var _svgs_instagram__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./svgs/instagram */ "./components/svgs/instagram.js");
/* harmony import */ var _svgs_github__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./svgs/github */ "./components/svgs/github.js");
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "D:\\Dev\\WebProjects\\React\\zainsci-blog\\components\\footer.js",
    _this = undefined;

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);





var Footer = function Footer() {
  var username = "zainsci";
  return __jsx("footer", {
    className: "footer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, "Copyright \xA9 ", new Date().getFullYear(), " zainsci"), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }, "Built with Next.js by", " ", __jsx("a", {
    href: "https://zainsci.github.io",
    target: "_blank",
    rel: "noopener noreferrer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, "zainsci")), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "social__icons",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }, __jsx("a", {
    href: "https://twitter.com/".concat(username),
    target: "_blank",
    rel: "noreferrer noopener",
    className: "icon__button",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 11
    }
  }, __jsx(_svgs_twitter__WEBPACK_IMPORTED_MODULE_1__.default, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }
  })), __jsx("a", {
    href: "https://instagram.com/".concat(username),
    target: "_blank",
    rel: "noreferrer noopener",
    className: "icon__button",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 11
    }
  }, __jsx(_svgs_instagram__WEBPACK_IMPORTED_MODULE_2__.default, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }
  })), __jsx("a", {
    href: "https://github.com/".concat(username),
    target: "_blank",
    rel: "noreferrer noopener",
    className: "icon__button",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 11
    }
  }, __jsx(_svgs_github__WEBPACK_IMPORTED_MODULE_3__.default, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }
  })))));
};

_c = Footer;
/* harmony default export */ __webpack_exports__["default"] = (Footer);

var _c;

$RefreshReg$(_c, "Footer");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9mb290ZXIuanMiXSwibmFtZXMiOlsiRm9vdGVyIiwidXNlcm5hbWUiLCJEYXRlIiwiZ2V0RnVsbFllYXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUNuQixNQUFNQyxRQUFRLEdBQUcsU0FBakI7QUFFQSxTQUNFO0FBQVEsYUFBUyxFQUFDLFFBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQUFrQixJQUFJQyxJQUFKLEdBQVdDLFdBQVgsRUFBbEIsYUFERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsOEJBQ3dCLEdBRHhCLEVBRUU7QUFDRSxRQUFJLEVBQUMsMkJBRFA7QUFFRSxVQUFNLEVBQUMsUUFGVDtBQUdFLE9BQUcsRUFBQyxxQkFITjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkYsQ0FGRixFQVlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxlQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUNFLFFBQUksZ0NBQXlCRixRQUF6QixDQUROO0FBRUUsVUFBTSxFQUFDLFFBRlQ7QUFHRSxPQUFHLEVBQUMscUJBSE47QUFJRSxhQUFTLEVBQUMsY0FKWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBTUUsTUFBQyxrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTkYsQ0FERixFQVNFO0FBQ0UsUUFBSSxrQ0FBMkJBLFFBQTNCLENBRE47QUFFRSxVQUFNLEVBQUMsUUFGVDtBQUdFLE9BQUcsRUFBQyxxQkFITjtBQUlFLGFBQVMsRUFBQyxjQUpaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FNRSxNQUFDLG9EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFORixDQVRGLEVBaUJFO0FBQ0UsUUFBSSwrQkFBd0JBLFFBQXhCLENBRE47QUFFRSxVQUFNLEVBQUMsUUFGVDtBQUdFLE9BQUcsRUFBQyxxQkFITjtBQUlFLGFBQVMsRUFBQyxjQUpaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FNRSxNQUFDLGlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFORixDQWpCRixDQURGLENBWkYsQ0FERjtBQTJDRCxDQTlDRDs7S0FBTUQsTTtBQWdETiwrREFBZUEsTUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wb3N0cy9bc2x1Z10uZDQ5N2E1YTQxNmU4ZDc4YWNmMjcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCBUd2l0dGVySWNvbiBmcm9tIFwiLi9zdmdzL3R3aXR0ZXJcIjtcclxuaW1wb3J0IEluc3RhZ3JhbUljb24gZnJvbSBcIi4vc3Zncy9pbnN0YWdyYW1cIjtcclxuaW1wb3J0IEdpdGh1Ykljb24gZnJvbSBcIi4vc3Zncy9naXRodWJcIjtcclxuXHJcbmNvbnN0IEZvb3RlciA9ICgpID0+IHtcclxuICBjb25zdCB1c2VybmFtZSA9IFwiemFpbnNjaVwiO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGZvb3RlciBjbGFzc05hbWU9XCJmb290ZXJcIj5cclxuICAgICAgPGRpdj5Db3B5cmlnaHQgwqkge25ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKX0gemFpbnNjaTwvZGl2PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIEJ1aWx0IHdpdGggTmV4dC5qcyBieXtcIiBcIn1cclxuICAgICAgICA8YVxyXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vemFpbnNjaS5naXRodWIuaW9cIlxyXG4gICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIHphaW5zY2lcclxuICAgICAgICA8L2E+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic29jaWFsX19pY29uc1wiPlxyXG4gICAgICAgICAgPGFcclxuICAgICAgICAgICAgaHJlZj17YGh0dHBzOi8vdHdpdHRlci5jb20vJHt1c2VybmFtZX1gfVxyXG4gICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICByZWw9XCJub3JlZmVycmVyIG5vb3BlbmVyXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiaWNvbl9fYnV0dG9uXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPFR3aXR0ZXJJY29uIC8+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8YVxyXG4gICAgICAgICAgICBocmVmPXtgaHR0cHM6Ly9pbnN0YWdyYW0uY29tLyR7dXNlcm5hbWV9YH1cclxuICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgcmVsPVwibm9yZWZlcnJlciBub29wZW5lclwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImljb25fX2J1dHRvblwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxJbnN0YWdyYW1JY29uIC8+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8YVxyXG4gICAgICAgICAgICBocmVmPXtgaHR0cHM6Ly9naXRodWIuY29tLyR7dXNlcm5hbWV9YH1cclxuICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgcmVsPVwibm9yZWZlcnJlciBub29wZW5lclwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImljb25fX2J1dHRvblwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxHaXRodWJJY29uIC8+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9mb290ZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==