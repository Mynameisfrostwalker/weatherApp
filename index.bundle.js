/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/styles/main.css":
/*!*****************************!*\
  !*** ./src/styles/main.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/styles/reset.css":
/*!******************************!*\
  !*** ./src/styles/reset.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/scripts/display.js":
/*!********************************!*\
  !*** ./src/scripts/display.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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




/***/ }),

/***/ "./src/scripts/index.js":
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_reset_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/reset.css */ "./src/styles/reset.css");
/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/main.css */ "./src/styles/main.css");
/* harmony import */ var _fortawesome_fontawesome_free_js_all__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/fontawesome-free/js/all */ "./node_modules/@fortawesome/fontawesome-free/js/all.js");
/* harmony import */ var _fortawesome_fontawesome_free_js_all__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_free_js_all__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _initialPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./initialPage */ "./src/scripts/initialPage.js");
/* harmony import */ var _pubsub__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pubsub */ "./src/scripts/pubsub.js");
/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./search */ "./src/scripts/search.js");
/* harmony import */ var _display__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./display */ "./src/scripts/display.js");
/* harmony import */ var _switch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./switch */ "./src/scripts/switch.js");









// @ts-check

/**
 * @fileoverview Index .js is the root of this file.
 * @author Frostwalker
 */

(0,_pubsub__WEBPACK_IMPORTED_MODULE_4__.subscribe)("pageLoaded", _search__WEBPACK_IMPORTED_MODULE_5__.searchEventListener);

(0,_pubsub__WEBPACK_IMPORTED_MODULE_4__.subscribe)("pageLoaded", _switch__WEBPACK_IMPORTED_MODULE_7__.switchActive);

(0,_pubsub__WEBPACK_IMPORTED_MODULE_4__.subscribe)("display", _display__WEBPACK_IMPORTED_MODULE_6__.display);

(0,_initialPage__WEBPACK_IMPORTED_MODULE_3__.initialPageLoad)();


/***/ }),

/***/ "./src/scripts/initialPage.js":
/*!************************************!*\
  !*** ./src/scripts/initialPage.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initialPageLoad": () => (/* binding */ initialPageLoad)
/* harmony export */ });
/* harmony import */ var _images_initial_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/initial.jpg */ "./src/images/initial.jpg");
/* harmony import */ var _pubsub__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pubsub */ "./src/scripts/pubsub.js");



// @ts-check

/**
 * @module InitialPage
 */

/**
 * @type {Object} - container
 */
const container = document.querySelector("main");

/**
 * creates a form
 * @return {Object} - form
 */
const formCreate = () => {
  const form = document.createElement("form");
  const label = document.createElement("label");
  label.for = "search";
  label.textContent = "Enter city name:";
  const searchBar = document.createElement("div");
  searchBar.id = "searchBar";
  const icon = document.createElement("div");
  icon.id = "icon";
  const i = document.createElement("i");
  i.classList.add("fas");
  i.classList.add("fa-search");
  icon.appendChild(i);
  const input = document.createElement("input");
  input.type = "text";
  input.name = "city";
  input.id = "search";
  searchBar.appendChild(icon);
  searchBar.appendChild(input);
  const span = document.createElement("span");
  span.id = "errorDisplay";
  const standards = document.createElement("div");
  standards.id = "standardDiv";

  // metric button
  const metricButton = document.createElement("div");
  metricButton.textContent = "metric";
  metricButton.id = "metricButton";
  metricButton.className = "standards activeBlack";
  standards.appendChild(metricButton);

  // imperial button
  const imperialButton = document.createElement("div");
  imperialButton.textContent = "imperial";
  imperialButton.id = "imperialButton";
  imperialButton.className = "standards";
  standards.appendChild(imperialButton);

  form.appendChild(label);
  form.appendChild(searchBar);
  form.appendChild(span);
  form.appendChild(standards);
  form.setAttribute("novalidate", "true");
  return form;
};

/**
 * Returns a div
 * @param {string} identifier
 * @return {Object}- a Div
 */
const gridCreator = (identifier) => {
  const div = document.createElement("div");
  div.classList.add("grid");
  div.id = identifier;
  return div;
};

/**
 * Loads inital page.
 * @function
 */
const initialPageLoad = () => {
  const form = formCreate();
  const formDiv = gridCreator("Form");
  formDiv.appendChild(form);
  container.style["background-image"] = `url(${_images_initial_jpg__WEBPACK_IMPORTED_MODULE_0__})`;
  container.appendChild(formDiv);
  container.appendChild(gridCreator("countryDetails"));
  container.appendChild(gridCreator("date"));
  container.appendChild(gridCreator("weatherDescription"));
  container.appendChild(gridCreator("humidPressureWind"));
  container.appendChild(gridCreator("temp"));
  container.appendChild(gridCreator("minMax"));
  container.appendChild(gridCreator("volume"));
  const icon = document.querySelector("#icon");
  (0,_pubsub__WEBPACK_IMPORTED_MODULE_1__.publish)("pageLoaded", icon);
};




/***/ }),

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

/***/ "./src/scripts/switch.js":
/*!*******************************!*\
  !*** ./src/scripts/switch.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "switchActive": () => (/* binding */ switchActive)
/* harmony export */ });
// @ts-check

/**
 * @module search
 */

/**
 * @param {Object} event
 */
const switchDiv = (event) => {
  let currentActive;
  if (document.querySelector(".activeBlack")) {
    currentActive = document.querySelector(".activeBlack");
    currentActive.classList.remove("activeBlack");
    event.currentTarget.classList.add("activeBlack");
  } else {
    currentActive = document.querySelector(".activeWhite");
    currentActive.classList.remove("activeWhite");
    event.currentTarget.classList.add("activeWhite");
  }
};

/**
 * Attaches event listener to button events[eventName]
 * @function
 */
const switchActive = () => {
  const buttons = document.querySelectorAll(".standards");
  buttons.forEach((button) => {
    button.addEventListener("click", switchDiv);
  });
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
      `http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=81d1f6e5ed77f7c8c9da1dcc073ad7c6&units=${standard}`,
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




/***/ }),

/***/ "./src/images/day.jpeg":
/*!*****************************!*\
  !*** ./src/images/day.jpeg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5f30b18ad02728794721.jpeg";

/***/ }),

