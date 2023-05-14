/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/template/Article.ts":
/*!*********************************!*\
  !*** ./src/template/Article.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Article = /** @class */ (function () {
    function Article(title, content, footer) {
        this.title = title;
        this.content = content;
        this.footer = footer;
    }
    Article.prototype.getTitle = function () {
        return this.title;
    };
    Article.prototype.getContent = function () {
        return this.content;
    };
    Article.prototype.getFooter = function () {
        return this.footer;
    };
    return Article;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Article);


/***/ }),

/***/ "./src/template/DisplayArticleTemplate.ts":
/*!************************************************!*\
  !*** ./src/template/DisplayArticleTemplate.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var DisplayDisplayArticleTemplate = /** @class */ (function () {
    function DisplayDisplayArticleTemplate(article) {
        var _this = this;
        this.article = article;
        this.displayHtml = function () {
            return "\n        ".concat(_this.titleHtml(), "\n        ").concat(_this.contentHtml(), "\n        ").concat(_this.footerHtml(), "\n    ");
        };
    }
    return DisplayDisplayArticleTemplate;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DisplayDisplayArticleTemplate);


/***/ }),

/***/ "./src/template/EditableDisplayArticle.ts":
/*!************************************************!*\
  !*** ./src/template/EditableDisplayArticle.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DisplayArticleTemplate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DisplayArticleTemplate */ "./src/template/DisplayArticleTemplate.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var EditableDisplayArticle = /** @class */ (function (_super) {
    __extends(EditableDisplayArticle, _super);
    function EditableDisplayArticle(article) {
        return _super.call(this, article) || this;
    }
    EditableDisplayArticle.prototype.titleHtml = function () {
        return "<div><span>\uC81C\uBAA9</span><input value='".concat(this.article.getTitle(), "'/></div>");
    };
    EditableDisplayArticle.prototype.contentHtml = function () {
        var items = this.article.getContent().map(function (item) { return "".concat(item, "\n"); });
        return "<span>\uB0B4\uC6A9</span><br/><textarea cols='50' rows='5'>".concat(items.join(''), "</textarea>");
    };
    EditableDisplayArticle.prototype.footerHtml = function () {
        return "<div><span>\uAE00\uC4F4\uC774</span><input value='".concat(this.article.getFooter(), "</div>");
    };
    return EditableDisplayArticle;
}(_DisplayArticleTemplate__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EditableDisplayArticle);


/***/ }),

/***/ "./src/template/SimpleDisplayArticle.ts":
/*!**********************************************!*\
  !*** ./src/template/SimpleDisplayArticle.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DisplayArticleTemplate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DisplayArticleTemplate */ "./src/template/DisplayArticleTemplate.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var SimpleDisplayArticle = /** @class */ (function (_super) {
    __extends(SimpleDisplayArticle, _super);
    function SimpleDisplayArticle(article) {
        return _super.call(this, article) || this;
    }
    SimpleDisplayArticle.prototype.titleHtml = function () {
        return "<h1>".concat(this.article.getTitle(), "</h1>");
    };
    SimpleDisplayArticle.prototype.contentHtml = function () {
        var items = this.article.getContent().map(function (item) { return "<li>".concat(item, "</li>"); });
        return "<ul>".concat(items.join(''), "</ul>");
    };
    SimpleDisplayArticle.prototype.footerHtml = function () {
        return "<h3>".concat(this.article.getFooter(), "</h3>");
    };
    return SimpleDisplayArticle;
}(_DisplayArticleTemplate__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SimpleDisplayArticle);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*******************************!*\
  !*** ./src/template/index.ts ***!
  \*******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Article__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Article */ "./src/template/Article.ts");
/* harmony import */ var _EditableDisplayArticle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EditableDisplayArticle */ "./src/template/EditableDisplayArticle.ts");
/* harmony import */ var _SimpleDisplayArticle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SimpleDisplayArticle */ "./src/template/SimpleDisplayArticle.ts");



