/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/images/day.jpeg":
/*!*****************************!*\
  !*** ./src/images/day.jpeg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5f30b18ad02728794721.jpeg";

/***/ }),

/***/ "./src/images/night.jpg":
/*!******************************!*\
  !*** ./src/images/night.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7f1ea92334117e0be2e9.jpg";

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!********************************!*\
  !*** ./src/scripts/display.js ***!
  \********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "display": () => (/* binding */ display)
/* harmony export */ });
/* harmony import */ var _images_day_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/day.jpeg */ "./src/images/day.jpeg");
/* harmony import */ var _images_night_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/night.jpg */ "./src/images/night.jpg");



// @ts-check

/**
 * @module display
 */

/**
 * Displays country information
 * @param {string} country
 */
const displayCountry = (country) => {
  const countryDetails = document.querySelector("#countryDetails");
  countryDetails.textContent = country;
};

/**
 * Displays Date and Time
 * @param {string} date
 * @param {string} time
 */
const displayDate = (date, time) => {
  const dateDiv = document.querySelector("#date");
  if (dateDiv.children[0]) {
    dateDiv.children[0].remove();
    dateDiv.children[0].remove();
  }
  const p1 = document.createElement("p");
  const p2 = document.createElement("p");
  p1.textContent = date;
  p2.textContent = time;
  dateDiv.appendChild(p1);
  dateDiv.appendChild(p2);
};

/**
 * Displays Weather information.
 * @param {string} description
 * @param {URL} icon -Weather Icon
 */
const displayWeatherDescription = (description, icon) => {
  const weatherDiv = document.querySelector("#weatherDescription");
  if (weatherDiv.children[0]) {
    weatherDiv.children[0].remove();
    weatherDiv.children[0].remove();
  }
  const p = document.createElement("p");
  const split = description.split("");
  split[0] = split[0].toUpperCase();
  p.textContent = split.join("");
  const image = document.createElement("img");
  image.src = icon;
  image.id = "weather";
  weatherDiv.appendChild(p);
  weatherDiv.appendChild(image);
};

/**
 * Displays humidity, pressure, and wind speed.
 * @param {string} pressure
 * @param {string} windSpeed
 * @param {string} humidity
 */
const displayHumidPressWind = (pressure, windSpeed, humidity) => {
  const displayDiv = document.querySelector("#humidPressureWind");
  if (displayDiv.children[0]) {
    displayDiv.children[0].remove();
    displayDiv.children[0].remove();
    displayDiv.children[0].remove();
  }
  // Humidity Div
  const humidDiv = document.createElement("div");
  humidDiv.classList.add("align");
  const humidIcon = document.createElement("i");
  humidIcon.className = "fas fa-tint";
  humidDiv.appendChild(humidIcon);
  const humidP = document.createElement("p");
  humidP.textContent = `Humidity: ${humidity}`;
  humidDiv.appendChild(humidP);
  displayDiv.appendChild(humidDiv);

  // Wind Div
  const windDiv = document.createElement("div");
  windDiv.classList.add("align");
  const windIcon = document.createElement("i");
  windIcon.className = "fas fa-wind";
  windDiv.appendChild(windIcon);
  const windP = document.createElement("p");
  windP.textContent = `Wind speed: ${windSpeed}`;
  windDiv.appendChild(windP);
  displayDiv.appendChild(windDiv);

  // Pressure Div
  const pressureDiv = document.createElement("div");
  pressureDiv.classList.add("align");
  const pressureIcon = document.createElement("i");
  pressureIcon.className = "fas fa-tachometer-alt";
  pressureDiv.appendChild(pressureIcon);
  const pressureP = document.createElement("p");
  pressureP.textContent = `Pressure: ${pressure}`;
  pressureDiv.appendChild(pressureP);
  displayDiv.appendChild(pressureDiv);
};

/**
 * Displays the temperature.
 * @param {string} feelsLike
 * @param {string} temperature
 */