/***/ "./src/images/initial.jpg":
/*!********************************!*\
  !*** ./src/images/initial.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f31c7f5a5736ea3ae70f.jpg";

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_date-fns_esm_format_index_js-node_modules_date-fns_esm_isAfter_index_js","vendors-node_modules_fortawesome_fontawesome-free_js_all_js"], () => (__webpack_require__("./src/scripts/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FDQTtXQUNBLGtCQUFrQixxQkFBcUI7V0FDdkM7V0FDQTtXQUNBLEtBQUs7V0FDTDtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDM0JBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxNQUFNLHFCQUFxQjtXQUMzQjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTs7Ozs7VUVoREE7VUFDQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvc3R5bGVzL21haW4uY3NzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvc3R5bGVzL3Jlc2V0LmNzcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL3NjcmlwdHMvZGlzcGxheS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL3NjcmlwdHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy9zY3JpcHRzL2luaXRpYWxQYWdlLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvc2NyaXB0cy9wdWJzdWIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy9zY3JpcHRzL3NlYXJjaC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL3NjcmlwdHMvc3dpdGNoLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvc2NyaXB0cy93ZWF0aGVyRGF0YS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXJhcHAvd2VicGFjay9ydW50aW1lL2NodW5rIGxvYWRlZCIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYXRoZXJhcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXJhcHAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXJhcHAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiaW1wb3J0IERheSBmcm9tIFwiLi4vaW1hZ2VzL2RheS5qcGVnXCI7XG5pbXBvcnQgTmlnaHQgZnJvbSBcIi4uL2ltYWdlcy9uaWdodC5qcGdcIjtcblxuLy8gQHRzLWNoZWNrXG5cbi8qKlxuICogQG1vZHVsZSBkaXNwbGF5XG4gKi9cblxuLyoqXG4gKiBEaXNwbGF5cyBjb3VudHJ5IGluZm9ybWF0aW9uXG4gKiBAcGFyYW0ge3N0cmluZ30gY291bnRyeVxuICovXG5jb25zdCBkaXNwbGF5Q291bnRyeSA9IChjb3VudHJ5KSA9PiB7XG4gIGNvbnN0IGNvdW50cnlEZXRhaWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb3VudHJ5RGV0YWlsc1wiKTtcbiAgY291bnRyeURldGFpbHMudGV4dENvbnRlbnQgPSBjb3VudHJ5O1xufTtcblxuLyoqXG4gKiBEaXNwbGF5cyBEYXRlIGFuZCBUaW1lXG4gKiBAcGFyYW0ge3N0cmluZ30gZGF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IHRpbWVcbiAqL1xuY29uc3QgZGlzcGxheURhdGUgPSAoZGF0ZSwgdGltZSkgPT4ge1xuICBjb25zdCBkYXRlRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkYXRlXCIpO1xuICBpZiAoZGF0ZURpdi5jaGlsZHJlblswXSkge1xuICAgIGRhdGVEaXYuY2hpbGRyZW5bMF0ucmVtb3ZlKCk7XG4gICAgZGF0ZURpdi5jaGlsZHJlblswXS5yZW1vdmUoKTtcbiAgfVxuICBjb25zdCBwMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBjb25zdCBwMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBwMS50ZXh0Q29udGVudCA9IGRhdGU7XG4gIHAyLnRleHRDb250ZW50ID0gdGltZTtcbiAgZGF0ZURpdi5hcHBlbmRDaGlsZChwMSk7XG4gIGRhdGVEaXYuYXBwZW5kQ2hpbGQocDIpO1xufTtcblxuLyoqXG4gKiBEaXNwbGF5cyBXZWF0aGVyIGluZm9ybWF0aW9uLlxuICogQHBhcmFtIHtzdHJpbmd9IGRlc2NyaXB0aW9uXG4gKiBAcGFyYW0ge1VSTH0gaWNvbiAtV2VhdGhlciBJY29uXG4gKi9cbmNvbnN0IGRpc3BsYXlXZWF0aGVyRGVzY3JpcHRpb24gPSAoZGVzY3JpcHRpb24sIGljb24pID0+IHtcbiAgY29uc3Qgd2VhdGhlckRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjd2VhdGhlckRlc2NyaXB0aW9uXCIpO1xuICBpZiAod2VhdGhlckRpdi5jaGlsZHJlblswXSkge1xuICAgIHdlYXRoZXJEaXYuY2hpbGRyZW5bMF0ucmVtb3ZlKCk7XG4gICAgd2VhdGhlckRpdi5jaGlsZHJlblswXS5yZW1vdmUoKTtcbiAgfVxuICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGNvbnN0IHNwbGl0ID0gZGVzY3JpcHRpb24uc3BsaXQoXCJcIik7XG4gIHNwbGl0WzBdID0gc3BsaXRbMF0udG9VcHBlckNhc2UoKTtcbiAgcC50ZXh0Q29udGVudCA9IHNwbGl0LmpvaW4oXCJcIik7XG4gIGNvbnN0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgaW1hZ2Uuc3JjID0gaWNvbjtcbiAgaW1hZ2UuaWQgPSBcIndlYXRoZXJcIjtcbiAgd2VhdGhlckRpdi5hcHBlbmRDaGlsZChwKTtcbiAgd2VhdGhlckRpdi5hcHBlbmRDaGlsZChpbWFnZSk7XG59O1xuXG4vKipcbiAqIERpc3BsYXlzIGh1bWlkaXR5LCBwcmVzc3VyZSwgYW5kIHdpbmQgc3BlZWQuXG4gKiBAcGFyYW0ge3N0cmluZ30gcHJlc3N1cmVcbiAqIEBwYXJhbSB7c3RyaW5nfSB3aW5kU3BlZWRcbiAqIEBwYXJhbSB7c3RyaW5nfSBodW1pZGl0eVxuICovXG5jb25zdCBkaXNwbGF5SHVtaWRQcmVzc1dpbmQgPSAocHJlc3N1cmUsIHdpbmRTcGVlZCwgaHVtaWRpdHkpID0+IHtcbiAgY29uc3QgZGlzcGxheURpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaHVtaWRQcmVzc3VyZVdpbmRcIik7XG4gIGlmIChkaXNwbGF5RGl2LmNoaWxkcmVuWzBdKSB7XG4gICAgZGlzcGxheURpdi5jaGlsZHJlblswXS5yZW1vdmUoKTtcbiAgICBkaXNwbGF5RGl2LmNoaWxkcmVuWzBdLnJlbW92ZSgpO1xuICAgIGRpc3BsYXlEaXYuY2hpbGRyZW5bMF0ucmVtb3ZlKCk7XG4gIH1cbiAgLy8gSHVtaWRpdHkgRGl2XG4gIGNvbnN0IGh1bWlkRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaHVtaWREaXYuY2xhc3NMaXN0LmFkZChcImFsaWduXCIpO1xuICBjb25zdCBodW1pZEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaVwiKTtcbiAgaHVtaWRJY29uLmNsYXNzTmFtZSA9IFwiZmFzIGZhLXRpbnRcIjtcbiAgaHVtaWREaXYuYXBwZW5kQ2hpbGQoaHVtaWRJY29uKTtcbiAgY29uc3QgaHVtaWRQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGh1bWlkUC50ZXh0Q29udGVudCA9IGBIdW1pZGl0eTogJHtodW1pZGl0eX1gO1xuICBodW1pZERpdi5hcHBlbmRDaGlsZChodW1pZFApO1xuICBkaXNwbGF5RGl2LmFwcGVuZENoaWxkKGh1bWlkRGl2KTtcblxuICAvLyBXaW5kIERpdlxuICBjb25zdCB3aW5kRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgd2luZERpdi5jbGFzc0xpc3QuYWRkKFwiYWxpZ25cIik7XG4gIGNvbnN0IHdpbmRJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlcIik7XG4gIHdpbmRJY29uLmNsYXNzTmFtZSA9IFwiZmFzIGZhLXdpbmRcIjtcbiAgd2luZERpdi5hcHBlbmRDaGlsZCh3aW5kSWNvbik7XG4gIGNvbnN0IHdpbmRQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHdpbmRQLnRleHRDb250ZW50ID0gYFdpbmQgc3BlZWQ6ICR7d2luZFNwZWVkfWA7XG4gIHdpbmREaXYuYXBwZW5kQ2hpbGQod2luZFApO1xuICBkaXNwbGF5RGl2LmFwcGVuZENoaWxkKHdpbmREaXYpO1xuXG4gIC8vIFByZXNzdXJlIERpdlxuICBjb25zdCBwcmVzc3VyZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHByZXNzdXJlRGl2LmNsYXNzTGlzdC5hZGQoXCJhbGlnblwiKTtcbiAgY29uc3QgcHJlc3N1cmVJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlcIik7XG4gIHByZXNzdXJlSWNvbi5jbGFzc05hbWUgPSBcImZhcyBmYS10YWNob21ldGVyLWFsdFwiO1xuICBwcmVzc3VyZURpdi5hcHBlbmRDaGlsZChwcmVzc3VyZUljb24pO1xuICBjb25zdCBwcmVzc3VyZVAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgcHJlc3N1cmVQLnRleHRDb250ZW50ID0gYFByZXNzdXJlOiAke3ByZXNzdXJlfWA7XG4gIHByZXNzdXJlRGl2LmFwcGVuZENoaWxkKHByZXNzdXJlUCk7XG4gIGRpc3BsYXlEaXYuYXBwZW5kQ2hpbGQocHJlc3N1cmVEaXYpO1xufTtcblxuLyoqXG4gKiBEaXNwbGF5cyB0aGUgdGVtcGVyYXR1cmUuXG4gKiBAcGFyYW0ge3N0cmluZ30gZmVlbHNMaWtlXG4gKiBAcGFyYW0ge3N0cmluZ30gdGVtcGVyYXR1cmVcbiAqL1xuY29uc3QgZGlzcGxheVRlbXAgPSAoZmVlbHNMaWtlLCB0ZW1wZXJhdHVyZSkgPT4ge1xuICBjb25zdCB0ZW1wRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0ZW1wXCIpO1xuICBpZiAodGVtcERpdi5jaGlsZHJlblswXSkge1xuICAgIHRlbXBEaXYuY2hpbGRyZW5bMF0ucmVtb3ZlKCk7XG4gICAgdGVtcERpdi5jaGlsZHJlblswXS5yZW1vdmUoKTtcbiAgfVxuICAvLyBmZWVsc0xpa2UgRGl2XG4gIGNvbnN0IGZlZWxzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZmVlbHNEaXYuY2xhc3NMaXN0LmFkZChcImFsaWduXCIpO1xuICBjb25zdCBmZWVsc0ljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaVwiKTtcbiAgZmVlbHNJY29uLmNsYXNzTmFtZSA9IFwiZmFzIGZhLW1hbGVcIjtcbiAgZmVlbHNEaXYuYXBwZW5kQ2hpbGQoZmVlbHNJY29uKTtcbiAgY29uc3QgZmVlbHNQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGZlZWxzUC50ZXh0Q29udGVudCA9IGBGZWVscyBMaWtlOiAke2ZlZWxzTGlrZX1gO1xuICBmZWVsc0Rpdi5hcHBlbmRDaGlsZChmZWVsc1ApO1xuICB0ZW1wRGl2LmFwcGVuZENoaWxkKGZlZWxzRGl2KTtcblxuICAvLyB0ZW1wZXJhdHVyZSBEaXZcbiAgY29uc3QgdGVtcGVyYXR1cmVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0ZW1wZXJhdHVyZURpdi5jbGFzc0xpc3QuYWRkKFwiYWxpZ25cIik7XG4gIGNvbnN0IHRlbXBlcmF0dXJlSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpO1xuICB0ZW1wZXJhdHVyZUljb24uY2xhc3NOYW1lID0gXCJmYXMgZmEtdGhlcm1vbWV0ZXItaGFsZlwiO1xuICB0ZW1wZXJhdHVyZURpdi5hcHBlbmRDaGlsZCh0ZW1wZXJhdHVyZUljb24pO1xuICBjb25zdCB0ZW1wZXJhdHVyZVAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgdGVtcGVyYXR1cmVQLnRleHRDb250ZW50ID0gYFRlbXBlcmF0dXJlOiAke3RlbXBlcmF0dXJlfWA7XG4gIHRlbXBlcmF0dXJlRGl2LmFwcGVuZENoaWxkKHRlbXBlcmF0dXJlUCk7XG4gIHRlbXBEaXYuYXBwZW5kQ2hpbGQodGVtcGVyYXR1cmVEaXYpO1xufTtcblxuLyoqXG4gKiBEaXNwbGF5cyBtYXhpbXVtIGFuZCBtaW5pbXVtIHRlbXBlcmF0dXJlXG4gKiBAcGFyYW0ge3N0cmluZ30gbWluXG4gKiBAcGFyYW0ge3N0cmluZ30gbWF4XG4gKi9cbmNvbnN0IGRpc3BsYXlNaW5NYXggPSAobWluLCBtYXgpID0+IHtcbiAgY29uc3QgbWluTWF4RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtaW5NYXhcIik7XG4gIGlmIChtaW5NYXhEaXYuY2hpbGRyZW5bMF0pIHtcbiAgICBtaW5NYXhEaXYuY2hpbGRyZW5bMF0ucmVtb3ZlKCk7XG4gICAgbWluTWF4RGl2LmNoaWxkcmVuWzBdLnJlbW92ZSgpO1xuICB9XG5cbiAgLy8gTWF4IERpdlxuICBjb25zdCBtYXhEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtYXhEaXYuY2xhc3NMaXN0LmFkZChcImFsaWduXCIpO1xuICBjb25zdCBtYXhJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlcIik7XG4gIG1heEljb24uY2xhc3NOYW1lID0gXCJmYXMgZmEtdGVtcGVyYXR1cmUtaGlnaFwiO1xuICBtYXhEaXYuYXBwZW5kQ2hpbGQobWF4SWNvbik7XG4gIGNvbnN0IG1heFAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgbWF4UC50ZXh0Q29udGVudCA9IGBNYXhpbXVtIHRlbXBlcmF0dXJlOiAke21heH1gO1xuICBtYXhEaXYuYXBwZW5kQ2hpbGQobWF4UCk7XG4gIG1pbk1heERpdi5hcHBlbmRDaGlsZChtYXhEaXYpO1xuXG4gIC8vIE1pbiBEaXZcbiAgY29uc3QgbWluRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbWluRGl2LmNsYXNzTGlzdC5hZGQoXCJhbGlnblwiKTtcbiAgY29uc3QgbWluSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpO1xuICBtaW5JY29uLmNsYXNzTmFtZSA9IFwiZmFzIGZhLXRlbXBlcmF0dXJlLWxvd1wiO1xuICBtaW5EaXYuYXBwZW5kQ2hpbGQobWluSWNvbik7XG4gIGNvbnN0IG1pblAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgbWluUC50ZXh0Q29udGVudCA9IGBNaW5pbXVtIHRlbXBlcmF0dXJlOiAke21pbn1gO1xuICBtaW5EaXYuYXBwZW5kQ2hpbGQobWluUCk7XG4gIG1pbk1heERpdi5hcHBlbmRDaGlsZChtaW5EaXYpO1xufTtcblxuLyoqXG4gKiBEaXNwbGF5cyByYWluIGFuZCBzbm93IHZvbHVtZS5cbiAqIEBwYXJhbSB7c3RyaW5nfSByYWluXG4gKiBAcGFyYW0ge3N0cmluZ30gc25vd1xuICovXG5jb25zdCBkaXNwbGF5Vm9sdW1lID0gKHJhaW4sIHNub3cpID0+IHtcbiAgY29uc3Qgdm9sdW1lRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN2b2x1bWVcIik7XG4gIGlmICh2b2x1bWVEaXYuY2hpbGRyZW5bMF0pIHtcbiAgICB2b2x1bWVEaXYuY2hpbGRyZW5bMF0ucmVtb3ZlKCk7XG4gICAgaWYgKHZvbHVtZURpdi5jaGlsZHJlblswXSkge1xuICAgICAgdm9sdW1lRGl2LmNoaWxkcmVuWzBdLnJlbW92ZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8vIE1heCBEaXZcbiAgaWYgKHJhaW4pIHtcbiAgICBjb25zdCByYWluRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICByYWluRGl2LmNsYXNzTGlzdC5hZGQoXCJhbGlnblwiKTtcbiAgICBjb25zdCByYWluSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpO1xuICAgIHJhaW5JY29uLmNsYXNzTmFtZSA9IFwiZmFzIGZhLWNsb3VkLXJhaW5cIjtcbiAgICByYWluRGl2LmFwcGVuZENoaWxkKHJhaW5JY29uKTtcbiAgICBjb25zdCByYWluUCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHJhaW5QLnRleHRDb250ZW50ID0gYFJhaW4gdm9sdW1lIGluIHRoZSBsYXN0IGhvdXI6ICR7cmFpbn1gO1xuICAgIHJhaW5EaXYuYXBwZW5kQ2hpbGQocmFpblApO1xuICAgIHZvbHVtZURpdi5hcHBlbmRDaGlsZChyYWluRGl2KTtcbiAgfVxuXG4gIC8vIE1heCBEaXZcbiAgaWYgKHNub3cpIHtcbiAgICBjb25zdCBzbm93RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBzbm93RGl2LmNsYXNzTGlzdC5hZGQoXCJhbGlnblwiKTtcbiAgICBjb25zdCBzbm93SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpO1xuICAgIHNub3dJY29uLmNsYXNzTmFtZSA9IFwiZmFzIGZhLXNub3dmbGFrZVwiO1xuICAgIHNub3dEaXYuYXBwZW5kQ2hpbGQoc25vd0ljb24pO1xuICAgIGNvbnN0IHNub3dQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgc25vd1AudGV4dENvbnRlbnQgPSBgU25vdyB2b2x1bWUgaW4gdGhlIGxhc3QgaG91cjogJHtzbm93fWA7XG4gICAgc25vd0Rpdi5hcHBlbmRDaGlsZChzbm93UCk7XG4gICAgdm9sdW1lRGl2LmFwcGVuZENoaWxkKHNub3dEaXYpO1xuICB9XG59O1xuXG4vKipcbiAqIGNoYW5nZXMgYmFja2dyb3VuZCBkZXBlbmRpbmcgb24gdGltZSBvZiBkYXkgYXQgbG9jYXRpb247XG4gKiBAcGFyYW0ge3N0cmluZ30gcGVyaW9kIC0gVGltZSBvZiBkYXkgYXQgbG9jYXRpb25cbiAqL1xuY29uc3QgY2hhbmdlQmFja2dyb3VuZCA9IChwZXJpb2QpID0+IHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIik7XG4gIGNvbnN0IHNlYXJjaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2VhcmNoQmFyXCIpO1xuICBsZXQgYnV0dG9uO1xuICBpZiAocGVyaW9kID09PSBcIkRheVwiKSB7XG4gICAgY29udGFpbmVyLnN0eWxlLmNvbG9yID0gXCJibGFja1wiO1xuICAgIHNlYXJjaC5zdHlsZVtcImJveC1zaGFkb3dcIl0gPSBcIjBweCAwcHggNHB4IDRweCBibGFja1wiO1xuICAgIGNvbnRhaW5lci5zdHlsZVtcImJhY2tncm91bmQtaW1hZ2VcIl0gPSBgdXJsKCR7RGF5fSlgO1xuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFjdGl2ZVdoaXRlXCIpKSB7XG4gICAgICBidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFjdGl2ZVdoaXRlXCIpO1xuICAgICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVXaGl0ZVwiKTtcbiAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlQmxhY2tcIik7XG4gICAgfVxuICB9XG4gIGlmIChwZXJpb2QgPT09IFwiTmlnaHRcIikge1xuICAgIGNvbnRhaW5lci5zdHlsZS5jb2xvciA9IFwid2hpdGVcIjtcbiAgICBzZWFyY2guc3R5bGVbXCJib3gtc2hhZG93XCJdID0gXCIwcHggMHB4IDRweCA0cHggd2hpdGVcIjtcbiAgICBjb250YWluZXIuc3R5bGVbXCJiYWNrZ3JvdW5kLWltYWdlXCJdID0gYHVybCgke05pZ2h0fSlgO1xuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFjdGl2ZUJsYWNrXCIpKSB7XG4gICAgICBidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFjdGl2ZUJsYWNrXCIpO1xuICAgICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVCbGFja1wiKTtcbiAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlV2hpdGVcIik7XG4gICAgfVxuICB9XG59O1xuXG4vKipcbiAqIENhbGxzIGhlbHBlciBkaXNwbGF5IGZ1bmN0aW9uc1xuICogQHBhcmFtIHtPYmplY3R9IHdlYXRoZXJPYmpcbiAqL1xuY29uc3QgZGlzcGxheSA9ICh3ZWF0aGVyT2JqKSA9PiB7XG4gIGRpc3BsYXlDb3VudHJ5KHdlYXRoZXJPYmouZ2V0RnVsbExvY2F0aW9uKCkpO1xuICBkaXNwbGF5RGF0ZSh3ZWF0aGVyT2JqLmdldERhdGUoKSwgd2VhdGhlck9iai5nZXRUaW1lKCkpO1xuICBkaXNwbGF5V2VhdGhlckRlc2NyaXB0aW9uKHdlYXRoZXJPYmouZGVzY3JpcHRpb24sIHdlYXRoZXJPYmouaWNvbik7XG4gIGRpc3BsYXlIdW1pZFByZXNzV2luZChcbiAgICB3ZWF0aGVyT2JqLnByZXNzdXJlLFxuICAgIHdlYXRoZXJPYmoud2luZFNwZWVkLFxuICAgIHdlYXRoZXJPYmouaHVtaWRpdHlcbiAgKTtcbiAgZGlzcGxheVRlbXAod2VhdGhlck9iai5mZWVsc0xpa2UsIHdlYXRoZXJPYmoudGVtcGVyYXR1cmUpO1xuICBkaXNwbGF5TWluTWF4KHdlYXRoZXJPYmoubWluVGVtcGVyYXR1cmUsIHdlYXRoZXJPYmoubWF4VGVtcGVyYXR1cmUpO1xuICBkaXNwbGF5Vm9sdW1lKHdlYXRoZXJPYmoucmFpblZvbHVtZSwgd2VhdGhlck9iai5zbm93Vm9sdW1lKTtcbiAgY2hhbmdlQmFja2dyb3VuZCh3ZWF0aGVyT2JqLmdldERheU9yTmlnaHQoKSk7XG4gIGNvbnN0IGVycm9yRGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZXJyb3JEaXNwbGF5XCIpO1xuICBlcnJvckRpc3BsYXkudGV4dENvbnRlbnQgPSBcIlwiO1xufTtcblxuZXhwb3J0IHsgZGlzcGxheSB9O1xuIiwiaW1wb3J0IFwiLi4vc3R5bGVzL3Jlc2V0LmNzc1wiO1xuaW1wb3J0IFwiLi4vc3R5bGVzL21haW4uY3NzXCI7XG5pbXBvcnQgXCJAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtZnJlZS9qcy9hbGxcIjtcbmltcG9ydCB7IGluaXRpYWxQYWdlTG9hZCB9IGZyb20gXCIuL2luaXRpYWxQYWdlXCI7XG5pbXBvcnQgeyBzdWJzY3JpYmUgfSBmcm9tIFwiLi9wdWJzdWJcIjtcbmltcG9ydCB7IHNlYXJjaEV2ZW50TGlzdGVuZXIgfSBmcm9tIFwiLi9zZWFyY2hcIjtcbmltcG9ydCB7IGRpc3BsYXkgfSBmcm9tIFwiLi9kaXNwbGF5XCI7XG5pbXBvcnQgeyBzd2l0Y2hBY3RpdmUgfSBmcm9tIFwiLi9zd2l0Y2hcIjtcblxuLy8gQHRzLWNoZWNrXG5cbi8qKlxuICogQGZpbGVvdmVydmlldyBJbmRleCAuanMgaXMgdGhlIHJvb3Qgb2YgdGhpcyBmaWxlLlxuICogQGF1dGhvciBGcm9zdHdhbGtlclxuICovXG5cbnN1YnNjcmliZShcInBhZ2VMb2FkZWRcIiwgc2VhcmNoRXZlbnRMaXN0ZW5lcik7XG5cbnN1YnNjcmliZShcInBhZ2VMb2FkZWRcIiwgc3dpdGNoQWN0aXZlKTtcblxuc3Vic2NyaWJlKFwiZGlzcGxheVwiLCBkaXNwbGF5KTtcblxuaW5pdGlhbFBhZ2VMb2FkKCk7XG4iLCJpbXBvcnQgSWNvbiBmcm9tIFwiLi4vaW1hZ2VzL2luaXRpYWwuanBnXCI7XG5pbXBvcnQgeyBwdWJsaXNoIH0gZnJvbSBcIi4vcHVic3ViXCI7XG5cbi8vIEB0cy1jaGVja1xuXG4vKipcbiAqIEBtb2R1bGUgSW5pdGlhbFBhZ2VcbiAqL1xuXG4vKipcbiAqIEB0eXBlIHtPYmplY3R9IC0gY29udGFpbmVyXG4gKi9cbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluXCIpO1xuXG4vKipcbiAqIGNyZWF0ZXMgYSBmb3JtXG4gKiBAcmV0dXJuIHtPYmplY3R9IC0gZm9ybVxuICovXG5jb25zdCBmb3JtQ3JlYXRlID0gKCkgPT4ge1xuICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBsYWJlbC5mb3IgPSBcInNlYXJjaFwiO1xuICBsYWJlbC50ZXh0Q29udGVudCA9IFwiRW50ZXIgY2l0eSBuYW1lOlwiO1xuICBjb25zdCBzZWFyY2hCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBzZWFyY2hCYXIuaWQgPSBcInNlYXJjaEJhclwiO1xuICBjb25zdCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaWNvbi5pZCA9IFwiaWNvblwiO1xuICBjb25zdCBpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlcIik7XG4gIGkuY2xhc3NMaXN0LmFkZChcImZhc1wiKTtcbiAgaS5jbGFzc0xpc3QuYWRkKFwiZmEtc2VhcmNoXCIpO1xuICBpY29uLmFwcGVuZENoaWxkKGkpO1xuICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgaW5wdXQudHlwZSA9IFwidGV4dFwiO1xuICBpbnB1dC5uYW1lID0gXCJjaXR5XCI7XG4gIGlucHV0LmlkID0gXCJzZWFyY2hcIjtcbiAgc2VhcmNoQmFyLmFwcGVuZENoaWxkKGljb24pO1xuICBzZWFyY2hCYXIuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIHNwYW4uaWQgPSBcImVycm9yRGlzcGxheVwiO1xuICBjb25zdCBzdGFuZGFyZHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBzdGFuZGFyZHMuaWQgPSBcInN0YW5kYXJkRGl2XCI7XG5cbiAgLy8gbWV0cmljIGJ1dHRvblxuICBjb25zdCBtZXRyaWNCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtZXRyaWNCdXR0b24udGV4dENvbnRlbnQgPSBcIm1ldHJpY1wiO1xuICBtZXRyaWNCdXR0b24uaWQgPSBcIm1ldHJpY0J1dHRvblwiO1xuICBtZXRyaWNCdXR0b24uY2xhc3NOYW1lID0gXCJzdGFuZGFyZHMgYWN0aXZlQmxhY2tcIjtcbiAgc3RhbmRhcmRzLmFwcGVuZENoaWxkKG1ldHJpY0J1dHRvbik7XG5cbiAgLy8gaW1wZXJpYWwgYnV0dG9uXG4gIGNvbnN0IGltcGVyaWFsQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaW1wZXJpYWxCdXR0b24udGV4dENvbnRlbnQgPSBcImltcGVyaWFsXCI7XG4gIGltcGVyaWFsQnV0dG9uLmlkID0gXCJpbXBlcmlhbEJ1dHRvblwiO1xuICBpbXBlcmlhbEJ1dHRvbi5jbGFzc05hbWUgPSBcInN0YW5kYXJkc1wiO1xuICBzdGFuZGFyZHMuYXBwZW5kQ2hpbGQoaW1wZXJpYWxCdXR0b24pO1xuXG4gIGZvcm0uYXBwZW5kQ2hpbGQobGFiZWwpO1xuICBmb3JtLmFwcGVuZENoaWxkKHNlYXJjaEJhcik7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoc3Bhbik7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoc3RhbmRhcmRzKTtcbiAgZm9ybS5zZXRBdHRyaWJ1dGUoXCJub3ZhbGlkYXRlXCIsIFwidHJ1ZVwiKTtcbiAgcmV0dXJuIGZvcm07XG59O1xuXG4vKipcbiAqIFJldHVybnMgYSBkaXZcbiAqIEBwYXJhbSB7c3RyaW5nfSBpZGVudGlmaWVyXG4gKiBAcmV0dXJuIHtPYmplY3R9LSBhIERpdlxuICovXG5jb25zdCBncmlkQ3JlYXRvciA9IChpZGVudGlmaWVyKSA9PiB7XG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGRpdi5jbGFzc0xpc3QuYWRkKFwiZ3JpZFwiKTtcbiAgZGl2LmlkID0gaWRlbnRpZmllcjtcbiAgcmV0dXJuIGRpdjtcbn07XG5cbi8qKlxuICogTG9hZHMgaW5pdGFsIHBhZ2UuXG4gKiBAZnVuY3Rpb25cbiAqL1xuY29uc3QgaW5pdGlhbFBhZ2VMb2FkID0gKCkgPT4ge1xuICBjb25zdCBmb3JtID0gZm9ybUNyZWF0ZSgpO1xuICBjb25zdCBmb3JtRGl2ID0gZ3JpZENyZWF0b3IoXCJGb3JtXCIpO1xuICBmb3JtRGl2LmFwcGVuZENoaWxkKGZvcm0pO1xuICBjb250YWluZXIuc3R5bGVbXCJiYWNrZ3JvdW5kLWltYWdlXCJdID0gYHVybCgke0ljb259KWA7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtRGl2KTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGdyaWRDcmVhdG9yKFwiY291bnRyeURldGFpbHNcIikpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZ3JpZENyZWF0b3IoXCJkYXRlXCIpKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGdyaWRDcmVhdG9yKFwid2VhdGhlckRlc2NyaXB0aW9uXCIpKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGdyaWRDcmVhdG9yKFwiaHVtaWRQcmVzc3VyZVdpbmRcIikpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZ3JpZENyZWF0b3IoXCJ0ZW1wXCIpKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGdyaWRDcmVhdG9yKFwibWluTWF4XCIpKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGdyaWRDcmVhdG9yKFwidm9sdW1lXCIpKTtcbiAgY29uc3QgaWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaWNvblwiKTtcbiAgcHVibGlzaChcInBhZ2VMb2FkZWRcIiwgaWNvbik7XG59O1xuXG5leHBvcnQgeyBpbml0aWFsUGFnZUxvYWQgfTtcbiIsIi8vIEB0cy1jaGVja1xuXG4vKipcbiAqIEBtb2R1bGUgcHVic3ViXG4gKi9cblxuLyoqXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cblxuY29uc3QgZXZlbnRzID0ge307XG5cbi8qKlxuICogU3Vic2NyaWJlIHRvIGFuIGV2ZW50XG4gKiBAcGFyYW0ge3N0cmluZ30gZXZlbnROYW1lIC0gTmFtZSBvZiB0aGUgZXZlbnRcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIC0gRnVuY3Rpb24gdG8gYmUgY2FsbGVkXG4gKi9cbmNvbnN0IHN1YnNjcmliZSA9IGZ1bmN0aW9uIChldmVudE5hbWUsIGZuKSB7XG4gIGV2ZW50c1tldmVudE5hbWVdID0gZXZlbnRzW2V2ZW50TmFtZV0gfHwgW107XG4gIGV2ZW50c1tldmVudE5hbWVdLnB1c2goZm4pO1xufTtcblxuLyoqXG4gKiBVbnN1c2NyaWJlIGZyb20gYW4gZXZlbnRcbiAqIEBwYXJhbSB7c3RyaW5nfSBldmVudE5hbWUgLSBOYW1lIG9mIHRoZSBldmVudFxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gLSBGdW5jdGlvbiB0byBiZSByZW1vdmVkXG4gKi9cbmNvbnN0IHVuc3Vic2NyaWJlID0gZnVuY3Rpb24gKGV2ZW50TmFtZSwgZm4pIHtcbiAgaWYgKGV2ZW50c1tldmVudE5hbWVdKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBldmVudHNbZXZlbnROYW1lXS5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGV2ZW50c1tldmVudE5hbWVdW2ldID09PSBmbikge1xuICAgICAgICBldmVudHNbZXZlbnROYW1lXS5zcGxpY2UoaSwgMSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxufTtcblxuLyoqXG4gKiBQdWJsaXNoIGFuIGV2ZW50XG4gKiBAcGFyYW0ge3N0cmluZ30gZXZlbnROYW1lIC0gTmFtZSBvZiB0aGUgZXZlbnRcbiAqIEBwYXJhbSB7Kn0gZGF0YSAtZGF0YSB0byBiZSBwYXNzZWQgaW50byBjYWxsYmFja1xuICovXG5jb25zdCBwdWJsaXNoID0gZnVuY3Rpb24gKGV2ZW50TmFtZSwgZGF0YSkge1xuICBpZiAoZXZlbnRzW2V2ZW50TmFtZV0pIHtcbiAgICBldmVudHNbZXZlbnROYW1lXS5mb3JFYWNoKGZ1bmN0aW9uIChmbikge1xuICAgICAgZm4oZGF0YSk7XG4gICAgfSk7XG4gIH1cbn07XG5cbmV4cG9ydCB7IHB1Ymxpc2gsIHVuc3Vic2NyaWJlLCBzdWJzY3JpYmUgfTtcbiIsImltcG9ydCB7IHJldHJpZXZlSW5mb3JtYXRpb24gfSBmcm9tIFwiLi93ZWF0aGVyRGF0YVwiO1xuaW1wb3J0IHsgcHVibGlzaCB9IGZyb20gXCIuL3B1YnN1YlwiO1xuXG4vLyBAdHMtY2hlY2tcblxuLyoqXG4gKiBAbW9kdWxlIEV2ZW50c1xuICovXG5cbi8qKlxuICogY2FsbHMgcmV0cmlldmVJbmZvcm1hdGlvbiBmdW5jdGlvbiB3aGVuIHNlYXJjaCBpY29uIGlzIGNsaWNrZWQgQHNlZSByZXRyaWV2ZUluZm9ybWF0aW9uXG4gKiBAZnVuY3Rpb25cbiAqL1xuY29uc3QgZmV0Y2hDbGlja0luZm8gPSBhc3luYyAoKSA9PiB7XG4gIHRyeSB7XG4gICAgbGV0IGFjdGl2ZTtcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hY3RpdmVCbGFja1wiKSkge1xuICAgICAgYWN0aXZlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hY3RpdmVCbGFja1wiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYWN0aXZlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hY3RpdmVXaGl0ZVwiKTtcbiAgICB9XG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXRcIik7XG4gICAgY29uc29sZS5sb2coYWN0aXZlLnRleHRDb250ZW50KTtcbiAgICBjb25zdCBpbmZvID0gYXdhaXQgcmV0cmlldmVJbmZvcm1hdGlvbihpbnB1dC52YWx1ZSwgYWN0aXZlLnRleHRDb250ZW50KTtcbiAgICBwdWJsaXNoKFwiZGlzcGxheVwiLCBpbmZvKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5sb2coZXJyKTtcbiAgfVxufTtcblxuLyoqXG4gKiBjYWxscyByZXRyaWV2ZUluZm9ybWF0aW9uIGZ1bmN0aW9uIHdoZW4gZW50ZXIga2V5IGlzIHByZXNzZWQgQHNlZSByZXRyaWV2ZUluZm9ybWF0aW9uXG4gKiBAcGFyYW0ge09iamVjdH0gZXZlbnRcbiAqL1xuY29uc3QgZmV0Y2hLZXlJbmZvID0gYXN5bmMgKGV2ZW50KSA9PiB7XG4gIHRyeSB7XG4gICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDEzKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgbGV0IGFjdGl2ZTtcbiAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFjdGl2ZUJsYWNrXCIpKSB7XG4gICAgICAgIGFjdGl2ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWN0aXZlQmxhY2tcIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhY3RpdmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFjdGl2ZVdoaXRlXCIpO1xuICAgICAgfVxuICAgICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXRcIik7XG4gICAgICBjb25zb2xlLmxvZyhhY3RpdmUudGV4dENvbnRlbnQpO1xuICAgICAgY29uc3QgaW5mbyA9IGF3YWl0IHJldHJpZXZlSW5mb3JtYXRpb24oaW5wdXQudmFsdWUsIGFjdGl2ZS50ZXh0Q29udGVudCk7XG4gICAgICBwdWJsaXNoKFwiZGlzcGxheVwiLCBpbmZvKTtcbiAgICB9XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUubG9nKGVycik7XG4gIH1cbn07XG5cbi8qKlxuICogQWRkcyBldmVudCBsaXN0ZW5lciB0byB0aGUgZG9tIGVsZW1lbnQuXG4gKiBAcGFyYW0ge09iamVjdH0gZGF0YSAtIERvbSBlbGVtZW50XG4gKi9cbmNvbnN0IHNlYXJjaEV2ZW50TGlzdGVuZXIgPSAoZGF0YSkgPT4ge1xuICBkYXRhLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmZXRjaENsaWNrSW5mbyk7XG4gIGRhdGEubmV4dEVsZW1lbnRTaWJsaW5nLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGZldGNoS2V5SW5mbyk7XG59O1xuXG5leHBvcnQgeyBzZWFyY2hFdmVudExpc3RlbmVyIH07XG4iLCIvLyBAdHMtY2hlY2tcblxuLyoqXG4gKiBAbW9kdWxlIHNlYXJjaFxuICovXG5cbi8qKlxuICogQHBhcmFtIHtPYmplY3R9IGV2ZW50XG4gKi9cbmNvbnN0IHN3aXRjaERpdiA9IChldmVudCkgPT4ge1xuICBsZXQgY3VycmVudEFjdGl2ZTtcbiAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWN0aXZlQmxhY2tcIikpIHtcbiAgICBjdXJyZW50QWN0aXZlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hY3RpdmVCbGFja1wiKTtcbiAgICBjdXJyZW50QWN0aXZlLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVCbGFja1wiKTtcbiAgICBldmVudC5jdXJyZW50VGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVCbGFja1wiKTtcbiAgfSBlbHNlIHtcbiAgICBjdXJyZW50QWN0aXZlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hY3RpdmVXaGl0ZVwiKTtcbiAgICBjdXJyZW50QWN0aXZlLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVXaGl0ZVwiKTtcbiAgICBldmVudC5jdXJyZW50VGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVXaGl0ZVwiKTtcbiAgfVxufTtcblxuLyoqXG4gKiBBdHRhY2hlcyBldmVudCBsaXN0ZW5lciB0byBidXR0b24gZXZlbnRzW2V2ZW50TmFtZV1cbiAqIEBmdW5jdGlvblxuICovXG5jb25zdCBzd2l0Y2hBY3RpdmUgPSAoKSA9PiB7XG4gIGNvbnN0IGJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnN0YW5kYXJkc1wiKTtcbiAgYnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHN3aXRjaERpdik7XG4gIH0pO1xufTtcblxuZXhwb3J0IHsgc3dpdGNoQWN0aXZlIH07XG4iLCJpbXBvcnQgeyBpc0FmdGVyLCBmb3JtYXQgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcblxuLy8gQHRzLWNoZWNrXG5cbi8qKlxuICogQG1vZHVsZSBXZWF0aGVyRGF0YVxuICovXG5cbi8qKlxuICpGaW5kcyB3ZWF0aGVyIGZvcmVjYXN0IG9mIGdpdmVuIGxvY2F0aW9uXG4gKiBAcGFyYW0ge3N0cmluZ30gbG9jYXRpb25cbiAqIEBwYXJhbSB7c3RyaW5nfSBzdGFuZGFyZFxuICogQHJldHVybiB7UHJvbWlzZTxhbnk+fVxuICovXG5jb25zdCBmaW5kTG9jYXRpb25XZWF0aGVyID0gYXN5bmMgKGxvY2F0aW9uLCBzdGFuZGFyZCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnNvbGUubG9nKHN0YW5kYXJkKTtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgYGh0dHA6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0ke2xvY2F0aW9ufSZBUFBJRD04MWQxZjZlNWVkNzdmN2M4YzlkYTFkY2MwNzNhZDdjNiZ1bml0cz0ke3N0YW5kYXJkfWAsXG4gICAgICB7IG1vZGU6IFwiY29yc1wiIH1cbiAgICApO1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgcmV0dXJuIGRhdGE7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc3QgZXJyb3JEaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNlcnJvckRpc3BsYXlcIik7XG4gICAgZXJyb3JEaXNwbGF5LnRleHRDb250ZW50ID0gYE5ldHdvcmsgRXJyb3IuYDtcbiAgfVxufTtcblxuLyoqIENyZWF0ZXMgd2VhdGhlciBpbmZvcm1hdGlvbiBvYmplY3RzICovXG5jbGFzcyBJbmZvcm1hdGlvbk1ha2VyIHtcbiAgLyoqXG4gICAqIE9iamVjdCBjb25zdHJ1Y3RvclxuICAgKiBAcGFyYW0ge09iamVjdH0gcmV0cmlldmVkRGF0YSAtIFJldHJpZXZlZCBkYXRhIGZyb20gQVBJXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBzdGFuZGFyZFxuICAgKi9cbiAgY29uc3RydWN0b3IocmV0cmlldmVkRGF0YSwgc3RhbmRhcmQpIHtcbiAgICB0aGlzLmNvdW50cnkgPSByZXRyaWV2ZWREYXRhLnN5cy5jb3VudHJ5O1xuICAgIHRoaXMuY2l0eSA9IHJldHJpZXZlZERhdGEubmFtZTtcbiAgICB0aGlzLmh1bWlkaXR5ID0gcmV0cmlldmVkRGF0YS5tYWluLmh1bWlkaXR5ICsgXCIlXCI7XG4gICAgdGhpcy5zdW5yaXNlID0gcmV0cmlldmVkRGF0YS5zeXMuc3VucmlzZTtcbiAgICB0aGlzLnN1bnNldCA9IHJldHJpZXZlZERhdGEuc3lzLnN1bnNldDtcbiAgICB0aGlzLmRhdGUgPSByZXRyaWV2ZWREYXRhLmR0O1xuICAgIHRoaXMuaWNvbiA9IGBodHRwOi8vb3BlbndlYXRoZXJtYXAub3JnL2ltZy93bi8ke3JldHJpZXZlZERhdGEud2VhdGhlclswXS5pY29ufUAyeC5wbmdgO1xuICAgIGlmIChyZXRyaWV2ZWREYXRhLnJhaW5bXCIxaFwiXSkge1xuICAgICAgdGhpcy5yYWluVm9sdW1lID0gcmV0cmlldmVkRGF0YS5yYWluW1wiMWhcIl0gKyBcIm1tXCI7XG4gICAgfVxuICAgIGlmIChyZXRyaWV2ZWREYXRhLnNub3dbXCIxaFwiXSkge1xuICAgICAgdGhpcy5zbm93Vm9sdW1lID0gcmV0cmlldmVkRGF0YS5zbm93W1wiMWhcIl0gKyBcIm1tXCI7XG4gICAgfVxuICAgIHRoaXMuZGVzY3JpcHRpb24gPSByZXRyaWV2ZWREYXRhLndlYXRoZXJbMF0uZGVzY3JpcHRpb247XG4gICAgdGhpcy5wcmVzc3VyZSA9IHJldHJpZXZlZERhdGEubWFpbi5wcmVzc3VyZSArIFwiaFBhXCI7XG4gICAgaWYgKHN0YW5kYXJkID09PSBcIm1ldHJpY1wiKSB7XG4gICAgICB0aGlzLmZlZWxzTGlrZSA9IHJldHJpZXZlZERhdGEubWFpbi5mZWVsc19saWtlICsgXCJcXHUwMEIwQ1wiO1xuICAgICAgdGhpcy50ZW1wZXJhdHVyZSA9IHJldHJpZXZlZERhdGEubWFpbi50ZW1wICsgXCJcXHUwMEIwQ1wiO1xuICAgICAgdGhpcy5taW5UZW1wZXJhdHVyZSA9IHJldHJpZXZlZERhdGEubWFpbi50ZW1wX21pbiArIFwiXFx1MDBCMENcIjtcbiAgICAgIHRoaXMubWF4VGVtcGVyYXR1cmUgPSByZXRyaWV2ZWREYXRhLm1haW4udGVtcF9tYXggKyBcIlxcdTAwQjBDXCI7XG4gICAgICB0aGlzLndpbmRTcGVlZCA9IHJldHJpZXZlZERhdGEud2luZC5zcGVlZCArIFwibS9zXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZmVlbHNMaWtlID0gcmV0cmlldmVkRGF0YS5tYWluLmZlZWxzX2xpa2UgKyBcIlxcdTAwQjBGXCI7XG4gICAgICB0aGlzLnRlbXBlcmF0dXJlID0gcmV0cmlldmVkRGF0YS5tYWluLnRlbXAgKyBcIlxcdTAwQjBGXCI7XG4gICAgICB0aGlzLm1pblRlbXBlcmF0dXJlID0gcmV0cmlldmVkRGF0YS5tYWluLnRlbXBfbWluICsgXCJcXHUwMEIwRlwiO1xuICAgICAgdGhpcy5tYXhUZW1wZXJhdHVyZSA9IHJldHJpZXZlZERhdGEubWFpbi50ZW1wX21heCArIFwiXFx1MDBCMEZcIjtcbiAgICAgIHRoaXMud2luZFNwZWVkID0gcmV0cmlldmVkRGF0YS53aW5kLnNwZWVkICsgXCJtaWxlcy9ob3VyXCI7XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBDaGVja3MgaWYgaXRzIGN1cnJlbnRseSBkYXkgb3IgbmlnaHRcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgZ2V0RGF5T3JOaWdodCgpIHtcbiAgICBjb25zdCBjdXJyZW50VGltZSA9IG5ldyBEYXRlKCk7XG4gICAgY29uc3Qgc3VuUmlzZSA9IG5ldyBEYXRlKHRoaXMuc3VucmlzZSAqIDEwMDApO1xuICAgIGNvbnN0IHN1blNldCA9IG5ldyBEYXRlKHRoaXMuc3Vuc2V0ICogMTAwMCk7XG4gICAgaWYgKCFpc0FmdGVyKGN1cnJlbnRUaW1lLCBzdW5SaXNlKSkge1xuICAgICAgcmV0dXJuIFwiTmlnaHRcIjtcbiAgICB9IGVsc2UgaWYgKCFpc0FmdGVyKGN1cnJlbnRUaW1lLCBzdW5TZXQpKSB7XG4gICAgICByZXR1cm4gXCJEYXlcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIFwiTmlnaHRcIjtcbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIGdldCBmdWxsIGxvY2F0aW9uXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIGdldEZ1bGxMb2NhdGlvbigpIHtcbiAgICByZXR1cm4gYCR7dGhpcy5jaXR5fSwgJHt0aGlzLmNvdW50cnl9YDtcbiAgfVxuICAvKipcbiAgICogZ2V0IGZ1bGwgZGF0ZVxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICBnZXREYXRlKCkge1xuICAgIHJldHVybiBmb3JtYXQobmV3IERhdGUodGhpcy5kYXRlICogMTAwMCksIFwiUFBQUFwiKTtcbiAgfVxuICAvKipcbiAgICogZ2V0IGZ1bGwgdGltZVxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICBnZXRUaW1lKCkge1xuICAgIHJldHVybiBmb3JtYXQobmV3IERhdGUodGhpcy5kYXRlICogMTAwMCksIFwicFwiKTtcbiAgfVxufVxuXG4vKipcbiAqIFJldHJpZXZlIHdlYXRoZXIgaW5mb3JtYXRpb24gYWJvdXQgbG9jYXRpb25cbiAqIEBwYXJhbSB7c3RyaW5nfSBsb2NhdGlvblxuICogQHBhcmFtIHtzdHJpbmd9IHN0YW5kYXJkXG4gKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IC0gQSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgdG8gd2VhdGhlciBpbmZvcm1hdGlvblxuICovXG5jb25zdCByZXRyaWV2ZUluZm9ybWF0aW9uID0gYXN5bmMgKGxvY2F0aW9uID0gXCJMYWdvc1wiLCBzdGFuZGFyZCA9IFwibWV0cmljXCIpID0+IHtcbiAgY29uc29sZS5sb2coc3RhbmRhcmQpO1xuICBjb25zdCBkYXRhID0gYXdhaXQgZmluZExvY2F0aW9uV2VhdGhlcihsb2NhdGlvbiwgc3RhbmRhcmQpO1xuICBpZiAoZGF0YS5jb2QgPT09IDIwMCkge1xuICAgIGlmICghZGF0YS5zbm93KSB7XG4gICAgICBkYXRhLnNub3cgPSAwO1xuICAgIH1cbiAgICBpZiAoIWRhdGEucmFpbikge1xuICAgICAgZGF0YS5yYWluID0gMDtcbiAgICB9XG4gICAgY29uc3QgaW5mb3JtYXRpb24gPSBuZXcgSW5mb3JtYXRpb25NYWtlcihkYXRhLCBzdGFuZGFyZCk7XG4gICAgcmV0dXJuIGluZm9ybWF0aW9uO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IGVycm9yRGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZXJyb3JEaXNwbGF5XCIpO1xuICAgIGVycm9yRGlzcGxheS50ZXh0Q29udGVudCA9IGAke2RhdGEubWVzc2FnZX1gO1xuICB9XG59O1xuXG5leHBvcnQgeyByZXRyaWV2ZUluZm9ybWF0aW9uIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsInZhciBkZWZlcnJlZCA9IFtdO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5PID0gKHJlc3VsdCwgY2h1bmtJZHMsIGZuLCBwcmlvcml0eSkgPT4ge1xuXHRpZihjaHVua0lkcykge1xuXHRcdHByaW9yaXR5ID0gcHJpb3JpdHkgfHwgMDtcblx0XHRmb3IodmFyIGkgPSBkZWZlcnJlZC5sZW5ndGg7IGkgPiAwICYmIGRlZmVycmVkW2kgLSAxXVsyXSA+IHByaW9yaXR5OyBpLS0pIGRlZmVycmVkW2ldID0gZGVmZXJyZWRbaSAtIDFdO1xuXHRcdGRlZmVycmVkW2ldID0gW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldO1xuXHRcdHJldHVybjtcblx0fVxuXHR2YXIgbm90RnVsZmlsbGVkID0gSW5maW5pdHk7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWQubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldID0gZGVmZXJyZWRbaV07XG5cdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG5cdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBjaHVua0lkcy5sZW5ndGg7IGorKykge1xuXHRcdFx0aWYgKChwcmlvcml0eSAmIDEgPT09IDAgfHwgbm90RnVsZmlsbGVkID49IHByaW9yaXR5KSAmJiBPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLk8pLmV2ZXJ5KChrZXkpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fLk9ba2V5XShjaHVua0lkc1tqXSkpKSkge1xuXHRcdFx0XHRjaHVua0lkcy5zcGxpY2Uoai0tLCAxKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZ1bGZpbGxlZCA9IGZhbHNlO1xuXHRcdFx0XHRpZihwcmlvcml0eSA8IG5vdEZ1bGZpbGxlZCkgbm90RnVsZmlsbGVkID0gcHJpb3JpdHk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKGZ1bGZpbGxlZCkge1xuXHRcdFx0ZGVmZXJyZWQuc3BsaWNlKGktLSwgMSlcblx0XHRcdHZhciByID0gZm4oKTtcblx0XHRcdGlmIChyICE9PSB1bmRlZmluZWQpIHJlc3VsdCA9IHI7XG5cdFx0fVxuXHR9XG5cdHJldHVybiByZXN1bHQ7XG59OyIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCIvLyBubyBiYXNlVVJJXG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJpbmRleFwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8uaiA9IChjaHVua0lkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID09PSAwKTtcblxuLy8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG52YXIgd2VicGFja0pzb25wQ2FsbGJhY2sgPSAocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24sIGRhdGEpID0+IHtcblx0dmFyIFtjaHVua0lkcywgbW9yZU1vZHVsZXMsIHJ1bnRpbWVdID0gZGF0YTtcblx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG5cdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuXHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwO1xuXHRpZihjaHVua0lkcy5zb21lKChpZCkgPT4gKGluc3RhbGxlZENodW5rc1tpZF0gIT09IDApKSkge1xuXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYocnVudGltZSkgdmFyIHJlc3VsdCA9IHJ1bnRpbWUoX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdH1cblx0aWYocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24pIHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKGRhdGEpO1xuXHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuXHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSgpO1xuXHRcdH1cblx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZHNbaV1dID0gMDtcblx0fVxuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHJlc3VsdCk7XG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5rd2VhdGhlcmFwcFwiXSA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmt3ZWF0aGVyYXBwXCJdIHx8IFtdO1xuY2h1bmtMb2FkaW5nR2xvYmFsLmZvckVhY2god2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCAwKSk7XG5jaHVua0xvYWRpbmdHbG9iYWwucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpKTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGRlcGVuZHMgb24gb3RoZXIgbG9hZGVkIGNodW5rcyBhbmQgZXhlY3V0aW9uIG5lZWQgdG8gYmUgZGVsYXllZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc19kYXRlLWZuc19lc21fZm9ybWF0X2luZGV4X2pzLW5vZGVfbW9kdWxlc19kYXRlLWZuc19lc21faXNBZnRlcl9pbmRleF9qc1wiLFwidmVuZG9ycy1ub2RlX21vZHVsZXNfZm9ydGF3ZXNvbWVfZm9udGF3ZXNvbWUtZnJlZV9qc19hbGxfanNcIl0sICgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvc2NyaXB0cy9pbmRleC5qc1wiKSkpXG5fX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKF9fd2VicGFja19leHBvcnRzX18pO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9