/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/mediator/CoolAircon.ts":
/*!************************************!*\
  !*** ./src/mediator/CoolAircon.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Participant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Participant */ "./src/mediator/Participant.ts");
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

var CoolAircon = /** @class */ (function (_super) {
    __extends(CoolAircon, _super);
    function CoolAircon(mediator) {
        var _this = _super.call(this, mediator) || this;
        _this.bOff = true;
        return _this;
    }
    CoolAircon.prototype.on = function () {
        if (!this.bOff)
            return;
        this.bOff = false;
        this.mediator.participantChanged(this);
    };
    CoolAircon.prototype.off = function () {
        if (this.bOff)
            return;
        this.bOff = true;
        this.mediator.participantChanged(this);
    };
    CoolAircon.prototype.isRunning = function () {
        return !this.bOff;
    };
    CoolAircon.prototype.displayState = function (dom) {
        dom.innerHTML = this.bOff ? '에어컨 꺼짐' : '에어컨 가동중';
        if (this.isRunning())
            dom.classList.add('hilighting');
        else
            dom.classList.remove('hilighting');
    };
    return CoolAircon;
}(_Participant__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CoolAircon);


/***/ }),

/***/ "./src/mediator/Door.ts":
/*!******************************!*\
  !*** ./src/mediator/Door.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Participant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Participant */ "./src/mediator/Participant.ts");
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

var Door = /** @class */ (function (_super) {
    __extends(Door, _super);
    function Door(mediator) {
        var _this = _super.call(this, mediator) || this;
        _this.bClosed = true;
        return _this;
    }
    Door.prototype.open = function () {
        if (!this.bClosed)
            return;
        this.bClosed = false;
        this.mediator.participantChanged(this);
    };
    Door.prototype.close = function () {
        if (this.bClosed)
            return;
        this.bClosed = true;
        this.mediator.participantChanged(this);
    };
    Door.prototype.isClosed = function () {
        return this.bClosed;
    };
    Door.prototype.displayState = function (dom) {
        dom.innerHTML = this.bClosed ? '문 닫힘' : '문 오픈';
        if (this.bClosed)
            dom.classList.remove('hilighting');
        else
            dom.classList.add('hilighting');
    };
    return Door;
}(_Participant__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Door);


/***/ }),

/***/ "./src/mediator/HeatBolier.ts":
/*!************************************!*\
  !*** ./src/mediator/HeatBolier.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Participant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Participant */ "./src/mediator/Participant.ts");
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

var HeatBoiler = /** @class */ (function (_super) {
    __extends(HeatBoiler, _super);
    function HeatBoiler(mediator) {
        var _this = _super.call(this, mediator) || this;
        _this.bOff = true;
        return _this;
    }
    HeatBoiler.prototype.on = function () {
        if (!this.bOff)
            return;
        this.bOff = false;
        this.mediator.participantChanged(this);
    };
    HeatBoiler.prototype.off = function () {
        if (this.bOff)
            return;
        this.bOff = true;
        this.mediator.participantChanged(this);
    };
    HeatBoiler.prototype.isRunning = function () {
        return !this.bOff;
    };
    HeatBoiler.prototype.displayState = function (dom) {
        dom.innerHTML = this.bOff ? '보일러 꺼짐' : '보일러 가동중';
        if (this.isRunning())
            dom.classList.add('hilighting');
        else
            dom.classList.remove('hilighting');
    };
    return HeatBoiler;
}(_Participant__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeatBoiler);


/***/ }),

/***/ "./src/mediator/Participant.ts":
/*!*************************************!*\
  !*** ./src/mediator/Participant.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Participant = /** @class */ (function () {
    function Participant(mediator) {
        this.mediator = mediator;
    }
    return Participant;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Participant);


/***/ }),

/***/ "./src/mediator/SmartHome.ts":
/*!***********************************!*\
  !*** ./src/mediator/SmartHome.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CoolAircon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CoolAircon */ "./src/mediator/CoolAircon.ts");
/* harmony import */ var _Door__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Door */ "./src/mediator/Door.ts");
/* harmony import */ var _HeatBolier__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HeatBolier */ "./src/mediator/HeatBolier.ts");
/* harmony import */ var _Window__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Window */ "./src/mediator/Window.ts");




