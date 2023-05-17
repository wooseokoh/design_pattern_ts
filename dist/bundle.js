/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/flyweight/Digit.ts":
/*!********************************!*\
  !*** ./src/flyweight/Digit.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Digit = /** @class */ (function () {
    function Digit(url) {
        this.url = url;
        this.data = null;
    }
    Digit.prototype.load = function (url, domOutput) {
        var _this = this;
        fetch(url)
            .then(function (response) {
            return response.json();
        })
            .then(function (json) {
            _this.data = json;
            if (domOutput)
                _this.put(domOutput);
        })
            .catch(function (error) {
            console.warn(error);
        });
    };
    Digit.prototype.put = function (dom) {
        if (!this.data)
            this.load(this.url, dom);
        else {
            dom.innerHTML = '<div class="digit-layout"></div>';
            var domLayout_1 = dom.querySelector('.digit-layout');
            this.data.forEach(function (item) {
                var len = item.length;
                for (var i = 0; i < len; i++) {
                    var domCell = document.createElement('div');
                    domCell.style.backgroundColor = item[i] === '1' ? '#ff0' : '#333';
                    domLayout_1.append(domCell);
                }
            });
        }
    };
    return Digit;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Digit);


/***/ }),

/***/ "./src/flyweight/DigitFactory.ts":
/*!***************************************!*\
  !*** ./src/flyweight/DigitFactory.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Digit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Digit */ "./src/flyweight/Digit.ts");

var DigitFactory = /** @class */ (function () {
    function DigitFactory() {
        this.pool = [
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
        ];
    }
    DigitFactory.prototype.getDigit = function (n) {
        if (!this.pool[n])
            this.pool[n] = new _Digit__WEBPACK_IMPORTED_MODULE_0__["default"]("./data/".concat(n, ".json"));
        return this.pool[n];
    };
    return DigitFactory;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DigitFactory);


/***/ }),

/***/ "./src/flyweight/Number.ts":
/*!*********************************!*\
  !*** ./src/flyweight/Number.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Number = /** @class */ (function () {
    function Number(factory, num) {
        this.factory = factory;
        this.num = num;
    }
    Number.prototype.put = function (dom) {
        var strNum = this.num.toString();
        var len = strNum.length;
        dom.innerHTML = '';
        for (var i = 0; i < len; i++) {
            var div = document.createElement('div');
            this.factory.getDigit(parseInt(strNum[i])).put(div);
            dom.append(div);
        }
    };
    return Number;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Number);


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
/*!********************************!*\
  !*** ./src/flyweight/index.ts ***!
  \********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DigitFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DigitFactory */ "./src/flyweight/DigitFactory.ts");
/* harmony import */ var _Number__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Number */ "./src/flyweight/Number.ts");


