self["webpackHotUpdate_N_E"]("pages/posts/[slug]",{

/***/ "./components/bio.js":
/*!***************************!*\
  !*** ./components/bio.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _svgs_twitter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./svgs/twitter */ "./components/svgs/twitter.js");
/* harmony import */ var _svgs_instagram__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./svgs/instagram */ "./components/svgs/instagram.js");
/* harmony import */ var _svgs_github__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./svgs/github */ "./components/svgs/github.js");
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "D:\\Dev\\WebProjects\\React\\zainsci-blog\\components\\bio.js",
    _this = undefined;

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);





var Bio = function Bio() {
  return __jsx("div", {
    className: "bio",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "bio__meta",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, __jsx("img", {
    src: "/blog/author.jpg",
    alt: "zainsci",
    width: "96px",
    height: "96px",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }), __jsx("strong", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, "zainsci"), __jsx("div", {
    className: "social__icons",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
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
      lineNumber: 14,
      columnNumber: 11
    }
  }, __jsx(_svgs_twitter__WEBPACK_IMPORTED_MODULE_1__.default, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
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
      lineNumber: 22,
      columnNumber: 11
    }
  }, __jsx(_svgs_instagram__WEBPACK_IMPORTED_MODULE_2__.default, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
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
      lineNumber: 30,
      columnNumber: 11
    }
  }, __jsx(_svgs_github__WEBPACK_IMPORTED_MODULE_3__.default, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }
  })))), __jsx("div", {
    className: "bio__summary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }
  }));
};

_c = Bio;
/* harmony default export */ __webpack_exports__["default"] = (Bio);

var _c;

$RefreshReg$(_c, "Bio");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9iaW8uanMiXSwibmFtZXMiOlsiQmlvIiwidXNlcm5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsR0FBRyxHQUFHLFNBQU5BLEdBQU0sR0FBTTtBQUNoQixTQUNFO0FBQUssYUFBUyxFQUFDLEtBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLFdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssT0FBRyxFQUFDLGtCQUFUO0FBQTRCLE9BQUcsRUFBQyxTQUFoQztBQUEwQyxTQUFLLEVBQUMsTUFBaEQ7QUFBdUQsVUFBTSxFQUFDLE1BQTlEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRixFQUdFO0FBQUssYUFBUyxFQUFDLGVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQ0UsUUFBSSxnQ0FBeUJDLFFBQXpCLENBRE47QUFFRSxVQUFNLEVBQUMsUUFGVDtBQUdFLE9BQUcsRUFBQyxxQkFITjtBQUlFLGFBQVMsRUFBQyxjQUpaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FNRSxNQUFDLGtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFORixDQURGLEVBU0U7QUFDRSxRQUFJLGtDQUEyQkEsUUFBM0IsQ0FETjtBQUVFLFVBQU0sRUFBQyxRQUZUO0FBR0UsT0FBRyxFQUFDLHFCQUhOO0FBSUUsYUFBUyxFQUFDLGNBSlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU1FLE1BQUMsb0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQU5GLENBVEYsRUFpQkU7QUFDRSxRQUFJLCtCQUF3QkEsUUFBeEIsQ0FETjtBQUVFLFVBQU0sRUFBQyxRQUZUO0FBR0UsT0FBRyxFQUFDLHFCQUhOO0FBSUUsYUFBUyxFQUFDLGNBSlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU1FLE1BQUMsaURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQU5GLENBakJGLENBSEYsQ0FERixFQStCRTtBQUFLLGFBQVMsRUFBQyxjQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUEvQkYsQ0FERjtBQW1DRCxDQXBDRDs7S0FBTUQsRztBQXNDTiwrREFBZUEsR0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wb3N0cy9bc2x1Z10uZjAwMmM3MTEyYjVjYTI5MTBiNWEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCBUd2l0dGVySWNvbiBmcm9tIFwiLi9zdmdzL3R3aXR0ZXJcIjtcclxuaW1wb3J0IEluc3RhZ3JhbUljb24gZnJvbSBcIi4vc3Zncy9pbnN0YWdyYW1cIjtcclxuaW1wb3J0IEdpdGh1Ykljb24gZnJvbSBcIi4vc3Zncy9naXRodWJcIjtcclxuXHJcbmNvbnN0IEJpbyA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJiaW9cIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJiaW9fX21ldGFcIj5cclxuICAgICAgICA8aW1nIHNyYz1cIi9ibG9nL2F1dGhvci5qcGdcIiBhbHQ9XCJ6YWluc2NpXCIgd2lkdGg9XCI5NnB4XCIgaGVpZ2h0PVwiOTZweFwiIC8+XHJcbiAgICAgICAgPHN0cm9uZz56YWluc2NpPC9zdHJvbmc+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzb2NpYWxfX2ljb25zXCI+XHJcbiAgICAgICAgICA8YVxyXG4gICAgICAgICAgICBocmVmPXtgaHR0cHM6Ly90d2l0dGVyLmNvbS8ke3VzZXJuYW1lfWB9XHJcbiAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgIHJlbD1cIm5vcmVmZXJyZXIgbm9vcGVuZXJcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJpY29uX19idXR0b25cIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8VHdpdHRlckljb24gLz5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgIGhyZWY9e2BodHRwczovL2luc3RhZ3JhbS5jb20vJHt1c2VybmFtZX1gfVxyXG4gICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICByZWw9XCJub3JlZmVycmVyIG5vb3BlbmVyXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiaWNvbl9fYnV0dG9uXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPEluc3RhZ3JhbUljb24gLz5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgIGhyZWY9e2BodHRwczovL2dpdGh1Yi5jb20vJHt1c2VybmFtZX1gfVxyXG4gICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICByZWw9XCJub3JlZmVycmVyIG5vb3BlbmVyXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiaWNvbl9fYnV0dG9uXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPEdpdGh1Ykljb24gLz5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmlvX19zdW1tYXJ5XCI+PC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQmlvO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9