var SmartHome = /** @class */ (function () {
    function SmartHome() {
        this.door = new _Door__WEBPACK_IMPORTED_MODULE_1__["default"](this);
        this.window = new _Window__WEBPACK_IMPORTED_MODULE_3__["default"](this);
        this.coolAircon = new _CoolAircon__WEBPACK_IMPORTED_MODULE_0__["default"](this);
        this.heatBoiler = new _HeatBolier__WEBPACK_IMPORTED_MODULE_2__["default"](this);
    }
    SmartHome.prototype.participantChanged = function (participant) {
        if (participant === this.door && !this.door.isClosed()) {
            this.coolAircon.off();
            this.heatBoiler.off();
        }
        if (participant === this.window && !this.window.isClosed()) {
            this.coolAircon.off();
            this.heatBoiler.off();
        }
        if (participant === this.coolAircon && this.coolAircon.isRunning()) {
            this.heatBoiler.off();
            this.window.close();
            this.door.close();
        }
        if (participant === this.heatBoiler && this.heatBoiler.isRunning()) {
            this.coolAircon.off();
            this.window.close();
            this.door.close();
        }
    };
    SmartHome.prototype.display = function () {
        var domDoor = document.querySelector('.door');
        var domWindow = document.querySelector('.window');
        var domCoolAircon = document.querySelector('.coolAircon');
        var domHeatBoiler = document.querySelector('.heatBoiler');
        this.door.displayState(domDoor);
        this.window.displayState(domWindow);
        this.coolAircon.displayState(domCoolAircon);
        this.heatBoiler.displayState(domHeatBoiler);
    };
    SmartHome.prototype.install = function () {
        var _this = this;
        var domDoor = document.querySelector('.door');
        var domWindow = document.querySelector('.window');
        var domCoolAircon = document.querySelector('.coolAircon');
        var domHeatBoiler = document.querySelector('.heatBoiler');
        domDoor.addEventListener('click', function () {
            _this.door.isClosed() ? _this.door.open() : _this.door.close();
            _this.display();
        });
        domWindow.addEventListener('click', function () {
            _this.window.isClosed() ? _this.window.open() : _this.window.close();
            _this.display();
        });
        domCoolAircon.addEventListener('click', function () {
            _this.coolAircon.isRunning()
                ? _this.coolAircon.off()
                : _this.coolAircon.on();
            _this.display();
        });
        domHeatBoiler.addEventListener('click', function () {
            _this.heatBoiler.isRunning()
                ? _this.heatBoiler.off()
                : _this.heatBoiler.on();
            _this.display();
        });
        this.display();
    };
    return SmartHome;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SmartHome);


/***/ }),

/***/ "./src/mediator/Window.ts":
/*!********************************!*\
  !*** ./src/mediator/Window.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Participant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Participant */ "./src/mediator/Participant.ts");
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

var Window = /** @class */ (function (_super) {
    __extends(Window, _super);
    function Window(mediator) {
        var _this = _super.call(this, mediator) || this;
        _this.bClosed = true;
        return _this;
    }
    Window.prototype.open = function () {
        if (!this.bClosed)
            return;
        this.bClosed = false;
        this.mediator.participantChanged(this);
    };
    Window.prototype.close = function () {
        if (this.bClosed)
            return;
        this.bClosed = true;
        this.mediator.participantChanged(this);
    };
    Window.prototype.isClosed = function () {
        return this.bClosed;
    };
    Window.prototype.displayState = function (dom) {
        dom.innerHTML = this.bClosed ? '창 닫힘' : '창 오픈';
        if (this.bClosed)
            dom.classList.remove('hilighting');
        else
            dom.classList.add('hilighting');
    };
    return Window;
}(_Participant__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Window);


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
  !*** ./src/mediator/index.ts ***!
  \*******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SmartHome__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SmartHome */ "./src/mediator/SmartHome.ts");

