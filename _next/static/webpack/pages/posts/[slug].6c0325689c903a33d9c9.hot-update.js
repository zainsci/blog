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
  }), __jsx(_components_bio__WEBPACK_IMPORTED_MODULE_3__.default, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdHMvW3NsdWddLmpzIl0sIm5hbWVzIjpbIkJsb2dQb3N0VGVtcGxhdGUiLCJwb3N0IiwibW9yZVBvc3RzIiwidGl0bGUiLCJzbHVnIiwidGFncyIsImRhdGUiLCJfX2h0bWwiLCJjb250ZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBS0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsT0FBeUI7QUFBQSxNQUF0QkMsSUFBc0IsUUFBdEJBLElBQXNCO0FBQUEsTUFBaEJDLFNBQWdCLFFBQWhCQSxTQUFnQjtBQUNoRCxTQUNFLE1BQUMsdURBQUQ7QUFBUSxTQUFLLEVBQUVELElBQUksQ0FBQ0UsS0FBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQ0UsYUFBUyxFQUFDLFNBRFo7QUFFRSxhQUFTLE1BRlg7QUFHRSxZQUFRLEVBQUMsMkJBSFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUtFLE1BQUMsOERBQUQ7QUFBYyxRQUFJLEVBQUVGLElBQUksQ0FBQ0UsS0FBekI7QUFBZ0MsT0FBRyxFQUFFRixJQUFJLENBQUNHLElBQTFDO0FBQWdELFFBQUksRUFBRUgsSUFBSSxDQUFDSSxJQUEzRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTEYsRUFNRTtBQUFRLGFBQVMsRUFBQyxpQkFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUksWUFBUSxFQUFDLFVBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUF5QkosSUFBSSxDQUFDRSxLQUE5QixDQURGLEVBRUU7QUFBSyxZQUFRLEVBQUMsZUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQStCRixJQUFJLENBQUNLLElBQXBDLENBRkYsQ0FORixFQVVFO0FBQ0UsMkJBQXVCLEVBQUU7QUFBRUMsWUFBTSxFQUFFTixJQUFJLENBQUNPO0FBQWYsS0FEM0I7QUFFRSxZQUFRLEVBQUMsYUFGWDtBQUdFLGFBQVMsRUFBQyxlQUhaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFWRixDQURGLEVBaUJFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFqQkYsRUFrQkUsTUFBQyxvREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBbEJGLENBREY7QUFzQkQsQ0F2QkQ7O0tBQU1SLGdCOztBQXlCTiwrREFBZUEsZ0JBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcG9zdHMvW3NsdWddLjZjMDMyNTY4OWM5MDNhMzNkOWM5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgbWFya2Rvd25Ub0h0bWwgZnJvbSBcIi4uLy4uL2xpYi9tYXJrZG93blRvSHRtbFwiO1xyXG5pbXBvcnQgeyBnZXRBbGxQb3N0cywgZ2V0UG9zdEJ5U2x1ZyB9IGZyb20gXCIuLi8uLi9saWIvYXBpXCI7XHJcblxyXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2xheW91dFwiO1xyXG5pbXBvcnQgU2hhcmVCdXR0b25zIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3NoYXJlLWJ1dHRvbnNcIjtcclxuaW1wb3J0IEJpbyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9iaW9cIjtcclxuXHJcbmNvbnN0IEJsb2dQb3N0VGVtcGxhdGUgPSAoeyBwb3N0LCBtb3JlUG9zdHMgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8TGF5b3V0IHRpdGxlPXtwb3N0LnRpdGxlfT5cclxuICAgICAgPGFydGljbGVcclxuICAgICAgICBjbGFzc05hbWU9XCJhcnRpY2xlXCJcclxuICAgICAgICBpdGVtU2NvcGVcclxuICAgICAgICBpdGVtVHlwZT1cImh0dHA6Ly9zY2hlbWEub3JnL0FydGljbGVcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPFNoYXJlQnV0dG9ucyB0ZXh0PXtwb3N0LnRpdGxlfSB1cmw9e3Bvc3Quc2x1Z30gdGFncz17cG9zdC50YWdzfSAvPlxyXG4gICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwiYXJ0aWNsZV9faGVhZGVyXCI+XHJcbiAgICAgICAgICA8aDEgaXRlbVByb3A9XCJoZWFkbGluZVwiPntwb3N0LnRpdGxlfTwvaDE+XHJcbiAgICAgICAgICA8ZGl2IGl0ZW1Qcm9wPVwiZGF0ZVB1Ymxpc2hlZFwiPntwb3N0LmRhdGV9PC9kaXY+XHJcbiAgICAgICAgPC9oZWFkZXI+XHJcbiAgICAgICAgPHNlY3Rpb25cclxuICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogcG9zdC5jb250ZW50IH19XHJcbiAgICAgICAgICBpdGVtUHJvcD1cImFydGljbGVCb2R5XCJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImFydGljbGVfX2JvZHlcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvYXJ0aWNsZT5cclxuICAgICAgPGhyIC8+XHJcbiAgICAgIDxCaW8gLz5cclxuICAgIDwvTGF5b3V0PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCbG9nUG9zdFRlbXBsYXRlO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKHsgcGFyYW1zIH0pIHtcclxuICBjb25zdCBwb3N0ID0gZ2V0UG9zdEJ5U2x1ZyhwYXJhbXMuc2x1ZywgW1xyXG4gICAgXCJ0aXRsZVwiLFxyXG4gICAgXCJkYXRlXCIsXHJcbiAgICBcInNsdWdcIixcclxuICAgIFwiY29udGVudFwiLFxyXG4gICAgXCJjb3ZlclwiLFxyXG4gICAgXCJ0YWdzXCIsXHJcbiAgXSk7XHJcbiAgY29uc3QgY29udGVudCA9IGF3YWl0IG1hcmtkb3duVG9IdG1sKHBvc3QuY29udGVudCB8fCBcIlwiKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIHBvc3Q6IHtcclxuICAgICAgICAuLi5wb3N0LFxyXG4gICAgICAgIGNvbnRlbnQsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcclxuICBjb25zdCBwb3N0cyA9IGdldEFsbFBvc3RzKFtcInNsdWdcIl0pO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcGF0aHM6IHBvc3RzLm1hcChwb3N0ID0+IHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBwYXJhbXM6IHtcclxuICAgICAgICAgIHNsdWc6IHBvc3Quc2x1ZyxcclxuICAgICAgICB9LFxyXG4gICAgICB9O1xyXG4gICAgfSksXHJcbiAgICBmYWxsYmFjazogZmFsc2UsXHJcbiAgfTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9