const displayTemp = (feelsLike, temperature) => {
  const tempDiv = document.querySelector("#temp");
  if (tempDiv.children[0]) {
    tempDiv.children[0].remove();
    tempDiv.children[0].remove();
  }
  // feelsLike Div
  const feelsDiv = document.createElement("div");
  feelsDiv.classList.add("align");
  const feelsIcon = document.createElement("i");
  feelsIcon.className = "fas fa-male";
  feelsDiv.appendChild(feelsIcon);
  const feelsP = document.createElement("p");
  feelsP.textContent = `Feels Like: ${feelsLike}`;
  feelsDiv.appendChild(feelsP);
  tempDiv.appendChild(feelsDiv);

  // temperature Div
  const temperatureDiv = document.createElement("div");
  temperatureDiv.classList.add("align");
  const temperatureIcon = document.createElement("i");
  temperatureIcon.className = "fas fa-thermometer-half";
  temperatureDiv.appendChild(temperatureIcon);
  const temperatureP = document.createElement("p");
  temperatureP.textContent = `Temperature: ${temperature}`;
  temperatureDiv.appendChild(temperatureP);
  tempDiv.appendChild(temperatureDiv);
};

/**
 * Displays maximum and minimum temperature
 * @param {string} min
 * @param {string} max
 */
const displayMinMax = (min, max) => {
  const minMaxDiv = document.querySelector("#minMax");
  if (minMaxDiv.children[0]) {
    minMaxDiv.children[0].remove();
    minMaxDiv.children[0].remove();
  }

  // Max Div
  const maxDiv = document.createElement("div");
  maxDiv.classList.add("align");
  const maxIcon = document.createElement("i");
  maxIcon.className = "fas fa-temperature-high";
  maxDiv.appendChild(maxIcon);
  const maxP = document.createElement("p");
  maxP.textContent = `Maximum temperature: ${max}`;
  maxDiv.appendChild(maxP);
  minMaxDiv.appendChild(maxDiv);

  // Min Div
  const minDiv = document.createElement("div");
  minDiv.classList.add("align");
  const minIcon = document.createElement("i");
  minIcon.className = "fas fa-temperature-low";
  minDiv.appendChild(minIcon);
  const minP = document.createElement("p");
  minP.textContent = `Minimum temperature: ${min}`;
  minDiv.appendChild(minP);
  minMaxDiv.appendChild(minDiv);
};

/**
 * Displays rain and snow volume.
 * @param {string} rain
 * @param {string} snow
 */
const displayVolume = (rain, snow) => {
  const volumeDiv = document.querySelector("#volume");
  if (volumeDiv.children[0]) {
    volumeDiv.children[0].remove();
    if (volumeDiv.children[0]) {
      volumeDiv.children[0].remove();
    }
  }

  // Max Div
  if (rain) {
    const rainDiv = document.createElement("div");
    rainDiv.classList.add("align");
    const rainIcon = document.createElement("i");
    rainIcon.className = "fas fa-cloud-rain";
    rainDiv.appendChild(rainIcon);
    const rainP = document.createElement("p");
    rainP.textContent = `Rain volume in the last hour: ${rain}`;
    rainDiv.appendChild(rainP);
    volumeDiv.appendChild(rainDiv);
  }

  // Max Div
  if (snow) {
    const snowDiv = document.createElement("div");
    snowDiv.classList.add("align");
    const snowIcon = document.createElement("i");
    snowIcon.className = "fas fa-snowflake";
    snowDiv.appendChild(snowIcon);
    const snowP = document.createElement("p");
    snowP.textContent = `Snow volume in the last hour: ${snow}`;
    snowDiv.appendChild(snowP);
    volumeDiv.appendChild(snowDiv);
  }
};

/**
 * changes background depending on time of day at location;
 * @param {string} period - Time of day at location
 */
