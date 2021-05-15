self["webpackHotUpdate_N_E"]("pages/posts/[slug]",{

/***/ "./pages/posts/[slug].js":
/*!*******************************!*\
  !*** ./pages/posts/[slug].js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__N_SSG": function() { return /* binding */ __N_SSG; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/layout */ "./components/layout.js");
/* harmony import */ var _components_share_buttons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/share-buttons */ "./components/share-buttons.js");
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "D:\\Dev\\WebProjects\\React\\zainsci-blog\\pages\\posts\\[slug].js",
    _this = undefined;

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);




var BlogPostTemplate = function BlogPostTemplate(_ref) {
  var post = _ref.post,
      morePosts = _ref.morePosts;
  return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_1__.default, {
    title: post.title,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }, __jsx(_components_share_buttons__WEBPACK_IMPORTED_MODULE_2__.default, {
    text: post.title,
    url: post.slug,
    tags: post.tags,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }), __jsx("article", {
    className: "blog__post",
    itemScope: true,
    itemType: "http://schema.org/Article",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, __jsx("header", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, __jsx("h1", {
    itemProp: "headline",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 11
    }
  }, post.title), __jsx("div", {
    itemProp: "datePublished",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 11
    }
  }, post.date)), __jsx("section", {
    dangerouslySetInnerHTML: {
      __html: post.content
    },
    itemProp: "articleBody",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  })), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }), __jsx("hr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }
  }));
};

_c = BlogPostTemplate;
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (BlogPostTemplate);

var _c;

