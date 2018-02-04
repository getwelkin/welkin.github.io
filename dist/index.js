/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
module.exports = __webpack_require__(5);


/***/ }),

/***/ 1:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_index__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_player__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_loading_pulser__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_loading_pulser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_loading_pulser__);




var routes = [{ path: '/', component: __WEBPACK_IMPORTED_MODULE_0__pages_index__["a" /* default */] }, { path: '/v/:id', component: __WEBPACK_IMPORTED_MODULE_1__pages_player__["a" /* default */] }];

var router = new VueRouter({ routes: routes, mode: 'history' });

var app = new Vue({
    el: '#app',
    router: router,
    data: {
        showPulser: false,
        initialized: false
    },
    components: {
        'loading-pulser': __WEBPACK_IMPORTED_MODULE_2__components_loading_pulser___default.a
    },
    mounted: function mounted() {
        this.initialized = true;
    },

    methods: {}
});

/***/ }),

/***/ 155:
/***/ (function(module, exports) {

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var JsonStore = function () {
    function JsonStore() {
        _classCallCheck(this, JsonStore);
    }

    _createClass(JsonStore, [{
        key: 'get',
        value: function get(id, inputCallback) {
            var xhr = new XMLHttpRequest();
            xhr.open('GET', 'https://api.myjson.com/bins/' + id, true);
            var callback = function callback(data) {
                data = JSON.parse(data);
                inputCallback(data);
            };
            xhr.onreadystatechange = function () {
                if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
                    callback(xhr.responseText);
                }
            };
            xhr.send();
        }
    }]);

    return JsonStore;
}();

module.exports = JsonStore;

/***/ }),

/***/ 2:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var page = {
    template: "\n         <main class=\"l-main\">\n        <section class=\"l-section--heading-font\">\n            <h1>The new <span class=\"t-font--accent\">watching</span> experience.</h1>\n        </section>\n        <section class=\"l-section--welkin\">\n            <img class=\"c-img--tool-loading\" alt=\"Coming soon\" src=\"/src/images/welkin-spinner.svg\">\n            <img class=\"c-img--tool-loading-logo\" alt=\"Logo\" src=\"/src/images/welkin-logo.png\">\n        </section>\n    </main>\n    "
};

/* harmony default export */ __webpack_exports__["a"] = (page);

/***/ }),

/***/ 3:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_json_store__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_json_store___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__services_json_store__);


var page = {
    template: '\n        <div>\n            <h1>Player</h1>\n            <pre>{{ data }}</pre>\n        </div>\n         \n    ',
    mounted: function mounted() {
        this.init();
    },

    methods: {
        init: function init() {
            var _this = this;

            var id = this.$route.params.id;
            var jsonStore = new __WEBPACK_IMPORTED_MODULE_0__services_json_store___default.a();
            var playerCallback = function playerCallback(data) {
                _this.data = data;
            };
            jsonStore.get(id, playerCallback);
        }
    },
    watch: {
        '$route': function $route() {
            this.init();
        }
    },
    data: function data() {
        return {
            data: null
        };
    }
};

/* harmony default export */ __webpack_exports__["a"] = (page);

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

