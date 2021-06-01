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
  var username = "zainsci";
  return __jsx("div", {
    className: "bio",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "bio__meta",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
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
      lineNumber: 13,
      columnNumber: 9
    }
  }), __jsx("strong", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, username), __jsx("div", {
    className: "social__icons",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
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
      lineNumber: 16,
      columnNumber: 11
    }
  }, __jsx(_svgs_twitter__WEBPACK_IMPORTED_MODULE_1__.default, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
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
      lineNumber: 24,
      columnNumber: 11
    }
  }, __jsx(_svgs_instagram__WEBPACK_IMPORTED_MODULE_2__.default, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
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
      lineNumber: 32,
      columnNumber: 11
    }
  }, __jsx(_svgs_github__WEBPACK_IMPORTED_MODULE_3__.default, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }
  })))), __jsx("div", {
    className: "bio__summary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9iaW8uanMiXSwibmFtZXMiOlsiQmlvIiwidXNlcm5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsR0FBRyxHQUFHLFNBQU5BLEdBQU0sR0FBTTtBQUNoQixNQUFNQyxRQUFRLEdBQUcsU0FBakI7QUFFQSxTQUNFO0FBQUssYUFBUyxFQUFDLEtBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLFdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssT0FBRyxFQUFDLGtCQUFUO0FBQTRCLE9BQUcsRUFBQyxTQUFoQztBQUEwQyxTQUFLLEVBQUMsTUFBaEQ7QUFBdUQsVUFBTSxFQUFDLE1BQTlEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBU0EsUUFBVCxDQUZGLEVBR0U7QUFBSyxhQUFTLEVBQUMsZUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFDRSxRQUFJLGdDQUF5QkEsUUFBekIsQ0FETjtBQUVFLFVBQU0sRUFBQyxRQUZUO0FBR0UsT0FBRyxFQUFDLHFCQUhOO0FBSUUsYUFBUyxFQUFDLGNBSlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU1FLE1BQUMsa0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQU5GLENBREYsRUFTRTtBQUNFLFFBQUksa0NBQTJCQSxRQUEzQixDQUROO0FBRUUsVUFBTSxFQUFDLFFBRlQ7QUFHRSxPQUFHLEVBQUMscUJBSE47QUFJRSxhQUFTLEVBQUMsY0FKWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBTUUsTUFBQyxvREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTkYsQ0FURixFQWlCRTtBQUNFLFFBQUksK0JBQXdCQSxRQUF4QixDQUROO0FBRUUsVUFBTSxFQUFDLFFBRlQ7QUFHRSxPQUFHLEVBQUMscUJBSE47QUFJRSxhQUFTLEVBQUMsY0FKWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBTUUsTUFBQyxpREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTkYsQ0FqQkYsQ0FIRixDQURGLEVBK0JFO0FBQUssYUFBUyxFQUFDLGNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQS9CRixDQURGO0FBbUNELENBdENEOztLQUFNRCxHO0FBd0NOLCtEQUFlQSxHQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Bvc3RzL1tzbHVnXS42MjRmMDhmMjFhMzE4NmY1NDFkZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IFR3aXR0ZXJJY29uIGZyb20gXCIuL3N2Z3MvdHdpdHRlclwiO1xyXG5pbXBvcnQgSW5zdGFncmFtSWNvbiBmcm9tIFwiLi9zdmdzL2luc3RhZ3JhbVwiO1xyXG5pbXBvcnQgR2l0aHViSWNvbiBmcm9tIFwiLi9zdmdzL2dpdGh1YlwiO1xyXG5cclxuY29uc3QgQmlvID0gKCkgPT4ge1xyXG4gIGNvbnN0IHVzZXJuYW1lID0gXCJ6YWluc2NpXCI7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJpb1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJpb19fbWV0YVwiPlxyXG4gICAgICAgIDxpbWcgc3JjPVwiL2Jsb2cvYXV0aG9yLmpwZ1wiIGFsdD1cInphaW5zY2lcIiB3aWR0aD1cIjk2cHhcIiBoZWlnaHQ9XCI5NnB4XCIgLz5cclxuICAgICAgICA8c3Ryb25nPnt1c2VybmFtZX08L3N0cm9uZz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNvY2lhbF9faWNvbnNcIj5cclxuICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgIGhyZWY9e2BodHRwczovL3R3aXR0ZXIuY29tLyR7dXNlcm5hbWV9YH1cclxuICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgcmVsPVwibm9yZWZlcnJlciBub29wZW5lclwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImljb25fX2J1dHRvblwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxUd2l0dGVySWNvbiAvPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPGFcclxuICAgICAgICAgICAgaHJlZj17YGh0dHBzOi8vaW5zdGFncmFtLmNvbS8ke3VzZXJuYW1lfWB9XHJcbiAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgIHJlbD1cIm5vcmVmZXJyZXIgbm9vcGVuZXJcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJpY29uX19idXR0b25cIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8SW5zdGFncmFtSWNvbiAvPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPGFcclxuICAgICAgICAgICAgaHJlZj17YGh0dHBzOi8vZ2l0aHViLmNvbS8ke3VzZXJuYW1lfWB9XHJcbiAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgIHJlbD1cIm5vcmVmZXJyZXIgbm9vcGVuZXJcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJpY29uX19idXR0b25cIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8R2l0aHViSWNvbiAvPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJiaW9fX3N1bW1hcnlcIj48L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCaW87XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=