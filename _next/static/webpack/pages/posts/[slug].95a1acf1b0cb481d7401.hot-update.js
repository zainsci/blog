self["webpackHotUpdate_N_E"]("pages/posts/[slug]",{

/***/ "./components/share-buttons.js":
/*!*************************************!*\
  !*** ./components/share-buttons.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "D:\\Dev\\WebProjects\\React\\zainsci-blog\\components\\share-buttons.js",
    _this = undefined;

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);


var ShareButtons = function ShareButtons(props) {
  var url = props.url;
  var text = props.text;
  var titleTag = props.tags;
  var hashtags = "zainsci,".concat(titleTag === null || titleTag === void 0 ? void 0 : titleTag.join()).replace("-", "");
  return __jsx("div", {
    className: "share",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }, __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }, "Share"), __jsx("div", {
    className: "share__buttons",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, __jsx("a", {
    href: "https://twitter.com/intent/tweet?url=https://zainsci.github.io".concat(url, "&text=").concat(text, "\n&hashtags=").concat(hashtags),
    target: "_blank",
    rel: "noreferrer",
    className: "share__button",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    className: "feather feather-twitter",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 11
    }
  }, __jsx("path", {
    d: "M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }
  }))), __jsx("a", {
    href: "https://www.facebook.com/sharer/sharer.php?u=zainsci.github.io%2Fblog".concat(url),
    target: "_blank",
    rel: "noreferrer",
    className: "share__button",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }, __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    className: "feather feather-facebook",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 11
    }
  }, __jsx("path", {
    d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }
  })))));
};

_c = ShareButtons;
/* harmony default export */ __webpack_exports__["default"] = (ShareButtons);

var _c;

$RefreshReg$(_c, "ShareButtons");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaGFyZS1idXR0b25zLmpzIl0sIm5hbWVzIjpbIlNoYXJlQnV0dG9ucyIsInByb3BzIiwidXJsIiwidGV4dCIsInRpdGxlVGFnIiwidGFncyIsImhhc2h0YWdzIiwiam9pbiIsInJlcGxhY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsSUFBTUEsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQUMsS0FBSyxFQUFJO0FBQzVCLE1BQU1DLEdBQUcsR0FBR0QsS0FBSyxDQUFDQyxHQUFsQjtBQUNBLE1BQU1DLElBQUksR0FBR0YsS0FBSyxDQUFDRSxJQUFuQjtBQUNBLE1BQU1DLFFBQVEsR0FBR0gsS0FBSyxDQUFDSSxJQUF2QjtBQUNBLE1BQU1DLFFBQVEsR0FBRyxrQkFBV0YsUUFBWCxhQUFXQSxRQUFYLHVCQUFXQSxRQUFRLENBQUVHLElBQVYsRUFBWCxFQUE4QkMsT0FBOUIsQ0FBc0MsR0FBdEMsRUFBMkMsRUFBM0MsQ0FBakI7QUFFQSxTQUNFO0FBQUssYUFBUyxFQUFDLE9BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixFQUVFO0FBQUssYUFBUyxFQUFDLGdCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUNFLFFBQUksMEVBQW1FTixHQUFuRSxtQkFBK0VDLElBQS9FLHlCQUFrR0csUUFBbEcsQ0FETjtBQUVFLFVBQU0sRUFBQyxRQUZUO0FBR0UsT0FBRyxFQUFDLFlBSE47QUFJRSxhQUFTLEVBQUMsZUFKWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBTUU7QUFDRSxTQUFLLEVBQUMsNEJBRFI7QUFFRSxTQUFLLEVBQUMsSUFGUjtBQUdFLFVBQU0sRUFBQyxJQUhUO0FBSUUsV0FBTyxFQUFDLFdBSlY7QUFLRSxRQUFJLEVBQUMsTUFMUDtBQU1FLFVBQU0sRUFBQyxjQU5UO0FBT0UsZUFBVyxFQUFDLEdBUGQ7QUFRRSxhQUFTLEVBQUMseUJBUlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVVFO0FBQU0sS0FBQyxFQUFDLDZLQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFWRixDQU5GLENBREYsRUFvQkU7QUFDRSxRQUFJLGlGQUEwRUosR0FBMUUsQ0FETjtBQUVFLFVBQU0sRUFBQyxRQUZUO0FBR0UsT0FBRyxFQUFDLFlBSE47QUFJRSxhQUFTLEVBQUMsZUFKWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBTUU7QUFDRSxTQUFLLEVBQUMsNEJBRFI7QUFFRSxTQUFLLEVBQUMsSUFGUjtBQUdFLFVBQU0sRUFBQyxJQUhUO0FBSUUsV0FBTyxFQUFDLFdBSlY7QUFLRSxRQUFJLEVBQUMsTUFMUDtBQU1FLFVBQU0sRUFBQyxjQU5UO0FBT0UsZUFBVyxFQUFDLEdBUGQ7QUFRRSxhQUFTLEVBQUMsMEJBUlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVVFO0FBQU0sS0FBQyxFQUFDLG1FQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFWRixDQU5GLENBcEJGLENBRkYsQ0FERjtBQTZDRCxDQW5ERDs7S0FBTUYsWTtBQXFETiwrREFBZUEsWUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wb3N0cy9bc2x1Z10uOTVhMWFjZjFiMGNiNDgxZDc0MDEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IFNoYXJlQnV0dG9ucyA9IHByb3BzID0+IHtcclxuICBjb25zdCB1cmwgPSBwcm9wcy51cmw7XHJcbiAgY29uc3QgdGV4dCA9IHByb3BzLnRleHQ7XHJcbiAgY29uc3QgdGl0bGVUYWcgPSBwcm9wcy50YWdzO1xyXG4gIGNvbnN0IGhhc2h0YWdzID0gYHphaW5zY2ksJHt0aXRsZVRhZz8uam9pbigpfWAucmVwbGFjZShcIi1cIiwgXCJcIik7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInNoYXJlXCI+XHJcbiAgICAgIDxwPlNoYXJlPC9wPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNoYXJlX19idXR0b25zXCI+XHJcbiAgICAgICAgPGFcclxuICAgICAgICAgIGhyZWY9e2BodHRwczovL3R3aXR0ZXIuY29tL2ludGVudC90d2VldD91cmw9aHR0cHM6Ly96YWluc2NpLmdpdGh1Yi5pbyR7dXJsfSZ0ZXh0PSR7dGV4dH1cXG4maGFzaHRhZ3M9JHtoYXNodGFnc31gfVxyXG4gICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgIHJlbD1cIm5vcmVmZXJyZXJcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwic2hhcmVfX2J1dHRvblwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgd2lkdGg9XCIyNFwiXHJcbiAgICAgICAgICAgIGhlaWdodD1cIjI0XCJcclxuICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXHJcbiAgICAgICAgICAgIGZpbGw9XCJub25lXCJcclxuICAgICAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgICAgICAgc3Ryb2tlV2lkdGg9XCIyXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmVhdGhlciBmZWF0aGVyLXR3aXR0ZXJcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8cGF0aCBkPVwiTTIzIDNhMTAuOSAxMC45IDAgMCAxLTMuMTQgMS41MyA0LjQ4IDQuNDggMCAwIDAtNy44NiAzdjFBMTAuNjYgMTAuNjYgMCAwIDEgMyA0cy00IDkgNSAxM2ExMS42NCAxMS42NCAwIDAgMS03IDJjOSA1IDIwIDAgMjAtMTEuNWE0LjUgNC41IDAgMCAwLS4wOC0uODNBNy43MiA3LjcyIDAgMCAwIDIzIDN6XCIgLz5cclxuICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgIDwvYT5cclxuICAgICAgICA8YVxyXG4gICAgICAgICAgaHJlZj17YGh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9zaGFyZXIvc2hhcmVyLnBocD91PXphaW5zY2kuZ2l0aHViLmlvJTJGYmxvZyR7dXJsfWB9XHJcbiAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgcmVsPVwibm9yZWZlcnJlclwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJzaGFyZV9fYnV0dG9uXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICB3aWR0aD1cIjI0XCJcclxuICAgICAgICAgICAgaGVpZ2h0PVwiMjRcIlxyXG4gICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcclxuICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxyXG4gICAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgICAgICBzdHJva2VXaWR0aD1cIjJcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmZWF0aGVyIGZlYXRoZXItZmFjZWJvb2tcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8cGF0aCBkPVwiTTE4IDJoLTNhNSA1IDAgMCAwLTUgNXYzSDd2NGgzdjhoNHYtOGgzbDEtNGgtNFY3YTEgMSAwIDAgMSAxLTFoM3pcIj48L3BhdGg+XHJcbiAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICA8L2E+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNoYXJlQnV0dG9ucztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==