var aritcle = new _Article__WEBPACK_IMPORTED_MODULE_0__["default"]('업무', ['1', '2', '3', '4'], '개발자');
var display = new _SimpleDisplayArticle__WEBPACK_IMPORTED_MODULE_2__["default"](aritcle);
document.querySelector('.content').innerHTML = display.displayHtml();
document.querySelector('.edit-mode').addEventListener('change', function (event) {
    var display;
    if (event.target.checked) {
        display = new _EditableDisplayArticle__WEBPACK_IMPORTED_MODULE_1__["default"](aritcle);
    }
    else {
        display = new _SimpleDisplayArticle__WEBPACK_IMPORTED_MODULE_2__["default"](aritcle);
    }
    document.querySelector('.content').innerHTML = display.displayHtml();
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ05nQztBQUM4QjtBQUNKO0FBRTFELElBQU0sT0FBTyxHQUFHLElBQUksZ0RBQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztBQUMvRCxJQUFNLE9BQU8sR0FBRyxJQUFJLDZEQUFvQixDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ2xELFFBQVEsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQztBQUVyRSxRQUFRLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxVQUFDLEtBQUs7SUFDcEUsSUFBSSxPQUFPLENBQUM7SUFDWixJQUF1QixLQUFLLENBQUMsTUFBTyxDQUFDLE9BQU8sRUFBRTtRQUM1QyxPQUFPLEdBQUcsSUFBSSwrREFBc0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztLQUMvQztTQUFNO1FBQ0wsT0FBTyxHQUFHLElBQUksNkRBQW9CLENBQUMsT0FBTyxDQUFDLENBQUM7S0FDN0M7SUFDRCxRQUFRLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUM7QUFDdkUsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZXNpZ25wYXR0ZXJuX3RzLy4vc3JjL3RlbXBsYXRlL0FydGljbGUudHMiLCJ3ZWJwYWNrOi8vZGVzaWducGF0dGVybl90cy8uL3NyYy90ZW1wbGF0ZS9EaXNwbGF5QXJ0aWNsZVRlbXBsYXRlLnRzIiwid2VicGFjazovL2Rlc2lnbnBhdHRlcm5fdHMvLi9zcmMvdGVtcGxhdGUvRWRpdGFibGVEaXNwbGF5QXJ0aWNsZS50cyIsIndlYnBhY2s6Ly9kZXNpZ25wYXR0ZXJuX3RzLy4vc3JjL3RlbXBsYXRlL1NpbXBsZURpc3BsYXlBcnRpY2xlLnRzIiwid2VicGFjazovL2Rlc2lnbnBhdHRlcm5fdHMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZGVzaWducGF0dGVybl90cy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZGVzaWducGF0dGVybl90cy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2Rlc2lnbnBhdHRlcm5fdHMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9kZXNpZ25wYXR0ZXJuX3RzLy4vc3JjL3RlbXBsYXRlL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIEFydGljbGUge1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSB0aXRsZTogc3RyaW5nLFxyXG4gICAgcHJpdmF0ZSBjb250ZW50OiBzdHJpbmdbXSxcclxuICAgIHByaXZhdGUgZm9vdGVyOiBzdHJpbmdcclxuICApIHt9XHJcblxyXG4gIHB1YmxpYyBnZXRUaXRsZSgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMudGl0bGU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0Q29udGVudCgpOiBzdHJpbmdbXSB7XHJcbiAgICByZXR1cm4gdGhpcy5jb250ZW50O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldEZvb3RlcigpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuZm9vdGVyO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgQXJ0aWNsZSBmcm9tICcuL0FydGljbGUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYWJzdHJhY3QgY2xhc3MgRGlzcGxheURpc3BsYXlBcnRpY2xlVGVtcGxhdGUge1xyXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBhcnRpY2xlOiBBcnRpY2xlKSB7fVxyXG5cclxuICBwdWJsaWMgcmVhZG9ubHkgZGlzcGxheUh0bWwgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gYFxyXG4gICAgICAgICR7dGhpcy50aXRsZUh0bWwoKX1cclxuICAgICAgICAke3RoaXMuY29udGVudEh0bWwoKX1cclxuICAgICAgICAke3RoaXMuZm9vdGVySHRtbCgpfVxyXG4gICAgYDtcclxuICB9O1xyXG5cclxuICBwcm90ZWN0ZWQgYWJzdHJhY3QgdGl0bGVIdG1sKCk6IHN0cmluZztcclxuICBwcm90ZWN0ZWQgYWJzdHJhY3QgY29udGVudEh0bWwoKTogc3RyaW5nO1xyXG4gIHByb3RlY3RlZCBhYnN0cmFjdCBmb290ZXJIdG1sKCk6IHN0cmluZztcclxufVxyXG4iLCJpbXBvcnQgQXJ0aWNsZSBmcm9tICcuL0FydGljbGUnO1xyXG5pbXBvcnQgRGlzcGxheUFydGljbGVUZW1wbGF0ZSBmcm9tICcuL0Rpc3BsYXlBcnRpY2xlVGVtcGxhdGUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRWRpdGFibGVEaXNwbGF5QXJ0aWNsZSBleHRlbmRzIERpc3BsYXlBcnRpY2xlVGVtcGxhdGUge1xyXG4gIGNvbnN0cnVjdG9yKGFydGljbGU6IEFydGljbGUpIHtcclxuICAgIHN1cGVyKGFydGljbGUpO1xyXG4gIH1cclxuICBwcm90ZWN0ZWQgdGl0bGVIdG1sKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gYDxkaXY+PHNwYW4+7KCc66qpPC9zcGFuPjxpbnB1dCB2YWx1ZT0nJHt0aGlzLmFydGljbGUuZ2V0VGl0bGUoKX0nLz48L2Rpdj5gO1xyXG4gIH1cclxuICBwcm90ZWN0ZWQgY29udGVudEh0bWwoKTogc3RyaW5nIHtcclxuICAgIGNvbnN0IGl0ZW1zID0gdGhpcy5hcnRpY2xlLmdldENvbnRlbnQoKS5tYXAoKGl0ZW0pID0+IGAke2l0ZW19XFxuYCk7XHJcbiAgICByZXR1cm4gYDxzcGFuPuuCtOyaqTwvc3Bhbj48YnIvPjx0ZXh0YXJlYSBjb2xzPSc1MCcgcm93cz0nNSc+JHtpdGVtcy5qb2luKFxyXG4gICAgICAnJ1xyXG4gICAgKX08L3RleHRhcmVhPmA7XHJcbiAgfVxyXG4gIHByb3RlY3RlZCBmb290ZXJIdG1sKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gYDxkaXY+PHNwYW4+6riA7JO07J20PC9zcGFuPjxpbnB1dCB2YWx1ZT0nJHt0aGlzLmFydGljbGUuZ2V0Rm9vdGVyKCl9PC9kaXY+YDtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IEFydGljbGUgZnJvbSAnLi9BcnRpY2xlJztcclxuaW1wb3J0IERpc3BsYXlBcnRpY2xlVGVtcGxhdGUgZnJvbSAnLi9EaXNwbGF5QXJ0aWNsZVRlbXBsYXRlJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNpbXBsZURpc3BsYXlBcnRpY2xlIGV4dGVuZHMgRGlzcGxheUFydGljbGVUZW1wbGF0ZSB7XHJcbiAgY29uc3RydWN0b3IoYXJ0aWNsZTogQXJ0aWNsZSkge1xyXG4gICAgc3VwZXIoYXJ0aWNsZSk7XHJcbiAgfVxyXG4gIHByb3RlY3RlZCB0aXRsZUh0bWwoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBgPGgxPiR7dGhpcy5hcnRpY2xlLmdldFRpdGxlKCl9PC9oMT5gO1xyXG4gIH1cclxuICBwcm90ZWN0ZWQgY29udGVudEh0bWwoKTogc3RyaW5nIHtcclxuICAgIGNvbnN0IGl0ZW1zID0gdGhpcy5hcnRpY2xlLmdldENvbnRlbnQoKS5tYXAoKGl0ZW0pID0+IGA8bGk+JHtpdGVtfTwvbGk+YCk7XHJcbiAgICByZXR1cm4gYDx1bD4ke2l0ZW1zLmpvaW4oJycpfTwvdWw+YDtcclxuICB9XHJcbiAgcHJvdGVjdGVkIGZvb3Rlckh0bWwoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBgPGgzPiR7dGhpcy5hcnRpY2xlLmdldEZvb3RlcigpfTwvaDM+YDtcclxuICB9XHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgQXJ0aWNsZSBmcm9tICcuL0FydGljbGUnO1xyXG5pbXBvcnQgRWRpdGFibGVEaXNwbGF5QXJ0aWNsZSBmcm9tICcuL0VkaXRhYmxlRGlzcGxheUFydGljbGUnO1xyXG5pbXBvcnQgU2ltcGxlRGlzcGxheUFydGljbGUgZnJvbSAnLi9TaW1wbGVEaXNwbGF5QXJ0aWNsZSc7XHJcblxyXG5jb25zdCBhcml0Y2xlID0gbmV3IEFydGljbGUoJ+yXheustCcsIFsnMScsICcyJywgJzMnLCAnNCddLCAn6rCc67Cc7J6QJyk7XHJcbmNvbnN0IGRpc3BsYXkgPSBuZXcgU2ltcGxlRGlzcGxheUFydGljbGUoYXJpdGNsZSk7XHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50JykuaW5uZXJIVE1MID0gZGlzcGxheS5kaXNwbGF5SHRtbCgpO1xyXG5cclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXQtbW9kZScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChldmVudCkgPT4ge1xyXG4gIGxldCBkaXNwbGF5O1xyXG4gIGlmICgoPEhUTUxJbnB1dEVsZW1lbnQ+ZXZlbnQudGFyZ2V0KS5jaGVja2VkKSB7XHJcbiAgICBkaXNwbGF5ID0gbmV3IEVkaXRhYmxlRGlzcGxheUFydGljbGUoYXJpdGNsZSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGRpc3BsYXkgPSBuZXcgU2ltcGxlRGlzcGxheUFydGljbGUoYXJpdGNsZSk7XHJcbiAgfVxyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50JykuaW5uZXJIVE1MID0gZGlzcGxheS5kaXNwbGF5SHRtbCgpO1xyXG59KTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9