var factory = new _DigitFactory__WEBPACK_IMPORTED_MODULE_0__["default"]();
var domTarget = document.querySelector('#tmp');
var value = 434331;
setInterval(function () {
    var number = new _Number__WEBPACK_IMPORTED_MODULE_1__["default"](factory, value++);
    number.put(domTarget);
}, 100);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7SUFHRSxlQUFvQixHQUFXO1FBQVgsUUFBRyxHQUFILEdBQUcsQ0FBUTtRQUZ2QixTQUFJLEdBQWtCLElBQUksQ0FBQztJQUVELENBQUM7SUFFM0Isb0JBQUksR0FBWixVQUFhLEdBQVcsRUFBRSxTQUFrQjtRQUE1QyxpQkFZQztRQVhDLEtBQUssQ0FBQyxHQUFHLENBQUM7YUFDUCxJQUFJLENBQUMsVUFBQyxRQUFRO1lBQ2IsT0FBTyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDekIsQ0FBQyxDQUFDO2FBQ0QsSUFBSSxDQUFDLFVBQUMsSUFBSTtZQUNULEtBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1lBQ2pCLElBQUksU0FBUztnQkFBRSxLQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3JDLENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQyxVQUFVLEtBQUs7WUFDcEIsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN0QixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxtQkFBRyxHQUFILFVBQUksR0FBWTtRQUNkLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQzthQUNwQztZQUNILEdBQUcsQ0FBQyxTQUFTLEdBQUcsa0NBQWtDLENBQUM7WUFDbkQsSUFBTSxXQUFTLEdBQUcsR0FBRyxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQUMsQ0FBQztZQUVyRCxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFDLElBQVk7Z0JBQzdCLElBQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7Z0JBQ3hCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUU7b0JBQzVCLElBQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQzlDLE9BQU8sQ0FBQyxLQUFLLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO29CQUNsRSxXQUFTLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2lCQUMzQjtZQUNILENBQUMsQ0FBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDO0lBQ0gsWUFBQztBQUFELENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkMyQjtBQUU1QjtJQUFBO1FBQ1UsU0FBSSxHQUF3QjtZQUNsQyxJQUFJO1lBQ0osSUFBSTtZQUNKLElBQUk7WUFDSixJQUFJO1lBQ0osSUFBSTtZQUNKLElBQUk7WUFDSixJQUFJO1lBQ0osSUFBSTtZQUNKLElBQUk7WUFDSixJQUFJO1NBQ0wsQ0FBQztJQU1KLENBQUM7SUFKQywrQkFBUSxHQUFSLFVBQVMsQ0FBUztRQUNoQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksOENBQUssQ0FBQyxpQkFBVSxDQUFDLFVBQU8sQ0FBQyxDQUFDO1FBQ2hFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN0QixDQUFDO0lBQ0gsbUJBQUM7QUFBRCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDbEJEO0lBQ0UsZ0JBQW9CLE9BQXFCLEVBQVUsR0FBVztRQUExQyxZQUFPLEdBQVAsT0FBTyxDQUFjO1FBQVUsUUFBRyxHQUFILEdBQUcsQ0FBUTtJQUFHLENBQUM7SUFFbEUsb0JBQUcsR0FBSCxVQUFJLEdBQVk7UUFDZCxJQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ25DLElBQU0sR0FBRyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFDMUIsR0FBRyxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7UUFDbkIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUM1QixJQUFNLEdBQUcsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNwRCxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ2pCO0lBQ0gsQ0FBQztJQUNILGFBQUM7QUFBRCxDQUFDOzs7Ozs7OztVQ2ZEO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTjBDO0FBQ1o7QUFFOUIsSUFBTSxPQUFPLEdBQUcsSUFBSSxxREFBWSxFQUFFLENBQUM7QUFDbkMsSUFBTSxTQUFTLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUVqRCxJQUFJLEtBQUssR0FBRyxNQUFNLENBQUM7QUFFbkIsV0FBVyxDQUFDO0lBQ1YsSUFBTSxNQUFNLEdBQUcsSUFBSSwrQ0FBTSxDQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO0lBQzVDLE1BQU0sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDeEIsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGVzaWducGF0dGVybl90cy8uL3NyYy9mbHl3ZWlnaHQvRGlnaXQudHMiLCJ3ZWJwYWNrOi8vZGVzaWducGF0dGVybl90cy8uL3NyYy9mbHl3ZWlnaHQvRGlnaXRGYWN0b3J5LnRzIiwid2VicGFjazovL2Rlc2lnbnBhdHRlcm5fdHMvLi9zcmMvZmx5d2VpZ2h0L051bWJlci50cyIsIndlYnBhY2s6Ly9kZXNpZ25wYXR0ZXJuX3RzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Rlc2lnbnBhdHRlcm5fdHMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2Rlc2lnbnBhdHRlcm5fdHMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9kZXNpZ25wYXR0ZXJuX3RzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZGVzaWducGF0dGVybl90cy8uL3NyYy9mbHl3ZWlnaHQvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlnaXQge1xyXG4gIHByaXZhdGUgZGF0YTogQXJyYXk8c3RyaW5nPiA9IG51bGw7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdXJsOiBzdHJpbmcpIHt9XHJcblxyXG4gIHByaXZhdGUgbG9hZCh1cmw6IHN0cmluZywgZG9tT3V0cHV0OiBFbGVtZW50KSB7XHJcbiAgICBmZXRjaCh1cmwpXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKChqc29uKSA9PiB7XHJcbiAgICAgICAgdGhpcy5kYXRhID0ganNvbjtcclxuICAgICAgICBpZiAoZG9tT3V0cHV0KSB0aGlzLnB1dChkb21PdXRwdXQpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS53YXJuKGVycm9yKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBwdXQoZG9tOiBFbGVtZW50KTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMuZGF0YSkgdGhpcy5sb2FkKHRoaXMudXJsLCBkb20pO1xyXG4gICAgZWxzZSB7XHJcbiAgICAgIGRvbS5pbm5lckhUTUwgPSAnPGRpdiBjbGFzcz1cImRpZ2l0LWxheW91dFwiPjwvZGl2Pic7XHJcbiAgICAgIGNvbnN0IGRvbUxheW91dCA9IGRvbS5xdWVyeVNlbGVjdG9yKCcuZGlnaXQtbGF5b3V0Jyk7XHJcblxyXG4gICAgICB0aGlzLmRhdGEuZm9yRWFjaCgoaXRlbTogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbGVuID0gaXRlbS5sZW5ndGg7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkrKykge1xyXG4gICAgICAgICAgY29uc3QgZG9tQ2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgZG9tQ2VsbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBpdGVtW2ldID09PSAnMScgPyAnI2ZmMCcgOiAnIzMzMyc7XHJcbiAgICAgICAgICBkb21MYXlvdXQuYXBwZW5kKGRvbUNlbGwpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBEaWdpdCBmcm9tICcuL0RpZ2l0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpZ2l0RmFjdG9yeSB7XHJcbiAgcHJpdmF0ZSBwb29sOiBBcnJheTxEaWdpdCB8IG51bGw+ID0gW1xyXG4gICAgbnVsbCxcclxuICAgIG51bGwsXHJcbiAgICBudWxsLFxyXG4gICAgbnVsbCxcclxuICAgIG51bGwsXHJcbiAgICBudWxsLFxyXG4gICAgbnVsbCxcclxuICAgIG51bGwsXHJcbiAgICBudWxsLFxyXG4gICAgbnVsbCxcclxuICBdO1xyXG5cclxuICBnZXREaWdpdChuOiBudW1iZXIpOiBEaWdpdCB7XHJcbiAgICBpZiAoIXRoaXMucG9vbFtuXSkgdGhpcy5wb29sW25dID0gbmV3IERpZ2l0KGAuL2RhdGEvJHtufS5qc29uYCk7XHJcbiAgICByZXR1cm4gdGhpcy5wb29sW25dO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgRGlnaXRGYWN0b3J5IGZyb20gJy4vRGlnaXRGYWN0b3J5JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE51bWJlciB7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBmYWN0b3J5OiBEaWdpdEZhY3RvcnksIHByaXZhdGUgbnVtOiBudW1iZXIpIHt9XHJcblxyXG4gIHB1dChkb206IEVsZW1lbnQpIHtcclxuICAgIGNvbnN0IHN0ck51bSA9IHRoaXMubnVtLnRvU3RyaW5nKCk7XHJcbiAgICBjb25zdCBsZW4gPSBzdHJOdW0ubGVuZ3RoO1xyXG4gICAgZG9tLmlubmVySFRNTCA9ICcnO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkrKykge1xyXG4gICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgdGhpcy5mYWN0b3J5LmdldERpZ2l0KHBhcnNlSW50KHN0ck51bVtpXSkpLnB1dChkaXYpO1xyXG4gICAgICBkb20uYXBwZW5kKGRpdik7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IERpZ2l0RmFjdG9yeSBmcm9tICcuL0RpZ2l0RmFjdG9yeSc7XHJcbmltcG9ydCBOdW1iZXIgZnJvbSAnLi9OdW1iZXInO1xyXG5cclxuY29uc3QgZmFjdG9yeSA9IG5ldyBEaWdpdEZhY3RvcnkoKTtcclxuY29uc3QgZG9tVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RtcCcpO1xyXG5cclxubGV0IHZhbHVlID0gNDM0MzMxO1xyXG5cclxuc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gIGNvbnN0IG51bWJlciA9IG5ldyBOdW1iZXIoZmFjdG9yeSwgdmFsdWUrKyk7XHJcbiAgbnVtYmVyLnB1dChkb21UYXJnZXQpO1xyXG59LCAxMDApO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=