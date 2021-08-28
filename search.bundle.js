/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/search.js":
/*!*******************************!*\
  !*** ./src/scripts/search.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "searchEventListener": () => (/* binding */ searchEventListener)
/* harmony export */ });
/* harmony import */ var _weatherData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weatherData */ "./src/scripts/weatherData.js");


// @ts-check

/**
 * @module Events
 */

const fetchClickInfo = async () => {
  const input = document.querySelector("input");
  const info = await (0,_weatherData__WEBPACK_IMPORTED_MODULE_0__.retrieveInformation)(input.value);
  console.log(info);
};

const fetchKeyInfo = async (event) => {
  if (event.keyCode === 13) {
    event.preventDefault();
    const input = document.querySelector("input");
    const info = await (0,_weatherData__WEBPACK_IMPORTED_MODULE_0__.retrieveInformation)(input.value);
    console.log(info);
  }
};

const searchEventListener = (data) => {
  data.addEventListener("click", fetchClickInfo);
  data.nextElementSibling.addEventListener("keydown", fetchKeyInfo);
};

console.log("a");




/***/ }),

/***/ "./src/scripts/weatherData.js":
/*!************************************!*\
  !*** ./src/scripts/weatherData.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "retrieveInformation": () => (/* binding */ retrieveInformation)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isAfter/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/format/index.js");


// @ts-check

/**
 * @module WeatherData
 */

/**
 *Finds weather forecast of given location
 * @param {string} location
 * @param {string} standard
 * @return {Promise<any>}
 */
const findLocationWeather = async (location, standard) => {
  try {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=81d1f6e5ed77f7c8c9da1dcc073ad7c6&units=${standard}`,
      { mode: "cors" }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

/** Creates weather information objects */
class InformationMaker {
  /**
   * Object constructor
   * @param {Object} retrievedData - Retrieved data from API
   * @param {String} standard
   */
  constructor(retrievedData, standard) {
    this.country = retrievedData.sys.country;
    this.city = retrievedData.name;
    this.humidity = retrievedData.main.humidity + "%";
    this.sunrise = retrievedData.sys.sunrise;
    this.sunset = retrievedData.sys.sunset;
    this.date = retrievedData.dt;
    this.icon = `http://openweathermap.org/img/wn/${retrievedData.weather[0].icon}@2x.png`;
    if (retrievedData.rain["1h"]) {
      this.rainVolume = retrievedData.rain["1h"] + "mm";
    }
    if (retrievedData.snow["1h"]) {
      this.snowVolume = retrievedData.snow["1h"] + "mm";
    }
    this.description = retrievedData.weather[0].description;
    this.pressure = retrievedData.main.pressure + "hPa";
    if (standard === "metric") {
      this.feelsLike = retrievedData.main.feels_like + "\u00B0C";
      this.temperature = retrievedData.main.temp + "\u00B0C";
      this.minTemperature = retrievedData.main.temp_min + "\u00B0C";
      this.maxTemperature = retrievedData.main.temp_max + "\u00B0C";
      this.windSpeed = retrievedData.wind.speed + "m/s";
    } else {
      this.feelsLike = retrievedData.main.feels_like + "\u00B0F";
      this.temperature = retrievedData.main.temp + "\u00B0F";
      this.minTemperature = retrievedData.main.temp_min + "\u00B0C";
      this.maxTemperature = retrievedData.main.temp_max + "\u00B0C";
      this.windSpeed = retrievedData.wind.speed + "miles/hour";
    }
  }
  /**
   * Checks if its currently day or night
   * @return {string}
   */
  getDayOrNight() {
    const currentTime = new Date();
    const sunRise = new Date(this.sunrise * 1000);
    const sunSet = new Date(this.sunset * 1000);
    if (!(0,date_fns__WEBPACK_IMPORTED_MODULE_0__.default)(currentTime, sunRise)) {
      return "Night";
    } else if (!(0,date_fns__WEBPACK_IMPORTED_MODULE_0__.default)(currentTime, sunSet)) {
      return "Day";
    } else {
      return "Night";
    }
  }
  /**
   * get full location
   * @return {string}
   */
  getfullLocation() {
    return `${this.city}, ${this.country}`;
  }
  /**
   * get full date
   * @return {string}
   */
  getDate() {
    return (0,date_fns__WEBPACK_IMPORTED_MODULE_1__.default)(new Date(this.date * 1000), "PPPP");
  }
  /**
   * get full time
   * @return {string}
   */
  getTime() {
    return (0,date_fns__WEBPACK_IMPORTED_MODULE_1__.default)(new Date(this.date * 1000), "p");
  }
}

