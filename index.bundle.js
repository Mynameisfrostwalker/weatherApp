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
/* harmony import */ var _validation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./validation */ "./src/scripts/validation.js");










// @ts-check

/**
 * @fileoverview Index .js is the root of this file.
 * @author Frostwalker
 */

(0,_pubsub__WEBPACK_IMPORTED_MODULE_4__.subscribe)("pageLoaded", _search__WEBPACK_IMPORTED_MODULE_5__.searchEventListener);

(0,_pubsub__WEBPACK_IMPORTED_MODULE_4__.subscribe)("pageLoaded", _switch__WEBPACK_IMPORTED_MODULE_7__.switchActive);

(0,_pubsub__WEBPACK_IMPORTED_MODULE_4__.subscribe)("pageLoaded", _validation__WEBPACK_IMPORTED_MODULE_8__.inputEventListener);

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
  input.setAttribute("required", "");
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
/* harmony import */ var _validation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./validation */ "./src/scripts/validation.js");




// @ts-check

/**
 * @module Events
 */

/**
 * calls retrieveInformation function when search icon is clicked @see {@link retrieveInformation}
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
    if ((0,_validation__WEBPACK_IMPORTED_MODULE_2__.validate)()) {
      const info = await (0,_weatherData__WEBPACK_IMPORTED_MODULE_0__.retrieveInformation)(input.value, active.textContent);
      (0,_pubsub__WEBPACK_IMPORTED_MODULE_1__.publish)("display", info);
    }
  } catch (err) {
    console.log(err);
  }
};

/**
 * calls retrieveInformation function when enter key is pressed @see {@link retrieveInformation}
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
      if ((0,_validation__WEBPACK_IMPORTED_MODULE_2__.validate)()) {
        const info = await (0,_weatherData__WEBPACK_IMPORTED_MODULE_0__.retrieveInformation)(input.value, active.textContent);
        (0,_pubsub__WEBPACK_IMPORTED_MODULE_1__.publish)("display", info);
      }
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

/***/ "./src/scripts/validation.js":
/*!***********************************!*\
  !*** ./src/scripts/validation.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "inputEventListener": () => (/* binding */ inputEventListener),
/* harmony export */   "validate": () => (/* binding */ validate)
/* harmony export */ });
// @ts-check

/**
 * @module validation
 */

const validate = () => {
  const input = document.querySelector("input");
  const errorDisplay = document.querySelector("#errorDisplay");
  if (input.validity.valid) {
    errorDisplay.textContent = "";
    return true;
  } else {
    if (input.validity.valueMissing) {
      errorDisplay.textContent = "Input must not be left blank";
      return false;
    }
  }
};

