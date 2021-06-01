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
/* harmony import */ var _social_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./social-icons */ "./components/social-icons.js");
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "D:\\Dev\\WebProjects\\React\\zainsci-blog\\components\\bio.js",
    _this = undefined;

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);



var Bio = function Bio() {
  var author = "zainsci";
  return __jsx("div", {
    className: "bio",
    id: "about",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "bio__wrapper",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "bio__meta",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 11
    }
  }, (author === null || author === void 0 ? void 0 : author.name) && __jsx("strong", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 30
    }
  }, author.name)), __jsx(_social_icons__WEBPACK_IMPORTED_MODULE_1__.default, {
    direction: "row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 11
    }
  })), __jsx("div", {
    className: "bio__summary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, (author === null || author === void 0 ? void 0 : author.summary) || null)));
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


/***/ }),

/***/ "./components/social-icons.js":
/*!************************************!*\
  !*** ./components/social-icons.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* module decorator */ module = __webpack_require__.hmd(module);
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);


var SocailIcons = function SocailIcons() {
  return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null);
};

_c = SocailIcons;
/* harmony default export */ __webpack_exports__["default"] = (SocailIcons);

var _c;

$RefreshReg$(_c, "SocailIcons");

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


/***/ }),

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
      lineNumber: 11,
      columnNumber: 5
    }
  }, __jsx("article", {
    className: "article",
    itemScope: true,
    itemType: "http://schema.org/Article",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, __jsx(_components_share_buttons__WEBPACK_IMPORTED_MODULE_2__.default, {
    text: post.title,
    url: post.slug,
    tags: post.tags,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }), __jsx("header", {
    className: "article__header",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }, __jsx("h1", {
    itemProp: "headline",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 11
    }
  }, post.title), __jsx("div", {
    itemProp: "datePublished",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
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
      lineNumber: 22,
      columnNumber: 9
    }
  })), __jsx("hr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }), __jsx(_components_bio__WEBPACK_IMPORTED_MODULE_3__.default, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9iaW8uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvc29jaWFsLWljb25zLmpzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9wb3N0cy9bc2x1Z10uanMiXSwibmFtZXMiOlsiQmlvIiwiYXV0aG9yIiwibmFtZSIsInN1bW1hcnkiLCJTb2NhaWxJY29ucyIsIkJsb2dQb3N0VGVtcGxhdGUiLCJwb3N0IiwibW9yZVBvc3RzIiwidGl0bGUiLCJzbHVnIiwidGFncyIsImRhdGUiLCJfX2h0bWwiLCJjb250ZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBOztBQUVBLElBQU1BLEdBQUcsR0FBRyxTQUFOQSxHQUFNLEdBQU07QUFDaEIsTUFBTUMsTUFBTSxHQUFHLFNBQWY7QUFFQSxTQUNFO0FBQUssYUFBUyxFQUFDLEtBQWY7QUFBcUIsTUFBRSxFQUFDLE9BQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsY0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0csQ0FBQUEsTUFBTSxTQUFOLElBQUFBLE1BQU0sV0FBTixZQUFBQSxNQUFNLENBQUVDLElBQVIsS0FBZ0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFTRCxNQUFNLENBQUNDLElBQWhCLENBRG5CLENBREYsRUFJRSxNQUFDLGtEQUFEO0FBQWEsYUFBUyxFQUFDLEtBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKRixDQURGLEVBT0U7QUFBSyxhQUFTLEVBQUMsY0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQStCLENBQUFELE1BQU0sU0FBTixJQUFBQSxNQUFNLFdBQU4sWUFBQUEsTUFBTSxDQUFFRSxPQUFSLEtBQW1CLElBQWxELENBUEYsQ0FERixDQURGO0FBYUQsQ0FoQkQ7O0tBQU1ILEc7QUFrQk4sK0RBQWVBLEdBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0QkE7O0FBRUEsSUFBTUksV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUN4QixTQUFPLG9FQUFQO0FBQ0QsQ0FGRDs7S0FBTUEsVztBQUlOLCtEQUFlQSxXQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFJQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUMsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixPQUF5QjtBQUFBLE1BQXRCQyxJQUFzQixRQUF0QkEsSUFBc0I7QUFBQSxNQUFoQkMsU0FBZ0IsUUFBaEJBLFNBQWdCO0FBQ2hELFNBQ0UsTUFBQyx1REFBRDtBQUFRLFNBQUssRUFBRUQsSUFBSSxDQUFDRSxLQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFDRSxhQUFTLEVBQUMsU0FEWjtBQUVFLGFBQVMsTUFGWDtBQUdFLFlBQVEsRUFBQywyQkFIWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBS0UsTUFBQyw4REFBRDtBQUFjLFFBQUksRUFBRUYsSUFBSSxDQUFDRSxLQUF6QjtBQUFnQyxPQUFHLEVBQUVGLElBQUksQ0FBQ0csSUFBMUM7QUFBZ0QsUUFBSSxFQUFFSCxJQUFJLENBQUNJLElBQTNEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFMRixFQU1FO0FBQVEsYUFBUyxFQUFDLGlCQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSSxZQUFRLEVBQUMsVUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXlCSixJQUFJLENBQUNFLEtBQTlCLENBREYsRUFFRTtBQUFLLFlBQVEsRUFBQyxlQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBK0JGLElBQUksQ0FBQ0ssSUFBcEMsQ0FGRixDQU5GLEVBVUU7QUFDRSwyQkFBdUIsRUFBRTtBQUFFQyxZQUFNLEVBQUVOLElBQUksQ0FBQ087QUFBZixLQUQzQjtBQUVFLFlBQVEsRUFBQyxhQUZYO0FBR0UsYUFBUyxFQUFDLGVBSFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVZGLENBREYsRUFpQkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWpCRixFQWtCRSxNQUFDLG9EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFsQkYsQ0FERjtBQXNCRCxDQXZCRDs7S0FBTVIsZ0I7O0FBeUJOLCtEQUFlQSxnQkFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wb3N0cy9bc2x1Z10uYzQwZTFmYjIxODYyNzllZGNhMzIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCBTb2NpYWxJY29ucyBmcm9tIFwiLi9zb2NpYWwtaWNvbnNcIjtcclxuXHJcbmNvbnN0IEJpbyA9ICgpID0+IHtcclxuICBjb25zdCBhdXRob3IgPSBcInphaW5zY2lcIjtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYmlvXCIgaWQ9XCJhYm91dFwiPlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmlvX193cmFwcGVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJpb19fbWV0YVwiPlxyXG4gICAgICAgICAgICB7YXV0aG9yPy5uYW1lICYmIDxzdHJvbmc+e2F1dGhvci5uYW1lfTwvc3Ryb25nPn1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPFNvY2lhbEljb25zIGRpcmVjdGlvbj1cInJvd1wiIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiaW9fX3N1bW1hcnlcIj57YXV0aG9yPy5zdW1tYXJ5IHx8IG51bGx9PC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJpbztcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgU29jYWlsSWNvbnMgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIDw+PC8+O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU29jYWlsSWNvbnM7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IG1hcmtkb3duVG9IdG1sIGZyb20gXCIuLi8uLi9saWIvbWFya2Rvd25Ub0h0bWxcIjtcclxuXHJcbmltcG9ydCB7IGdldEFsbFBvc3RzLCBnZXRQb3N0QnlTbHVnIH0gZnJvbSBcIi4uLy4uL2xpYi9hcGlcIjtcclxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9sYXlvdXRcIjtcclxuaW1wb3J0IFNoYXJlQnV0dG9ucyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9zaGFyZS1idXR0b25zXCI7XHJcbmltcG9ydCBCaW8gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvYmlvXCI7XHJcblxyXG5jb25zdCBCbG9nUG9zdFRlbXBsYXRlID0gKHsgcG9zdCwgbW9yZVBvc3RzIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPExheW91dCB0aXRsZT17cG9zdC50aXRsZX0+XHJcbiAgICAgIDxhcnRpY2xlXHJcbiAgICAgICAgY2xhc3NOYW1lPVwiYXJ0aWNsZVwiXHJcbiAgICAgICAgaXRlbVNjb3BlXHJcbiAgICAgICAgaXRlbVR5cGU9XCJodHRwOi8vc2NoZW1hLm9yZy9BcnRpY2xlXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxTaGFyZUJ1dHRvbnMgdGV4dD17cG9zdC50aXRsZX0gdXJsPXtwb3N0LnNsdWd9IHRhZ3M9e3Bvc3QudGFnc30gLz5cclxuICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cImFydGljbGVfX2hlYWRlclwiPlxyXG4gICAgICAgICAgPGgxIGl0ZW1Qcm9wPVwiaGVhZGxpbmVcIj57cG9zdC50aXRsZX08L2gxPlxyXG4gICAgICAgICAgPGRpdiBpdGVtUHJvcD1cImRhdGVQdWJsaXNoZWRcIj57cG9zdC5kYXRlfTwvZGl2PlxyXG4gICAgICAgIDwvaGVhZGVyPlxyXG4gICAgICAgIDxzZWN0aW9uXHJcbiAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHBvc3QuY29udGVudCB9fVxyXG4gICAgICAgICAgaXRlbVByb3A9XCJhcnRpY2xlQm9keVwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJhcnRpY2xlX19ib2R5XCJcclxuICAgICAgICAvPlxyXG4gICAgICA8L2FydGljbGU+XHJcbiAgICAgIDxociAvPlxyXG4gICAgICA8QmlvIC8+XHJcbiAgICA8L0xheW91dD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQmxvZ1Bvc3RUZW1wbGF0ZTtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyh7IHBhcmFtcyB9KSB7XHJcbiAgY29uc3QgcG9zdCA9IGdldFBvc3RCeVNsdWcocGFyYW1zLnNsdWcsIFtcclxuICAgIFwidGl0bGVcIixcclxuICAgIFwiZGF0ZVwiLFxyXG4gICAgXCJzbHVnXCIsXHJcbiAgICBcImNvbnRlbnRcIixcclxuICAgIFwiY292ZXJcIixcclxuICAgIFwidGFnc1wiLFxyXG4gIF0pO1xyXG4gIGNvbnN0IGNvbnRlbnQgPSBhd2FpdCBtYXJrZG93blRvSHRtbChwb3N0LmNvbnRlbnQgfHwgXCJcIik7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBwb3N0OiB7XHJcbiAgICAgICAgLi4ucG9zdCxcclxuICAgICAgICBjb250ZW50LFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XHJcbiAgY29uc3QgcG9zdHMgPSBnZXRBbGxQb3N0cyhbXCJzbHVnXCJdKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHBhdGhzOiBwb3N0cy5tYXAocG9zdCA9PiB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgICBzbHVnOiBwb3N0LnNsdWcsXHJcbiAgICAgICAgfSxcclxuICAgICAgfTtcclxuICAgIH0pLFxyXG4gICAgZmFsbGJhY2s6IGZhbHNlLFxyXG4gIH07XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==