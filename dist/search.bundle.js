/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/pubsub.js":
/*!*******************************!*\
  !*** ./src/scripts/pubsub.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "publish": () => (/* binding */ publish),
/* harmony export */   "unsubscribe": () => (/* binding */ unsubscribe),
/* harmony export */   "subscribe": () => (/* binding */ subscribe)
/* harmony export */ });
// @ts-check

/**
 * @module pubsub
 */

/**
 * @return {Object}
 */

const events = {};

/**
 * Subscribe to an event
 * @param {string} eventName - Name of the event
 * @param {Function} fn - Function to be called
 */
const subscribe = function (eventName, fn) {
  events[eventName] = events[eventName] || [];
  events[eventName].push(fn);
};

/**
 * Unsuscribe from an event
 * @param {string} eventName - Name of the event
 * @param {Function} fn - Function to be removed
 */
const unsubscribe = function (eventName, fn) {
  if (events[eventName]) {
    for (let i = 0; i < events[eventName].length; i++) {
      if (events[eventName][i] === fn) {
        events[eventName].splice(i, 1);
        break;
      }
    }
  }
};

/**
 * Publish an event
 * @param {string} eventName - Name of the event
 * @param {*} data -data to be passed into callback
 */
const publish = function (eventName, data) {
  if (events[eventName]) {
    events[eventName].forEach(function (fn) {
      fn(data);
    });
  }
};




/***/ }),

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
/* harmony import */ var _pubsub__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pubsub */ "./src/scripts/pubsub.js");



// @ts-check

/**
 * @module Events
 */

/**
 * calls retrieveInformation function when search icon is clicked @see retrieveInformation
 * @function
 */
const fetchClickInfo = async () => {
  try {
    let active;
    if (document.querySelector(".activeBlack")) {
      active = document.querySelector(".activeBlack");
    } else {
      active = document.querySelector(".activeWhite");
    }
    const input = document.querySelector("input");
    console.log(active.textContent);
    const info = await (0,_weatherData__WEBPACK_IMPORTED_MODULE_0__.retrieveInformation)(input.value, active.textContent);
    (0,_pubsub__WEBPACK_IMPORTED_MODULE_1__.publish)("display", info);
  } catch (err) {
    console.log(err);
  }
};

/**
 * calls retrieveInformation function when enter key is pressed @see retrieveInformation
 * @param {Object} event
 */
const fetchKeyInfo = async (event) => {
  try {
    if (event.keyCode === 13) {
      event.preventDefault();
      let active;
      if (document.querySelector(".activeBlack")) {
        active = document.querySelector(".activeBlack");
      } else {
        active = document.querySelector(".activeWhite");
      }
      const input = document.querySelector("input");
      console.log(active.textContent);
      const info = await (0,_weatherData__WEBPACK_IMPORTED_MODULE_0__.retrieveInformation)(input.value, active.textContent);
      (0,_pubsub__WEBPACK_IMPORTED_MODULE_1__.publish)("display", info);
    }
  } catch (err) {
    console.log(err);
  }
};

/**
 * Adds event listener to the dom element.
 * @param {Object} data - Dom element
 */
