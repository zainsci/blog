self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/header.js":
/*!******************************!*\
  !*** ./components/header.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _theme_toggler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./theme-toggler */ "./components/theme-toggler.js");
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "D:\\Dev\\WebProjects\\React\\zainsci-blog\\components\\header.js",
    _this = undefined,
    _s = $RefreshSig$();

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);




var Header = function Header() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      navToggle = _useState[0],
      setNavToggle = _useState[1];

  return __jsx("header", {
    className: "header",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }, __jsx("h3", {
    className: "logo",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, "zainsci-blog"), __jsx("div", {
    className: "nav__toggler",
    onClick: function onClick() {
      return setNavToggle(!showNav);
    },
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
    className: "feather feather-menu",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 11
    }
  }, __jsx("line", {
    x1: "3",
    y1: "12",
    x2: "21",
    y2: "12",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }
  }), __jsx("line", {
    x1: "3",
    y1: "6",
    x2: "21",
    y2: "6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }
  }), __jsx("line", {
    x1: "3",
    y1: "18",
    x2: "21",
    y2: "18",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }
  })))), __jsx("nav", {
    className: "nav",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }, __jsx("ul", {
    className: "nav__list" + (navToggle ? " nav__open" : ""),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }, __jsx("li", {
    className: "nav__item",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 11
    }
  }, __jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }
  }, __jsx("a", {
    className: "nav__link",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 15
    }
  }, "Home"))), __jsx("li", {
    className: "nav__item",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 11
    }
  }, __jsx("a", {
    href: "https://zainsci.github.io",
    className: "nav__link",
    target: "_blank",
    rel: "noopener noreferrer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }
  }, "Portfolio")), __jsx("li", {
    className: "nav__item",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 11
    }
  }, __jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
    href: "/about",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }
  }, __jsx("a", {
    className: "nav__link",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 15
    }
  }, "About"))), __jsx("li", {
    className: "nav__item",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 11
    }
  }, __jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
    href: "/contact",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }
  }, __jsx("a", {
    className: "nav__link",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 15
    }
  }, "Contact"))), __jsx("li", {
    className: "nav__item",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 11
    }
  }, __jsx(_theme_toggler__WEBPACK_IMPORTED_MODULE_2__.default, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 13
    }
  })))));
};

_s(Header, "MV62kRjmy7fZzqg4SCMF609mog8=");

_c = Header;
/* harmony default export */ __webpack_exports__["default"] = (Header);

var _c;