$RefreshReg$(_c, "BlogPostTemplate");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdHMvW3NsdWddLmpzIl0sIm5hbWVzIjpbIkJsb2dQb3N0VGVtcGxhdGUiLCJwb3N0IiwibW9yZVBvc3RzIiwidGl0bGUiLCJzbHVnIiwidGFncyIsImRhdGUiLCJfX2h0bWwiLCJjb250ZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFJQTtBQUNBOztBQUVBLElBQU1BLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsT0FBeUI7QUFBQSxNQUF0QkMsSUFBc0IsUUFBdEJBLElBQXNCO0FBQUEsTUFBaEJDLFNBQWdCLFFBQWhCQSxTQUFnQjtBQUNoRCxTQUNFLE1BQUMsdURBQUQ7QUFBUSxTQUFLLEVBQUVELElBQUksQ0FBQ0UsS0FBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsOERBQUQ7QUFBYyxRQUFJLEVBQUVGLElBQUksQ0FBQ0UsS0FBekI7QUFBZ0MsT0FBRyxFQUFFRixJQUFJLENBQUNHLElBQTFDO0FBQWdELFFBQUksRUFBRUgsSUFBSSxDQUFDSSxJQUEzRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRTtBQUNFLGFBQVMsRUFBQyxZQURaO0FBRUUsYUFBUyxNQUZYO0FBR0UsWUFBUSxFQUFDLDJCQUhYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FLRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSSxZQUFRLEVBQUMsVUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXlCSixJQUFJLENBQUNFLEtBQTlCLENBREYsRUFFRTtBQUFLLFlBQVEsRUFBQyxlQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBK0JGLElBQUksQ0FBQ0ssSUFBcEMsQ0FGRixDQUxGLEVBU0U7QUFDRSwyQkFBdUIsRUFBRTtBQUFFQyxZQUFNLEVBQUVOLElBQUksQ0FBQ087QUFBZixLQUQzQjtBQUVFLFlBQVEsRUFBQyxhQUZYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFURixDQUZGLEVBZ0JFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFoQkYsRUFpQkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWpCRixFQWtCRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBbEJGLEVBcURFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFyREYsQ0FERjtBQXlERCxDQTFERDs7S0FBTVIsZ0I7O0FBNEROLCtEQUFlQSxnQkFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wb3N0cy9bc2x1Z10uNTZmNWU5NzcwMWY0ZTBkN2NhNTcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IG1hcmtkb3duVG9IdG1sIGZyb20gXCIuLi8uLi9saWIvbWFya2Rvd25Ub0h0bWxcIjtcclxuXHJcbmltcG9ydCB7IGdldEFsbFBvc3RzLCBnZXRQb3N0QnlTbHVnIH0gZnJvbSBcIi4uLy4uL2xpYi9hcGlcIjtcclxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9sYXlvdXRcIjtcclxuaW1wb3J0IFNoYXJlQnV0dG9ucyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9zaGFyZS1idXR0b25zXCI7XHJcblxyXG5jb25zdCBCbG9nUG9zdFRlbXBsYXRlID0gKHsgcG9zdCwgbW9yZVBvc3RzIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPExheW91dCB0aXRsZT17cG9zdC50aXRsZX0+XHJcbiAgICAgIDxTaGFyZUJ1dHRvbnMgdGV4dD17cG9zdC50aXRsZX0gdXJsPXtwb3N0LnNsdWd9IHRhZ3M9e3Bvc3QudGFnc30gLz5cclxuICAgICAgPGFydGljbGVcclxuICAgICAgICBjbGFzc05hbWU9XCJibG9nX19wb3N0XCJcclxuICAgICAgICBpdGVtU2NvcGVcclxuICAgICAgICBpdGVtVHlwZT1cImh0dHA6Ly9zY2hlbWEub3JnL0FydGljbGVcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPGhlYWRlcj5cclxuICAgICAgICAgIDxoMSBpdGVtUHJvcD1cImhlYWRsaW5lXCI+e3Bvc3QudGl0bGV9PC9oMT5cclxuICAgICAgICAgIDxkaXYgaXRlbVByb3A9XCJkYXRlUHVibGlzaGVkXCI+e3Bvc3QuZGF0ZX08L2Rpdj5cclxuICAgICAgICA8L2hlYWRlcj5cclxuICAgICAgICA8c2VjdGlvblxyXG4gICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBwb3N0LmNvbnRlbnQgfX1cclxuICAgICAgICAgIGl0ZW1Qcm9wPVwiYXJ0aWNsZUJvZHlcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvYXJ0aWNsZT5cclxuICAgICAgPGJyIC8+XHJcbiAgICAgIDxiciAvPlxyXG4gICAgICA8YnIgLz5cclxuICAgICAgey8qIDxuYXYgY2xhc3NOYW1lPVwiYmxvZ19fcG9zdF9fbmF2XCI+XHJcbiAgICAgICAgPHVsXHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBgZmxleGAsXHJcbiAgICAgICAgICAgIGZsZXhXcmFwOiBgd3JhcGAsXHJcbiAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBgc3BhY2UtYmV0d2VlbmAsXHJcbiAgICAgICAgICAgIGxpc3RTdHlsZTogYG5vbmVgLFxyXG4gICAgICAgICAgICBwYWRkaW5nOiAwLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgIHtwcmV2aW91cyAmJiAoXHJcbiAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgIHRvPXtwcmV2aW91cy5maWVsZHMuc2x1Z31cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInBhZ2luYXRpb25fX2xpbmtcIlxyXG4gICAgICAgICAgICAgICAgcmVsPVwicHJldlwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAg4oaQIHtwcmV2aW91cy50aXRsZX1cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICB7bmV4dCAmJiAoXHJcbiAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgIHRvPXtuZXh0LmZpZWxkcy5zbHVnfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicGFnaW5hdGlvbl9fbGlua1wiXHJcbiAgICAgICAgICAgICAgICByZWw9XCJuZXh0XCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7bmV4dC50aXRsZX0g4oaSXHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICA8L3VsPlxyXG4gICAgICA8L25hdj4gKi99XHJcbiAgICAgIDxociAvPlxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJsb2dQb3N0VGVtcGxhdGU7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoeyBwYXJhbXMgfSkge1xyXG4gIGNvbnN0IHBvc3QgPSBnZXRQb3N0QnlTbHVnKHBhcmFtcy5zbHVnLCBbXHJcbiAgICBcInRpdGxlXCIsXHJcbiAgICBcImRhdGVcIixcclxuICAgIFwic2x1Z1wiLFxyXG4gICAgXCJjb250ZW50XCIsXHJcbiAgICBcImNvdmVyXCIsXHJcbiAgICBcInRhZ3NcIixcclxuICBdKTtcclxuICBjb25zdCBjb250ZW50ID0gYXdhaXQgbWFya2Rvd25Ub0h0bWwocG9zdC5jb250ZW50IHx8IFwiXCIpO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgcG9zdDoge1xyXG4gICAgICAgIC4uLnBvc3QsXHJcbiAgICAgICAgY29udGVudCxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xyXG4gIGNvbnN0IHBvc3RzID0gZ2V0QWxsUG9zdHMoW1wic2x1Z1wiXSk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwYXRoczogcG9zdHMubWFwKHBvc3QgPT4ge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHBhcmFtczoge1xyXG4gICAgICAgICAgc2x1ZzogcG9zdC5zbHVnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH07XHJcbiAgICB9KSxcclxuICAgIGZhbGxiYWNrOiBmYWxzZSxcclxuICB9O1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=