var home = new _SmartHome__WEBPACK_IMPORTED_MODULE_0__["default"]();
home.install();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTm9DO0FBRXBDLElBQU0sSUFBSSxHQUFHLElBQUksa0RBQVMsRUFBRSxDQUFDO0FBQzdCLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Rlc2lnbnBhdHRlcm5fdHMvLi9zcmMvbWVkaWF0b3IvQ29vbEFpcmNvbi50cyIsIndlYnBhY2s6Ly9kZXNpZ25wYXR0ZXJuX3RzLy4vc3JjL21lZGlhdG9yL0Rvb3IudHMiLCJ3ZWJwYWNrOi8vZGVzaWducGF0dGVybl90cy8uL3NyYy9tZWRpYXRvci9IZWF0Qm9saWVyLnRzIiwid2VicGFjazovL2Rlc2lnbnBhdHRlcm5fdHMvLi9zcmMvbWVkaWF0b3IvUGFydGljaXBhbnQudHMiLCJ3ZWJwYWNrOi8vZGVzaWducGF0dGVybl90cy8uL3NyYy9tZWRpYXRvci9TbWFydEhvbWUudHMiLCJ3ZWJwYWNrOi8vZGVzaWducGF0dGVybl90cy8uL3NyYy9tZWRpYXRvci9XaW5kb3cudHMiLCJ3ZWJwYWNrOi8vZGVzaWducGF0dGVybl90cy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9kZXNpZ25wYXR0ZXJuX3RzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9kZXNpZ25wYXR0ZXJuX3RzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZGVzaWducGF0dGVybl90cy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2Rlc2lnbnBhdHRlcm5fdHMvLi9zcmMvbWVkaWF0b3IvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1lZGlhdG9yIGZyb20gJy4vTWVkaWF0b3InO1xyXG5pbXBvcnQgUGFydGljaXBhbnQgZnJvbSAnLi9QYXJ0aWNpcGFudCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb29sQWlyY29uIGV4dGVuZHMgUGFydGljaXBhbnQge1xyXG4gIHByaXZhdGUgYk9mZiA9IHRydWU7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG1lZGlhdG9yOiBNZWRpYXRvcikge1xyXG4gICAgc3VwZXIobWVkaWF0b3IpO1xyXG4gIH1cclxuXHJcbiAgb24oKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMuYk9mZikgcmV0dXJuO1xyXG4gICAgdGhpcy5iT2ZmID0gZmFsc2U7XHJcbiAgICB0aGlzLm1lZGlhdG9yLnBhcnRpY2lwYW50Q2hhbmdlZCh0aGlzKTtcclxuICB9XHJcblxyXG4gIG9mZigpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmJPZmYpIHJldHVybjtcclxuICAgIHRoaXMuYk9mZiA9IHRydWU7XHJcbiAgICB0aGlzLm1lZGlhdG9yLnBhcnRpY2lwYW50Q2hhbmdlZCh0aGlzKTtcclxuICB9XHJcblxyXG4gIGlzUnVubmluZygpIHtcclxuICAgIHJldHVybiAhdGhpcy5iT2ZmO1xyXG4gIH1cclxuXHJcbiAgZGlzcGxheVN0YXRlKGRvbTogSFRNTEVsZW1lbnQpOiB2b2lkIHtcclxuICAgIGRvbS5pbm5lckhUTUwgPSB0aGlzLmJPZmYgPyAn7JeQ7Ja07LuoIOq6vOynkCcgOiAn7JeQ7Ja07LuoIOqwgOuPmeykkSc7XHJcblxyXG4gICAgaWYgKHRoaXMuaXNSdW5uaW5nKCkpIGRvbS5jbGFzc0xpc3QuYWRkKCdoaWxpZ2h0aW5nJyk7XHJcbiAgICBlbHNlIGRvbS5jbGFzc0xpc3QucmVtb3ZlKCdoaWxpZ2h0aW5nJyk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBNZWRpYXRvciBmcm9tICcuL01lZGlhdG9yJztcclxuaW1wb3J0IFBhcnRpY2lwYW50IGZyb20gJy4vUGFydGljaXBhbnQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRG9vciBleHRlbmRzIFBhcnRpY2lwYW50IHtcclxuICBwcml2YXRlIGJDbG9zZWQgPSB0cnVlO1xyXG5cclxuICBjb25zdHJ1Y3RvcihtZWRpYXRvcjogTWVkaWF0b3IpIHtcclxuICAgIHN1cGVyKG1lZGlhdG9yKTtcclxuICB9XHJcblxyXG4gIG9wZW4oKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMuYkNsb3NlZCkgcmV0dXJuO1xyXG4gICAgdGhpcy5iQ2xvc2VkID0gZmFsc2U7XHJcbiAgICB0aGlzLm1lZGlhdG9yLnBhcnRpY2lwYW50Q2hhbmdlZCh0aGlzKTtcclxuICB9XHJcblxyXG4gIGNsb3NlKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuYkNsb3NlZCkgcmV0dXJuO1xyXG4gICAgdGhpcy5iQ2xvc2VkID0gdHJ1ZTtcclxuICAgIHRoaXMubWVkaWF0b3IucGFydGljaXBhbnRDaGFuZ2VkKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgaXNDbG9zZWQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5iQ2xvc2VkO1xyXG4gIH1cclxuXHJcbiAgZGlzcGxheVN0YXRlKGRvbTogSFRNTEVsZW1lbnQpOiB2b2lkIHtcclxuICAgIGRvbS5pbm5lckhUTUwgPSB0aGlzLmJDbG9zZWQgPyAn66y4IOuLq+2emCcgOiAn66y4IOyYpO2UiCc7XHJcblxyXG4gICAgaWYgKHRoaXMuYkNsb3NlZCkgZG9tLmNsYXNzTGlzdC5yZW1vdmUoJ2hpbGlnaHRpbmcnKTtcclxuICAgIGVsc2UgZG9tLmNsYXNzTGlzdC5hZGQoJ2hpbGlnaHRpbmcnKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IE1lZGlhdG9yIGZyb20gJy4vTWVkaWF0b3InO1xyXG5pbXBvcnQgUGFydGljaXBhbnQgZnJvbSAnLi9QYXJ0aWNpcGFudCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIZWF0Qm9pbGVyIGV4dGVuZHMgUGFydGljaXBhbnQge1xyXG4gIHByaXZhdGUgYk9mZiA9IHRydWU7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG1lZGlhdG9yOiBNZWRpYXRvcikge1xyXG4gICAgc3VwZXIobWVkaWF0b3IpO1xyXG4gIH1cclxuXHJcbiAgb24oKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMuYk9mZikgcmV0dXJuO1xyXG4gICAgdGhpcy5iT2ZmID0gZmFsc2U7XHJcbiAgICB0aGlzLm1lZGlhdG9yLnBhcnRpY2lwYW50Q2hhbmdlZCh0aGlzKTtcclxuICB9XHJcblxyXG4gIG9mZigpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmJPZmYpIHJldHVybjtcclxuICAgIHRoaXMuYk9mZiA9IHRydWU7XHJcbiAgICB0aGlzLm1lZGlhdG9yLnBhcnRpY2lwYW50Q2hhbmdlZCh0aGlzKTtcclxuICB9XHJcblxyXG4gIGlzUnVubmluZygpIHtcclxuICAgIHJldHVybiAhdGhpcy5iT2ZmO1xyXG4gIH1cclxuXHJcbiAgZGlzcGxheVN0YXRlKGRvbTogSFRNTEVsZW1lbnQpOiB2b2lkIHtcclxuICAgIGRvbS5pbm5lckhUTUwgPSB0aGlzLmJPZmYgPyAn67O07J2865+sIOq6vOynkCcgOiAn67O07J2865+sIOqwgOuPmeykkSc7XHJcblxyXG4gICAgaWYgKHRoaXMuaXNSdW5uaW5nKCkpIGRvbS5jbGFzc0xpc3QuYWRkKCdoaWxpZ2h0aW5nJyk7XHJcbiAgICBlbHNlIGRvbS5jbGFzc0xpc3QucmVtb3ZlKCdoaWxpZ2h0aW5nJyk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBNZWRpYXRvciBmcm9tICcuL01lZGlhdG9yJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIFBhcnRpY2lwYW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgbWVkaWF0b3I6IE1lZGlhdG9yKSB7fVxyXG4gIGFic3RyYWN0IGRpc3BsYXlTdGF0ZShkb206IEhUTUxFbGVtZW50KTogdm9pZDtcclxufVxyXG4iLCJpbXBvcnQgQ29vbEFpcmNvbiBmcm9tICcuL0Nvb2xBaXJjb24nO1xyXG5pbXBvcnQgRG9vciBmcm9tICcuL0Rvb3InO1xyXG5pbXBvcnQgSGVhdEJvaWxlciBmcm9tICcuL0hlYXRCb2xpZXInO1xyXG5pbXBvcnQgTWVkaWF0b3IgZnJvbSAnLi9NZWRpYXRvcic7XHJcbmltcG9ydCBQYXJ0aWNpcGFudCBmcm9tICcuL1BhcnRpY2lwYW50JztcclxuaW1wb3J0IFdpbmRvdyBmcm9tICcuL1dpbmRvdyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTbWFydEhvbWUgaW1wbGVtZW50cyBNZWRpYXRvciB7XHJcbiAgZG9vciA9IG5ldyBEb29yKHRoaXMpO1xyXG4gIHdpbmRvdyA9IG5ldyBXaW5kb3codGhpcyk7XHJcbiAgY29vbEFpcmNvbiA9IG5ldyBDb29sQWlyY29uKHRoaXMpO1xyXG4gIGhlYXRCb2lsZXIgPSBuZXcgSGVhdEJvaWxlcih0aGlzKTtcclxuXHJcbiAgcGFydGljaXBhbnRDaGFuZ2VkKHBhcnRpY2lwYW50OiBQYXJ0aWNpcGFudCk6IHZvaWQge1xyXG4gICAgaWYgKHBhcnRpY2lwYW50ID09PSB0aGlzLmRvb3IgJiYgIXRoaXMuZG9vci5pc0Nsb3NlZCgpKSB7XHJcbiAgICAgIHRoaXMuY29vbEFpcmNvbi5vZmYoKTtcclxuICAgICAgdGhpcy5oZWF0Qm9pbGVyLm9mZigpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChwYXJ0aWNpcGFudCA9PT0gdGhpcy53aW5kb3cgJiYgIXRoaXMud2luZG93LmlzQ2xvc2VkKCkpIHtcclxuICAgICAgdGhpcy5jb29sQWlyY29uLm9mZigpO1xyXG4gICAgICB0aGlzLmhlYXRCb2lsZXIub2ZmKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHBhcnRpY2lwYW50ID09PSB0aGlzLmNvb2xBaXJjb24gJiYgdGhpcy5jb29sQWlyY29uLmlzUnVubmluZygpKSB7XHJcbiAgICAgIHRoaXMuaGVhdEJvaWxlci5vZmYoKTtcclxuICAgICAgdGhpcy53aW5kb3cuY2xvc2UoKTtcclxuICAgICAgdGhpcy5kb29yLmNsb3NlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHBhcnRpY2lwYW50ID09PSB0aGlzLmhlYXRCb2lsZXIgJiYgdGhpcy5oZWF0Qm9pbGVyLmlzUnVubmluZygpKSB7XHJcbiAgICAgIHRoaXMuY29vbEFpcmNvbi5vZmYoKTtcclxuICAgICAgdGhpcy53aW5kb3cuY2xvc2UoKTtcclxuICAgICAgdGhpcy5kb29yLmNsb3NlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBkaXNwbGF5KCkge1xyXG4gICAgY29uc3QgZG9tRG9vciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kb29yJykgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICBjb25zdCBkb21XaW5kb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2luZG93JykgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICBjb25zdCBkb21Db29sQWlyY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvb2xBaXJjb24nKSBhcyBIVE1MRWxlbWVudDtcclxuICAgIGNvbnN0IGRvbUhlYXRCb2lsZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhdEJvaWxlcicpIGFzIEhUTUxFbGVtZW50O1xyXG5cclxuICAgIHRoaXMuZG9vci5kaXNwbGF5U3RhdGUoZG9tRG9vcik7XHJcbiAgICB0aGlzLndpbmRvdy5kaXNwbGF5U3RhdGUoZG9tV2luZG93KTtcclxuICAgIHRoaXMuY29vbEFpcmNvbi5kaXNwbGF5U3RhdGUoZG9tQ29vbEFpcmNvbik7XHJcbiAgICB0aGlzLmhlYXRCb2lsZXIuZGlzcGxheVN0YXRlKGRvbUhlYXRCb2lsZXIpO1xyXG4gIH1cclxuXHJcbiAgaW5zdGFsbCgpIHtcclxuICAgIGNvbnN0IGRvbURvb3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZG9vcicpIGFzIEhUTUxFbGVtZW50O1xyXG4gICAgY29uc3QgZG9tV2luZG93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndpbmRvdycpIGFzIEhUTUxFbGVtZW50O1xyXG4gICAgY29uc3QgZG9tQ29vbEFpcmNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb29sQWlyY29uJykgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICBjb25zdCBkb21IZWF0Qm9pbGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYXRCb2lsZXInKSBhcyBIVE1MRWxlbWVudDtcclxuXHJcbiAgICBkb21Eb29yLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICB0aGlzLmRvb3IuaXNDbG9zZWQoKSA/IHRoaXMuZG9vci5vcGVuKCkgOiB0aGlzLmRvb3IuY2xvc2UoKTtcclxuICAgICAgdGhpcy5kaXNwbGF5KCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBkb21XaW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMud2luZG93LmlzQ2xvc2VkKCkgPyB0aGlzLndpbmRvdy5vcGVuKCkgOiB0aGlzLndpbmRvdy5jbG9zZSgpO1xyXG4gICAgICB0aGlzLmRpc3BsYXkoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGRvbUNvb2xBaXJjb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMuY29vbEFpcmNvbi5pc1J1bm5pbmcoKVxyXG4gICAgICAgID8gdGhpcy5jb29sQWlyY29uLm9mZigpXHJcbiAgICAgICAgOiB0aGlzLmNvb2xBaXJjb24ub24oKTtcclxuICAgICAgdGhpcy5kaXNwbGF5KCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBkb21IZWF0Qm9pbGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICB0aGlzLmhlYXRCb2lsZXIuaXNSdW5uaW5nKClcclxuICAgICAgICA/IHRoaXMuaGVhdEJvaWxlci5vZmYoKVxyXG4gICAgICAgIDogdGhpcy5oZWF0Qm9pbGVyLm9uKCk7XHJcbiAgICAgIHRoaXMuZGlzcGxheSgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5kaXNwbGF5KCk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBNZWRpYXRvciBmcm9tICcuL01lZGlhdG9yJztcclxuaW1wb3J0IFBhcnRpY2lwYW50IGZyb20gJy4vUGFydGljaXBhbnQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2luZG93IGV4dGVuZHMgUGFydGljaXBhbnQge1xyXG4gIHByaXZhdGUgYkNsb3NlZCA9IHRydWU7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG1lZGlhdG9yOiBNZWRpYXRvcikge1xyXG4gICAgc3VwZXIobWVkaWF0b3IpO1xyXG4gIH1cclxuXHJcbiAgb3BlbigpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5iQ2xvc2VkKSByZXR1cm47XHJcbiAgICB0aGlzLmJDbG9zZWQgPSBmYWxzZTtcclxuICAgIHRoaXMubWVkaWF0b3IucGFydGljaXBhbnRDaGFuZ2VkKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgY2xvc2UoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5iQ2xvc2VkKSByZXR1cm47XHJcbiAgICB0aGlzLmJDbG9zZWQgPSB0cnVlO1xyXG4gICAgdGhpcy5tZWRpYXRvci5wYXJ0aWNpcGFudENoYW5nZWQodGhpcyk7XHJcbiAgfVxyXG5cclxuICBpc0Nsb3NlZCgpIHtcclxuICAgIHJldHVybiB0aGlzLmJDbG9zZWQ7XHJcbiAgfVxyXG5cclxuICBkaXNwbGF5U3RhdGUoZG9tOiBIVE1MRWxlbWVudCk6IHZvaWQge1xyXG4gICAgZG9tLmlubmVySFRNTCA9IHRoaXMuYkNsb3NlZCA/ICfssL0g64ur7Z6YJyA6ICfssL0g7Jik7ZSIJztcclxuXHJcbiAgICBpZiAodGhpcy5iQ2xvc2VkKSBkb20uY2xhc3NMaXN0LnJlbW92ZSgnaGlsaWdodGluZycpO1xyXG4gICAgZWxzZSBkb20uY2xhc3NMaXN0LmFkZCgnaGlsaWdodGluZycpO1xyXG4gIH1cclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBTbWFydEhvbWUgZnJvbSAnLi9TbWFydEhvbWUnO1xyXG5cclxuY29uc3QgaG9tZSA9IG5ldyBTbWFydEhvbWUoKTtcclxuaG9tZS5pbnN0YWxsKCk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==