$RefreshReg$(_c, "Header");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9oZWFkZXIuanMiXSwibmFtZXMiOlsiSGVhZGVyIiwidXNlU3RhdGUiLCJuYXZUb2dnbGUiLCJzZXROYXZUb2dnbGUiLCJzaG93TmF2Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7O0FBRUEsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUFBOztBQUFBLGtCQUNlQywrQ0FBUSxDQUFDLEtBQUQsQ0FEdkI7QUFBQSxNQUNaQyxTQURZO0FBQUEsTUFDREMsWUFEQzs7QUFHbkIsU0FDRTtBQUFRLGFBQVMsRUFBQyxRQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUksYUFBUyxFQUFDLE1BQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixFQUVFO0FBQUssYUFBUyxFQUFDLGNBQWY7QUFBOEIsV0FBTyxFQUFFO0FBQUEsYUFBTUEsWUFBWSxDQUFDLENBQUNDLE9BQUYsQ0FBbEI7QUFBQSxLQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFDRSxTQUFLLEVBQUMsNEJBRFI7QUFFRSxTQUFLLEVBQUMsSUFGUjtBQUdFLFVBQU0sRUFBQyxJQUhUO0FBSUUsV0FBTyxFQUFDLFdBSlY7QUFLRSxRQUFJLEVBQUMsTUFMUDtBQU1FLFVBQU0sRUFBQyxjQU5UO0FBT0UsZUFBVyxFQUFDLEdBUGQ7QUFRRSxhQUFTLEVBQUMsc0JBUlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVVFO0FBQU0sTUFBRSxFQUFDLEdBQVQ7QUFBYSxNQUFFLEVBQUMsSUFBaEI7QUFBcUIsTUFBRSxFQUFDLElBQXhCO0FBQTZCLE1BQUUsRUFBQyxJQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBVkYsRUFXRTtBQUFNLE1BQUUsRUFBQyxHQUFUO0FBQWEsTUFBRSxFQUFDLEdBQWhCO0FBQW9CLE1BQUUsRUFBQyxJQUF2QjtBQUE0QixNQUFFLEVBQUMsR0FBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVhGLEVBWUU7QUFBTSxNQUFFLEVBQUMsR0FBVDtBQUFhLE1BQUUsRUFBQyxJQUFoQjtBQUFxQixNQUFFLEVBQUMsSUFBeEI7QUFBNkIsTUFBRSxFQUFDLElBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFaRixDQURGLENBRkYsQ0FERixFQW9CRTtBQUFLLGFBQVMsRUFBQyxLQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFJLGFBQVMsRUFBRSxlQUFlRixTQUFTLEdBQUcsWUFBSCxHQUFrQixFQUExQyxDQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFJLGFBQVMsRUFBQyxXQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGtEQUFEO0FBQU0sUUFBSSxFQUFDLEdBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsYUFBUyxFQUFDLFdBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLENBREYsQ0FERixFQU1FO0FBQUksYUFBUyxFQUFDLFdBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQ0UsUUFBSSxFQUFDLDJCQURQO0FBRUUsYUFBUyxFQUFDLFdBRlo7QUFHRSxVQUFNLEVBQUMsUUFIVDtBQUlFLE9BQUcsRUFBQyxxQkFKTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLENBTkYsRUFnQkU7QUFBSSxhQUFTLEVBQUMsV0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxrREFBRDtBQUFNLFFBQUksRUFBQyxRQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLGFBQVMsRUFBQyxXQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixDQURGLENBaEJGLEVBcUJFO0FBQUksYUFBUyxFQUFDLFdBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsa0RBQUQ7QUFBTSxRQUFJLEVBQUMsVUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxhQUFTLEVBQUMsV0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsQ0FERixDQXJCRixFQTBCRTtBQUFJLGFBQVMsRUFBQyxXQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLG1EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQTFCRixDQURGLENBcEJGLENBREY7QUF1REQsQ0ExREQ7O0dBQU1GLE07O0tBQUFBLE07QUE0RE4sK0RBQWVBLE1BQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYjc1NzVmMGY2OWMwODA4YjYzODUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcblxyXG5pbXBvcnQgVGhlbWVUb2dnbGVyIGZyb20gXCIuL3RoZW1lLXRvZ2dsZXJcIjtcclxuXHJcbmNvbnN0IEhlYWRlciA9ICgpID0+IHtcclxuICBjb25zdCBbbmF2VG9nZ2xlLCBzZXROYXZUb2dnbGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGhlYWRlciBjbGFzc05hbWU9XCJoZWFkZXJcIj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8aDMgY2xhc3NOYW1lPVwibG9nb1wiPnphaW5zY2ktYmxvZzwvaDM+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZfX3RvZ2dsZXJcIiBvbkNsaWNrPXsoKSA9PiBzZXROYXZUb2dnbGUoIXNob3dOYXYpfT5cclxuICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgIHdpZHRoPVwiMjRcIlxyXG4gICAgICAgICAgICBoZWlnaHQ9XCIyNFwiXHJcbiAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxyXG4gICAgICAgICAgICBmaWxsPVwibm9uZVwiXHJcbiAgICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgICAgICAgIHN0cm9rZVdpZHRoPVwiMlwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZlYXRoZXIgZmVhdGhlci1tZW51XCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGxpbmUgeDE9XCIzXCIgeTE9XCIxMlwiIHgyPVwiMjFcIiB5Mj1cIjEyXCI+PC9saW5lPlxyXG4gICAgICAgICAgICA8bGluZSB4MT1cIjNcIiB5MT1cIjZcIiB4Mj1cIjIxXCIgeTI9XCI2XCI+PC9saW5lPlxyXG4gICAgICAgICAgICA8bGluZSB4MT1cIjNcIiB5MT1cIjE4XCIgeDI9XCIyMVwiIHkyPVwiMThcIj48L2xpbmU+XHJcbiAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2XCI+XHJcbiAgICAgICAgPHVsIGNsYXNzTmFtZT17XCJuYXZfX2xpc3RcIiArIChuYXZUb2dnbGUgPyBcIiBuYXZfX29wZW5cIiA6IFwiXCIpfT5cclxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXZfX2l0ZW1cIj5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXZfX2xpbmtcIj5Ib21lPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdl9faXRlbVwiPlxyXG4gICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3phaW5zY2kuZ2l0aHViLmlvXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJuYXZfX2xpbmtcIlxyXG4gICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBQb3J0Zm9saW9cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXZfX2l0ZW1cIj5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hYm91dFwiPlxyXG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdl9fbGlua1wiPkFib3V0PC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdl9faXRlbVwiPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL2NvbnRhY3RcIj5cclxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXZfX2xpbmtcIj5Db250YWN0PC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdl9faXRlbVwiPlxyXG4gICAgICAgICAgICA8VGhlbWVUb2dnbGVyIC8+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgIDwvbmF2PlxyXG4gICAgPC9oZWFkZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==