const inputEventListener = () => {
  const input = document.querySelector("input");
  input.addEventListener("input", validate);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VUFDQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvc3R5bGVzL21haW4uY3NzPzU4NDYiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy9zdHlsZXMvcmVzZXQuY3NzP2RkNTEiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy9zY3JpcHRzL2Rpc3BsYXkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy9zY3JpcHRzL2luZGV4LmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvc2NyaXB0cy9pbml0aWFsUGFnZS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL3NjcmlwdHMvcHVic3ViLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvc2NyaXB0cy9zZWFyY2guanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy9zY3JpcHRzL3N3aXRjaC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL3NjcmlwdHMvdmFsaWRhdGlvbi5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL3NjcmlwdHMvd2VhdGhlckRhdGEuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwL3dlYnBhY2svcnVudGltZS9jaHVuayBsb2FkZWQiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXJhcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3dlYXRoZXJhcHAvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3dlYXRoZXJhcHAvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3dlYXRoZXJhcHAvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImltcG9ydCBEYXkgZnJvbSBcIi4uL2ltYWdlcy9kYXkuanBlZ1wiO1xuaW1wb3J0IE5pZ2h0IGZyb20gXCIuLi9pbWFnZXMvbmlnaHQuanBnXCI7XG5cbi8vIEB0cy1jaGVja1xuXG4vKipcbiAqIEBtb2R1bGUgZGlzcGxheVxuICovXG5cbi8qKlxuICogRGlzcGxheXMgY291bnRyeSBpbmZvcm1hdGlvblxuICogQHBhcmFtIHtzdHJpbmd9IGNvdW50cnlcbiAqL1xuY29uc3QgZGlzcGxheUNvdW50cnkgPSAoY291bnRyeSkgPT4ge1xuICBjb25zdCBjb3VudHJ5RGV0YWlscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY291bnRyeURldGFpbHNcIik7XG4gIGNvdW50cnlEZXRhaWxzLnRleHRDb250ZW50ID0gY291bnRyeTtcbn07XG5cbi8qKlxuICogRGlzcGxheXMgRGF0ZSBhbmQgVGltZVxuICogQHBhcmFtIHtzdHJpbmd9IGRhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSB0aW1lXG4gKi9cbmNvbnN0IGRpc3BsYXlEYXRlID0gKGRhdGUsIHRpbWUpID0+IHtcbiAgY29uc3QgZGF0ZURpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGF0ZVwiKTtcbiAgaWYgKGRhdGVEaXYuY2hpbGRyZW5bMF0pIHtcbiAgICBkYXRlRGl2LmNoaWxkcmVuWzBdLnJlbW92ZSgpO1xuICAgIGRhdGVEaXYuY2hpbGRyZW5bMF0ucmVtb3ZlKCk7XG4gIH1cbiAgY29uc3QgcDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgY29uc3QgcDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgcDEudGV4dENvbnRlbnQgPSBkYXRlO1xuICBwMi50ZXh0Q29udGVudCA9IHRpbWU7XG4gIGRhdGVEaXYuYXBwZW5kQ2hpbGQocDEpO1xuICBkYXRlRGl2LmFwcGVuZENoaWxkKHAyKTtcbn07XG5cbi8qKlxuICogRGlzcGxheXMgV2VhdGhlciBpbmZvcm1hdGlvbi5cbiAqIEBwYXJhbSB7c3RyaW5nfSBkZXNjcmlwdGlvblxuICogQHBhcmFtIHtVUkx9IGljb24gLVdlYXRoZXIgSWNvblxuICovXG5jb25zdCBkaXNwbGF5V2VhdGhlckRlc2NyaXB0aW9uID0gKGRlc2NyaXB0aW9uLCBpY29uKSA9PiB7XG4gIGNvbnN0IHdlYXRoZXJEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3dlYXRoZXJEZXNjcmlwdGlvblwiKTtcbiAgaWYgKHdlYXRoZXJEaXYuY2hpbGRyZW5bMF0pIHtcbiAgICB3ZWF0aGVyRGl2LmNoaWxkcmVuWzBdLnJlbW92ZSgpO1xuICAgIHdlYXRoZXJEaXYuY2hpbGRyZW5bMF0ucmVtb3ZlKCk7XG4gIH1cbiAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBjb25zdCBzcGxpdCA9IGRlc2NyaXB0aW9uLnNwbGl0KFwiXCIpO1xuICBzcGxpdFswXSA9IHNwbGl0WzBdLnRvVXBwZXJDYXNlKCk7XG4gIHAudGV4dENvbnRlbnQgPSBzcGxpdC5qb2luKFwiXCIpO1xuICBjb25zdCBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIGltYWdlLnNyYyA9IGljb247XG4gIGltYWdlLmlkID0gXCJ3ZWF0aGVyXCI7XG4gIHdlYXRoZXJEaXYuYXBwZW5kQ2hpbGQocCk7XG4gIHdlYXRoZXJEaXYuYXBwZW5kQ2hpbGQoaW1hZ2UpO1xufTtcblxuLyoqXG4gKiBEaXNwbGF5cyBodW1pZGl0eSwgcHJlc3N1cmUsIGFuZCB3aW5kIHNwZWVkLlxuICogQHBhcmFtIHtzdHJpbmd9IHByZXNzdXJlXG4gKiBAcGFyYW0ge3N0cmluZ30gd2luZFNwZWVkXG4gKiBAcGFyYW0ge3N0cmluZ30gaHVtaWRpdHlcbiAqL1xuY29uc3QgZGlzcGxheUh1bWlkUHJlc3NXaW5kID0gKHByZXNzdXJlLCB3aW5kU3BlZWQsIGh1bWlkaXR5KSA9PiB7XG4gIGNvbnN0IGRpc3BsYXlEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2h1bWlkUHJlc3N1cmVXaW5kXCIpO1xuICBpZiAoZGlzcGxheURpdi5jaGlsZHJlblswXSkge1xuICAgIGRpc3BsYXlEaXYuY2hpbGRyZW5bMF0ucmVtb3ZlKCk7XG4gICAgZGlzcGxheURpdi5jaGlsZHJlblswXS5yZW1vdmUoKTtcbiAgICBkaXNwbGF5RGl2LmNoaWxkcmVuWzBdLnJlbW92ZSgpO1xuICB9XG4gIC8vIEh1bWlkaXR5IERpdlxuICBjb25zdCBodW1pZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGh1bWlkRGl2LmNsYXNzTGlzdC5hZGQoXCJhbGlnblwiKTtcbiAgY29uc3QgaHVtaWRJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlcIik7XG4gIGh1bWlkSWNvbi5jbGFzc05hbWUgPSBcImZhcyBmYS10aW50XCI7XG4gIGh1bWlkRGl2LmFwcGVuZENoaWxkKGh1bWlkSWNvbik7XG4gIGNvbnN0IGh1bWlkUCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBodW1pZFAudGV4dENvbnRlbnQgPSBgSHVtaWRpdHk6ICR7aHVtaWRpdHl9YDtcbiAgaHVtaWREaXYuYXBwZW5kQ2hpbGQoaHVtaWRQKTtcbiAgZGlzcGxheURpdi5hcHBlbmRDaGlsZChodW1pZERpdik7XG5cbiAgLy8gV2luZCBEaXZcbiAgY29uc3Qgd2luZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHdpbmREaXYuY2xhc3NMaXN0LmFkZChcImFsaWduXCIpO1xuICBjb25zdCB3aW5kSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpO1xuICB3aW5kSWNvbi5jbGFzc05hbWUgPSBcImZhcyBmYS13aW5kXCI7XG4gIHdpbmREaXYuYXBwZW5kQ2hpbGQod2luZEljb24pO1xuICBjb25zdCB3aW5kUCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICB3aW5kUC50ZXh0Q29udGVudCA9IGBXaW5kIHNwZWVkOiAke3dpbmRTcGVlZH1gO1xuICB3aW5kRGl2LmFwcGVuZENoaWxkKHdpbmRQKTtcbiAgZGlzcGxheURpdi5hcHBlbmRDaGlsZCh3aW5kRGl2KTtcblxuICAvLyBQcmVzc3VyZSBEaXZcbiAgY29uc3QgcHJlc3N1cmVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBwcmVzc3VyZURpdi5jbGFzc0xpc3QuYWRkKFwiYWxpZ25cIik7XG4gIGNvbnN0IHByZXNzdXJlSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpO1xuICBwcmVzc3VyZUljb24uY2xhc3NOYW1lID0gXCJmYXMgZmEtdGFjaG9tZXRlci1hbHRcIjtcbiAgcHJlc3N1cmVEaXYuYXBwZW5kQ2hpbGQocHJlc3N1cmVJY29uKTtcbiAgY29uc3QgcHJlc3N1cmVQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHByZXNzdXJlUC50ZXh0Q29udGVudCA9IGBQcmVzc3VyZTogJHtwcmVzc3VyZX1gO1xuICBwcmVzc3VyZURpdi5hcHBlbmRDaGlsZChwcmVzc3VyZVApO1xuICBkaXNwbGF5RGl2LmFwcGVuZENoaWxkKHByZXNzdXJlRGl2KTtcbn07XG5cbi8qKlxuICogRGlzcGxheXMgdGhlIHRlbXBlcmF0dXJlLlxuICogQHBhcmFtIHtzdHJpbmd9IGZlZWxzTGlrZVxuICogQHBhcmFtIHtzdHJpbmd9IHRlbXBlcmF0dXJlXG4gKi9cbmNvbnN0IGRpc3BsYXlUZW1wID0gKGZlZWxzTGlrZSwgdGVtcGVyYXR1cmUpID0+IHtcbiAgY29uc3QgdGVtcERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGVtcFwiKTtcbiAgaWYgKHRlbXBEaXYuY2hpbGRyZW5bMF0pIHtcbiAgICB0ZW1wRGl2LmNoaWxkcmVuWzBdLnJlbW92ZSgpO1xuICAgIHRlbXBEaXYuY2hpbGRyZW5bMF0ucmVtb3ZlKCk7XG4gIH1cbiAgLy8gZmVlbHNMaWtlIERpdlxuICBjb25zdCBmZWVsc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGZlZWxzRGl2LmNsYXNzTGlzdC5hZGQoXCJhbGlnblwiKTtcbiAgY29uc3QgZmVlbHNJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlcIik7XG4gIGZlZWxzSWNvbi5jbGFzc05hbWUgPSBcImZhcyBmYS1tYWxlXCI7XG4gIGZlZWxzRGl2LmFwcGVuZENoaWxkKGZlZWxzSWNvbik7XG4gIGNvbnN0IGZlZWxzUCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBmZWVsc1AudGV4dENvbnRlbnQgPSBgRmVlbHMgTGlrZTogJHtmZWVsc0xpa2V9YDtcbiAgZmVlbHNEaXYuYXBwZW5kQ2hpbGQoZmVlbHNQKTtcbiAgdGVtcERpdi5hcHBlbmRDaGlsZChmZWVsc0Rpdik7XG5cbiAgLy8gdGVtcGVyYXR1cmUgRGl2XG4gIGNvbnN0IHRlbXBlcmF0dXJlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdGVtcGVyYXR1cmVEaXYuY2xhc3NMaXN0LmFkZChcImFsaWduXCIpO1xuICBjb25zdCB0ZW1wZXJhdHVyZUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaVwiKTtcbiAgdGVtcGVyYXR1cmVJY29uLmNsYXNzTmFtZSA9IFwiZmFzIGZhLXRoZXJtb21ldGVyLWhhbGZcIjtcbiAgdGVtcGVyYXR1cmVEaXYuYXBwZW5kQ2hpbGQodGVtcGVyYXR1cmVJY29uKTtcbiAgY29uc3QgdGVtcGVyYXR1cmVQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHRlbXBlcmF0dXJlUC50ZXh0Q29udGVudCA9IGBUZW1wZXJhdHVyZTogJHt0ZW1wZXJhdHVyZX1gO1xuICB0ZW1wZXJhdHVyZURpdi5hcHBlbmRDaGlsZCh0ZW1wZXJhdHVyZVApO1xuICB0ZW1wRGl2LmFwcGVuZENoaWxkKHRlbXBlcmF0dXJlRGl2KTtcbn07XG5cbi8qKlxuICogRGlzcGxheXMgbWF4aW11bSBhbmQgbWluaW11bSB0ZW1wZXJhdHVyZVxuICogQHBhcmFtIHtzdHJpbmd9IG1pblxuICogQHBhcmFtIHtzdHJpbmd9IG1heFxuICovXG5jb25zdCBkaXNwbGF5TWluTWF4ID0gKG1pbiwgbWF4KSA9PiB7XG4gIGNvbnN0IG1pbk1heERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWluTWF4XCIpO1xuICBpZiAobWluTWF4RGl2LmNoaWxkcmVuWzBdKSB7XG4gICAgbWluTWF4RGl2LmNoaWxkcmVuWzBdLnJlbW92ZSgpO1xuICAgIG1pbk1heERpdi5jaGlsZHJlblswXS5yZW1vdmUoKTtcbiAgfVxuXG4gIC8vIE1heCBEaXZcbiAgY29uc3QgbWF4RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbWF4RGl2LmNsYXNzTGlzdC5hZGQoXCJhbGlnblwiKTtcbiAgY29uc3QgbWF4SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpO1xuICBtYXhJY29uLmNsYXNzTmFtZSA9IFwiZmFzIGZhLXRlbXBlcmF0dXJlLWhpZ2hcIjtcbiAgbWF4RGl2LmFwcGVuZENoaWxkKG1heEljb24pO1xuICBjb25zdCBtYXhQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIG1heFAudGV4dENvbnRlbnQgPSBgTWF4aW11bSB0ZW1wZXJhdHVyZTogJHttYXh9YDtcbiAgbWF4RGl2LmFwcGVuZENoaWxkKG1heFApO1xuICBtaW5NYXhEaXYuYXBwZW5kQ2hpbGQobWF4RGl2KTtcblxuICAvLyBNaW4gRGl2XG4gIGNvbnN0IG1pbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1pbkRpdi5jbGFzc0xpc3QuYWRkKFwiYWxpZ25cIik7XG4gIGNvbnN0IG1pbkljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaVwiKTtcbiAgbWluSWNvbi5jbGFzc05hbWUgPSBcImZhcyBmYS10ZW1wZXJhdHVyZS1sb3dcIjtcbiAgbWluRGl2LmFwcGVuZENoaWxkKG1pbkljb24pO1xuICBjb25zdCBtaW5QID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIG1pblAudGV4dENvbnRlbnQgPSBgTWluaW11bSB0ZW1wZXJhdHVyZTogJHttaW59YDtcbiAgbWluRGl2LmFwcGVuZENoaWxkKG1pblApO1xuICBtaW5NYXhEaXYuYXBwZW5kQ2hpbGQobWluRGl2KTtcbn07XG5cbi8qKlxuICogRGlzcGxheXMgcmFpbiBhbmQgc25vdyB2b2x1bWUuXG4gKiBAcGFyYW0ge3N0cmluZ30gcmFpblxuICogQHBhcmFtIHtzdHJpbmd9IHNub3dcbiAqL1xuY29uc3QgZGlzcGxheVZvbHVtZSA9IChyYWluLCBzbm93KSA9PiB7XG4gIGNvbnN0IHZvbHVtZURpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdm9sdW1lXCIpO1xuICBpZiAodm9sdW1lRGl2LmNoaWxkcmVuWzBdKSB7XG4gICAgdm9sdW1lRGl2LmNoaWxkcmVuWzBdLnJlbW92ZSgpO1xuICAgIGlmICh2b2x1bWVEaXYuY2hpbGRyZW5bMF0pIHtcbiAgICAgIHZvbHVtZURpdi5jaGlsZHJlblswXS5yZW1vdmUoKTtcbiAgICB9XG4gIH1cblxuICAvLyBNYXggRGl2XG4gIGlmIChyYWluKSB7XG4gICAgY29uc3QgcmFpbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcmFpbkRpdi5jbGFzc0xpc3QuYWRkKFwiYWxpZ25cIik7XG4gICAgY29uc3QgcmFpbkljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaVwiKTtcbiAgICByYWluSWNvbi5jbGFzc05hbWUgPSBcImZhcyBmYS1jbG91ZC1yYWluXCI7XG4gICAgcmFpbkRpdi5hcHBlbmRDaGlsZChyYWluSWNvbik7XG4gICAgY29uc3QgcmFpblAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICByYWluUC50ZXh0Q29udGVudCA9IGBSYWluIHZvbHVtZSBpbiB0aGUgbGFzdCBob3VyOiAke3JhaW59YDtcbiAgICByYWluRGl2LmFwcGVuZENoaWxkKHJhaW5QKTtcbiAgICB2b2x1bWVEaXYuYXBwZW5kQ2hpbGQocmFpbkRpdik7XG4gIH1cblxuICAvLyBNYXggRGl2XG4gIGlmIChzbm93KSB7XG4gICAgY29uc3Qgc25vd0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgc25vd0Rpdi5jbGFzc0xpc3QuYWRkKFwiYWxpZ25cIik7XG4gICAgY29uc3Qgc25vd0ljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaVwiKTtcbiAgICBzbm93SWNvbi5jbGFzc05hbWUgPSBcImZhcyBmYS1zbm93Zmxha2VcIjtcbiAgICBzbm93RGl2LmFwcGVuZENoaWxkKHNub3dJY29uKTtcbiAgICBjb25zdCBzbm93UCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHNub3dQLnRleHRDb250ZW50ID0gYFNub3cgdm9sdW1lIGluIHRoZSBsYXN0IGhvdXI6ICR7c25vd31gO1xuICAgIHNub3dEaXYuYXBwZW5kQ2hpbGQoc25vd1ApO1xuICAgIHZvbHVtZURpdi5hcHBlbmRDaGlsZChzbm93RGl2KTtcbiAgfVxufTtcblxuLyoqXG4gKiBjaGFuZ2VzIGJhY2tncm91bmQgZGVwZW5kaW5nIG9uIHRpbWUgb2YgZGF5IGF0IGxvY2F0aW9uO1xuICogQHBhcmFtIHtzdHJpbmd9IHBlcmlvZCAtIFRpbWUgb2YgZGF5IGF0IGxvY2F0aW9uXG4gKi9cbmNvbnN0IGNoYW5nZUJhY2tncm91bmQgPSAocGVyaW9kKSA9PiB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluXCIpO1xuICBjb25zdCBzZWFyY2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NlYXJjaEJhclwiKTtcbiAgbGV0IGJ1dHRvbjtcbiAgaWYgKHBlcmlvZCA9PT0gXCJEYXlcIikge1xuICAgIGNvbnRhaW5lci5zdHlsZS5jb2xvciA9IFwiYmxhY2tcIjtcbiAgICBzZWFyY2guc3R5bGVbXCJib3gtc2hhZG93XCJdID0gXCIwcHggMHB4IDRweCA0cHggYmxhY2tcIjtcbiAgICBjb250YWluZXIuc3R5bGVbXCJiYWNrZ3JvdW5kLWltYWdlXCJdID0gYHVybCgke0RheX0pYDtcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hY3RpdmVXaGl0ZVwiKSkge1xuICAgICAgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hY3RpdmVXaGl0ZVwiKTtcbiAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlV2hpdGVcIik7XG4gICAgICBidXR0b24uY2xhc3NMaXN0LmFkZChcImFjdGl2ZUJsYWNrXCIpO1xuICAgIH1cbiAgfVxuICBpZiAocGVyaW9kID09PSBcIk5pZ2h0XCIpIHtcbiAgICBjb250YWluZXIuc3R5bGUuY29sb3IgPSBcIndoaXRlXCI7XG4gICAgc2VhcmNoLnN0eWxlW1wiYm94LXNoYWRvd1wiXSA9IFwiMHB4IDBweCA0cHggNHB4IHdoaXRlXCI7XG4gICAgY29udGFpbmVyLnN0eWxlW1wiYmFja2dyb3VuZC1pbWFnZVwiXSA9IGB1cmwoJHtOaWdodH0pYDtcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hY3RpdmVCbGFja1wiKSkge1xuICAgICAgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hY3RpdmVCbGFja1wiKTtcbiAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlQmxhY2tcIik7XG4gICAgICBidXR0b24uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVdoaXRlXCIpO1xuICAgIH1cbiAgfVxufTtcblxuLyoqXG4gKiBDYWxscyBoZWxwZXIgZGlzcGxheSBmdW5jdGlvbnNcbiAqIEBwYXJhbSB7T2JqZWN0fSB3ZWF0aGVyT2JqXG4gKi9cbmNvbnN0IGRpc3BsYXkgPSAod2VhdGhlck9iaikgPT4ge1xuICBkaXNwbGF5Q291bnRyeSh3ZWF0aGVyT2JqLmdldEZ1bGxMb2NhdGlvbigpKTtcbiAgZGlzcGxheURhdGUod2VhdGhlck9iai5nZXREYXRlKCksIHdlYXRoZXJPYmouZ2V0VGltZSgpKTtcbiAgZGlzcGxheVdlYXRoZXJEZXNjcmlwdGlvbih3ZWF0aGVyT2JqLmRlc2NyaXB0aW9uLCB3ZWF0aGVyT2JqLmljb24pO1xuICBkaXNwbGF5SHVtaWRQcmVzc1dpbmQoXG4gICAgd2VhdGhlck9iai5wcmVzc3VyZSxcbiAgICB3ZWF0aGVyT2JqLndpbmRTcGVlZCxcbiAgICB3ZWF0aGVyT2JqLmh1bWlkaXR5XG4gICk7XG4gIGRpc3BsYXlUZW1wKHdlYXRoZXJPYmouZmVlbHNMaWtlLCB3ZWF0aGVyT2JqLnRlbXBlcmF0dXJlKTtcbiAgZGlzcGxheU1pbk1heCh3ZWF0aGVyT2JqLm1pblRlbXBlcmF0dXJlLCB3ZWF0aGVyT2JqLm1heFRlbXBlcmF0dXJlKTtcbiAgZGlzcGxheVZvbHVtZSh3ZWF0aGVyT2JqLnJhaW5Wb2x1bWUsIHdlYXRoZXJPYmouc25vd1ZvbHVtZSk7XG4gIGNoYW5nZUJhY2tncm91bmQod2VhdGhlck9iai5nZXREYXlPck5pZ2h0KCkpO1xuICBjb25zdCBlcnJvckRpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Vycm9yRGlzcGxheVwiKTtcbiAgZXJyb3JEaXNwbGF5LnRleHRDb250ZW50ID0gXCJcIjtcbn07XG5cbmV4cG9ydCB7IGRpc3BsYXkgfTtcbiIsImltcG9ydCBcIi4uL3N0eWxlcy9yZXNldC5jc3NcIjtcbmltcG9ydCBcIi4uL3N0eWxlcy9tYWluLmNzc1wiO1xuaW1wb3J0IFwiQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLWZyZWUvanMvYWxsXCI7XG5pbXBvcnQgeyBpbml0aWFsUGFnZUxvYWQgfSBmcm9tIFwiLi9pbml0aWFsUGFnZVwiO1xuaW1wb3J0IHsgc3Vic2NyaWJlIH0gZnJvbSBcIi4vcHVic3ViXCI7XG5pbXBvcnQgeyBzZWFyY2hFdmVudExpc3RlbmVyIH0gZnJvbSBcIi4vc2VhcmNoXCI7XG5pbXBvcnQgeyBkaXNwbGF5IH0gZnJvbSBcIi4vZGlzcGxheVwiO1xuaW1wb3J0IHsgc3dpdGNoQWN0aXZlIH0gZnJvbSBcIi4vc3dpdGNoXCI7XG5pbXBvcnQgeyBpbnB1dEV2ZW50TGlzdGVuZXIgfSBmcm9tIFwiLi92YWxpZGF0aW9uXCI7XG5cbi8vIEB0cy1jaGVja1xuXG4vKipcbiAqIEBmaWxlb3ZlcnZpZXcgSW5kZXggLmpzIGlzIHRoZSByb290IG9mIHRoaXMgZmlsZS5cbiAqIEBhdXRob3IgRnJvc3R3YWxrZXJcbiAqL1xuXG5zdWJzY3JpYmUoXCJwYWdlTG9hZGVkXCIsIHNlYXJjaEV2ZW50TGlzdGVuZXIpO1xuXG5zdWJzY3JpYmUoXCJwYWdlTG9hZGVkXCIsIHN3aXRjaEFjdGl2ZSk7XG5cbnN1YnNjcmliZShcInBhZ2VMb2FkZWRcIiwgaW5wdXRFdmVudExpc3RlbmVyKTtcblxuc3Vic2NyaWJlKFwiZGlzcGxheVwiLCBkaXNwbGF5KTtcblxuaW5pdGlhbFBhZ2VMb2FkKCk7XG4iLCJpbXBvcnQgSWNvbiBmcm9tIFwiLi4vaW1hZ2VzL2luaXRpYWwuanBnXCI7XG5pbXBvcnQgeyBwdWJsaXNoIH0gZnJvbSBcIi4vcHVic3ViXCI7XG5cbi8vIEB0cy1jaGVja1xuXG4vKipcbiAqIEBtb2R1bGUgSW5pdGlhbFBhZ2VcbiAqL1xuXG4vKipcbiAqIEB0eXBlIHtPYmplY3R9IC0gY29udGFpbmVyXG4gKi9cbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluXCIpO1xuXG4vKipcbiAqIGNyZWF0ZXMgYSBmb3JtXG4gKiBAcmV0dXJuIHtPYmplY3R9IC0gZm9ybVxuICovXG5jb25zdCBmb3JtQ3JlYXRlID0gKCkgPT4ge1xuICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBsYWJlbC5mb3IgPSBcInNlYXJjaFwiO1xuICBsYWJlbC50ZXh0Q29udGVudCA9IFwiRW50ZXIgY2l0eSBuYW1lOlwiO1xuICBjb25zdCBzZWFyY2hCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBzZWFyY2hCYXIuaWQgPSBcInNlYXJjaEJhclwiO1xuICBjb25zdCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaWNvbi5pZCA9IFwiaWNvblwiO1xuICBjb25zdCBpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlcIik7XG4gIGkuY2xhc3NMaXN0LmFkZChcImZhc1wiKTtcbiAgaS5jbGFzc0xpc3QuYWRkKFwiZmEtc2VhcmNoXCIpO1xuICBpY29uLmFwcGVuZENoaWxkKGkpO1xuICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgaW5wdXQudHlwZSA9IFwidGV4dFwiO1xuICBpbnB1dC5uYW1lID0gXCJjaXR5XCI7XG4gIGlucHV0LmlkID0gXCJzZWFyY2hcIjtcbiAgaW5wdXQuc2V0QXR0cmlidXRlKFwicmVxdWlyZWRcIiwgXCJcIik7XG4gIHNlYXJjaEJhci5hcHBlbmRDaGlsZChpY29uKTtcbiAgc2VhcmNoQmFyLmFwcGVuZENoaWxkKGlucHV0KTtcbiAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBzcGFuLmlkID0gXCJlcnJvckRpc3BsYXlcIjtcbiAgY29uc3Qgc3RhbmRhcmRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgc3RhbmRhcmRzLmlkID0gXCJzdGFuZGFyZERpdlwiO1xuXG4gIC8vIG1ldHJpYyBidXR0b25cbiAgY29uc3QgbWV0cmljQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbWV0cmljQnV0dG9uLnRleHRDb250ZW50ID0gXCJtZXRyaWNcIjtcbiAgbWV0cmljQnV0dG9uLmlkID0gXCJtZXRyaWNCdXR0b25cIjtcbiAgbWV0cmljQnV0dG9uLmNsYXNzTmFtZSA9IFwic3RhbmRhcmRzIGFjdGl2ZUJsYWNrXCI7XG4gIHN0YW5kYXJkcy5hcHBlbmRDaGlsZChtZXRyaWNCdXR0b24pO1xuXG4gIC8vIGltcGVyaWFsIGJ1dHRvblxuICBjb25zdCBpbXBlcmlhbEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGltcGVyaWFsQnV0dG9uLnRleHRDb250ZW50ID0gXCJpbXBlcmlhbFwiO1xuICBpbXBlcmlhbEJ1dHRvbi5pZCA9IFwiaW1wZXJpYWxCdXR0b25cIjtcbiAgaW1wZXJpYWxCdXR0b24uY2xhc3NOYW1lID0gXCJzdGFuZGFyZHNcIjtcbiAgc3RhbmRhcmRzLmFwcGVuZENoaWxkKGltcGVyaWFsQnV0dG9uKTtcblxuICBmb3JtLmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgZm9ybS5hcHBlbmRDaGlsZChzZWFyY2hCYXIpO1xuICBmb3JtLmFwcGVuZENoaWxkKHNwYW4pO1xuICBmb3JtLmFwcGVuZENoaWxkKHN0YW5kYXJkcyk7XG4gIGZvcm0uc2V0QXR0cmlidXRlKFwibm92YWxpZGF0ZVwiLCBcInRydWVcIik7XG4gIHJldHVybiBmb3JtO1xufTtcblxuLyoqXG4gKiBSZXR1cm5zIGEgZGl2XG4gKiBAcGFyYW0ge3N0cmluZ30gaWRlbnRpZmllclxuICogQHJldHVybiB7T2JqZWN0fS0gYSBEaXZcbiAqL1xuY29uc3QgZ3JpZENyZWF0b3IgPSAoaWRlbnRpZmllcikgPT4ge1xuICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBkaXYuY2xhc3NMaXN0LmFkZChcImdyaWRcIik7XG4gIGRpdi5pZCA9IGlkZW50aWZpZXI7XG4gIHJldHVybiBkaXY7XG59O1xuXG4vKipcbiAqIExvYWRzIGluaXRhbCBwYWdlLlxuICogQGZ1bmN0aW9uXG4gKi9cbmNvbnN0IGluaXRpYWxQYWdlTG9hZCA9ICgpID0+IHtcbiAgY29uc3QgZm9ybSA9IGZvcm1DcmVhdGUoKTtcbiAgY29uc3QgZm9ybURpdiA9IGdyaWRDcmVhdG9yKFwiRm9ybVwiKTtcbiAgZm9ybURpdi5hcHBlbmRDaGlsZChmb3JtKTtcbiAgY29udGFpbmVyLnN0eWxlW1wiYmFja2dyb3VuZC1pbWFnZVwiXSA9IGB1cmwoJHtJY29ufSlgO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybURpdik7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChncmlkQ3JlYXRvcihcImNvdW50cnlEZXRhaWxzXCIpKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGdyaWRDcmVhdG9yKFwiZGF0ZVwiKSk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChncmlkQ3JlYXRvcihcIndlYXRoZXJEZXNjcmlwdGlvblwiKSk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChncmlkQ3JlYXRvcihcImh1bWlkUHJlc3N1cmVXaW5kXCIpKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGdyaWRDcmVhdG9yKFwidGVtcFwiKSk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChncmlkQ3JlYXRvcihcIm1pbk1heFwiKSk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChncmlkQ3JlYXRvcihcInZvbHVtZVwiKSk7XG4gIGNvbnN0IGljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2ljb25cIik7XG4gIHB1Ymxpc2goXCJwYWdlTG9hZGVkXCIsIGljb24pO1xufTtcblxuZXhwb3J0IHsgaW5pdGlhbFBhZ2VMb2FkIH07XG4iLCIvLyBAdHMtY2hlY2tcblxuLyoqXG4gKiBAbW9kdWxlIHB1YnN1YlxuICovXG5cbi8qKlxuICogQHJldHVybiB7T2JqZWN0fVxuICovXG5cbmNvbnN0IGV2ZW50cyA9IHt9O1xuXG4vKipcbiAqIFN1YnNjcmliZSB0byBhbiBldmVudFxuICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50TmFtZSAtIE5hbWUgb2YgdGhlIGV2ZW50XG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiAtIEZ1bmN0aW9uIHRvIGJlIGNhbGxlZFxuICovXG5jb25zdCBzdWJzY3JpYmUgPSBmdW5jdGlvbiAoZXZlbnROYW1lLCBmbikge1xuICBldmVudHNbZXZlbnROYW1lXSA9IGV2ZW50c1tldmVudE5hbWVdIHx8IFtdO1xuICBldmVudHNbZXZlbnROYW1lXS5wdXNoKGZuKTtcbn07XG5cbi8qKlxuICogVW5zdXNjcmliZSBmcm9tIGFuIGV2ZW50XG4gKiBAcGFyYW0ge3N0cmluZ30gZXZlbnROYW1lIC0gTmFtZSBvZiB0aGUgZXZlbnRcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIC0gRnVuY3Rpb24gdG8gYmUgcmVtb3ZlZFxuICovXG5jb25zdCB1bnN1YnNjcmliZSA9IGZ1bmN0aW9uIChldmVudE5hbWUsIGZuKSB7XG4gIGlmIChldmVudHNbZXZlbnROYW1lXSkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZXZlbnRzW2V2ZW50TmFtZV0ubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChldmVudHNbZXZlbnROYW1lXVtpXSA9PT0gZm4pIHtcbiAgICAgICAgZXZlbnRzW2V2ZW50TmFtZV0uc3BsaWNlKGksIDEpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5cbi8qKlxuICogUHVibGlzaCBhbiBldmVudFxuICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50TmFtZSAtIE5hbWUgb2YgdGhlIGV2ZW50XG4gKiBAcGFyYW0geyp9IGRhdGEgLWRhdGEgdG8gYmUgcGFzc2VkIGludG8gY2FsbGJhY2tcbiAqL1xuY29uc3QgcHVibGlzaCA9IGZ1bmN0aW9uIChldmVudE5hbWUsIGRhdGEpIHtcbiAgaWYgKGV2ZW50c1tldmVudE5hbWVdKSB7XG4gICAgZXZlbnRzW2V2ZW50TmFtZV0uZm9yRWFjaChmdW5jdGlvbiAoZm4pIHtcbiAgICAgIGZuKGRhdGEpO1xuICAgIH0pO1xuICB9XG59O1xuXG5leHBvcnQgeyBwdWJsaXNoLCB1bnN1YnNjcmliZSwgc3Vic2NyaWJlIH07XG4iLCJpbXBvcnQgeyByZXRyaWV2ZUluZm9ybWF0aW9uIH0gZnJvbSBcIi4vd2VhdGhlckRhdGFcIjtcbmltcG9ydCB7IHB1Ymxpc2ggfSBmcm9tIFwiLi9wdWJzdWJcIjtcbmltcG9ydCB7IHZhbGlkYXRlIH0gZnJvbSBcIi4vdmFsaWRhdGlvblwiO1xuXG4vLyBAdHMtY2hlY2tcblxuLyoqXG4gKiBAbW9kdWxlIEV2ZW50c1xuICovXG5cbi8qKlxuICogY2FsbHMgcmV0cmlldmVJbmZvcm1hdGlvbiBmdW5jdGlvbiB3aGVuIHNlYXJjaCBpY29uIGlzIGNsaWNrZWQgQHNlZSB7QGxpbmsgcmV0cmlldmVJbmZvcm1hdGlvbn1cbiAqIEBmdW5jdGlvblxuICovXG5jb25zdCBmZXRjaENsaWNrSW5mbyA9IGFzeW5jICgpID0+IHtcbiAgdHJ5IHtcbiAgICBsZXQgYWN0aXZlO1xuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFjdGl2ZUJsYWNrXCIpKSB7XG4gICAgICBhY3RpdmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFjdGl2ZUJsYWNrXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBhY3RpdmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFjdGl2ZVdoaXRlXCIpO1xuICAgIH1cbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKTtcbiAgICBpZiAodmFsaWRhdGUoKSkge1xuICAgICAgY29uc3QgaW5mbyA9IGF3YWl0IHJldHJpZXZlSW5mb3JtYXRpb24oaW5wdXQudmFsdWUsIGFjdGl2ZS50ZXh0Q29udGVudCk7XG4gICAgICBwdWJsaXNoKFwiZGlzcGxheVwiLCBpbmZvKTtcbiAgICB9XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUubG9nKGVycik7XG4gIH1cbn07XG5cbi8qKlxuICogY2FsbHMgcmV0cmlldmVJbmZvcm1hdGlvbiBmdW5jdGlvbiB3aGVuIGVudGVyIGtleSBpcyBwcmVzc2VkIEBzZWUge0BsaW5rIHJldHJpZXZlSW5mb3JtYXRpb259XG4gKiBAcGFyYW0ge09iamVjdH0gZXZlbnRcbiAqL1xuY29uc3QgZmV0Y2hLZXlJbmZvID0gYXN5bmMgKGV2ZW50KSA9PiB7XG4gIHRyeSB7XG4gICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDEzKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgbGV0IGFjdGl2ZTtcbiAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFjdGl2ZUJsYWNrXCIpKSB7XG4gICAgICAgIGFjdGl2ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWN0aXZlQmxhY2tcIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhY3RpdmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFjdGl2ZVdoaXRlXCIpO1xuICAgICAgfVxuICAgICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXRcIik7XG4gICAgICBpZiAodmFsaWRhdGUoKSkge1xuICAgICAgICBjb25zdCBpbmZvID0gYXdhaXQgcmV0cmlldmVJbmZvcm1hdGlvbihpbnB1dC52YWx1ZSwgYWN0aXZlLnRleHRDb250ZW50KTtcbiAgICAgICAgcHVibGlzaChcImRpc3BsYXlcIiwgaW5mbyk7XG4gICAgICB9XG4gICAgfVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmxvZyhlcnIpO1xuICB9XG59O1xuXG4vKipcbiAqIEFkZHMgZXZlbnQgbGlzdGVuZXIgdG8gdGhlIGRvbSBlbGVtZW50LlxuICogQHBhcmFtIHtPYmplY3R9IGRhdGEgLSBEb20gZWxlbWVudFxuICovXG5jb25zdCBzZWFyY2hFdmVudExpc3RlbmVyID0gKGRhdGEpID0+IHtcbiAgZGF0YS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZmV0Y2hDbGlja0luZm8pO1xuICBkYXRhLm5leHRFbGVtZW50U2libGluZy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBmZXRjaEtleUluZm8pO1xufTtcblxuZXhwb3J0IHsgc2VhcmNoRXZlbnRMaXN0ZW5lciB9O1xuIiwiLy8gQHRzLWNoZWNrXG5cbi8qKlxuICogQG1vZHVsZSBzZWFyY2hcbiAqL1xuXG4vKipcbiAqIEBwYXJhbSB7T2JqZWN0fSBldmVudFxuICovXG5jb25zdCBzd2l0Y2hEaXYgPSAoZXZlbnQpID0+IHtcbiAgbGV0IGN1cnJlbnRBY3RpdmU7XG4gIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFjdGl2ZUJsYWNrXCIpKSB7XG4gICAgY3VycmVudEFjdGl2ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWN0aXZlQmxhY2tcIik7XG4gICAgY3VycmVudEFjdGl2ZS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlQmxhY2tcIik7XG4gICAgZXZlbnQuY3VycmVudFRhcmdldC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlQmxhY2tcIik7XG4gIH0gZWxzZSB7XG4gICAgY3VycmVudEFjdGl2ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWN0aXZlV2hpdGVcIik7XG4gICAgY3VycmVudEFjdGl2ZS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlV2hpdGVcIik7XG4gICAgZXZlbnQuY3VycmVudFRhcmdldC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlV2hpdGVcIik7XG4gIH1cbn07XG5cbi8qKlxuICogQXR0YWNoZXMgZXZlbnQgbGlzdGVuZXIgdG8gYnV0dG9uIGV2ZW50c1tldmVudE5hbWVdXG4gKiBAZnVuY3Rpb25cbiAqL1xuY29uc3Qgc3dpdGNoQWN0aXZlID0gKCkgPT4ge1xuICBjb25zdCBidXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zdGFuZGFyZHNcIik7XG4gIGJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzd2l0Y2hEaXYpO1xuICB9KTtcbn07XG5cbmV4cG9ydCB7IHN3aXRjaEFjdGl2ZSB9O1xuIiwiLy8gQHRzLWNoZWNrXG5cbi8qKlxuICogQG1vZHVsZSB2YWxpZGF0aW9uXG4gKi9cblxuY29uc3QgdmFsaWRhdGUgPSAoKSA9PiB7XG4gIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0XCIpO1xuICBjb25zdCBlcnJvckRpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Vycm9yRGlzcGxheVwiKTtcbiAgaWYgKGlucHV0LnZhbGlkaXR5LnZhbGlkKSB7XG4gICAgZXJyb3JEaXNwbGF5LnRleHRDb250ZW50ID0gXCJcIjtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoaW5wdXQudmFsaWRpdHkudmFsdWVNaXNzaW5nKSB7XG4gICAgICBlcnJvckRpc3BsYXkudGV4dENvbnRlbnQgPSBcIklucHV0IG11c3Qgbm90IGJlIGxlZnQgYmxhbmtcIjtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbn07XG5cbmNvbnN0IGlucHV0RXZlbnRMaXN0ZW5lciA9ICgpID0+IHtcbiAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXRcIik7XG4gIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCB2YWxpZGF0ZSk7XG59O1xuXG5leHBvcnQgeyBpbnB1dEV2ZW50TGlzdGVuZXIsIHZhbGlkYXRlIH07XG4iLCJpbXBvcnQgeyBpc0FmdGVyLCBmb3JtYXQgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcblxuLy8gQHRzLWNoZWNrXG5cbi8qKlxuICogQG1vZHVsZSBXZWF0aGVyRGF0YVxuICovXG5cbi8qKlxuICpGaW5kcyB3ZWF0aGVyIGZvcmVjYXN0IG9mIGdpdmVuIGxvY2F0aW9uXG4gKiBAcGFyYW0ge3N0cmluZ30gbG9jYXRpb25cbiAqIEBwYXJhbSB7c3RyaW5nfSBzdGFuZGFyZFxuICogQHJldHVybiB7UHJvbWlzZTxhbnk+fVxuICovXG5jb25zdCBmaW5kTG9jYXRpb25XZWF0aGVyID0gYXN5bmMgKGxvY2F0aW9uLCBzdGFuZGFyZCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnNvbGUubG9nKHN0YW5kYXJkKTtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtsb2NhdGlvbn0mQVBQSUQ9ODFkMWY2ZTVlZDc3ZjdjOGM5ZGExZGNjMDczYWQ3YzYmdW5pdHM9JHtzdGFuZGFyZH1gLFxuICAgICAgeyBtb2RlOiBcImNvcnNcIiB9XG4gICAgKTtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIHJldHVybiBkYXRhO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnN0IGVycm9yRGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZXJyb3JEaXNwbGF5XCIpO1xuICAgIGVycm9yRGlzcGxheS50ZXh0Q29udGVudCA9IGBOZXR3b3JrIEVycm9yLmA7XG4gIH1cbn07XG5cbi8qKiBDcmVhdGVzIHdlYXRoZXIgaW5mb3JtYXRpb24gb2JqZWN0cyAqL1xuY2xhc3MgSW5mb3JtYXRpb25NYWtlciB7XG4gIC8qKlxuICAgKiBPYmplY3QgY29uc3RydWN0b3JcbiAgICogQHBhcmFtIHtPYmplY3R9IHJldHJpZXZlZERhdGEgLSBSZXRyaWV2ZWQgZGF0YSBmcm9tIEFQSVxuICAgKiBAcGFyYW0ge1N0cmluZ30gc3RhbmRhcmRcbiAgICovXG4gIGNvbnN0cnVjdG9yKHJldHJpZXZlZERhdGEsIHN0YW5kYXJkKSB7XG4gICAgdGhpcy5jb3VudHJ5ID0gcmV0cmlldmVkRGF0YS5zeXMuY291bnRyeTtcbiAgICB0aGlzLmNpdHkgPSByZXRyaWV2ZWREYXRhLm5hbWU7XG4gICAgdGhpcy5odW1pZGl0eSA9IHJldHJpZXZlZERhdGEubWFpbi5odW1pZGl0eSArIFwiJVwiO1xuICAgIHRoaXMuc3VucmlzZSA9IHJldHJpZXZlZERhdGEuc3lzLnN1bnJpc2U7XG4gICAgdGhpcy5zdW5zZXQgPSByZXRyaWV2ZWREYXRhLnN5cy5zdW5zZXQ7XG4gICAgdGhpcy5kYXRlID0gcmV0cmlldmVkRGF0YS5kdDtcbiAgICB0aGlzLmljb24gPSBgaHR0cHM6Ly9vcGVud2VhdGhlcm1hcC5vcmcvaW1nL3duLyR7cmV0cmlldmVkRGF0YS53ZWF0aGVyWzBdLmljb259QDJ4LnBuZ2A7XG4gICAgaWYgKHJldHJpZXZlZERhdGEucmFpbltcIjFoXCJdKSB7XG4gICAgICB0aGlzLnJhaW5Wb2x1bWUgPSByZXRyaWV2ZWREYXRhLnJhaW5bXCIxaFwiXSArIFwibW1cIjtcbiAgICB9XG4gICAgaWYgKHJldHJpZXZlZERhdGEuc25vd1tcIjFoXCJdKSB7XG4gICAgICB0aGlzLnNub3dWb2x1bWUgPSByZXRyaWV2ZWREYXRhLnNub3dbXCIxaFwiXSArIFwibW1cIjtcbiAgICB9XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IHJldHJpZXZlZERhdGEud2VhdGhlclswXS5kZXNjcmlwdGlvbjtcbiAgICB0aGlzLnByZXNzdXJlID0gcmV0cmlldmVkRGF0YS5tYWluLnByZXNzdXJlICsgXCJoUGFcIjtcbiAgICBpZiAoc3RhbmRhcmQgPT09IFwibWV0cmljXCIpIHtcbiAgICAgIHRoaXMuZmVlbHNMaWtlID0gcmV0cmlldmVkRGF0YS5tYWluLmZlZWxzX2xpa2UgKyBcIlxcdTAwQjBDXCI7XG4gICAgICB0aGlzLnRlbXBlcmF0dXJlID0gcmV0cmlldmVkRGF0YS5tYWluLnRlbXAgKyBcIlxcdTAwQjBDXCI7XG4gICAgICB0aGlzLm1pblRlbXBlcmF0dXJlID0gcmV0cmlldmVkRGF0YS5tYWluLnRlbXBfbWluICsgXCJcXHUwMEIwQ1wiO1xuICAgICAgdGhpcy5tYXhUZW1wZXJhdHVyZSA9IHJldHJpZXZlZERhdGEubWFpbi50ZW1wX21heCArIFwiXFx1MDBCMENcIjtcbiAgICAgIHRoaXMud2luZFNwZWVkID0gcmV0cmlldmVkRGF0YS53aW5kLnNwZWVkICsgXCJtL3NcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5mZWVsc0xpa2UgPSByZXRyaWV2ZWREYXRhLm1haW4uZmVlbHNfbGlrZSArIFwiXFx1MDBCMEZcIjtcbiAgICAgIHRoaXMudGVtcGVyYXR1cmUgPSByZXRyaWV2ZWREYXRhLm1haW4udGVtcCArIFwiXFx1MDBCMEZcIjtcbiAgICAgIHRoaXMubWluVGVtcGVyYXR1cmUgPSByZXRyaWV2ZWREYXRhLm1haW4udGVtcF9taW4gKyBcIlxcdTAwQjBGXCI7XG4gICAgICB0aGlzLm1heFRlbXBlcmF0dXJlID0gcmV0cmlldmVkRGF0YS5tYWluLnRlbXBfbWF4ICsgXCJcXHUwMEIwRlwiO1xuICAgICAgdGhpcy53aW5kU3BlZWQgPSByZXRyaWV2ZWREYXRhLndpbmQuc3BlZWQgKyBcIm1pbGVzL2hvdXJcIjtcbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIENoZWNrcyBpZiBpdHMgY3VycmVudGx5IGRheSBvciBuaWdodFxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICBnZXREYXlPck5pZ2h0KCkge1xuICAgIGNvbnN0IGN1cnJlbnRUaW1lID0gbmV3IERhdGUoKTtcbiAgICBjb25zdCBzdW5SaXNlID0gbmV3IERhdGUodGhpcy5zdW5yaXNlICogMTAwMCk7XG4gICAgY29uc3Qgc3VuU2V0ID0gbmV3IERhdGUodGhpcy5zdW5zZXQgKiAxMDAwKTtcbiAgICBpZiAoIWlzQWZ0ZXIoY3VycmVudFRpbWUsIHN1blJpc2UpKSB7XG4gICAgICByZXR1cm4gXCJOaWdodFwiO1xuICAgIH0gZWxzZSBpZiAoIWlzQWZ0ZXIoY3VycmVudFRpbWUsIHN1blNldCkpIHtcbiAgICAgIHJldHVybiBcIkRheVwiO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gXCJOaWdodFwiO1xuICAgIH1cbiAgfVxuICAvKipcbiAgICogZ2V0IGZ1bGwgbG9jYXRpb25cbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgZ2V0RnVsbExvY2F0aW9uKCkge1xuICAgIHJldHVybiBgJHt0aGlzLmNpdHl9LCAke3RoaXMuY291bnRyeX1gO1xuICB9XG4gIC8qKlxuICAgKiBnZXQgZnVsbCBkYXRlXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIGdldERhdGUoKSB7XG4gICAgcmV0dXJuIGZvcm1hdChuZXcgRGF0ZSh0aGlzLmRhdGUgKiAxMDAwKSwgXCJQUFBQXCIpO1xuICB9XG4gIC8qKlxuICAgKiBnZXQgZnVsbCB0aW1lXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIGdldFRpbWUoKSB7XG4gICAgcmV0dXJuIGZvcm1hdChuZXcgRGF0ZSh0aGlzLmRhdGUgKiAxMDAwKSwgXCJwXCIpO1xuICB9XG59XG5cbi8qKlxuICogUmV0cmlldmUgd2VhdGhlciBpbmZvcm1hdGlvbiBhYm91dCBsb2NhdGlvblxuICogQHBhcmFtIHtzdHJpbmd9IGxvY2F0aW9uXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RhbmRhcmRcbiAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gLSBBIHByb21pc2UgdGhhdCByZXNvbHZlcyB0byB3ZWF0aGVyIGluZm9ybWF0aW9uXG4gKi9cbmNvbnN0IHJldHJpZXZlSW5mb3JtYXRpb24gPSBhc3luYyAobG9jYXRpb24gPSBcIkxhZ29zXCIsIHN0YW5kYXJkID0gXCJtZXRyaWNcIikgPT4ge1xuICBjb25zb2xlLmxvZyhzdGFuZGFyZCk7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBmaW5kTG9jYXRpb25XZWF0aGVyKGxvY2F0aW9uLCBzdGFuZGFyZCk7XG4gIGlmIChkYXRhLmNvZCA9PT0gMjAwKSB7XG4gICAgaWYgKCFkYXRhLnNub3cpIHtcbiAgICAgIGRhdGEuc25vdyA9IDA7XG4gICAgfVxuICAgIGlmICghZGF0YS5yYWluKSB7XG4gICAgICBkYXRhLnJhaW4gPSAwO1xuICAgIH1cbiAgICBjb25zdCBpbmZvcm1hdGlvbiA9IG5ldyBJbmZvcm1hdGlvbk1ha2VyKGRhdGEsIHN0YW5kYXJkKTtcbiAgICByZXR1cm4gaW5mb3JtYXRpb247XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgZXJyb3JEaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNlcnJvckRpc3BsYXlcIik7XG4gICAgZXJyb3JEaXNwbGF5LnRleHRDb250ZW50ID0gYCR7ZGF0YS5tZXNzYWdlfWA7XG4gIH1cbn07XG5cbmV4cG9ydCB7IHJldHJpZXZlSW5mb3JtYXRpb24gfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwidmFyIGRlZmVycmVkID0gW107XG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8gPSAocmVzdWx0LCBjaHVua0lkcywgZm4sIHByaW9yaXR5KSA9PiB7XG5cdGlmKGNodW5rSWRzKSB7XG5cdFx0cHJpb3JpdHkgPSBwcmlvcml0eSB8fCAwO1xuXHRcdGZvcih2YXIgaSA9IGRlZmVycmVkLmxlbmd0aDsgaSA+IDAgJiYgZGVmZXJyZWRbaSAtIDFdWzJdID4gcHJpb3JpdHk7IGktLSkgZGVmZXJyZWRbaV0gPSBkZWZlcnJlZFtpIC0gMV07XG5cdFx0ZGVmZXJyZWRbaV0gPSBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV07XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHZhciBub3RGdWxmaWxsZWQgPSBJbmZpbml0eTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV0gPSBkZWZlcnJlZFtpXTtcblx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGNodW5rSWRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRpZiAoKHByaW9yaXR5ICYgMSA9PT0gMCB8fCBub3RGdWxmaWxsZWQgPj0gcHJpb3JpdHkpICYmIE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uTykuZXZlcnkoKGtleSkgPT4gKF9fd2VicGFja19yZXF1aXJlX18uT1trZXldKGNodW5rSWRzW2pdKSkpKSB7XG5cdFx0XHRcdGNodW5rSWRzLnNwbGljZShqLS0sIDEpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZnVsZmlsbGVkID0gZmFsc2U7XG5cdFx0XHRcdGlmKHByaW9yaXR5IDwgbm90RnVsZmlsbGVkKSBub3RGdWxmaWxsZWQgPSBwcmlvcml0eTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYoZnVsZmlsbGVkKSB7XG5cdFx0XHRkZWZlcnJlZC5zcGxpY2UoaS0tLCAxKVxuXHRcdFx0dmFyIHIgPSBmbigpO1xuXHRcdFx0aWYgKHIgIT09IHVuZGVmaW5lZCkgcmVzdWx0ID0gcjtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn07IiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIi8vIG5vIGJhc2VVUklcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImluZGV4XCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbl9fd2VicGFja19yZXF1aXJlX18uTy5qID0gKGNodW5rSWQpID0+IChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPT09IDApO1xuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbnZhciB3ZWJwYWNrSnNvbnBDYWxsYmFjayA9IChwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiwgZGF0YSkgPT4ge1xuXHR2YXIgW2NodW5rSWRzLCBtb3JlTW9kdWxlcywgcnVudGltZV0gPSBkYXRhO1xuXHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcblx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG5cdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDA7XG5cdGlmKGNodW5rSWRzLnNvbWUoKGlkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2lkXSAhPT0gMCkpKSB7XG5cdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihydW50aW1lKSB2YXIgcmVzdWx0ID0gcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0fVxuXHRpZihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbikgcGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24oZGF0YSk7XG5cdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKCk7XG5cdFx0fVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkc1tpXV0gPSAwO1xuXHR9XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLk8ocmVzdWx0KTtcbn1cblxudmFyIGNodW5rTG9hZGluZ0dsb2JhbCA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmt3ZWF0aGVyYXBwXCJdID0gc2VsZltcIndlYnBhY2tDaHVua3dlYXRoZXJhcHBcIl0gfHwgW107XG5jaHVua0xvYWRpbmdHbG9iYWwuZm9yRWFjaCh3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIDApKTtcbmNodW5rTG9hZGluZ0dsb2JhbC5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCBjaHVua0xvYWRpbmdHbG9iYWwucHVzaC5iaW5kKGNodW5rTG9hZGluZ0dsb2JhbCkpOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgZGVwZW5kcyBvbiBvdGhlciBsb2FkZWQgY2h1bmtzIGFuZCBleGVjdXRpb24gbmVlZCB0byBiZSBkZWxheWVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyh1bmRlZmluZWQsIFtcInZlbmRvcnMtbm9kZV9tb2R1bGVzX2RhdGUtZm5zX2VzbV9mb3JtYXRfaW5kZXhfanMtbm9kZV9tb2R1bGVzX2RhdGUtZm5zX2VzbV9pc0FmdGVyX2luZGV4X2pzXCIsXCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc19mb3J0YXdlc29tZV9mb250YXdlc29tZS1mcmVlX2pzX2FsbF9qc1wiXSwgKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9zY3JpcHRzL2luZGV4LmpzXCIpKSlcbl9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8oX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=