const changeBackground = (period) => {
  const container = document.querySelector("main");
  const search = document.querySelector("#searchBar");
  let button;
  if (period === "Day") {
    container.style.color = "black";
    search.style["box-shadow"] = "0px 0px 4px 4px black";
    container.style["background-image"] = `url(${_images_day_jpeg__WEBPACK_IMPORTED_MODULE_0__})`;
    if (document.querySelector(".activeWhite")) {
      button = document.querySelector(".activeWhite");
      button.classList.remove("activeWhite");
      button.classList.add("activeBlack");
    }
  }
  if (period === "Night") {
    container.style.color = "white";
    search.style["box-shadow"] = "0px 0px 4px 4px white";
    container.style["background-image"] = `url(${_images_night_jpg__WEBPACK_IMPORTED_MODULE_1__})`;
    if (document.querySelector(".activeBlack")) {
      button = document.querySelector(".activeBlack");
      button.classList.remove("activeBlack");
      button.classList.add("activeWhite");
    }
  }
};

/**
 * Calls helper display functions
 * @param {Object} weatherObj
 */
const display = (weatherObj) => {
  displayCountry(weatherObj.getFullLocation());
  displayDate(weatherObj.getDate(), weatherObj.getTime());
  displayWeatherDescription(weatherObj.description, weatherObj.icon);
  displayHumidPressWind(
    weatherObj.pressure,
    weatherObj.windSpeed,
    weatherObj.humidity
  );
  displayTemp(weatherObj.feelsLike, weatherObj.temperature);
  displayMinMax(weatherObj.minTemperature, weatherObj.maxTemperature);
  displayVolume(weatherObj.rainVolume, weatherObj.snowVolume);
  changeBackground(weatherObj.getDayOrNight());
  const errorDisplay = document.querySelector("#errorDisplay");
  errorDisplay.textContent = "";
};



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQsNkNBQUcsQ0FBQztBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQsOENBQUssQ0FBQztBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRW1CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXJhcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvc2NyaXB0cy9kaXNwbGF5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCBEYXkgZnJvbSBcIi4uL2ltYWdlcy9kYXkuanBlZ1wiO1xuaW1wb3J0IE5pZ2h0IGZyb20gXCIuLi9pbWFnZXMvbmlnaHQuanBnXCI7XG5cbi8vIEB0cy1jaGVja1xuXG4vKipcbiAqIEBtb2R1bGUgZGlzcGxheVxuICovXG5cbi8qKlxuICogRGlzcGxheXMgY291bnRyeSBpbmZvcm1hdGlvblxuICogQHBhcmFtIHtzdHJpbmd9IGNvdW50cnlcbiAqL1xuY29uc3QgZGlzcGxheUNvdW50cnkgPSAoY291bnRyeSkgPT4ge1xuICBjb25zdCBjb3VudHJ5RGV0YWlscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY291bnRyeURldGFpbHNcIik7XG4gIGNvdW50cnlEZXRhaWxzLnRleHRDb250ZW50ID0gY291bnRyeTtcbn07XG5cbi8qKlxuICogRGlzcGxheXMgRGF0ZSBhbmQgVGltZVxuICogQHBhcmFtIHtzdHJpbmd9IGRhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSB0aW1lXG4gKi9cbmNvbnN0IGRpc3BsYXlEYXRlID0gKGRhdGUsIHRpbWUpID0+IHtcbiAgY29uc3QgZGF0ZURpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGF0ZVwiKTtcbiAgaWYgKGRhdGVEaXYuY2hpbGRyZW5bMF0pIHtcbiAgICBkYXRlRGl2LmNoaWxkcmVuWzBdLnJlbW92ZSgpO1xuICAgIGRhdGVEaXYuY2hpbGRyZW5bMF0ucmVtb3ZlKCk7XG4gIH1cbiAgY29uc3QgcDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgY29uc3QgcDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgcDEudGV4dENvbnRlbnQgPSBkYXRlO1xuICBwMi50ZXh0Q29udGVudCA9IHRpbWU7XG4gIGRhdGVEaXYuYXBwZW5kQ2hpbGQocDEpO1xuICBkYXRlRGl2LmFwcGVuZENoaWxkKHAyKTtcbn07XG5cbi8qKlxuICogRGlzcGxheXMgV2VhdGhlciBpbmZvcm1hdGlvbi5cbiAqIEBwYXJhbSB7c3RyaW5nfSBkZXNjcmlwdGlvblxuICogQHBhcmFtIHtVUkx9IGljb24gLVdlYXRoZXIgSWNvblxuICovXG5jb25zdCBkaXNwbGF5V2VhdGhlckRlc2NyaXB0aW9uID0gKGRlc2NyaXB0aW9uLCBpY29uKSA9PiB7XG4gIGNvbnN0IHdlYXRoZXJEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3dlYXRoZXJEZXNjcmlwdGlvblwiKTtcbiAgaWYgKHdlYXRoZXJEaXYuY2hpbGRyZW5bMF0pIHtcbiAgICB3ZWF0aGVyRGl2LmNoaWxkcmVuWzBdLnJlbW92ZSgpO1xuICAgIHdlYXRoZXJEaXYuY2hpbGRyZW5bMF0ucmVtb3ZlKCk7XG4gIH1cbiAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBjb25zdCBzcGxpdCA9IGRlc2NyaXB0aW9uLnNwbGl0KFwiXCIpO1xuICBzcGxpdFswXSA9IHNwbGl0WzBdLnRvVXBwZXJDYXNlKCk7XG4gIHAudGV4dENvbnRlbnQgPSBzcGxpdC5qb2luKFwiXCIpO1xuICBjb25zdCBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIGltYWdlLnNyYyA9IGljb247XG4gIGltYWdlLmlkID0gXCJ3ZWF0aGVyXCI7XG4gIHdlYXRoZXJEaXYuYXBwZW5kQ2hpbGQocCk7XG4gIHdlYXRoZXJEaXYuYXBwZW5kQ2hpbGQoaW1hZ2UpO1xufTtcblxuLyoqXG4gKiBEaXNwbGF5cyBodW1pZGl0eSwgcHJlc3N1cmUsIGFuZCB3aW5kIHNwZWVkLlxuICogQHBhcmFtIHtzdHJpbmd9IHByZXNzdXJlXG4gKiBAcGFyYW0ge3N0cmluZ30gd2luZFNwZWVkXG4gKiBAcGFyYW0ge3N0cmluZ30gaHVtaWRpdHlcbiAqL1xuY29uc3QgZGlzcGxheUh1bWlkUHJlc3NXaW5kID0gKHByZXNzdXJlLCB3aW5kU3BlZWQsIGh1bWlkaXR5KSA9PiB7XG4gIGNvbnN0IGRpc3BsYXlEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2h1bWlkUHJlc3N1cmVXaW5kXCIpO1xuICBpZiAoZGlzcGxheURpdi5jaGlsZHJlblswXSkge1xuICAgIGRpc3BsYXlEaXYuY2hpbGRyZW5bMF0ucmVtb3ZlKCk7XG4gICAgZGlzcGxheURpdi5jaGlsZHJlblswXS5yZW1vdmUoKTtcbiAgICBkaXNwbGF5RGl2LmNoaWxkcmVuWzBdLnJlbW92ZSgpO1xuICB9XG4gIC8vIEh1bWlkaXR5IERpdlxuICBjb25zdCBodW1pZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGh1bWlkRGl2LmNsYXNzTGlzdC5hZGQoXCJhbGlnblwiKTtcbiAgY29uc3QgaHVtaWRJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlcIik7XG4gIGh1bWlkSWNvbi5jbGFzc05hbWUgPSBcImZhcyBmYS10aW50XCI7XG4gIGh1bWlkRGl2LmFwcGVuZENoaWxkKGh1bWlkSWNvbik7XG4gIGNvbnN0IGh1bWlkUCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBodW1pZFAudGV4dENvbnRlbnQgPSBgSHVtaWRpdHk6ICR7aHVtaWRpdHl9YDtcbiAgaHVtaWREaXYuYXBwZW5kQ2hpbGQoaHVtaWRQKTtcbiAgZGlzcGxheURpdi5hcHBlbmRDaGlsZChodW1pZERpdik7XG5cbiAgLy8gV2luZCBEaXZcbiAgY29uc3Qgd2luZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHdpbmREaXYuY2xhc3NMaXN0LmFkZChcImFsaWduXCIpO1xuICBjb25zdCB3aW5kSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpO1xuICB3aW5kSWNvbi5jbGFzc05hbWUgPSBcImZhcyBmYS13aW5kXCI7XG4gIHdpbmREaXYuYXBwZW5kQ2hpbGQod2luZEljb24pO1xuICBjb25zdCB3aW5kUCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICB3aW5kUC50ZXh0Q29udGVudCA9IGBXaW5kIHNwZWVkOiAke3dpbmRTcGVlZH1gO1xuICB3aW5kRGl2LmFwcGVuZENoaWxkKHdpbmRQKTtcbiAgZGlzcGxheURpdi5hcHBlbmRDaGlsZCh3aW5kRGl2KTtcblxuICAvLyBQcmVzc3VyZSBEaXZcbiAgY29uc3QgcHJlc3N1cmVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBwcmVzc3VyZURpdi5jbGFzc0xpc3QuYWRkKFwiYWxpZ25cIik7XG4gIGNvbnN0IHByZXNzdXJlSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpO1xuICBwcmVzc3VyZUljb24uY2xhc3NOYW1lID0gXCJmYXMgZmEtdGFjaG9tZXRlci1hbHRcIjtcbiAgcHJlc3N1cmVEaXYuYXBwZW5kQ2hpbGQocHJlc3N1cmVJY29uKTtcbiAgY29uc3QgcHJlc3N1cmVQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHByZXNzdXJlUC50ZXh0Q29udGVudCA9IGBQcmVzc3VyZTogJHtwcmVzc3VyZX1gO1xuICBwcmVzc3VyZURpdi5hcHBlbmRDaGlsZChwcmVzc3VyZVApO1xuICBkaXNwbGF5RGl2LmFwcGVuZENoaWxkKHByZXNzdXJlRGl2KTtcbn07XG5cbi8qKlxuICogRGlzcGxheXMgdGhlIHRlbXBlcmF0dXJlLlxuICogQHBhcmFtIHtzdHJpbmd9IGZlZWxzTGlrZVxuICogQHBhcmFtIHtzdHJpbmd9IHRlbXBlcmF0dXJlXG4gKi9cbmNvbnN0IGRpc3BsYXlUZW1wID0gKGZlZWxzTGlrZSwgdGVtcGVyYXR1cmUpID0+IHtcbiAgY29uc3QgdGVtcERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGVtcFwiKTtcbiAgaWYgKHRlbXBEaXYuY2hpbGRyZW5bMF0pIHtcbiAgICB0ZW1wRGl2LmNoaWxkcmVuWzBdLnJlbW92ZSgpO1xuICAgIHRlbXBEaXYuY2hpbGRyZW5bMF0ucmVtb3ZlKCk7XG4gIH1cbiAgLy8gZmVlbHNMaWtlIERpdlxuICBjb25zdCBmZWVsc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGZlZWxzRGl2LmNsYXNzTGlzdC5hZGQoXCJhbGlnblwiKTtcbiAgY29uc3QgZmVlbHNJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlcIik7XG4gIGZlZWxzSWNvbi5jbGFzc05hbWUgPSBcImZhcyBmYS1tYWxlXCI7XG4gIGZlZWxzRGl2LmFwcGVuZENoaWxkKGZlZWxzSWNvbik7XG4gIGNvbnN0IGZlZWxzUCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBmZWVsc1AudGV4dENvbnRlbnQgPSBgRmVlbHMgTGlrZTogJHtmZWVsc0xpa2V9YDtcbiAgZmVlbHNEaXYuYXBwZW5kQ2hpbGQoZmVlbHNQKTtcbiAgdGVtcERpdi5hcHBlbmRDaGlsZChmZWVsc0Rpdik7XG5cbiAgLy8gdGVtcGVyYXR1cmUgRGl2XG4gIGNvbnN0IHRlbXBlcmF0dXJlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdGVtcGVyYXR1cmVEaXYuY2xhc3NMaXN0LmFkZChcImFsaWduXCIpO1xuICBjb25zdCB0ZW1wZXJhdHVyZUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaVwiKTtcbiAgdGVtcGVyYXR1cmVJY29uLmNsYXNzTmFtZSA9IFwiZmFzIGZhLXRoZXJtb21ldGVyLWhhbGZcIjtcbiAgdGVtcGVyYXR1cmVEaXYuYXBwZW5kQ2hpbGQodGVtcGVyYXR1cmVJY29uKTtcbiAgY29uc3QgdGVtcGVyYXR1cmVQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHRlbXBlcmF0dXJlUC50ZXh0Q29udGVudCA9IGBUZW1wZXJhdHVyZTogJHt0ZW1wZXJhdHVyZX1gO1xuICB0ZW1wZXJhdHVyZURpdi5hcHBlbmRDaGlsZCh0ZW1wZXJhdHVyZVApO1xuICB0ZW1wRGl2LmFwcGVuZENoaWxkKHRlbXBlcmF0dXJlRGl2KTtcbn07XG5cbi8qKlxuICogRGlzcGxheXMgbWF4aW11bSBhbmQgbWluaW11bSB0ZW1wZXJhdHVyZVxuICogQHBhcmFtIHtzdHJpbmd9IG1pblxuICogQHBhcmFtIHtzdHJpbmd9IG1heFxuICovXG5jb25zdCBkaXNwbGF5TWluTWF4ID0gKG1pbiwgbWF4KSA9PiB7XG4gIGNvbnN0IG1pbk1heERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWluTWF4XCIpO1xuICBpZiAobWluTWF4RGl2LmNoaWxkcmVuWzBdKSB7XG4gICAgbWluTWF4RGl2LmNoaWxkcmVuWzBdLnJlbW92ZSgpO1xuICAgIG1pbk1heERpdi5jaGlsZHJlblswXS5yZW1vdmUoKTtcbiAgfVxuXG4gIC8vIE1heCBEaXZcbiAgY29uc3QgbWF4RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbWF4RGl2LmNsYXNzTGlzdC5hZGQoXCJhbGlnblwiKTtcbiAgY29uc3QgbWF4SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpO1xuICBtYXhJY29uLmNsYXNzTmFtZSA9IFwiZmFzIGZhLXRlbXBlcmF0dXJlLWhpZ2hcIjtcbiAgbWF4RGl2LmFwcGVuZENoaWxkKG1heEljb24pO1xuICBjb25zdCBtYXhQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIG1heFAudGV4dENvbnRlbnQgPSBgTWF4aW11bSB0ZW1wZXJhdHVyZTogJHttYXh9YDtcbiAgbWF4RGl2LmFwcGVuZENoaWxkKG1heFApO1xuICBtaW5NYXhEaXYuYXBwZW5kQ2hpbGQobWF4RGl2KTtcblxuICAvLyBNaW4gRGl2XG4gIGNvbnN0IG1pbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1pbkRpdi5jbGFzc0xpc3QuYWRkKFwiYWxpZ25cIik7XG4gIGNvbnN0IG1pbkljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaVwiKTtcbiAgbWluSWNvbi5jbGFzc05hbWUgPSBcImZhcyBmYS10ZW1wZXJhdHVyZS1sb3dcIjtcbiAgbWluRGl2LmFwcGVuZENoaWxkKG1pbkljb24pO1xuICBjb25zdCBtaW5QID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIG1pblAudGV4dENvbnRlbnQgPSBgTWluaW11bSB0ZW1wZXJhdHVyZTogJHttaW59YDtcbiAgbWluRGl2LmFwcGVuZENoaWxkKG1pblApO1xuICBtaW5NYXhEaXYuYXBwZW5kQ2hpbGQobWluRGl2KTtcbn07XG5cbi8qKlxuICogRGlzcGxheXMgcmFpbiBhbmQgc25vdyB2b2x1bWUuXG4gKiBAcGFyYW0ge3N0cmluZ30gcmFpblxuICogQHBhcmFtIHtzdHJpbmd9IHNub3dcbiAqL1xuY29uc3QgZGlzcGxheVZvbHVtZSA9IChyYWluLCBzbm93KSA9PiB7XG4gIGNvbnN0IHZvbHVtZURpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdm9sdW1lXCIpO1xuICBpZiAodm9sdW1lRGl2LmNoaWxkcmVuWzBdKSB7XG4gICAgdm9sdW1lRGl2LmNoaWxkcmVuWzBdLnJlbW92ZSgpO1xuICAgIGlmICh2b2x1bWVEaXYuY2hpbGRyZW5bMF0pIHtcbiAgICAgIHZvbHVtZURpdi5jaGlsZHJlblswXS5yZW1vdmUoKTtcbiAgICB9XG4gIH1cblxuICAvLyBNYXggRGl2XG4gIGlmIChyYWluKSB7XG4gICAgY29uc3QgcmFpbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcmFpbkRpdi5jbGFzc0xpc3QuYWRkKFwiYWxpZ25cIik7XG4gICAgY29uc3QgcmFpbkljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaVwiKTtcbiAgICByYWluSWNvbi5jbGFzc05hbWUgPSBcImZhcyBmYS1jbG91ZC1yYWluXCI7XG4gICAgcmFpbkRpdi5hcHBlbmRDaGlsZChyYWluSWNvbik7XG4gICAgY29uc3QgcmFpblAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICByYWluUC50ZXh0Q29udGVudCA9IGBSYWluIHZvbHVtZSBpbiB0aGUgbGFzdCBob3VyOiAke3JhaW59YDtcbiAgICByYWluRGl2LmFwcGVuZENoaWxkKHJhaW5QKTtcbiAgICB2b2x1bWVEaXYuYXBwZW5kQ2hpbGQocmFpbkRpdik7XG4gIH1cblxuICAvLyBNYXggRGl2XG4gIGlmIChzbm93KSB7XG4gICAgY29uc3Qgc25vd0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgc25vd0Rpdi5jbGFzc0xpc3QuYWRkKFwiYWxpZ25cIik7XG4gICAgY29uc3Qgc25vd0ljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaVwiKTtcbiAgICBzbm93SWNvbi5jbGFzc05hbWUgPSBcImZhcyBmYS1zbm93Zmxha2VcIjtcbiAgICBzbm93RGl2LmFwcGVuZENoaWxkKHNub3dJY29uKTtcbiAgICBjb25zdCBzbm93UCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHNub3dQLnRleHRDb250ZW50ID0gYFNub3cgdm9sdW1lIGluIHRoZSBsYXN0IGhvdXI6ICR7c25vd31gO1xuICAgIHNub3dEaXYuYXBwZW5kQ2hpbGQoc25vd1ApO1xuICAgIHZvbHVtZURpdi5hcHBlbmRDaGlsZChzbm93RGl2KTtcbiAgfVxufTtcblxuLyoqXG4gKiBjaGFuZ2VzIGJhY2tncm91bmQgZGVwZW5kaW5nIG9uIHRpbWUgb2YgZGF5IGF0IGxvY2F0aW9uO1xuICogQHBhcmFtIHtzdHJpbmd9IHBlcmlvZCAtIFRpbWUgb2YgZGF5IGF0IGxvY2F0aW9uXG4gKi9cbmNvbnN0IGNoYW5nZUJhY2tncm91bmQgPSAocGVyaW9kKSA9PiB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluXCIpO1xuICBjb25zdCBzZWFyY2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NlYXJjaEJhclwiKTtcbiAgbGV0IGJ1dHRvbjtcbiAgaWYgKHBlcmlvZCA9PT0gXCJEYXlcIikge1xuICAgIGNvbnRhaW5lci5zdHlsZS5jb2xvciA9IFwiYmxhY2tcIjtcbiAgICBzZWFyY2guc3R5bGVbXCJib3gtc2hhZG93XCJdID0gXCIwcHggMHB4IDRweCA0cHggYmxhY2tcIjtcbiAgICBjb250YWluZXIuc3R5bGVbXCJiYWNrZ3JvdW5kLWltYWdlXCJdID0gYHVybCgke0RheX0pYDtcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hY3RpdmVXaGl0ZVwiKSkge1xuICAgICAgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hY3RpdmVXaGl0ZVwiKTtcbiAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlV2hpdGVcIik7XG4gICAgICBidXR0b24uY2xhc3NMaXN0LmFkZChcImFjdGl2ZUJsYWNrXCIpO1xuICAgIH1cbiAgfVxuICBpZiAocGVyaW9kID09PSBcIk5pZ2h0XCIpIHtcbiAgICBjb250YWluZXIuc3R5bGUuY29sb3IgPSBcIndoaXRlXCI7XG4gICAgc2VhcmNoLnN0eWxlW1wiYm94LXNoYWRvd1wiXSA9IFwiMHB4IDBweCA0cHggNHB4IHdoaXRlXCI7XG4gICAgY29udGFpbmVyLnN0eWxlW1wiYmFja2dyb3VuZC1pbWFnZVwiXSA9IGB1cmwoJHtOaWdodH0pYDtcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hY3RpdmVCbGFja1wiKSkge1xuICAgICAgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hY3RpdmVCbGFja1wiKTtcbiAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlQmxhY2tcIik7XG4gICAgICBidXR0b24uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVdoaXRlXCIpO1xuICAgIH1cbiAgfVxufTtcblxuLyoqXG4gKiBDYWxscyBoZWxwZXIgZGlzcGxheSBmdW5jdGlvbnNcbiAqIEBwYXJhbSB7T2JqZWN0fSB3ZWF0aGVyT2JqXG4gKi9cbmNvbnN0IGRpc3BsYXkgPSAod2VhdGhlck9iaikgPT4ge1xuICBkaXNwbGF5Q291bnRyeSh3ZWF0aGVyT2JqLmdldEZ1bGxMb2NhdGlvbigpKTtcbiAgZGlzcGxheURhdGUod2VhdGhlck9iai5nZXREYXRlKCksIHdlYXRoZXJPYmouZ2V0VGltZSgpKTtcbiAgZGlzcGxheVdlYXRoZXJEZXNjcmlwdGlvbih3ZWF0aGVyT2JqLmRlc2NyaXB0aW9uLCB3ZWF0aGVyT2JqLmljb24pO1xuICBkaXNwbGF5SHVtaWRQcmVzc1dpbmQoXG4gICAgd2VhdGhlck9iai5wcmVzc3VyZSxcbiAgICB3ZWF0aGVyT2JqLndpbmRTcGVlZCxcbiAgICB3ZWF0aGVyT2JqLmh1bWlkaXR5XG4gICk7XG4gIGRpc3BsYXlUZW1wKHdlYXRoZXJPYmouZmVlbHNMaWtlLCB3ZWF0aGVyT2JqLnRlbXBlcmF0dXJlKTtcbiAgZGlzcGxheU1pbk1heCh3ZWF0aGVyT2JqLm1pblRlbXBlcmF0dXJlLCB3ZWF0aGVyT2JqLm1heFRlbXBlcmF0dXJlKTtcbiAgZGlzcGxheVZvbHVtZSh3ZWF0aGVyT2JqLnJhaW5Wb2x1bWUsIHdlYXRoZXJPYmouc25vd1ZvbHVtZSk7XG4gIGNoYW5nZUJhY2tncm91bmQod2VhdGhlck9iai5nZXREYXlPck5pZ2h0KCkpO1xuICBjb25zdCBlcnJvckRpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Vycm9yRGlzcGxheVwiKTtcbiAgZXJyb3JEaXNwbGF5LnRleHRDb250ZW50ID0gXCJcIjtcbn07XG5cbmV4cG9ydCB7IGRpc3BsYXkgfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==