self["webpackHotUpdate_N_E"]("pages/404",{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9oZWFkZXIuanMiXSwibmFtZXMiOlsiSGVhZGVyIiwidXNlU3RhdGUiLCJuYXZUb2dnbGUiLCJzZXROYXZUb2dnbGUiLCJzaG93TmF2Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7O0FBRUEsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUFBOztBQUFBLGtCQUNlQywrQ0FBUSxDQUFDLEtBQUQsQ0FEdkI7QUFBQSxNQUNaQyxTQURZO0FBQUEsTUFDREMsWUFEQzs7QUFHbkIsU0FDRTtBQUFRLGFBQVMsRUFBQyxRQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUksYUFBUyxFQUFDLE1BQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixFQUVFO0FBQUssYUFBUyxFQUFDLGNBQWY7QUFBOEIsV0FBTyxFQUFFO0FBQUEsYUFBTUEsWUFBWSxDQUFDLENBQUNDLE9BQUYsQ0FBbEI7QUFBQSxLQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFDRSxTQUFLLEVBQUMsNEJBRFI7QUFFRSxTQUFLLEVBQUMsSUFGUjtBQUdFLFVBQU0sRUFBQyxJQUhUO0FBSUUsV0FBTyxFQUFDLFdBSlY7QUFLRSxRQUFJLEVBQUMsTUFMUDtBQU1FLFVBQU0sRUFBQyxjQU5UO0FBT0UsZUFBVyxFQUFDLEdBUGQ7QUFRRSxhQUFTLEVBQUMsc0JBUlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVVFO0FBQU0sTUFBRSxFQUFDLEdBQVQ7QUFBYSxNQUFFLEVBQUMsSUFBaEI7QUFBcUIsTUFBRSxFQUFDLElBQXhCO0FBQTZCLE1BQUUsRUFBQyxJQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBVkYsRUFXRTtBQUFNLE1BQUUsRUFBQyxHQUFUO0FBQWEsTUFBRSxFQUFDLEdBQWhCO0FBQW9CLE1BQUUsRUFBQyxJQUF2QjtBQUE0QixNQUFFLEVBQUMsR0FBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVhGLEVBWUU7QUFBTSxNQUFFLEVBQUMsR0FBVDtBQUFhLE1BQUUsRUFBQyxJQUFoQjtBQUFxQixNQUFFLEVBQUMsSUFBeEI7QUFBNkIsTUFBRSxFQUFDLElBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFaRixDQURGLENBRkYsQ0FERixFQW9CRTtBQUFLLGFBQVMsRUFBQyxLQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFJLGFBQVMsRUFBRSxlQUFlRixTQUFTLEdBQUcsWUFBSCxHQUFrQixFQUExQyxDQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFJLGFBQVMsRUFBQyxXQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGtEQUFEO0FBQU0sUUFBSSxFQUFDLEdBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsYUFBUyxFQUFDLFdBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLENBREYsQ0FERixFQU1FO0FBQUksYUFBUyxFQUFDLFdBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQ0UsUUFBSSxFQUFDLDJCQURQO0FBRUUsYUFBUyxFQUFDLFdBRlo7QUFHRSxVQUFNLEVBQUMsUUFIVDtBQUlFLE9BQUcsRUFBQyxxQkFKTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLENBTkYsRUFnQkU7QUFBSSxhQUFTLEVBQUMsV0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxrREFBRDtBQUFNLFFBQUksRUFBQyxRQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLGFBQVMsRUFBQyxXQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixDQURGLENBaEJGLEVBcUJFO0FBQUksYUFBUyxFQUFDLFdBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsa0RBQUQ7QUFBTSxRQUFJLEVBQUMsVUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxhQUFTLEVBQUMsV0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsQ0FERixDQXJCRixFQTBCRTtBQUFJLGFBQVMsRUFBQyxXQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLG1EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQTFCRixDQURGLENBcEJGLENBREY7QUF1REQsQ0ExREQ7O0dBQU1GLE07O0tBQUFBLE07QUE0RE4sK0RBQWVBLE1BQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvNDA0LmI3NTc1ZjBmNjljMDgwOGI2Mzg1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5cclxuaW1wb3J0IFRoZW1lVG9nZ2xlciBmcm9tIFwiLi90aGVtZS10b2dnbGVyXCI7XHJcblxyXG5jb25zdCBIZWFkZXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgW25hdlRvZ2dsZSwgc2V0TmF2VG9nZ2xlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGgzIGNsYXNzTmFtZT1cImxvZ29cIj56YWluc2NpLWJsb2c8L2gzPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2X190b2dnbGVyXCIgb25DbGljaz17KCkgPT4gc2V0TmF2VG9nZ2xlKCFzaG93TmF2KX0+XHJcbiAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICB3aWR0aD1cIjI0XCJcclxuICAgICAgICAgICAgaGVpZ2h0PVwiMjRcIlxyXG4gICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcclxuICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxyXG4gICAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgICAgICBzdHJva2VXaWR0aD1cIjJcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmZWF0aGVyIGZlYXRoZXItbWVudVwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxsaW5lIHgxPVwiM1wiIHkxPVwiMTJcIiB4Mj1cIjIxXCIgeTI9XCIxMlwiPjwvbGluZT5cclxuICAgICAgICAgICAgPGxpbmUgeDE9XCIzXCIgeTE9XCI2XCIgeDI9XCIyMVwiIHkyPVwiNlwiPjwvbGluZT5cclxuICAgICAgICAgICAgPGxpbmUgeDE9XCIzXCIgeTE9XCIxOFwiIHgyPVwiMjFcIiB5Mj1cIjE4XCI+PC9saW5lPlxyXG4gICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8bmF2IGNsYXNzTmFtZT1cIm5hdlwiPlxyXG4gICAgICAgIDx1bCBjbGFzc05hbWU9e1wibmF2X19saXN0XCIgKyAobmF2VG9nZ2xlID8gXCIgbmF2X19vcGVuXCIgOiBcIlwiKX0+XHJcbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2X19pdGVtXCI+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2X19saW5rXCI+SG9tZTwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXZfX2l0ZW1cIj5cclxuICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly96YWluc2NpLmdpdGh1Yi5pb1wiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibmF2X19saW5rXCJcclxuICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgUG9ydGZvbGlvXHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2X19pdGVtXCI+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYWJvdXRcIj5cclxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXZfX2xpbmtcIj5BYm91dDwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXZfX2l0ZW1cIj5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jb250YWN0XCI+XHJcbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2X19saW5rXCI+Q29udGFjdDwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXZfX2l0ZW1cIj5cclxuICAgICAgICAgICAgPFRoZW1lVG9nZ2xlciAvPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICA8L3VsPlxyXG4gICAgICA8L25hdj5cclxuICAgIDwvaGVhZGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=