/**
 * Retrieve weather information about location
 * @param {string} location
 * @param {string} standard
 * @return {Promise<any>} - A promise that resolves to weather information
 */
const retrieveInformation = async (location = "Lagos", standard = "metric") => {
  try {
    const data = await findLocationWeather(location, standard);
    if (data.cod === 200) {
      data.snow = data.snow || 0;
      data.rain = data.rain || 0;
      const information = new InformationMaker(data, standard);
      return information;
    } else {
      console.log(data.message);
    }
  } catch (err) {
    console.error(err);
  }
};




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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"search": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkweatherapp"] = self["webpackChunkweatherapp"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_date-fns_esm_format_index_js-node_modules_date-fns_esm_isAfter_index_js"], () => (__webpack_require__("./src/scripts/search.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL3NjcmlwdHMvc2VhcmNoLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvc2NyaXB0cy93ZWF0aGVyRGF0YS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXJhcHAvd2VicGFjay9ydW50aW1lL2NodW5rIGxvYWRlZCIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXJhcHAvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3dlYXRoZXJhcHAvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3dlYXRoZXJhcHAvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJldHJpZXZlSW5mb3JtYXRpb24gfSBmcm9tIFwiLi93ZWF0aGVyRGF0YVwiO1xuXG4vLyBAdHMtY2hlY2tcblxuLyoqXG4gKiBAbW9kdWxlIEV2ZW50c1xuICovXG5cbmNvbnN0IGZldGNoQ2xpY2tJbmZvID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKTtcbiAgY29uc3QgaW5mbyA9IGF3YWl0IHJldHJpZXZlSW5mb3JtYXRpb24oaW5wdXQudmFsdWUpO1xuICBjb25zb2xlLmxvZyhpbmZvKTtcbn07XG5cbmNvbnN0IGZldGNoS2V5SW5mbyA9IGFzeW5jIChldmVudCkgPT4ge1xuICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMTMpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0XCIpO1xuICAgIGNvbnN0IGluZm8gPSBhd2FpdCByZXRyaWV2ZUluZm9ybWF0aW9uKGlucHV0LnZhbHVlKTtcbiAgICBjb25zb2xlLmxvZyhpbmZvKTtcbiAgfVxufTtcblxuY29uc3Qgc2VhcmNoRXZlbnRMaXN0ZW5lciA9IChkYXRhKSA9PiB7XG4gIGRhdGEuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZldGNoQ2xpY2tJbmZvKTtcbiAgZGF0YS5uZXh0RWxlbWVudFNpYmxpbmcuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZmV0Y2hLZXlJbmZvKTtcbn07XG5cbmNvbnNvbGUubG9nKFwiYVwiKTtcblxuZXhwb3J0IHsgc2VhcmNoRXZlbnRMaXN0ZW5lciB9O1xuIiwiaW1wb3J0IHsgaXNBZnRlciwgZm9ybWF0IH0gZnJvbSBcImRhdGUtZm5zXCI7XG5cbi8vIEB0cy1jaGVja1xuXG4vKipcbiAqIEBtb2R1bGUgV2VhdGhlckRhdGFcbiAqL1xuXG4vKipcbiAqRmluZHMgd2VhdGhlciBmb3JlY2FzdCBvZiBnaXZlbiBsb2NhdGlvblxuICogQHBhcmFtIHtzdHJpbmd9IGxvY2F0aW9uXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RhbmRhcmRcbiAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn1cbiAqL1xuY29uc3QgZmluZExvY2F0aW9uV2VhdGhlciA9IGFzeW5jIChsb2NhdGlvbiwgc3RhbmRhcmQpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgYGh0dHA6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0ke2xvY2F0aW9ufSZBUFBJRD04MWQxZjZlNWVkNzdmN2M4YzlkYTFkY2MwNzNhZDdjNiZ1bml0cz0ke3N0YW5kYXJkfWAsXG4gICAgICB7IG1vZGU6IFwiY29yc1wiIH1cbiAgICApO1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgcmV0dXJuIGRhdGE7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGVycm9yKTtcbiAgfVxufTtcblxuLyoqIENyZWF0ZXMgd2VhdGhlciBpbmZvcm1hdGlvbiBvYmplY3RzICovXG5jbGFzcyBJbmZvcm1hdGlvbk1ha2VyIHtcbiAgLyoqXG4gICAqIE9iamVjdCBjb25zdHJ1Y3RvclxuICAgKiBAcGFyYW0ge09iamVjdH0gcmV0cmlldmVkRGF0YSAtIFJldHJpZXZlZCBkYXRhIGZyb20gQVBJXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBzdGFuZGFyZFxuICAgKi9cbiAgY29uc3RydWN0b3IocmV0cmlldmVkRGF0YSwgc3RhbmRhcmQpIHtcbiAgICB0aGlzLmNvdW50cnkgPSByZXRyaWV2ZWREYXRhLnN5cy5jb3VudHJ5O1xuICAgIHRoaXMuY2l0eSA9IHJldHJpZXZlZERhdGEubmFtZTtcbiAgICB0aGlzLmh1bWlkaXR5ID0gcmV0cmlldmVkRGF0YS5tYWluLmh1bWlkaXR5ICsgXCIlXCI7XG4gICAgdGhpcy5zdW5yaXNlID0gcmV0cmlldmVkRGF0YS5zeXMuc3VucmlzZTtcbiAgICB0aGlzLnN1bnNldCA9IHJldHJpZXZlZERhdGEuc3lzLnN1bnNldDtcbiAgICB0aGlzLmRhdGUgPSByZXRyaWV2ZWREYXRhLmR0O1xuICAgIHRoaXMuaWNvbiA9IGBodHRwOi8vb3BlbndlYXRoZXJtYXAub3JnL2ltZy93bi8ke3JldHJpZXZlZERhdGEud2VhdGhlclswXS5pY29ufUAyeC5wbmdgO1xuICAgIGlmIChyZXRyaWV2ZWREYXRhLnJhaW5bXCIxaFwiXSkge1xuICAgICAgdGhpcy5yYWluVm9sdW1lID0gcmV0cmlldmVkRGF0YS5yYWluW1wiMWhcIl0gKyBcIm1tXCI7XG4gICAgfVxuICAgIGlmIChyZXRyaWV2ZWREYXRhLnNub3dbXCIxaFwiXSkge1xuICAgICAgdGhpcy5zbm93Vm9sdW1lID0gcmV0cmlldmVkRGF0YS5zbm93W1wiMWhcIl0gKyBcIm1tXCI7XG4gICAgfVxuICAgIHRoaXMuZGVzY3JpcHRpb24gPSByZXRyaWV2ZWREYXRhLndlYXRoZXJbMF0uZGVzY3JpcHRpb247XG4gICAgdGhpcy5wcmVzc3VyZSA9IHJldHJpZXZlZERhdGEubWFpbi5wcmVzc3VyZSArIFwiaFBhXCI7XG4gICAgaWYgKHN0YW5kYXJkID09PSBcIm1ldHJpY1wiKSB7XG4gICAgICB0aGlzLmZlZWxzTGlrZSA9IHJldHJpZXZlZERhdGEubWFpbi5mZWVsc19saWtlICsgXCJcXHUwMEIwQ1wiO1xuICAgICAgdGhpcy50ZW1wZXJhdHVyZSA9IHJldHJpZXZlZERhdGEubWFpbi50ZW1wICsgXCJcXHUwMEIwQ1wiO1xuICAgICAgdGhpcy5taW5UZW1wZXJhdHVyZSA9IHJldHJpZXZlZERhdGEubWFpbi50ZW1wX21pbiArIFwiXFx1MDBCMENcIjtcbiAgICAgIHRoaXMubWF4VGVtcGVyYXR1cmUgPSByZXRyaWV2ZWREYXRhLm1haW4udGVtcF9tYXggKyBcIlxcdTAwQjBDXCI7XG4gICAgICB0aGlzLndpbmRTcGVlZCA9IHJldHJpZXZlZERhdGEud2luZC5zcGVlZCArIFwibS9zXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZmVlbHNMaWtlID0gcmV0cmlldmVkRGF0YS5tYWluLmZlZWxzX2xpa2UgKyBcIlxcdTAwQjBGXCI7XG4gICAgICB0aGlzLnRlbXBlcmF0dXJlID0gcmV0cmlldmVkRGF0YS5tYWluLnRlbXAgKyBcIlxcdTAwQjBGXCI7XG4gICAgICB0aGlzLm1pblRlbXBlcmF0dXJlID0gcmV0cmlldmVkRGF0YS5tYWluLnRlbXBfbWluICsgXCJcXHUwMEIwQ1wiO1xuICAgICAgdGhpcy5tYXhUZW1wZXJhdHVyZSA9IHJldHJpZXZlZERhdGEubWFpbi50ZW1wX21heCArIFwiXFx1MDBCMENcIjtcbiAgICAgIHRoaXMud2luZFNwZWVkID0gcmV0cmlldmVkRGF0YS53aW5kLnNwZWVkICsgXCJtaWxlcy9ob3VyXCI7XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBDaGVja3MgaWYgaXRzIGN1cnJlbnRseSBkYXkgb3IgbmlnaHRcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgZ2V0RGF5T3JOaWdodCgpIHtcbiAgICBjb25zdCBjdXJyZW50VGltZSA9IG5ldyBEYXRlKCk7XG4gICAgY29uc3Qgc3VuUmlzZSA9IG5ldyBEYXRlKHRoaXMuc3VucmlzZSAqIDEwMDApO1xuICAgIGNvbnN0IHN1blNldCA9IG5ldyBEYXRlKHRoaXMuc3Vuc2V0ICogMTAwMCk7XG4gICAgaWYgKCFpc0FmdGVyKGN1cnJlbnRUaW1lLCBzdW5SaXNlKSkge1xuICAgICAgcmV0dXJuIFwiTmlnaHRcIjtcbiAgICB9IGVsc2UgaWYgKCFpc0FmdGVyKGN1cnJlbnRUaW1lLCBzdW5TZXQpKSB7XG4gICAgICByZXR1cm4gXCJEYXlcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIFwiTmlnaHRcIjtcbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIGdldCBmdWxsIGxvY2F0aW9uXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIGdldGZ1bGxMb2NhdGlvbigpIHtcbiAgICByZXR1cm4gYCR7dGhpcy5jaXR5fSwgJHt0aGlzLmNvdW50cnl9YDtcbiAgfVxuICAvKipcbiAgICogZ2V0IGZ1bGwgZGF0ZVxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICBnZXREYXRlKCkge1xuICAgIHJldHVybiBmb3JtYXQobmV3IERhdGUodGhpcy5kYXRlICogMTAwMCksIFwiUFBQUFwiKTtcbiAgfVxuICAvKipcbiAgICogZ2V0IGZ1bGwgdGltZVxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICBnZXRUaW1lKCkge1xuICAgIHJldHVybiBmb3JtYXQobmV3IERhdGUodGhpcy5kYXRlICogMTAwMCksIFwicFwiKTtcbiAgfVxufVxuXG4vKipcbiAqIFJldHJpZXZlIHdlYXRoZXIgaW5mb3JtYXRpb24gYWJvdXQgbG9jYXRpb25cbiAqIEBwYXJhbSB7c3RyaW5nfSBsb2NhdGlvblxuICogQHBhcmFtIHtzdHJpbmd9IHN0YW5kYXJkXG4gKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IC0gQSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgdG8gd2VhdGhlciBpbmZvcm1hdGlvblxuICovXG5jb25zdCByZXRyaWV2ZUluZm9ybWF0aW9uID0gYXN5bmMgKGxvY2F0aW9uID0gXCJMYWdvc1wiLCBzdGFuZGFyZCA9IFwibWV0cmljXCIpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgZmluZExvY2F0aW9uV2VhdGhlcihsb2NhdGlvbiwgc3RhbmRhcmQpO1xuICAgIGlmIChkYXRhLmNvZCA9PT0gMjAwKSB7XG4gICAgICBkYXRhLnNub3cgPSBkYXRhLnNub3cgfHwgMDtcbiAgICAgIGRhdGEucmFpbiA9IGRhdGEucmFpbiB8fCAwO1xuICAgICAgY29uc3QgaW5mb3JtYXRpb24gPSBuZXcgSW5mb3JtYXRpb25NYWtlcihkYXRhLCBzdGFuZGFyZCk7XG4gICAgICByZXR1cm4gaW5mb3JtYXRpb247XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEubWVzc2FnZSk7XG4gICAgfVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycik7XG4gIH1cbn07XG5cbmV4cG9ydCB7IHJldHJpZXZlSW5mb3JtYXRpb24gfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwidmFyIGRlZmVycmVkID0gW107XG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8gPSAocmVzdWx0LCBjaHVua0lkcywgZm4sIHByaW9yaXR5KSA9PiB7XG5cdGlmKGNodW5rSWRzKSB7XG5cdFx0cHJpb3JpdHkgPSBwcmlvcml0eSB8fCAwO1xuXHRcdGZvcih2YXIgaSA9IGRlZmVycmVkLmxlbmd0aDsgaSA+IDAgJiYgZGVmZXJyZWRbaSAtIDFdWzJdID4gcHJpb3JpdHk7IGktLSkgZGVmZXJyZWRbaV0gPSBkZWZlcnJlZFtpIC0gMV07XG5cdFx0ZGVmZXJyZWRbaV0gPSBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV07XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHZhciBub3RGdWxmaWxsZWQgPSBJbmZpbml0eTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV0gPSBkZWZlcnJlZFtpXTtcblx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGNodW5rSWRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRpZiAoKHByaW9yaXR5ICYgMSA9PT0gMCB8fCBub3RGdWxmaWxsZWQgPj0gcHJpb3JpdHkpICYmIE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uTykuZXZlcnkoKGtleSkgPT4gKF9fd2VicGFja19yZXF1aXJlX18uT1trZXldKGNodW5rSWRzW2pdKSkpKSB7XG5cdFx0XHRcdGNodW5rSWRzLnNwbGljZShqLS0sIDEpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZnVsZmlsbGVkID0gZmFsc2U7XG5cdFx0XHRcdGlmKHByaW9yaXR5IDwgbm90RnVsZmlsbGVkKSBub3RGdWxmaWxsZWQgPSBwcmlvcml0eTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYoZnVsZmlsbGVkKSB7XG5cdFx0XHRkZWZlcnJlZC5zcGxpY2UoaS0tLCAxKVxuXHRcdFx0dmFyIHIgPSBmbigpO1xuXHRcdFx0aWYgKHIgIT09IHVuZGVmaW5lZCkgcmVzdWx0ID0gcjtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIG5vIGJhc2VVUklcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcInNlYXJjaFwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8uaiA9IChjaHVua0lkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID09PSAwKTtcblxuLy8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG52YXIgd2VicGFja0pzb25wQ2FsbGJhY2sgPSAocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24sIGRhdGEpID0+IHtcblx0dmFyIFtjaHVua0lkcywgbW9yZU1vZHVsZXMsIHJ1bnRpbWVdID0gZGF0YTtcblx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG5cdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuXHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwO1xuXHRpZihjaHVua0lkcy5zb21lKChpZCkgPT4gKGluc3RhbGxlZENodW5rc1tpZF0gIT09IDApKSkge1xuXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYocnVudGltZSkgdmFyIHJlc3VsdCA9IHJ1bnRpbWUoX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdH1cblx0aWYocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24pIHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKGRhdGEpO1xuXHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuXHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSgpO1xuXHRcdH1cblx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZHNbaV1dID0gMDtcblx0fVxuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHJlc3VsdCk7XG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5rd2VhdGhlcmFwcFwiXSA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmt3ZWF0aGVyYXBwXCJdIHx8IFtdO1xuY2h1bmtMb2FkaW5nR2xvYmFsLmZvckVhY2god2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCAwKSk7XG5jaHVua0xvYWRpbmdHbG9iYWwucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpKTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGRlcGVuZHMgb24gb3RoZXIgbG9hZGVkIGNodW5rcyBhbmQgZXhlY3V0aW9uIG5lZWQgdG8gYmUgZGVsYXllZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc19kYXRlLWZuc19lc21fZm9ybWF0X2luZGV4X2pzLW5vZGVfbW9kdWxlc19kYXRlLWZuc19lc21faXNBZnRlcl9pbmRleF9qc1wiXSwgKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9zY3JpcHRzL3NlYXJjaC5qc1wiKSkpXG5fX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKF9fd2VicGFja19leHBvcnRzX18pO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9