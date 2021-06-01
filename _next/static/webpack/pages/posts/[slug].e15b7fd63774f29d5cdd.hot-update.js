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
/* harmony import */ var _components_bio__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/bio */ "./components/bio.js");
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
      lineNumber: 12,
      columnNumber: 5
    }
  }, __jsx("article", {
    className: "article",
    itemScope: true,
    itemType: "http://schema.org/Article",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }, __jsx(_components_share_buttons__WEBPACK_IMPORTED_MODULE_2__.default, {
    text: post.title,
    url: post.slug,
    tags: post.tags,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }), __jsx("header", {
    className: "article__header",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, __jsx("h1", {
    itemProp: "headline",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 11
    }
  }, post.title), __jsx("div", {
    itemProp: "datePublished",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 11
    }
  }, post.date)), __jsx("section", {
    dangerouslySetInnerHTML: {
      __html: post.content
    },
    itemProp: "articleBody",
    className: "article__body",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  })), __jsx("hr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdHMvW3NsdWddLmpzIl0sIm5hbWVzIjpbIkJsb2dQb3N0VGVtcGxhdGUiLCJwb3N0IiwibW9yZVBvc3RzIiwidGl0bGUiLCJzbHVnIiwidGFncyIsImRhdGUiLCJfX2h0bWwiLCJjb250ZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBS0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsT0FBeUI7QUFBQSxNQUF0QkMsSUFBc0IsUUFBdEJBLElBQXNCO0FBQUEsTUFBaEJDLFNBQWdCLFFBQWhCQSxTQUFnQjtBQUNoRCxTQUNFLE1BQUMsdURBQUQ7QUFBUSxTQUFLLEVBQUVELElBQUksQ0FBQ0UsS0FBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQ0UsYUFBUyxFQUFDLFNBRFo7QUFFRSxhQUFTLE1BRlg7QUFHRSxZQUFRLEVBQUMsMkJBSFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUtFLE1BQUMsOERBQUQ7QUFBYyxRQUFJLEVBQUVGLElBQUksQ0FBQ0UsS0FBekI7QUFBZ0MsT0FBRyxFQUFFRixJQUFJLENBQUNHLElBQTFDO0FBQWdELFFBQUksRUFBRUgsSUFBSSxDQUFDSSxJQUEzRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTEYsRUFNRTtBQUFRLGFBQVMsRUFBQyxpQkFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUksWUFBUSxFQUFDLFVBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUF5QkosSUFBSSxDQUFDRSxLQUE5QixDQURGLEVBRUU7QUFBSyxZQUFRLEVBQUMsZUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQStCRixJQUFJLENBQUNLLElBQXBDLENBRkYsQ0FORixFQVVFO0FBQ0UsMkJBQXVCLEVBQUU7QUFBRUMsWUFBTSxFQUFFTixJQUFJLENBQUNPO0FBQWYsS0FEM0I7QUFFRSxZQUFRLEVBQUMsYUFGWDtBQUdFLGFBQVMsRUFBQyxlQUhaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFWRixDQURGLEVBaUJFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFqQkYsQ0FERjtBQXFCRCxDQXRCRDs7S0FBTVIsZ0I7O0FBd0JOLCtEQUFlQSxnQkFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wb3N0cy9bc2x1Z10uZTE1YjdmZDYzNzc0ZjI5ZDVjZGQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCBtYXJrZG93blRvSHRtbCBmcm9tIFwiLi4vLi4vbGliL21hcmtkb3duVG9IdG1sXCI7XHJcbmltcG9ydCB7IGdldEFsbFBvc3RzLCBnZXRQb3N0QnlTbHVnIH0gZnJvbSBcIi4uLy4uL2xpYi9hcGlcIjtcclxuXHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvbGF5b3V0XCI7XHJcbmltcG9ydCBTaGFyZUJ1dHRvbnMgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvc2hhcmUtYnV0dG9uc1wiO1xyXG5pbXBvcnQgQmlvIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2Jpb1wiO1xyXG5cclxuY29uc3QgQmxvZ1Bvc3RUZW1wbGF0ZSA9ICh7IHBvc3QsIG1vcmVQb3N0cyB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxMYXlvdXQgdGl0bGU9e3Bvc3QudGl0bGV9PlxyXG4gICAgICA8YXJ0aWNsZVxyXG4gICAgICAgIGNsYXNzTmFtZT1cImFydGljbGVcIlxyXG4gICAgICAgIGl0ZW1TY29wZVxyXG4gICAgICAgIGl0ZW1UeXBlPVwiaHR0cDovL3NjaGVtYS5vcmcvQXJ0aWNsZVwiXHJcbiAgICAgID5cclxuICAgICAgICA8U2hhcmVCdXR0b25zIHRleHQ9e3Bvc3QudGl0bGV9IHVybD17cG9zdC5zbHVnfSB0YWdzPXtwb3N0LnRhZ3N9IC8+XHJcbiAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJhcnRpY2xlX19oZWFkZXJcIj5cclxuICAgICAgICAgIDxoMSBpdGVtUHJvcD1cImhlYWRsaW5lXCI+e3Bvc3QudGl0bGV9PC9oMT5cclxuICAgICAgICAgIDxkaXYgaXRlbVByb3A9XCJkYXRlUHVibGlzaGVkXCI+e3Bvc3QuZGF0ZX08L2Rpdj5cclxuICAgICAgICA8L2hlYWRlcj5cclxuICAgICAgICA8c2VjdGlvblxyXG4gICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBwb3N0LmNvbnRlbnQgfX1cclxuICAgICAgICAgIGl0ZW1Qcm9wPVwiYXJ0aWNsZUJvZHlcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYXJ0aWNsZV9fYm9keVwiXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9hcnRpY2xlPlxyXG4gICAgICA8aHIgLz5cclxuICAgIDwvTGF5b3V0PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCbG9nUG9zdFRlbXBsYXRlO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKHsgcGFyYW1zIH0pIHtcclxuICBjb25zdCBwb3N0ID0gZ2V0UG9zdEJ5U2x1ZyhwYXJhbXMuc2x1ZywgW1xyXG4gICAgXCJ0aXRsZVwiLFxyXG4gICAgXCJkYXRlXCIsXHJcbiAgICBcInNsdWdcIixcclxuICAgIFwiY29udGVudFwiLFxyXG4gICAgXCJjb3ZlclwiLFxyXG4gICAgXCJ0YWdzXCIsXHJcbiAgXSk7XHJcbiAgY29uc3QgY29udGVudCA9IGF3YWl0IG1hcmtkb3duVG9IdG1sKHBvc3QuY29udGVudCB8fCBcIlwiKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIHBvc3Q6IHtcclxuICAgICAgICAuLi5wb3N0LFxyXG4gICAgICAgIGNvbnRlbnQsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcclxuICBjb25zdCBwb3N0cyA9IGdldEFsbFBvc3RzKFtcInNsdWdcIl0pO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcGF0aHM6IHBvc3RzLm1hcChwb3N0ID0+IHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBwYXJhbXM6IHtcclxuICAgICAgICAgIHNsdWc6IHBvc3Quc2x1ZyxcclxuICAgICAgICB9LFxyXG4gICAgICB9O1xyXG4gICAgfSksXHJcbiAgICBmYWxsYmFjazogZmFsc2UsXHJcbiAgfTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9