const searchEventListener = (data) => {
  data.addEventListener("click", fetchClickInfo);
  data.nextElementSibling.addEventListener("keydown", fetchKeyInfo);
};




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
    console.log(standard);
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=81d1f6e5ed77f7c8c9da1dcc073ad7c6&units=${standard}`,
      { mode: "cors" }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    const errorDisplay = document.querySelector("#errorDisplay");
    errorDisplay.textContent = `Network Error.`;
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
    this.icon = `https://openweathermap.org/img/wn/${retrievedData.weather[0].icon}@2x.png`;
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
      this.minTemperature = retrievedData.main.temp_min + "\u00B0F";
      this.maxTemperature = retrievedData.main.temp_max + "\u00B0F";
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
  getFullLocation() {
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
  console.log(standard);
  const data = await findLocationWeather(location, standard);
  if (data.cod === 200) {
    if (!data.snow) {
      data.snow = 0;
    }
    if (!data.rain) {
      data.rain = 0;
    }
    const information = new InformationMaker(data, standard);
    return information;
  } else {
    const errorDisplay = document.querySelector("#errorDisplay");
    errorDisplay.textContent = `${data.message}`;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsK0JBQStCLHdDQUF3QztXQUN2RTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlCQUFpQixxQkFBcUI7V0FDdEM7V0FDQTtXQUNBLGtCQUFrQixxQkFBcUI7V0FDdkM7V0FDQTtXQUNBLEtBQUs7V0FDTDtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDM0JBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxNQUFNLHFCQUFxQjtXQUMzQjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTs7Ozs7VUVoREE7VUFDQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvc2NyaXB0cy9wdWJzdWIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy9zY3JpcHRzL3NlYXJjaC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL3NjcmlwdHMvd2VhdGhlckRhdGEuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwL3dlYnBhY2svcnVudGltZS9jaHVuayBsb2FkZWQiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXJhcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3dlYXRoZXJhcHAvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAdHMtY2hlY2tcblxuLyoqXG4gKiBAbW9kdWxlIHB1YnN1YlxuICovXG5cbi8qKlxuICogQHJldHVybiB7T2JqZWN0fVxuICovXG5cbmNvbnN0IGV2ZW50cyA9IHt9O1xuXG4vKipcbiAqIFN1YnNjcmliZSB0byBhbiBldmVudFxuICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50TmFtZSAtIE5hbWUgb2YgdGhlIGV2ZW50XG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiAtIEZ1bmN0aW9uIHRvIGJlIGNhbGxlZFxuICovXG5jb25zdCBzdWJzY3JpYmUgPSBmdW5jdGlvbiAoZXZlbnROYW1lLCBmbikge1xuICBldmVudHNbZXZlbnROYW1lXSA9IGV2ZW50c1tldmVudE5hbWVdIHx8IFtdO1xuICBldmVudHNbZXZlbnROYW1lXS5wdXNoKGZuKTtcbn07XG5cbi8qKlxuICogVW5zdXNjcmliZSBmcm9tIGFuIGV2ZW50XG4gKiBAcGFyYW0ge3N0cmluZ30gZXZlbnROYW1lIC0gTmFtZSBvZiB0aGUgZXZlbnRcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIC0gRnVuY3Rpb24gdG8gYmUgcmVtb3ZlZFxuICovXG5jb25zdCB1bnN1YnNjcmliZSA9IGZ1bmN0aW9uIChldmVudE5hbWUsIGZuKSB7XG4gIGlmIChldmVudHNbZXZlbnROYW1lXSkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZXZlbnRzW2V2ZW50TmFtZV0ubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChldmVudHNbZXZlbnROYW1lXVtpXSA9PT0gZm4pIHtcbiAgICAgICAgZXZlbnRzW2V2ZW50TmFtZV0uc3BsaWNlKGksIDEpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5cbi8qKlxuICogUHVibGlzaCBhbiBldmVudFxuICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50TmFtZSAtIE5hbWUgb2YgdGhlIGV2ZW50XG4gKiBAcGFyYW0geyp9IGRhdGEgLWRhdGEgdG8gYmUgcGFzc2VkIGludG8gY2FsbGJhY2tcbiAqL1xuY29uc3QgcHVibGlzaCA9IGZ1bmN0aW9uIChldmVudE5hbWUsIGRhdGEpIHtcbiAgaWYgKGV2ZW50c1tldmVudE5hbWVdKSB7XG4gICAgZXZlbnRzW2V2ZW50TmFtZV0uZm9yRWFjaChmdW5jdGlvbiAoZm4pIHtcbiAgICAgIGZuKGRhdGEpO1xuICAgIH0pO1xuICB9XG59O1xuXG5leHBvcnQgeyBwdWJsaXNoLCB1bnN1YnNjcmliZSwgc3Vic2NyaWJlIH07XG4iLCJpbXBvcnQgeyByZXRyaWV2ZUluZm9ybWF0aW9uIH0gZnJvbSBcIi4vd2VhdGhlckRhdGFcIjtcbmltcG9ydCB7IHB1Ymxpc2ggfSBmcm9tIFwiLi9wdWJzdWJcIjtcblxuLy8gQHRzLWNoZWNrXG5cbi8qKlxuICogQG1vZHVsZSBFdmVudHNcbiAqL1xuXG4vKipcbiAqIGNhbGxzIHJldHJpZXZlSW5mb3JtYXRpb24gZnVuY3Rpb24gd2hlbiBzZWFyY2ggaWNvbiBpcyBjbGlja2VkIEBzZWUgcmV0cmlldmVJbmZvcm1hdGlvblxuICogQGZ1bmN0aW9uXG4gKi9cbmNvbnN0IGZldGNoQ2xpY2tJbmZvID0gYXN5bmMgKCkgPT4ge1xuICB0cnkge1xuICAgIGxldCBhY3RpdmU7XG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWN0aXZlQmxhY2tcIikpIHtcbiAgICAgIGFjdGl2ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWN0aXZlQmxhY2tcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFjdGl2ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWN0aXZlV2hpdGVcIik7XG4gICAgfVxuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0XCIpO1xuICAgIGNvbnNvbGUubG9nKGFjdGl2ZS50ZXh0Q29udGVudCk7XG4gICAgY29uc3QgaW5mbyA9IGF3YWl0IHJldHJpZXZlSW5mb3JtYXRpb24oaW5wdXQudmFsdWUsIGFjdGl2ZS50ZXh0Q29udGVudCk7XG4gICAgcHVibGlzaChcImRpc3BsYXlcIiwgaW5mbyk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUubG9nKGVycik7XG4gIH1cbn07XG5cbi8qKlxuICogY2FsbHMgcmV0cmlldmVJbmZvcm1hdGlvbiBmdW5jdGlvbiB3aGVuIGVudGVyIGtleSBpcyBwcmVzc2VkIEBzZWUgcmV0cmlldmVJbmZvcm1hdGlvblxuICogQHBhcmFtIHtPYmplY3R9IGV2ZW50XG4gKi9cbmNvbnN0IGZldGNoS2V5SW5mbyA9IGFzeW5jIChldmVudCkgPT4ge1xuICB0cnkge1xuICAgIGlmIChldmVudC5rZXlDb2RlID09PSAxMykge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGxldCBhY3RpdmU7XG4gICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hY3RpdmVCbGFja1wiKSkge1xuICAgICAgICBhY3RpdmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFjdGl2ZUJsYWNrXCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYWN0aXZlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hY3RpdmVXaGl0ZVwiKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0XCIpO1xuICAgICAgY29uc29sZS5sb2coYWN0aXZlLnRleHRDb250ZW50KTtcbiAgICAgIGNvbnN0IGluZm8gPSBhd2FpdCByZXRyaWV2ZUluZm9ybWF0aW9uKGlucHV0LnZhbHVlLCBhY3RpdmUudGV4dENvbnRlbnQpO1xuICAgICAgcHVibGlzaChcImRpc3BsYXlcIiwgaW5mbyk7XG4gICAgfVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmxvZyhlcnIpO1xuICB9XG59O1xuXG4vKipcbiAqIEFkZHMgZXZlbnQgbGlzdGVuZXIgdG8gdGhlIGRvbSBlbGVtZW50LlxuICogQHBhcmFtIHtPYmplY3R9IGRhdGEgLSBEb20gZWxlbWVudFxuICovXG5jb25zdCBzZWFyY2hFdmVudExpc3RlbmVyID0gKGRhdGEpID0+IHtcbiAgZGF0YS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZmV0Y2hDbGlja0luZm8pO1xuICBkYXRhLm5leHRFbGVtZW50U2libGluZy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBmZXRjaEtleUluZm8pO1xufTtcblxuZXhwb3J0IHsgc2VhcmNoRXZlbnRMaXN0ZW5lciB9O1xuIiwiaW1wb3J0IHsgaXNBZnRlciwgZm9ybWF0IH0gZnJvbSBcImRhdGUtZm5zXCI7XG5cbi8vIEB0cy1jaGVja1xuXG4vKipcbiAqIEBtb2R1bGUgV2VhdGhlckRhdGFcbiAqL1xuXG4vKipcbiAqRmluZHMgd2VhdGhlciBmb3JlY2FzdCBvZiBnaXZlbiBsb2NhdGlvblxuICogQHBhcmFtIHtzdHJpbmd9IGxvY2F0aW9uXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RhbmRhcmRcbiAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn1cbiAqL1xuY29uc3QgZmluZExvY2F0aW9uV2VhdGhlciA9IGFzeW5jIChsb2NhdGlvbiwgc3RhbmRhcmQpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zb2xlLmxvZyhzdGFuZGFyZCk7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgIGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7bG9jYXRpb259JkFQUElEPTgxZDFmNmU1ZWQ3N2Y3YzhjOWRhMWRjYzA3M2FkN2M2JnVuaXRzPSR7c3RhbmRhcmR9YCxcbiAgICAgIHsgbW9kZTogXCJjb3JzXCIgfVxuICAgICk7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICByZXR1cm4gZGF0YTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zdCBlcnJvckRpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Vycm9yRGlzcGxheVwiKTtcbiAgICBlcnJvckRpc3BsYXkudGV4dENvbnRlbnQgPSBgTmV0d29yayBFcnJvci5gO1xuICB9XG59O1xuXG4vKiogQ3JlYXRlcyB3ZWF0aGVyIGluZm9ybWF0aW9uIG9iamVjdHMgKi9cbmNsYXNzIEluZm9ybWF0aW9uTWFrZXIge1xuICAvKipcbiAgICogT2JqZWN0IGNvbnN0cnVjdG9yXG4gICAqIEBwYXJhbSB7T2JqZWN0fSByZXRyaWV2ZWREYXRhIC0gUmV0cmlldmVkIGRhdGEgZnJvbSBBUElcbiAgICogQHBhcmFtIHtTdHJpbmd9IHN0YW5kYXJkXG4gICAqL1xuICBjb25zdHJ1Y3RvcihyZXRyaWV2ZWREYXRhLCBzdGFuZGFyZCkge1xuICAgIHRoaXMuY291bnRyeSA9IHJldHJpZXZlZERhdGEuc3lzLmNvdW50cnk7XG4gICAgdGhpcy5jaXR5ID0gcmV0cmlldmVkRGF0YS5uYW1lO1xuICAgIHRoaXMuaHVtaWRpdHkgPSByZXRyaWV2ZWREYXRhLm1haW4uaHVtaWRpdHkgKyBcIiVcIjtcbiAgICB0aGlzLnN1bnJpc2UgPSByZXRyaWV2ZWREYXRhLnN5cy5zdW5yaXNlO1xuICAgIHRoaXMuc3Vuc2V0ID0gcmV0cmlldmVkRGF0YS5zeXMuc3Vuc2V0O1xuICAgIHRoaXMuZGF0ZSA9IHJldHJpZXZlZERhdGEuZHQ7XG4gICAgdGhpcy5pY29uID0gYGh0dHBzOi8vb3BlbndlYXRoZXJtYXAub3JnL2ltZy93bi8ke3JldHJpZXZlZERhdGEud2VhdGhlclswXS5pY29ufUAyeC5wbmdgO1xuICAgIGlmIChyZXRyaWV2ZWREYXRhLnJhaW5bXCIxaFwiXSkge1xuICAgICAgdGhpcy5yYWluVm9sdW1lID0gcmV0cmlldmVkRGF0YS5yYWluW1wiMWhcIl0gKyBcIm1tXCI7XG4gICAgfVxuICAgIGlmIChyZXRyaWV2ZWREYXRhLnNub3dbXCIxaFwiXSkge1xuICAgICAgdGhpcy5zbm93Vm9sdW1lID0gcmV0cmlldmVkRGF0YS5zbm93W1wiMWhcIl0gKyBcIm1tXCI7XG4gICAgfVxuICAgIHRoaXMuZGVzY3JpcHRpb24gPSByZXRyaWV2ZWREYXRhLndlYXRoZXJbMF0uZGVzY3JpcHRpb247XG4gICAgdGhpcy5wcmVzc3VyZSA9IHJldHJpZXZlZERhdGEubWFpbi5wcmVzc3VyZSArIFwiaFBhXCI7XG4gICAgaWYgKHN0YW5kYXJkID09PSBcIm1ldHJpY1wiKSB7XG4gICAgICB0aGlzLmZlZWxzTGlrZSA9IHJldHJpZXZlZERhdGEubWFpbi5mZWVsc19saWtlICsgXCJcXHUwMEIwQ1wiO1xuICAgICAgdGhpcy50ZW1wZXJhdHVyZSA9IHJldHJpZXZlZERhdGEubWFpbi50ZW1wICsgXCJcXHUwMEIwQ1wiO1xuICAgICAgdGhpcy5taW5UZW1wZXJhdHVyZSA9IHJldHJpZXZlZERhdGEubWFpbi50ZW1wX21pbiArIFwiXFx1MDBCMENcIjtcbiAgICAgIHRoaXMubWF4VGVtcGVyYXR1cmUgPSByZXRyaWV2ZWREYXRhLm1haW4udGVtcF9tYXggKyBcIlxcdTAwQjBDXCI7XG4gICAgICB0aGlzLndpbmRTcGVlZCA9IHJldHJpZXZlZERhdGEud2luZC5zcGVlZCArIFwibS9zXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZmVlbHNMaWtlID0gcmV0cmlldmVkRGF0YS5tYWluLmZlZWxzX2xpa2UgKyBcIlxcdTAwQjBGXCI7XG4gICAgICB0aGlzLnRlbXBlcmF0dXJlID0gcmV0cmlldmVkRGF0YS5tYWluLnRlbXAgKyBcIlxcdTAwQjBGXCI7XG4gICAgICB0aGlzLm1pblRlbXBlcmF0dXJlID0gcmV0cmlldmVkRGF0YS5tYWluLnRlbXBfbWluICsgXCJcXHUwMEIwRlwiO1xuICAgICAgdGhpcy5tYXhUZW1wZXJhdHVyZSA9IHJldHJpZXZlZERhdGEubWFpbi50ZW1wX21heCArIFwiXFx1MDBCMEZcIjtcbiAgICAgIHRoaXMud2luZFNwZWVkID0gcmV0cmlldmVkRGF0YS53aW5kLnNwZWVkICsgXCJtaWxlcy9ob3VyXCI7XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBDaGVja3MgaWYgaXRzIGN1cnJlbnRseSBkYXkgb3IgbmlnaHRcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgZ2V0RGF5T3JOaWdodCgpIHtcbiAgICBjb25zdCBjdXJyZW50VGltZSA9IG5ldyBEYXRlKCk7XG4gICAgY29uc3Qgc3VuUmlzZSA9IG5ldyBEYXRlKHRoaXMuc3VucmlzZSAqIDEwMDApO1xuICAgIGNvbnN0IHN1blNldCA9IG5ldyBEYXRlKHRoaXMuc3Vuc2V0ICogMTAwMCk7XG4gICAgaWYgKCFpc0FmdGVyKGN1cnJlbnRUaW1lLCBzdW5SaXNlKSkge1xuICAgICAgcmV0dXJuIFwiTmlnaHRcIjtcbiAgICB9IGVsc2UgaWYgKCFpc0FmdGVyKGN1cnJlbnRUaW1lLCBzdW5TZXQpKSB7XG4gICAgICByZXR1cm4gXCJEYXlcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIFwiTmlnaHRcIjtcbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIGdldCBmdWxsIGxvY2F0aW9uXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIGdldEZ1bGxMb2NhdGlvbigpIHtcbiAgICByZXR1cm4gYCR7dGhpcy5jaXR5fSwgJHt0aGlzLmNvdW50cnl9YDtcbiAgfVxuICAvKipcbiAgICogZ2V0IGZ1bGwgZGF0ZVxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICBnZXREYXRlKCkge1xuICAgIHJldHVybiBmb3JtYXQobmV3IERhdGUodGhpcy5kYXRlICogMTAwMCksIFwiUFBQUFwiKTtcbiAgfVxuICAvKipcbiAgICogZ2V0IGZ1bGwgdGltZVxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICBnZXRUaW1lKCkge1xuICAgIHJldHVybiBmb3JtYXQobmV3IERhdGUodGhpcy5kYXRlICogMTAwMCksIFwicFwiKTtcbiAgfVxufVxuXG4vKipcbiAqIFJldHJpZXZlIHdlYXRoZXIgaW5mb3JtYXRpb24gYWJvdXQgbG9jYXRpb25cbiAqIEBwYXJhbSB7c3RyaW5nfSBsb2NhdGlvblxuICogQHBhcmFtIHtzdHJpbmd9IHN0YW5kYXJkXG4gKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IC0gQSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgdG8gd2VhdGhlciBpbmZvcm1hdGlvblxuICovXG5jb25zdCByZXRyaWV2ZUluZm9ybWF0aW9uID0gYXN5bmMgKGxvY2F0aW9uID0gXCJMYWdvc1wiLCBzdGFuZGFyZCA9IFwibWV0cmljXCIpID0+IHtcbiAgY29uc29sZS5sb2coc3RhbmRhcmQpO1xuICBjb25zdCBkYXRhID0gYXdhaXQgZmluZExvY2F0aW9uV2VhdGhlcihsb2NhdGlvbiwgc3RhbmRhcmQpO1xuICBpZiAoZGF0YS5jb2QgPT09IDIwMCkge1xuICAgIGlmICghZGF0YS5zbm93KSB7XG4gICAgICBkYXRhLnNub3cgPSAwO1xuICAgIH1cbiAgICBpZiAoIWRhdGEucmFpbikge1xuICAgICAgZGF0YS5yYWluID0gMDtcbiAgICB9XG4gICAgY29uc3QgaW5mb3JtYXRpb24gPSBuZXcgSW5mb3JtYXRpb25NYWtlcihkYXRhLCBzdGFuZGFyZCk7XG4gICAgcmV0dXJuIGluZm9ybWF0aW9uO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IGVycm9yRGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZXJyb3JEaXNwbGF5XCIpO1xuICAgIGVycm9yRGlzcGxheS50ZXh0Q29udGVudCA9IGAke2RhdGEubWVzc2FnZX1gO1xuICB9XG59O1xuXG5leHBvcnQgeyByZXRyaWV2ZUluZm9ybWF0aW9uIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsInZhciBkZWZlcnJlZCA9IFtdO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5PID0gKHJlc3VsdCwgY2h1bmtJZHMsIGZuLCBwcmlvcml0eSkgPT4ge1xuXHRpZihjaHVua0lkcykge1xuXHRcdHByaW9yaXR5ID0gcHJpb3JpdHkgfHwgMDtcblx0XHRmb3IodmFyIGkgPSBkZWZlcnJlZC5sZW5ndGg7IGkgPiAwICYmIGRlZmVycmVkW2kgLSAxXVsyXSA+IHByaW9yaXR5OyBpLS0pIGRlZmVycmVkW2ldID0gZGVmZXJyZWRbaSAtIDFdO1xuXHRcdGRlZmVycmVkW2ldID0gW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldO1xuXHRcdHJldHVybjtcblx0fVxuXHR2YXIgbm90RnVsZmlsbGVkID0gSW5maW5pdHk7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWQubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldID0gZGVmZXJyZWRbaV07XG5cdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG5cdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBjaHVua0lkcy5sZW5ndGg7IGorKykge1xuXHRcdFx0aWYgKChwcmlvcml0eSAmIDEgPT09IDAgfHwgbm90RnVsZmlsbGVkID49IHByaW9yaXR5KSAmJiBPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLk8pLmV2ZXJ5KChrZXkpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fLk9ba2V5XShjaHVua0lkc1tqXSkpKSkge1xuXHRcdFx0XHRjaHVua0lkcy5zcGxpY2Uoai0tLCAxKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZ1bGZpbGxlZCA9IGZhbHNlO1xuXHRcdFx0XHRpZihwcmlvcml0eSA8IG5vdEZ1bGZpbGxlZCkgbm90RnVsZmlsbGVkID0gcHJpb3JpdHk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKGZ1bGZpbGxlZCkge1xuXHRcdFx0ZGVmZXJyZWQuc3BsaWNlKGktLSwgMSlcblx0XHRcdHZhciByID0gZm4oKTtcblx0XHRcdGlmIChyICE9PSB1bmRlZmluZWQpIHJlc3VsdCA9IHI7XG5cdFx0fVxuXHR9XG5cdHJldHVybiByZXN1bHQ7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBubyBiYXNlVVJJXG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJzZWFyY2hcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5PLmogPSAoY2h1bmtJZCkgPT4gKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9PT0gMCk7XG5cbi8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xudmFyIHdlYnBhY2tKc29ucENhbGxiYWNrID0gKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uLCBkYXRhKSA9PiB7XG5cdHZhciBbY2h1bmtJZHMsIG1vcmVNb2R1bGVzLCBydW50aW1lXSA9IGRhdGE7XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMDtcblx0aWYoY2h1bmtJZHMuc29tZSgoaWQpID0+IChpbnN0YWxsZWRDaHVua3NbaWRdICE9PSAwKSkpIHtcblx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKHJ1bnRpbWUpIHZhciByZXN1bHQgPSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHR9XG5cdGlmKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKSBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0oKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRzW2ldXSA9IDA7XG5cdH1cblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uTyhyZXN1bHQpO1xufVxuXG52YXIgY2h1bmtMb2FkaW5nR2xvYmFsID0gc2VsZltcIndlYnBhY2tDaHVua3dlYXRoZXJhcHBcIl0gPSBzZWxmW1wid2VicGFja0NodW5rd2VhdGhlcmFwcFwiXSB8fCBbXTtcbmNodW5rTG9hZGluZ0dsb2JhbC5mb3JFYWNoKHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgMCkpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBkZXBlbmRzIG9uIG90aGVyIGxvYWRlZCBjaHVua3MgYW5kIGV4ZWN1dGlvbiBuZWVkIHRvIGJlIGRlbGF5ZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1widmVuZG9ycy1ub2RlX21vZHVsZXNfZGF0ZS1mbnNfZXNtX2Zvcm1hdF9pbmRleF9qcy1ub2RlX21vZHVsZXNfZGF0ZS1mbnNfZXNtX2lzQWZ0ZXJfaW5kZXhfanNcIl0sICgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvc2NyaXB0cy9zZWFyY2guanNcIikpKVxuX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyhfX3dlYnBhY2tfZXhwb3J0c19fKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==