/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
/******/ 			"weatherData": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_date-fns_esm_format_index_js-node_modules_date-fns_esm_isAfter_index_js"], () => (__webpack_require__("./src/scripts/weatherData.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2VhdGhlckRhdGEuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMkM7O0FBRTNDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQixZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJEQUEyRCxTQUFTLGdEQUFnRCxTQUFTO0FBQzdILFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFFBQVE7QUFDckIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQsOEJBQThCO0FBQ25GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLGlEQUFPO0FBQ2hCO0FBQ0EsTUFBTSxVQUFVLGlEQUFPO0FBQ3ZCO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBLGNBQWMsVUFBVSxJQUFJLGFBQWE7QUFDekM7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQSxXQUFXLGlEQUFNO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0EsV0FBVyxpREFBTTtBQUNqQjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CLFlBQVksY0FBYztBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLGtDQUFrQyxhQUFhO0FBQy9DO0FBQ0E7O0FBRStCOzs7Ozs7O1VDakkvQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsK0JBQStCLHdDQUF3QztXQUN2RTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlCQUFpQixxQkFBcUI7V0FDdEM7V0FDQTtXQUNBLGtCQUFrQixxQkFBcUI7V0FDdkM7V0FDQTtXQUNBLEtBQUs7V0FDTDtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDM0JBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxNQUFNLHFCQUFxQjtXQUMzQjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTs7Ozs7VUVoREE7VUFDQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvc2NyaXB0cy93ZWF0aGVyRGF0YS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXJhcHAvd2VicGFjay9ydW50aW1lL2NodW5rIGxvYWRlZCIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXJhcHAvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3dlYXRoZXJhcHAvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3dlYXRoZXJhcHAvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGlzQWZ0ZXIsIGZvcm1hdCB9IGZyb20gXCJkYXRlLWZuc1wiO1xuXG4vLyBAdHMtY2hlY2tcblxuLyoqXG4gKiBAbW9kdWxlIFdlYXRoZXJEYXRhXG4gKi9cblxuLyoqXG4gKkZpbmRzIHdlYXRoZXIgZm9yZWNhc3Qgb2YgZ2l2ZW4gbG9jYXRpb25cbiAqIEBwYXJhbSB7c3RyaW5nfSBsb2NhdGlvblxuICogQHBhcmFtIHtzdHJpbmd9IHN0YW5kYXJkXG4gKiBAcmV0dXJuIHtQcm9taXNlPGFueT59XG4gKi9cbmNvbnN0IGZpbmRMb2NhdGlvbldlYXRoZXIgPSBhc3luYyAobG9jYXRpb24sIHN0YW5kYXJkKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc29sZS5sb2coc3RhbmRhcmQpO1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0ke2xvY2F0aW9ufSZBUFBJRD04MWQxZjZlNWVkNzdmN2M4YzlkYTFkY2MwNzNhZDdjNiZ1bml0cz0ke3N0YW5kYXJkfWAsXG4gICAgICB7IG1vZGU6IFwiY29yc1wiIH1cbiAgICApO1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgcmV0dXJuIGRhdGE7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc3QgZXJyb3JEaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNlcnJvckRpc3BsYXlcIik7XG4gICAgZXJyb3JEaXNwbGF5LnRleHRDb250ZW50ID0gYE5ldHdvcmsgRXJyb3IuYDtcbiAgfVxufTtcblxuLyoqIENyZWF0ZXMgd2VhdGhlciBpbmZvcm1hdGlvbiBvYmplY3RzICovXG5jbGFzcyBJbmZvcm1hdGlvbk1ha2VyIHtcbiAgLyoqXG4gICAqIE9iamVjdCBjb25zdHJ1Y3RvclxuICAgKiBAcGFyYW0ge09iamVjdH0gcmV0cmlldmVkRGF0YSAtIFJldHJpZXZlZCBkYXRhIGZyb20gQVBJXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBzdGFuZGFyZFxuICAgKi9cbiAgY29uc3RydWN0b3IocmV0cmlldmVkRGF0YSwgc3RhbmRhcmQpIHtcbiAgICB0aGlzLmNvdW50cnkgPSByZXRyaWV2ZWREYXRhLnN5cy5jb3VudHJ5O1xuICAgIHRoaXMuY2l0eSA9IHJldHJpZXZlZERhdGEubmFtZTtcbiAgICB0aGlzLmh1bWlkaXR5ID0gcmV0cmlldmVkRGF0YS5tYWluLmh1bWlkaXR5ICsgXCIlXCI7XG4gICAgdGhpcy5zdW5yaXNlID0gcmV0cmlldmVkRGF0YS5zeXMuc3VucmlzZTtcbiAgICB0aGlzLnN1bnNldCA9IHJldHJpZXZlZERhdGEuc3lzLnN1bnNldDtcbiAgICB0aGlzLmRhdGUgPSByZXRyaWV2ZWREYXRhLmR0O1xuICAgIHRoaXMuaWNvbiA9IGBodHRwczovL29wZW53ZWF0aGVybWFwLm9yZy9pbWcvd24vJHtyZXRyaWV2ZWREYXRhLndlYXRoZXJbMF0uaWNvbn1AMngucG5nYDtcbiAgICBpZiAocmV0cmlldmVkRGF0YS5yYWluW1wiMWhcIl0pIHtcbiAgICAgIHRoaXMucmFpblZvbHVtZSA9IHJldHJpZXZlZERhdGEucmFpbltcIjFoXCJdICsgXCJtbVwiO1xuICAgIH1cbiAgICBpZiAocmV0cmlldmVkRGF0YS5zbm93W1wiMWhcIl0pIHtcbiAgICAgIHRoaXMuc25vd1ZvbHVtZSA9IHJldHJpZXZlZERhdGEuc25vd1tcIjFoXCJdICsgXCJtbVwiO1xuICAgIH1cbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gcmV0cmlldmVkRGF0YS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uO1xuICAgIHRoaXMucHJlc3N1cmUgPSByZXRyaWV2ZWREYXRhLm1haW4ucHJlc3N1cmUgKyBcImhQYVwiO1xuICAgIGlmIChzdGFuZGFyZCA9PT0gXCJtZXRyaWNcIikge1xuICAgICAgdGhpcy5mZWVsc0xpa2UgPSByZXRyaWV2ZWREYXRhLm1haW4uZmVlbHNfbGlrZSArIFwiXFx1MDBCMENcIjtcbiAgICAgIHRoaXMudGVtcGVyYXR1cmUgPSByZXRyaWV2ZWREYXRhLm1haW4udGVtcCArIFwiXFx1MDBCMENcIjtcbiAgICAgIHRoaXMubWluVGVtcGVyYXR1cmUgPSByZXRyaWV2ZWREYXRhLm1haW4udGVtcF9taW4gKyBcIlxcdTAwQjBDXCI7XG4gICAgICB0aGlzLm1heFRlbXBlcmF0dXJlID0gcmV0cmlldmVkRGF0YS5tYWluLnRlbXBfbWF4ICsgXCJcXHUwMEIwQ1wiO1xuICAgICAgdGhpcy53aW5kU3BlZWQgPSByZXRyaWV2ZWREYXRhLndpbmQuc3BlZWQgKyBcIm0vc1wiO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmZlZWxzTGlrZSA9IHJldHJpZXZlZERhdGEubWFpbi5mZWVsc19saWtlICsgXCJcXHUwMEIwRlwiO1xuICAgICAgdGhpcy50ZW1wZXJhdHVyZSA9IHJldHJpZXZlZERhdGEubWFpbi50ZW1wICsgXCJcXHUwMEIwRlwiO1xuICAgICAgdGhpcy5taW5UZW1wZXJhdHVyZSA9IHJldHJpZXZlZERhdGEubWFpbi50ZW1wX21pbiArIFwiXFx1MDBCMEZcIjtcbiAgICAgIHRoaXMubWF4VGVtcGVyYXR1cmUgPSByZXRyaWV2ZWREYXRhLm1haW4udGVtcF9tYXggKyBcIlxcdTAwQjBGXCI7XG4gICAgICB0aGlzLndpbmRTcGVlZCA9IHJldHJpZXZlZERhdGEud2luZC5zcGVlZCArIFwibWlsZXMvaG91clwiO1xuICAgIH1cbiAgfVxuICAvKipcbiAgICogQ2hlY2tzIGlmIGl0cyBjdXJyZW50bHkgZGF5IG9yIG5pZ2h0XG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIGdldERheU9yTmlnaHQoKSB7XG4gICAgY29uc3QgY3VycmVudFRpbWUgPSBuZXcgRGF0ZSgpO1xuICAgIGNvbnN0IHN1blJpc2UgPSBuZXcgRGF0ZSh0aGlzLnN1bnJpc2UgKiAxMDAwKTtcbiAgICBjb25zdCBzdW5TZXQgPSBuZXcgRGF0ZSh0aGlzLnN1bnNldCAqIDEwMDApO1xuICAgIGlmICghaXNBZnRlcihjdXJyZW50VGltZSwgc3VuUmlzZSkpIHtcbiAgICAgIHJldHVybiBcIk5pZ2h0XCI7XG4gICAgfSBlbHNlIGlmICghaXNBZnRlcihjdXJyZW50VGltZSwgc3VuU2V0KSkge1xuICAgICAgcmV0dXJuIFwiRGF5XCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBcIk5pZ2h0XCI7XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBnZXQgZnVsbCBsb2NhdGlvblxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICBnZXRGdWxsTG9jYXRpb24oKSB7XG4gICAgcmV0dXJuIGAke3RoaXMuY2l0eX0sICR7dGhpcy5jb3VudHJ5fWA7XG4gIH1cbiAgLyoqXG4gICAqIGdldCBmdWxsIGRhdGVcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgZ2V0RGF0ZSgpIHtcbiAgICByZXR1cm4gZm9ybWF0KG5ldyBEYXRlKHRoaXMuZGF0ZSAqIDEwMDApLCBcIlBQUFBcIik7XG4gIH1cbiAgLyoqXG4gICAqIGdldCBmdWxsIHRpbWVcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgZ2V0VGltZSgpIHtcbiAgICByZXR1cm4gZm9ybWF0KG5ldyBEYXRlKHRoaXMuZGF0ZSAqIDEwMDApLCBcInBcIik7XG4gIH1cbn1cblxuLyoqXG4gKiBSZXRyaWV2ZSB3ZWF0aGVyIGluZm9ybWF0aW9uIGFib3V0IGxvY2F0aW9uXG4gKiBAcGFyYW0ge3N0cmluZ30gbG9jYXRpb25cbiAqIEBwYXJhbSB7c3RyaW5nfSBzdGFuZGFyZFxuICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSAtIEEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHRvIHdlYXRoZXIgaW5mb3JtYXRpb25cbiAqL1xuY29uc3QgcmV0cmlldmVJbmZvcm1hdGlvbiA9IGFzeW5jIChsb2NhdGlvbiA9IFwiTGFnb3NcIiwgc3RhbmRhcmQgPSBcIm1ldHJpY1wiKSA9PiB7XG4gIGNvbnNvbGUubG9nKHN0YW5kYXJkKTtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IGZpbmRMb2NhdGlvbldlYXRoZXIobG9jYXRpb24sIHN0YW5kYXJkKTtcbiAgaWYgKGRhdGEuY29kID09PSAyMDApIHtcbiAgICBpZiAoIWRhdGEuc25vdykge1xuICAgICAgZGF0YS5zbm93ID0gMDtcbiAgICB9XG4gICAgaWYgKCFkYXRhLnJhaW4pIHtcbiAgICAgIGRhdGEucmFpbiA9IDA7XG4gICAgfVxuICAgIGNvbnN0IGluZm9ybWF0aW9uID0gbmV3IEluZm9ybWF0aW9uTWFrZXIoZGF0YSwgc3RhbmRhcmQpO1xuICAgIHJldHVybiBpbmZvcm1hdGlvbjtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBlcnJvckRpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Vycm9yRGlzcGxheVwiKTtcbiAgICBlcnJvckRpc3BsYXkudGV4dENvbnRlbnQgPSBgJHtkYXRhLm1lc3NhZ2V9YDtcbiAgfVxufTtcblxuZXhwb3J0IHsgcmV0cmlldmVJbmZvcm1hdGlvbiB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCJ2YXIgZGVmZXJyZWQgPSBbXTtcbl9fd2VicGFja19yZXF1aXJlX18uTyA9IChyZXN1bHQsIGNodW5rSWRzLCBmbiwgcHJpb3JpdHkpID0+IHtcblx0aWYoY2h1bmtJZHMpIHtcblx0XHRwcmlvcml0eSA9IHByaW9yaXR5IHx8IDA7XG5cdFx0Zm9yKHZhciBpID0gZGVmZXJyZWQubGVuZ3RoOyBpID4gMCAmJiBkZWZlcnJlZFtpIC0gMV1bMl0gPiBwcmlvcml0eTsgaS0tKSBkZWZlcnJlZFtpXSA9IGRlZmVycmVkW2kgLSAxXTtcblx0XHRkZWZlcnJlZFtpXSA9IFtjaHVua0lkcywgZm4sIHByaW9yaXR5XTtcblx0XHRyZXR1cm47XG5cdH1cblx0dmFyIG5vdEZ1bGZpbGxlZCA9IEluZmluaXR5O1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGRlZmVycmVkLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIFtjaHVua0lkcywgZm4sIHByaW9yaXR5XSA9IGRlZmVycmVkW2ldO1xuXHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuXHRcdGZvciAodmFyIGogPSAwOyBqIDwgY2h1bmtJZHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdGlmICgocHJpb3JpdHkgJiAxID09PSAwIHx8IG5vdEZ1bGZpbGxlZCA+PSBwcmlvcml0eSkgJiYgT2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5PKS5ldmVyeSgoa2V5KSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXy5PW2tleV0oY2h1bmtJZHNbal0pKSkpIHtcblx0XHRcdFx0Y2h1bmtJZHMuc3BsaWNlKGotLSwgMSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRmdWxmaWxsZWQgPSBmYWxzZTtcblx0XHRcdFx0aWYocHJpb3JpdHkgPCBub3RGdWxmaWxsZWQpIG5vdEZ1bGZpbGxlZCA9IHByaW9yaXR5O1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihmdWxmaWxsZWQpIHtcblx0XHRcdGRlZmVycmVkLnNwbGljZShpLS0sIDEpXG5cdFx0XHR2YXIgciA9IGZuKCk7XG5cdFx0XHRpZiAociAhPT0gdW5kZWZpbmVkKSByZXN1bHQgPSByO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gbm8gYmFzZVVSSVxuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwid2VhdGhlckRhdGFcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5PLmogPSAoY2h1bmtJZCkgPT4gKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9PT0gMCk7XG5cbi8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xudmFyIHdlYnBhY2tKc29ucENhbGxiYWNrID0gKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uLCBkYXRhKSA9PiB7XG5cdHZhciBbY2h1bmtJZHMsIG1vcmVNb2R1bGVzLCBydW50aW1lXSA9IGRhdGE7XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMDtcblx0aWYoY2h1bmtJZHMuc29tZSgoaWQpID0+IChpbnN0YWxsZWRDaHVua3NbaWRdICE9PSAwKSkpIHtcblx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKHJ1bnRpbWUpIHZhciByZXN1bHQgPSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHR9XG5cdGlmKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKSBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0oKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRzW2ldXSA9IDA7XG5cdH1cblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uTyhyZXN1bHQpO1xufVxuXG52YXIgY2h1bmtMb2FkaW5nR2xvYmFsID0gc2VsZltcIndlYnBhY2tDaHVua3dlYXRoZXJhcHBcIl0gPSBzZWxmW1wid2VicGFja0NodW5rd2VhdGhlcmFwcFwiXSB8fCBbXTtcbmNodW5rTG9hZGluZ0dsb2JhbC5mb3JFYWNoKHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgMCkpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBkZXBlbmRzIG9uIG90aGVyIGxvYWRlZCBjaHVua3MgYW5kIGV4ZWN1dGlvbiBuZWVkIHRvIGJlIGRlbGF5ZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1widmVuZG9ycy1ub2RlX21vZHVsZXNfZGF0ZS1mbnNfZXNtX2Zvcm1hdF9pbmRleF9qcy1ub2RlX21vZHVsZXNfZGF0ZS1mbnNfZXNtX2lzQWZ0ZXJfaW5kZXhfanNcIl0sICgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvc2NyaXB0cy93ZWF0aGVyRGF0YS5qc1wiKSkpXG5fX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKF9fd2VicGFja19leHBvcnRzX18pO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9