var component = {
    props: ['show'],
    template: '\n        <div :class="{\'loading-pulser\': true, \'loading-pulser--hidden\': hidden, \'loading-pulser--hidden-opacity\': hiddenOpacity }">\n            <div class="loading-pulser__wrapper">\n                <svg class="loading-pulser__element loading-pulser__outer-circle" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0" y="0" width="600px" height="600px" viewBox="0 0 600 600" enable-background="new 0 0 600 600" xml:space="preserve">\n                    <linearGradient id="color-light-to-dark-1" gradientUnits="userSpaceOnUse" x1="21.0103" y1="301.6182" x2="578.4824" y2="301.6182">\n                        <stop  offset="0" style="stop-color:#A17AED;stop-opacity:0.7"/>\n                        <stop  offset="1" style="stop-color:#7D4DFE"/>\n                        <a:midPointStop  offset="0" style="stop-color:#A17AED;stop-opacity:0.7"/>\n                        <a:midPointStop  offset="0.5" style="stop-color:#A17AED;stop-opacity:0.7"/>\n                        <a:midPointStop  offset="1" style="stop-color:#7D4DFE"/>\n                    </linearGradient>\n                    <path opacity="0.1" fill="url(#color-light-to-dark-1)" d="M578.482,301.619c0,153.941-124.792,278.735-278.737,278.735\n                        c-153.94,0-278.735-124.794-278.735-278.735c0-153.938,124.795-278.737,278.735-278.737\n                        C453.69,22.882,578.482,147.681,578.482,301.619z"/>\n                </svg>\n                <svg class="loading-pulser__element loading-pulser__middle-circle" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0" y="0" width="600px" height="600px" viewBox="0 0 600 600" enable-background="new 0 0 600 600" xml:space="preserve">  \n                    <linearGradient id="color-light-to-dark-2" gradientUnits="userSpaceOnUse" x1="98.9536" y1="301.9492" x2="502.3525" y2="301.9492">\n                        <stop  offset="0" style="stop-color:#A17AED;stop-opacity:0.7"/>\n                        <stop  offset="1" style="stop-color:#7D4DFE"/>\n                        <a:midPointStop  offset="0" style="stop-color:#A17AED;stop-opacity:0.7"/>\n                        <a:midPointStop  offset="0.5" style="stop-color:#A17AED;stop-opacity:0.7"/>\n                        <a:midPointStop  offset="1" style="stop-color:#7D4DFE"/>\n                    </linearGradient>\n                    <path opacity="0.3" fill="url(#color-light-to-dark-2)" d="M502.353,301.947c0,109.322-90.303,197.935-201.7,197.935\n                        c-111.396,0-201.699-88.612-201.699-197.935c0-109.312,90.303-197.931,201.699-197.931\n                        C412.05,104.017,502.353,192.635,502.353,301.947z"/>\n                </svg>\n                <svg class="loading-pulser__element loading-pulser__inner-circle" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0" y="0" width="600px" height="600px" viewBox="0 0 600 600" enable-background="new 0 0 600 600" xml:space="preserve">\n                    <linearGradient id="color-light-to-dark-3" gradientUnits="userSpaceOnUse" x1="174.4541" y1="301.9287" x2="420.3408" y2="301.9287">\n                        <stop  offset="0" style="stop-color:#A17AED;stop-opacity:0.7"/>\n                        <stop  offset="1" style="stop-color:#7D4DFE"/>\n                        <a:midPointStop  offset="0" style="stop-color:#A17AED;stop-opacity:0.7"/>\n                        <a:midPointStop  offset="0.5" style="stop-color:#A17AED;stop-opacity:0.7"/>\n                        <a:midPointStop  offset="1" style="stop-color:#7D4DFE"/>\n                    </linearGradient>\n                    <circle opacity="0.5" fill="url(#color-light-to-dark-3)" cx="297.397" cy="301.932" r="122.943"/>\n                </svg>\n                <svg class="loading-pulser__element loading-pulser__logo" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0" y="0" width="600px" height="600px" viewBox="0 0 600 600" enable-background="new 0 0 600 600" xml:space="preserve">\n                    <image overflow="visible" width="1000" height="1000" xlink:href="src/images/logo/welkin-logo.png"  transform="matrix(0.096 0 0 0.096 251.3911 253.5962)"></image>\n                </svg>\n            </div>\n        </div>\n    ',
    data: function data() {
        return {
            'hiddenOpacity': true,
            'hidden': true
        };
    },
    watch: {
        'show': function show(_show) {
            var _this = this;

            if (_show) {
                this.hidden = false;
                setTimeout(function () {
                    _this.hiddenOpacity = false;
                }, 0);
            } else {
                this.hiddenOpacity = true;
                setTimeout(function () {
                    _this.hidden = true;
                }, 500);
            }
        }
    }
};

module.exports = component;

/***/ }),

/***/ 5:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

/******/ });