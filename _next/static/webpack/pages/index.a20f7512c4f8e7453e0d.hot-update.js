self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/layout.js":
/*!******************************!*\
  !*** ./components/layout.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer */ "./components/footer.js");
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header */ "./components/header.js");
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "D:\\Dev\\WebProjects\\React\\zainsci-blog\\components\\layout.js",
    _this = undefined,
    _s = $RefreshSig$();

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);





var Layout = function Layout(_ref) {
  _s();

  var title = _ref.title,
      children = _ref.children;
  typeof document !== "undefined" ? document.documentElement.lang = "en-us" : null;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (true) {
      var theme = localStorage.getItem("theme");

      if (theme) {
        document.body.className = theme;
      } else {
        window.localStorage.setItem("theme", "light");
        document.body.className = "light";
      }
    }
  }, []);
  return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }, __jsx("link", {
    rel: "preload",
    href: "fonts.googleapis.com",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }), __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }, title, " - zainsci-blog"), __jsx("meta", {
    charset: "UTF-8",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  })), __jsx(_header__WEBPACK_IMPORTED_MODULE_3__.default, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }
  }), __jsx("main", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }
  }, children), __jsx(_footer__WEBPACK_IMPORTED_MODULE_2__.default, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }
  }));
};

_s(Layout, "OD7bBpZva5O2jO+Puf00hKivP7c=");

_c = Layout;
/* harmony default export */ __webpack_exports__["default"] = (Layout);

var _c;

$RefreshReg$(_c, "Layout");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQuanMiXSwibmFtZXMiOlsiTGF5b3V0IiwidGl0bGUiLCJjaGlsZHJlbiIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50IiwibGFuZyIsInVzZUVmZmVjdCIsInRoZW1lIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImJvZHkiLCJjbGFzc05hbWUiLCJ3aW5kb3ciLCJzZXRJdGVtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7O0FBRUEsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsT0FBeUI7QUFBQTs7QUFBQSxNQUF0QkMsS0FBc0IsUUFBdEJBLEtBQXNCO0FBQUEsTUFBZkMsUUFBZSxRQUFmQSxRQUFlO0FBQ3RDLFNBQU9DLFFBQVAsS0FBb0IsV0FBcEIsR0FDS0EsUUFBUSxDQUFDQyxlQUFULENBQXlCQyxJQUF6QixHQUFnQyxPQURyQyxHQUVJLElBRko7QUFJQUMsa0RBQVMsQ0FBQyxZQUFNO0FBQ2QsY0FBbUM7QUFDakMsVUFBTUMsS0FBSyxHQUFHQyxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsT0FBckIsQ0FBZDs7QUFFQSxVQUFJRixLQUFKLEVBQVc7QUFDVEosZ0JBQVEsQ0FBQ08sSUFBVCxDQUFjQyxTQUFkLEdBQTBCSixLQUExQjtBQUNELE9BRkQsTUFFTztBQUNMSyxjQUFNLENBQUNKLFlBQVAsQ0FBb0JLLE9BQXBCLENBQTRCLE9BQTVCLEVBQXFDLE9BQXJDO0FBQ0FWLGdCQUFRLENBQUNPLElBQVQsQ0FBY0MsU0FBZCxHQUEwQixPQUExQjtBQUNEO0FBQ0Y7QUFDRixHQVhRLEVBV04sRUFYTSxDQUFUO0FBYUEsU0FDRSxxRUFDRSxNQUFDLGtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFNLE9BQUcsRUFBQyxTQUFWO0FBQW9CLFFBQUksRUFBQyxzQkFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFRVixLQUFSLG9CQUZGLEVBR0U7QUFBTSxXQUFPLEVBQUMsT0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSEYsQ0FERixFQU9FLE1BQUMsNENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVBGLEVBU0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFPQyxRQUFQLENBVEYsRUFXRSxNQUFDLDRDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFYRixDQURGO0FBZUQsQ0FqQ0Q7O0dBQU1GLE07O0tBQUFBLE07QUFtQ04sK0RBQWVBLE1BQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYTIwZjc1MTJjNGY4ZTc0NTNlMGQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5cclxuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi9mb290ZXJcIjtcclxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi9oZWFkZXJcIjtcclxuXHJcbmNvbnN0IExheW91dCA9ICh7IHRpdGxlLCBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgdHlwZW9mIGRvY3VtZW50ICE9PSBcInVuZGVmaW5lZFwiXHJcbiAgICA/IChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQubGFuZyA9IFwiZW4tdXNcIilcclxuICAgIDogbnVsbDtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgIGNvbnN0IHRoZW1lID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0aGVtZVwiKTtcclxuXHJcbiAgICAgIGlmICh0aGVtZSkge1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NOYW1lID0gdGhlbWU7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGhlbWVcIiwgXCJsaWdodFwiKTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTmFtZSA9IFwibGlnaHRcIjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cInByZWxvYWRcIiBocmVmPVwiZm9udHMuZ29vZ2xlYXBpcy5jb21cIiAvPlxyXG4gICAgICAgIDx0aXRsZT57dGl0bGV9IC0gemFpbnNjaS1ibG9nPC90aXRsZT5cclxuICAgICAgICA8bWV0YSBjaGFyc2V0PVwiVVRGLThcIiAvPlxyXG4gICAgICA8L0hlYWQ+XHJcblxyXG4gICAgICA8SGVhZGVyIC8+XHJcblxyXG4gICAgICA8bWFpbj57Y2hpbGRyZW59PC9tYWluPlxyXG5cclxuICAgICAgPEZvb3RlciAvPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExheW91dDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==