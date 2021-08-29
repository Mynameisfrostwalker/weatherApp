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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FDQTtXQUNBLGtCQUFrQixxQkFBcUI7V0FDdkM7V0FDQTtXQUNBLEtBQUs7V0FDTDtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDM0JBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxNQUFNLHFCQUFxQjtXQUMzQjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTs7Ozs7VUVoREE7VUFDQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvc3R5bGVzL21haW4uY3NzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvc3R5bGVzL3Jlc2V0LmNzcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL3NjcmlwdHMvZGlzcGxheS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL3NjcmlwdHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy9zY3JpcHRzL2luaXRpYWxQYWdlLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvc2NyaXB0cy9wdWJzdWIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy9zY3JpcHRzL3NlYXJjaC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL3NjcmlwdHMvc3dpdGNoLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvc2NyaXB0cy93ZWF0aGVyRGF0YS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXJhcHAvd2VicGFjay9ydW50aW1lL2NodW5rIGxvYWRlZCIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYXRoZXJhcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXJhcHAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXJhcHAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiaW1wb3J0IERheSBmcm9tIFwiLi4vaW1hZ2VzL2RheS5qcGVnXCI7XG5pbXBvcnQgTmlnaHQgZnJvbSBcIi4uL2ltYWdlcy9uaWdodC5qcGdcIjtcblxuLy8gQHRzLWNoZWNrXG5cbi8qKlxuICogQG1vZHVsZSBkaXNwbGF5XG4gKi9cblxuLyoqXG4gKiBEaXNwbGF5cyBjb3VudHJ5IGluZm9ybWF0aW9uXG4gKiBAcGFyYW0ge3N0cmluZ30gY291bnRyeVxuICovXG5jb25zdCBkaXNwbGF5Q291bnRyeSA9IChjb3VudHJ5KSA9PiB7XG4gIGNvbnN0IGNvdW50cnlEZXRhaWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb3VudHJ5RGV0YWlsc1wiKTtcbiAgY291bnRyeURldGFpbHMudGV4dENvbnRlbnQgPSBjb3VudHJ5O1xufTtcblxuLyoqXG4gKiBEaXNwbGF5cyBEYXRlIGFuZCBUaW1lXG4gKiBAcGFyYW0ge3N0cmluZ30gZGF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IHRpbWVcbiAqL1xuY29uc3QgZGlzcGxheURhdGUgPSAoZGF0ZSwgdGltZSkgPT4ge1xuICBjb25zdCBkYXRlRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkYXRlXCIpO1xuICBpZiAoZGF0ZURpdi5jaGlsZHJlblswXSkge1xuICAgIGRhdGVEaXYuY2hpbGRyZW5bMF0ucmVtb3ZlKCk7XG4gICAgZGF0ZURpdi5jaGlsZHJlblswXS5yZW1vdmUoKTtcbiAgfVxuICBjb25zdCBwMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBjb25zdCBwMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBwMS50ZXh0Q29udGVudCA9IGRhdGU7XG4gIHAyLnRleHRDb250ZW50ID0gdGltZTtcbiAgZGF0ZURpdi5hcHBlbmRDaGlsZChwMSk7XG4gIGRhdGVEaXYuYXBwZW5kQ2hpbGQocDIpO1xufTtcblxuLyoqXG4gKiBEaXNwbGF5cyBXZWF0aGVyIGluZm9ybWF0aW9uLlxuICogQHBhcmFtIHtzdHJpbmd9IGRlc2NyaXB0aW9uXG4gKiBAcGFyYW0ge1VSTH0gaWNvbiAtV2VhdGhlciBJY29uXG4gKi9cbmNvbnN0IGRpc3BsYXlXZWF0aGVyRGVzY3JpcHRpb24gPSAoZGVzY3JpcHRpb24sIGljb24pID0+IHtcbiAgY29uc3Qgd2VhdGhlckRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjd2VhdGhlckRlc2NyaXB0aW9uXCIpO1xuICBpZiAod2VhdGhlckRpdi5jaGlsZHJlblswXSkge1xuICAgIHdlYXRoZXJEaXYuY2hpbGRyZW5bMF0ucmVtb3ZlKCk7XG4gICAgd2VhdGhlckRpdi5jaGlsZHJlblswXS5yZW1vdmUoKTtcbiAgfVxuICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGNvbnN0IHNwbGl0ID0gZGVzY3JpcHRpb24uc3BsaXQoXCJcIik7XG4gIHNwbGl0WzBdID0gc3BsaXRbMF0udG9VcHBlckNhc2UoKTtcbiAgcC50ZXh0Q29udGVudCA9IHNwbGl0LmpvaW4oXCJcIik7XG4gIGNvbnN0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgaW1hZ2Uuc3JjID0gaWNvbjtcbiAgaW1hZ2UuaWQgPSBcIndlYXRoZXJcIjtcbiAgd2VhdGhlckRpdi5hcHBlbmRDaGlsZChwKTtcbiAgd2VhdGhlckRpdi5hcHBlbmRDaGlsZChpbWFnZSk7XG59O1xuXG4vKipcbiAqIERpc3BsYXlzIGh1bWlkaXR5LCBwcmVzc3VyZSwgYW5kIHdpbmQgc3BlZWQuXG4gKiBAcGFyYW0ge3N0cmluZ30gcHJlc3N1cmVcbiAqIEBwYXJhbSB7c3RyaW5nfSB3aW5kU3BlZWRcbiAqIEBwYXJhbSB7c3RyaW5nfSBodW1pZGl0eVxuICovXG5jb25zdCBkaXNwbGF5SHVtaWRQcmVzc1dpbmQgPSAocHJlc3N1cmUsIHdpbmRTcGVlZCwgaHVtaWRpdHkpID0+IHtcbiAgY29uc3QgZGlzcGxheURpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaHVtaWRQcmVzc3VyZVdpbmRcIik7XG4gIGlmIChkaXNwbGF5RGl2LmNoaWxkcmVuWzBdKSB7XG4gICAgZGlzcGxheURpdi5jaGlsZHJlblswXS5yZW1vdmUoKTtcbiAgICBkaXNwbGF5RGl2LmNoaWxkcmVuWzBdLnJlbW92ZSgpO1xuICAgIGRpc3BsYXlEaXYuY2hpbGRyZW5bMF0ucmVtb3ZlKCk7XG4gIH1cbiAgLy8gSHVtaWRpdHkgRGl2XG4gIGNvbnN0IGh1bWlkRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaHVtaWREaXYuY2xhc3NMaXN0LmFkZChcImFsaWduXCIpO1xuICBjb25zdCBodW1pZEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaVwiKTtcbiAgaHVtaWRJY29uLmNsYXNzTmFtZSA9IFwiZmFzIGZhLXRpbnRcIjtcbiAgaHVtaWREaXYuYXBwZW5kQ2hpbGQoaHVtaWRJY29uKTtcbiAgY29uc3QgaHVtaWRQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGh1bWlkUC50ZXh0Q29udGVudCA9IGBIdW1pZGl0eTogJHtodW1pZGl0eX1gO1xuICBodW1pZERpdi5hcHBlbmRDaGlsZChodW1pZFApO1xuICBkaXNwbGF5RGl2LmFwcGVuZENoaWxkKGh1bWlkRGl2KTtcblxuICAvLyBXaW5kIERpdlxuICBjb25zdCB3aW5kRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgd2luZERpdi5jbGFzc0xpc3QuYWRkKFwiYWxpZ25cIik7XG4gIGNvbnN0IHdpbmRJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlcIik7XG4gIHdpbmRJY29uLmNsYXNzTmFtZSA9IFwiZmFzIGZhLXdpbmRcIjtcbiAgd2luZERpdi5hcHBlbmRDaGlsZCh3aW5kSWNvbik7XG4gIGNvbnN0IHdpbmRQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHdpbmRQLnRleHRDb250ZW50ID0gYFdpbmQgc3BlZWQ6ICR7d2luZFNwZWVkfWA7XG4gIHdpbmREaXYuYXBwZW5kQ2hpbGQod2luZFApO1xuICBkaXNwbGF5RGl2LmFwcGVuZENoaWxkKHdpbmREaXYpO1xuXG4gIC8vIFByZXNzdXJlIERpdlxuICBjb25zdCBwcmVzc3VyZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHByZXNzdXJlRGl2LmNsYXNzTGlzdC5hZGQoXCJhbGlnblwiKTtcbiAgY29uc3QgcHJlc3N1cmVJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlcIik7XG4gIHByZXNzdXJlSWNvbi5jbGFzc05hbWUgPSBcImZhcyBmYS10YWNob21ldGVyLWFsdFwiO1xuICBwcmVzc3VyZURpdi5hcHBlbmRDaGlsZChwcmVzc3VyZUljb24pO1xuICBjb25zdCBwcmVzc3VyZVAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgcHJlc3N1cmVQLnRleHRDb250ZW50ID0gYFByZXNzdXJlOiAke3ByZXNzdXJlfWA7XG4gIHByZXNzdXJlRGl2LmFwcGVuZENoaWxkKHByZXNzdXJlUCk7XG4gIGRpc3BsYXlEaXYuYXBwZW5kQ2hpbGQocHJlc3N1cmVEaXYpO1xufTtcblxuLyoqXG4gKiBEaXNwbGF5cyB0aGUgdGVtcGVyYXR1cmUuXG4gKiBAcGFyYW0ge3N0cmluZ30gZmVlbHNMaWtlXG4gKiBAcGFyYW0ge3N0cmluZ30gdGVtcGVyYXR1cmVcbiAqL1xuY29uc3QgZGlzcGxheVRlbXAgPSAoZmVlbHNMaWtlLCB0ZW1wZXJhdHVyZSkgPT4ge1xuICBjb25zdCB0ZW1wRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0ZW1wXCIpO1xuICBpZiAodGVtcERpdi5jaGlsZHJlblswXSkge1xuICAgIHRlbXBEaXYuY2hpbGRyZW5bMF0ucmVtb3ZlKCk7XG4gICAgdGVtcERpdi5jaGlsZHJlblswXS5yZW1vdmUoKTtcbiAgfVxuICAvLyBmZWVsc0xpa2UgRGl2XG4gIGNvbnN0IGZlZWxzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZmVlbHNEaXYuY2xhc3NMaXN0LmFkZChcImFsaWduXCIpO1xuICBjb25zdCBmZWVsc0ljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaVwiKTtcbiAgZmVlbHNJY29uLmNsYXNzTmFtZSA9IFwiZmFzIGZhLW1hbGVcIjtcbiAgZmVlbHNEaXYuYXBwZW5kQ2hpbGQoZmVlbHNJY29uKTtcbiAgY29uc3QgZmVlbHNQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGZlZWxzUC50ZXh0Q29udGVudCA9IGBGZWVscyBMaWtlOiAke2ZlZWxzTGlrZX1gO1xuICBmZWVsc0Rpdi5hcHBlbmRDaGlsZChmZWVsc1ApO1xuICB0ZW1wRGl2LmFwcGVuZENoaWxkKGZlZWxzRGl2KTtcblxuICAvLyB0ZW1wZXJhdHVyZSBEaXZcbiAgY29uc3QgdGVtcGVyYXR1cmVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0ZW1wZXJhdHVyZURpdi5jbGFzc0xpc3QuYWRkKFwiYWxpZ25cIik7XG4gIGNvbnN0IHRlbXBlcmF0dXJlSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpO1xuICB0ZW1wZXJhdHVyZUljb24uY2xhc3NOYW1lID0gXCJmYXMgZmEtdGhlcm1vbWV0ZXItaGFsZlwiO1xuICB0ZW1wZXJhdHVyZURpdi5hcHBlbmRDaGlsZCh0ZW1wZXJhdHVyZUljb24pO1xuICBjb25zdCB0ZW1wZXJhdHVyZVAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgdGVtcGVyYXR1cmVQLnRleHRDb250ZW50ID0gYFRlbXBlcmF0dXJlOiAke3RlbXBlcmF0dXJlfWA7XG4gIHRlbXBlcmF0dXJlRGl2LmFwcGVuZENoaWxkKHRlbXBlcmF0dXJlUCk7XG4gIHRlbXBEaXYuYXBwZW5kQ2hpbGQodGVtcGVyYXR1cmVEaXYpO1xufTtcblxuLyoqXG4gKiBEaXNwbGF5cyBtYXhpbXVtIGFuZCBtaW5pbXVtIHRlbXBlcmF0dXJlXG4gKiBAcGFyYW0ge3N0cmluZ30gbWluXG4gKiBAcGFyYW0ge3N0cmluZ30gbWF4XG4gKi9cbmNvbnN0IGRpc3BsYXlNaW5NYXggPSAobWluLCBtYXgpID0+IHtcbiAgY29uc3QgbWluTWF4RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtaW5NYXhcIik7XG4gIGlmIChtaW5NYXhEaXYuY2hpbGRyZW5bMF0pIHtcbiAgICBtaW5NYXhEaXYuY2hpbGRyZW5bMF0ucmVtb3ZlKCk7XG4gICAgbWluTWF4RGl2LmNoaWxkcmVuWzBdLnJlbW92ZSgpO1xuICB9XG5cbiAgLy8gTWF4IERpdlxuICBjb25zdCBtYXhEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtYXhEaXYuY2xhc3NMaXN0LmFkZChcImFsaWduXCIpO1xuICBjb25zdCBtYXhJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlcIik7XG4gIG1heEljb24uY2xhc3NOYW1lID0gXCJmYXMgZmEtdGVtcGVyYXR1cmUtaGlnaFwiO1xuICBtYXhEaXYuYXBwZW5kQ2hpbGQobWF4SWNvbik7XG4gIGNvbnN0IG1heFAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgbWF4UC50ZXh0Q29udGVudCA9IGBNYXhpbXVtIHRlbXBlcmF0dXJlOiAke21heH1gO1xuICBtYXhEaXYuYXBwZW5kQ2hpbGQobWF4UCk7XG4gIG1pbk1heERpdi5hcHBlbmRDaGlsZChtYXhEaXYpO1xuXG4gIC8vIE1pbiBEaXZcbiAgY29uc3QgbWluRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbWluRGl2LmNsYXNzTGlzdC5hZGQoXCJhbGlnblwiKTtcbiAgY29uc3QgbWluSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpO1xuICBtaW5JY29uLmNsYXNzTmFtZSA9IFwiZmFzIGZhLXRlbXBlcmF0dXJlLWxvd1wiO1xuICBtaW5EaXYuYXBwZW5kQ2hpbGQobWluSWNvbik7XG4gIGNvbnN0IG1pblAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgbWluUC50ZXh0Q29udGVudCA9IGBNaW5pbXVtIHRlbXBlcmF0dXJlOiAke21pbn1gO1xuICBtaW5EaXYuYXBwZW5kQ2hpbGQobWluUCk7XG4gIG1pbk1heERpdi5hcHBlbmRDaGlsZChtaW5EaXYpO1xufTtcblxuLyoqXG4gKiBEaXNwbGF5cyByYWluIGFuZCBzbm93IHZvbHVtZS5cbiAqIEBwYXJhbSB7c3RyaW5nfSByYWluXG4gKiBAcGFyYW0ge3N0cmluZ30gc25vd1xuICovXG5jb25zdCBkaXNwbGF5Vm9sdW1lID0gKHJhaW4sIHNub3cpID0+IHtcbiAgY29uc3Qgdm9sdW1lRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN2b2x1bWVcIik7XG4gIGlmICh2b2x1bWVEaXYuY2hpbGRyZW5bMF0pIHtcbiAgICB2b2x1bWVEaXYuY2hpbGRyZW5bMF0ucmVtb3ZlKCk7XG4gICAgaWYgKHZvbHVtZURpdi5jaGlsZHJlblswXSkge1xuICAgICAgdm9sdW1lRGl2LmNoaWxkcmVuWzBdLnJlbW92ZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8vIE1heCBEaXZcbiAgaWYgKHJhaW4pIHtcbiAgICBjb25zdCByYWluRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICByYWluRGl2LmNsYXNzTGlzdC5hZGQoXCJhbGlnblwiKTtcbiAgICBjb25zdCByYWluSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpO1xuICAgIHJhaW5JY29uLmNsYXNzTmFtZSA9IFwiZmFzIGZhLWNsb3VkLXJhaW5cIjtcbiAgICByYWluRGl2LmFwcGVuZENoaWxkKHJhaW5JY29uKTtcbiAgICBjb25zdCByYWluUCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHJhaW5QLnRleHRDb250ZW50ID0gYFJhaW4gdm9sdW1lIGluIHRoZSBsYXN0IGhvdXI6ICR7cmFpbn1gO1xuICAgIHJhaW5EaXYuYXBwZW5kQ2hpbGQocmFpblApO1xuICAgIHZvbHVtZURpdi5hcHBlbmRDaGlsZChyYWluRGl2KTtcbiAgfVxuXG4gIC8vIE1heCBEaXZcbiAgaWYgKHNub3cpIHtcbiAgICBjb25zdCBzbm93RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBzbm93RGl2LmNsYXNzTGlzdC5hZGQoXCJhbGlnblwiKTtcbiAgICBjb25zdCBzbm93SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpO1xuICAgIHNub3dJY29uLmNsYXNzTmFtZSA9IFwiZmFzIGZhLXNub3dmbGFrZVwiO1xuICAgIHNub3dEaXYuYXBwZW5kQ2hpbGQoc25vd0ljb24pO1xuICAgIGNvbnN0IHNub3dQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgc25vd1AudGV4dENvbnRlbnQgPSBgU25vdyB2b2x1bWUgaW4gdGhlIGxhc3QgaG91cjogJHtzbm93fWA7XG4gICAgc25vd0Rpdi5hcHBlbmRDaGlsZChzbm93UCk7XG4gICAgdm9sdW1lRGl2LmFwcGVuZENoaWxkKHNub3dEaXYpO1xuICB9XG59O1xuXG4vKipcbiAqIGNoYW5nZXMgYmFja2dyb3VuZCBkZXBlbmRpbmcgb24gdGltZSBvZiBkYXkgYXQgbG9jYXRpb247XG4gKiBAcGFyYW0ge3N0cmluZ30gcGVyaW9kIC0gVGltZSBvZiBkYXkgYXQgbG9jYXRpb25cbiAqL1xuY29uc3QgY2hhbmdlQmFja2dyb3VuZCA9IChwZXJpb2QpID0+IHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIik7XG4gIGNvbnN0IHNlYXJjaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2VhcmNoQmFyXCIpO1xuICBsZXQgYnV0dG9uO1xuICBpZiAocGVyaW9kID09PSBcIkRheVwiKSB7XG4gICAgY29udGFpbmVyLnN0eWxlLmNvbG9yID0gXCJibGFja1wiO1xuICAgIHNlYXJjaC5zdHlsZVtcImJveC1zaGFkb3dcIl0gPSBcIjBweCAwcHggNHB4IDRweCBibGFja1wiO1xuICAgIGNvbnRhaW5lci5zdHlsZVtcImJhY2tncm91bmQtaW1hZ2VcIl0gPSBgdXJsKCR7RGF5fSlgO1xuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFjdGl2ZVdoaXRlXCIpKSB7XG4gICAgICBidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFjdGl2ZVdoaXRlXCIpO1xuICAgICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVXaGl0ZVwiKTtcbiAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlQmxhY2tcIik7XG4gICAgfVxuICB9XG4gIGlmIChwZXJpb2QgPT09IFwiTmlnaHRcIikge1xuICAgIGNvbnRhaW5lci5zdHlsZS5jb2xvciA9IFwid2hpdGVcIjtcbiAgICBzZWFyY2guc3R5bGVbXCJib3gtc2hhZG93XCJdID0gXCIwcHggMHB4IDRweCA0cHggd2hpdGVcIjtcbiAgICBjb250YWluZXIuc3R5bGVbXCJiYWNrZ3JvdW5kLWltYWdlXCJdID0gYHVybCgke05pZ2h0fSlgO1xuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFjdGl2ZUJsYWNrXCIpKSB7XG4gICAgICBidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFjdGl2ZUJsYWNrXCIpO1xuICAgICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVCbGFja1wiKTtcbiAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlV2hpdGVcIik7XG4gICAgfVxuICB9XG59O1xuXG4vKipcbiAqIENhbGxzIGhlbHBlciBkaXNwbGF5IGZ1bmN0aW9uc1xuICogQHBhcmFtIHtPYmplY3R9IHdlYXRoZXJPYmpcbiAqL1xuY29uc3QgZGlzcGxheSA9ICh3ZWF0aGVyT2JqKSA9PiB7XG4gIGRpc3BsYXlDb3VudHJ5KHdlYXRoZXJPYmouZ2V0RnVsbExvY2F0aW9uKCkpO1xuICBkaXNwbGF5RGF0ZSh3ZWF0aGVyT2JqLmdldERhdGUoKSwgd2VhdGhlck9iai5nZXRUaW1lKCkpO1xuICBkaXNwbGF5V2VhdGhlckRlc2NyaXB0aW9uKHdlYXRoZXJPYmouZGVzY3JpcHRpb24sIHdlYXRoZXJPYmouaWNvbik7XG4gIGRpc3BsYXlIdW1pZFByZXNzV2luZChcbiAgICB3ZWF0aGVyT2JqLnByZXNzdXJlLFxuICAgIHdlYXRoZXJPYmoud2luZFNwZWVkLFxuICAgIHdlYXRoZXJPYmouaHVtaWRpdHlcbiAgKTtcbiAgZGlzcGxheVRlbXAod2VhdGhlck9iai5mZWVsc0xpa2UsIHdlYXRoZXJPYmoudGVtcGVyYXR1cmUpO1xuICBkaXNwbGF5TWluTWF4KHdlYXRoZXJPYmoubWluVGVtcGVyYXR1cmUsIHdlYXRoZXJPYmoubWF4VGVtcGVyYXR1cmUpO1xuICBkaXNwbGF5Vm9sdW1lKHdlYXRoZXJPYmoucmFpblZvbHVtZSwgd2VhdGhlck9iai5zbm93Vm9sdW1lKTtcbiAgY2hhbmdlQmFja2dyb3VuZCh3ZWF0aGVyT2JqLmdldERheU9yTmlnaHQoKSk7XG4gIGNvbnN0IGVycm9yRGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZXJyb3JEaXNwbGF5XCIpO1xuICBlcnJvckRpc3BsYXkudGV4dENvbnRlbnQgPSBcIlwiO1xufTtcblxuZXhwb3J0IHsgZGlzcGxheSB9O1xuIiwiaW1wb3J0IFwiLi4vc3R5bGVzL3Jlc2V0LmNzc1wiO1xuaW1wb3J0IFwiLi4vc3R5bGVzL21haW4uY3NzXCI7XG5pbXBvcnQgXCJAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtZnJlZS9qcy9hbGxcIjtcbmltcG9ydCB7IGluaXRpYWxQYWdlTG9hZCB9IGZyb20gXCIuL2luaXRpYWxQYWdlXCI7XG5pbXBvcnQgeyBzdWJzY3JpYmUgfSBmcm9tIFwiLi9wdWJzdWJcIjtcbmltcG9ydCB7IHNlYXJjaEV2ZW50TGlzdGVuZXIgfSBmcm9tIFwiLi9zZWFyY2hcIjtcbmltcG9ydCB7IGRpc3BsYXkgfSBmcm9tIFwiLi9kaXNwbGF5XCI7XG5pbXBvcnQgeyBzd2l0Y2hBY3RpdmUgfSBmcm9tIFwiLi9zd2l0Y2hcIjtcblxuLy8gQHRzLWNoZWNrXG5cbi8qKlxuICogQGZpbGVvdmVydmlldyBJbmRleCAuanMgaXMgdGhlIHJvb3Qgb2YgdGhpcyBmaWxlLlxuICogQGF1dGhvciBGcm9zdHdhbGtlclxuICovXG5cbnN1YnNjcmliZShcInBhZ2VMb2FkZWRcIiwgc2VhcmNoRXZlbnRMaXN0ZW5lcik7XG5cbnN1YnNjcmliZShcInBhZ2VMb2FkZWRcIiwgc3dpdGNoQWN0aXZlKTtcblxuc3Vic2NyaWJlKFwiZGlzcGxheVwiLCBkaXNwbGF5KTtcblxuaW5pdGlhbFBhZ2VMb2FkKCk7XG4iLCJpbXBvcnQgSWNvbiBmcm9tIFwiLi4vaW1hZ2VzL2luaXRpYWwuanBnXCI7XG5pbXBvcnQgeyBwdWJsaXNoIH0gZnJvbSBcIi4vcHVic3ViXCI7XG5cbi8vIEB0cy1jaGVja1xuXG4vKipcbiAqIEBtb2R1bGUgSW5pdGlhbFBhZ2VcbiAqL1xuXG4vKipcbiAqIEB0eXBlIHtPYmplY3R9IC0gY29udGFpbmVyXG4gKi9cbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluXCIpO1xuXG4vKipcbiAqIGNyZWF0ZXMgYSBmb3JtXG4gKiBAcmV0dXJuIHtPYmplY3R9IC0gZm9ybVxuICovXG5jb25zdCBmb3JtQ3JlYXRlID0gKCkgPT4ge1xuICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBsYWJlbC5mb3IgPSBcInNlYXJjaFwiO1xuICBsYWJlbC50ZXh0Q29udGVudCA9IFwiRW50ZXIgY2l0eSBuYW1lOlwiO1xuICBjb25zdCBzZWFyY2hCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBzZWFyY2hCYXIuaWQgPSBcInNlYXJjaEJhclwiO1xuICBjb25zdCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaWNvbi5pZCA9IFwiaWNvblwiO1xuICBjb25zdCBpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlcIik7XG4gIGkuY2xhc3NMaXN0LmFkZChcImZhc1wiKTtcbiAgaS5jbGFzc0xpc3QuYWRkKFwiZmEtc2VhcmNoXCIpO1xuICBpY29uLmFwcGVuZENoaWxkKGkpO1xuICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgaW5wdXQudHlwZSA9IFwidGV4dFwiO1xuICBpbnB1dC5uYW1lID0gXCJjaXR5XCI7XG4gIGlucHV0LmlkID0gXCJzZWFyY2hcIjtcbiAgc2VhcmNoQmFyLmFwcGVuZENoaWxkKGljb24pO1xuICBzZWFyY2hCYXIuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIHNwYW4uaWQgPSBcImVycm9yRGlzcGxheVwiO1xuICBjb25zdCBzdGFuZGFyZHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBzdGFuZGFyZHMuaWQgPSBcInN0YW5kYXJkRGl2XCI7XG5cbiAgLy8gbWV0cmljIGJ1dHRvblxuICBjb25zdCBtZXRyaWNCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtZXRyaWNCdXR0b24udGV4dENvbnRlbnQgPSBcIm1ldHJpY1wiO1xuICBtZXRyaWNCdXR0b24uaWQgPSBcIm1ldHJpY0J1dHRvblwiO1xuICBtZXRyaWNCdXR0b24uY2xhc3NOYW1lID0gXCJzdGFuZGFyZHMgYWN0aXZlQmxhY2tcIjtcbiAgc3RhbmRhcmRzLmFwcGVuZENoaWxkKG1ldHJpY0J1dHRvbik7XG5cbiAgLy8gaW1wZXJpYWwgYnV0dG9uXG4gIGNvbnN0IGltcGVyaWFsQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaW1wZXJpYWxCdXR0b24udGV4dENvbnRlbnQgPSBcImltcGVyaWFsXCI7XG4gIGltcGVyaWFsQnV0dG9uLmlkID0gXCJpbXBlcmlhbEJ1dHRvblwiO1xuICBpbXBlcmlhbEJ1dHRvbi5jbGFzc05hbWUgPSBcInN0YW5kYXJkc1wiO1xuICBzdGFuZGFyZHMuYXBwZW5kQ2hpbGQoaW1wZXJpYWxCdXR0b24pO1xuXG4gIGZvcm0uYXBwZW5kQ2hpbGQobGFiZWwpO1xuICBmb3JtLmFwcGVuZENoaWxkKHNlYXJjaEJhcik7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoc3Bhbik7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoc3RhbmRhcmRzKTtcbiAgZm9ybS5zZXRBdHRyaWJ1dGUoXCJub3ZhbGlkYXRlXCIsIFwidHJ1ZVwiKTtcbiAgcmV0dXJuIGZvcm07XG59O1xuXG4vKipcbiAqIFJldHVybnMgYSBkaXZcbiAqIEBwYXJhbSB7c3RyaW5nfSBpZGVudGlmaWVyXG4gKiBAcmV0dXJuIHtPYmplY3R9LSBhIERpdlxuICovXG5jb25zdCBncmlkQ3JlYXRvciA9IChpZGVudGlmaWVyKSA9PiB7XG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGRpdi5jbGFzc0xpc3QuYWRkKFwiZ3JpZFwiKTtcbiAgZGl2LmlkID0gaWRlbnRpZmllcjtcbiAgcmV0dXJuIGRpdjtcbn07XG5cbi8qKlxuICogTG9hZHMgaW5pdGFsIHBhZ2UuXG4gKiBAZnVuY3Rpb25cbiAqL1xuY29uc3QgaW5pdGlhbFBhZ2VMb2FkID0gKCkgPT4ge1xuICBjb25zdCBmb3JtID0gZm9ybUNyZWF0ZSgpO1xuICBjb25zdCBmb3JtRGl2ID0gZ3JpZENyZWF0b3IoXCJGb3JtXCIpO1xuICBmb3JtRGl2LmFwcGVuZENoaWxkKGZvcm0pO1xuICBjb250YWluZXIuc3R5bGVbXCJiYWNrZ3JvdW5kLWltYWdlXCJdID0gYHVybCgke0ljb259KWA7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtRGl2KTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGdyaWRDcmVhdG9yKFwiY291bnRyeURldGFpbHNcIikpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZ3JpZENyZWF0b3IoXCJkYXRlXCIpKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGdyaWRDcmVhdG9yKFwid2VhdGhlckRlc2NyaXB0aW9uXCIpKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGdyaWRDcmVhdG9yKFwiaHVtaWRQcmVzc3VyZVdpbmRcIikpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZ3JpZENyZWF0b3IoXCJ0ZW1wXCIpKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGdyaWRDcmVhdG9yKFwibWluTWF4XCIpKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGdyaWRDcmVhdG9yKFwidm9sdW1lXCIpKTtcbiAgY29uc3QgaWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaWNvblwiKTtcbiAgcHVibGlzaChcInBhZ2VMb2FkZWRcIiwgaWNvbik7XG59O1xuXG5leHBvcnQgeyBpbml0aWFsUGFnZUxvYWQgfTtcbiIsIi8vIEB0cy1jaGVja1xuXG4vKipcbiAqIEBtb2R1bGUgcHVic3ViXG4gKi9cblxuLyoqXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cblxuY29uc3QgZXZlbnRzID0ge307XG5cbi8qKlxuICogU3Vic2NyaWJlIHRvIGFuIGV2ZW50XG4gKiBAcGFyYW0ge3N0cmluZ30gZXZlbnROYW1lIC0gTmFtZSBvZiB0aGUgZXZlbnRcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIC0gRnVuY3Rpb24gdG8gYmUgY2FsbGVkXG4gKi9cbmNvbnN0IHN1YnNjcmliZSA9IGZ1bmN0aW9uIChldmVudE5hbWUsIGZuKSB7XG4gIGV2ZW50c1tldmVudE5hbWVdID0gZXZlbnRzW2V2ZW50TmFtZV0gfHwgW107XG4gIGV2ZW50c1tldmVudE5hbWVdLnB1c2goZm4pO1xufTtcblxuLyoqXG4gKiBVbnN1c2NyaWJlIGZyb20gYW4gZXZlbnRcbiAqIEBwYXJhbSB7c3RyaW5nfSBldmVudE5hbWUgLSBOYW1lIG9mIHRoZSBldmVudFxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gLSBGdW5jdGlvbiB0byBiZSByZW1vdmVkXG4gKi9cbmNvbnN0IHVuc3Vic2NyaWJlID0gZnVuY3Rpb24gKGV2ZW50TmFtZSwgZm4pIHtcbiAgaWYgKGV2ZW50c1tldmVudE5hbWVdKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBldmVudHNbZXZlbnROYW1lXS5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGV2ZW50c1tldmVudE5hbWVdW2ldID09PSBmbikge1xuICAgICAgICBldmVudHNbZXZlbnROYW1lXS5zcGxpY2UoaSwgMSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxufTtcblxuLyoqXG4gKiBQdWJsaXNoIGFuIGV2ZW50XG4gKiBAcGFyYW0ge3N0cmluZ30gZXZlbnROYW1lIC0gTmFtZSBvZiB0aGUgZXZlbnRcbiAqIEBwYXJhbSB7Kn0gZGF0YSAtZGF0YSB0byBiZSBwYXNzZWQgaW50byBjYWxsYmFja1xuICovXG5jb25zdCBwdWJsaXNoID0gZnVuY3Rpb24gKGV2ZW50TmFtZSwgZGF0YSkge1xuICBpZiAoZXZlbnRzW2V2ZW50TmFtZV0pIHtcbiAgICBldmVudHNbZXZlbnROYW1lXS5mb3JFYWNoKGZ1bmN0aW9uIChmbikge1xuICAgICAgZm4oZGF0YSk7XG4gICAgfSk7XG4gIH1cbn07XG5cbmV4cG9ydCB7IHB1Ymxpc2gsIHVuc3Vic2NyaWJlLCBzdWJzY3JpYmUgfTtcbiIsImltcG9ydCB7IHJldHJpZXZlSW5mb3JtYXRpb24gfSBmcm9tIFwiLi93ZWF0aGVyRGF0YVwiO1xuaW1wb3J0IHsgcHVibGlzaCB9IGZyb20gXCIuL3B1YnN1YlwiO1xuXG4vLyBAdHMtY2hlY2tcblxuLyoqXG4gKiBAbW9kdWxlIEV2ZW50c1xuICovXG5cbi8qKlxuICogY2FsbHMgcmV0cmlldmVJbmZvcm1hdGlvbiBmdW5jdGlvbiB3aGVuIHNlYXJjaCBpY29uIGlzIGNsaWNrZWQgQHNlZSByZXRyaWV2ZUluZm9ybWF0aW9uXG4gKiBAZnVuY3Rpb25cbiAqL1xuY29uc3QgZmV0Y2hDbGlja0luZm8gPSBhc3luYyAoKSA9PiB7XG4gIHRyeSB7XG4gICAgbGV0IGFjdGl2ZTtcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hY3RpdmVCbGFja1wiKSkge1xuICAgICAgYWN0aXZlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hY3RpdmVCbGFja1wiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYWN0aXZlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hY3RpdmVXaGl0ZVwiKTtcbiAgICB9XG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXRcIik7XG4gICAgY29uc29sZS5sb2coYWN0aXZlLnRleHRDb250ZW50KTtcbiAgICBjb25zdCBpbmZvID0gYXdhaXQgcmV0cmlldmVJbmZvcm1hdGlvbihpbnB1dC52YWx1ZSwgYWN0aXZlLnRleHRDb250ZW50KTtcbiAgICBwdWJsaXNoKFwiZGlzcGxheVwiLCBpbmZvKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5sb2coZXJyKTtcbiAgfVxufTtcblxuLyoqXG4gKiBjYWxscyByZXRyaWV2ZUluZm9ybWF0aW9uIGZ1bmN0aW9uIHdoZW4gZW50ZXIga2V5IGlzIHByZXNzZWQgQHNlZSByZXRyaWV2ZUluZm9ybWF0aW9uXG4gKiBAcGFyYW0ge09iamVjdH0gZXZlbnRcbiAqL1xuY29uc3QgZmV0Y2hLZXlJbmZvID0gYXN5bmMgKGV2ZW50KSA9PiB7XG4gIHRyeSB7XG4gICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDEzKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgbGV0IGFjdGl2ZTtcbiAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFjdGl2ZUJsYWNrXCIpKSB7XG4gICAgICAgIGFjdGl2ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWN0aXZlQmxhY2tcIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhY3RpdmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFjdGl2ZVdoaXRlXCIpO1xuICAgICAgfVxuICAgICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXRcIik7XG4gICAgICBjb25zb2xlLmxvZyhhY3RpdmUudGV4dENvbnRlbnQpO1xuICAgICAgY29uc3QgaW5mbyA9IGF3YWl0IHJldHJpZXZlSW5mb3JtYXRpb24oaW5wdXQudmFsdWUsIGFjdGl2ZS50ZXh0Q29udGVudCk7XG4gICAgICBwdWJsaXNoKFwiZGlzcGxheVwiLCBpbmZvKTtcbiAgICB9XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUubG9nKGVycik7XG4gIH1cbn07XG5cbi8qKlxuICogQWRkcyBldmVudCBsaXN0ZW5lciB0byB0aGUgZG9tIGVsZW1lbnQuXG4gKiBAcGFyYW0ge09iamVjdH0gZGF0YSAtIERvbSBlbGVtZW50XG4gKi9cbmNvbnN0IHNlYXJjaEV2ZW50TGlzdGVuZXIgPSAoZGF0YSkgPT4ge1xuICBkYXRhLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmZXRjaENsaWNrSW5mbyk7XG4gIGRhdGEubmV4dEVsZW1lbnRTaWJsaW5nLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGZldGNoS2V5SW5mbyk7XG59O1xuXG5leHBvcnQgeyBzZWFyY2hFdmVudExpc3RlbmVyIH07XG4iLCIvLyBAdHMtY2hlY2tcblxuLyoqXG4gKiBAbW9kdWxlIHNlYXJjaFxuICovXG5cbi8qKlxuICogQHBhcmFtIHtPYmplY3R9IGV2ZW50XG4gKi9cbmNvbnN0IHN3aXRjaERpdiA9IChldmVudCkgPT4ge1xuICBsZXQgY3VycmVudEFjdGl2ZTtcbiAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWN0aXZlQmxhY2tcIikpIHtcbiAgICBjdXJyZW50QWN0aXZlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hY3RpdmVCbGFja1wiKTtcbiAgICBjdXJyZW50QWN0aXZlLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVCbGFja1wiKTtcbiAgICBldmVudC5jdXJyZW50VGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVCbGFja1wiKTtcbiAgfSBlbHNlIHtcbiAgICBjdXJyZW50QWN0aXZlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hY3RpdmVXaGl0ZVwiKTtcbiAgICBjdXJyZW50QWN0aXZlLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVXaGl0ZVwiKTtcbiAgICBldmVudC5jdXJyZW50VGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVXaGl0ZVwiKTtcbiAgfVxufTtcblxuLyoqXG4gKiBBdHRhY2hlcyBldmVudCBsaXN0ZW5lciB0byBidXR0b24gZXZlbnRzW2V2ZW50TmFtZV1cbiAqIEBmdW5jdGlvblxuICovXG5jb25zdCBzd2l0Y2hBY3RpdmUgPSAoKSA9PiB7XG4gIGNvbnN0IGJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnN0YW5kYXJkc1wiKTtcbiAgYnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHN3aXRjaERpdik7XG4gIH0pO1xufTtcblxuZXhwb3J0IHsgc3dpdGNoQWN0aXZlIH07XG4iLCJpbXBvcnQgeyBpc0FmdGVyLCBmb3JtYXQgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcblxuLy8gQHRzLWNoZWNrXG5cbi8qKlxuICogQG1vZHVsZSBXZWF0aGVyRGF0YVxuICovXG5cbi8qKlxuICpGaW5kcyB3ZWF0aGVyIGZvcmVjYXN0IG9mIGdpdmVuIGxvY2F0aW9uXG4gKiBAcGFyYW0ge3N0cmluZ30gbG9jYXRpb25cbiAqIEBwYXJhbSB7c3RyaW5nfSBzdGFuZGFyZFxuICogQHJldHVybiB7UHJvbWlzZTxhbnk+fVxuICovXG5jb25zdCBmaW5kTG9jYXRpb25XZWF0aGVyID0gYXN5bmMgKGxvY2F0aW9uLCBzdGFuZGFyZCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnNvbGUubG9nKHN0YW5kYXJkKTtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtsb2NhdGlvbn0mQVBQSUQ9ODFkMWY2ZTVlZDc3ZjdjOGM5ZGExZGNjMDczYWQ3YzYmdW5pdHM9JHtzdGFuZGFyZH1gLFxuICAgICAgeyBtb2RlOiBcImNvcnNcIiB9XG4gICAgKTtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIHJldHVybiBkYXRhO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnN0IGVycm9yRGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZXJyb3JEaXNwbGF5XCIpO1xuICAgIGVycm9yRGlzcGxheS50ZXh0Q29udGVudCA9IGBOZXR3b3JrIEVycm9yLmA7XG4gIH1cbn07XG5cbi8qKiBDcmVhdGVzIHdlYXRoZXIgaW5mb3JtYXRpb24gb2JqZWN0cyAqL1xuY2xhc3MgSW5mb3JtYXRpb25NYWtlciB7XG4gIC8qKlxuICAgKiBPYmplY3QgY29uc3RydWN0b3JcbiAgICogQHBhcmFtIHtPYmplY3R9IHJldHJpZXZlZERhdGEgLSBSZXRyaWV2ZWQgZGF0YSBmcm9tIEFQSVxuICAgKiBAcGFyYW0ge1N0cmluZ30gc3RhbmRhcmRcbiAgICovXG4gIGNvbnN0cnVjdG9yKHJldHJpZXZlZERhdGEsIHN0YW5kYXJkKSB7XG4gICAgdGhpcy5jb3VudHJ5ID0gcmV0cmlldmVkRGF0YS5zeXMuY291bnRyeTtcbiAgICB0aGlzLmNpdHkgPSByZXRyaWV2ZWREYXRhLm5hbWU7XG4gICAgdGhpcy5odW1pZGl0eSA9IHJldHJpZXZlZERhdGEubWFpbi5odW1pZGl0eSArIFwiJVwiO1xuICAgIHRoaXMuc3VucmlzZSA9IHJldHJpZXZlZERhdGEuc3lzLnN1bnJpc2U7XG4gICAgdGhpcy5zdW5zZXQgPSByZXRyaWV2ZWREYXRhLnN5cy5zdW5zZXQ7XG4gICAgdGhpcy5kYXRlID0gcmV0cmlldmVkRGF0YS5kdDtcbiAgICB0aGlzLmljb24gPSBgaHR0cHM6Ly9vcGVud2VhdGhlcm1hcC5vcmcvaW1nL3duLyR7cmV0cmlldmVkRGF0YS53ZWF0aGVyWzBdLmljb259QDJ4LnBuZ2A7XG4gICAgaWYgKHJldHJpZXZlZERhdGEucmFpbltcIjFoXCJdKSB7XG4gICAgICB0aGlzLnJhaW5Wb2x1bWUgPSByZXRyaWV2ZWREYXRhLnJhaW5bXCIxaFwiXSArIFwibW1cIjtcbiAgICB9XG4gICAgaWYgKHJldHJpZXZlZERhdGEuc25vd1tcIjFoXCJdKSB7XG4gICAgICB0aGlzLnNub3dWb2x1bWUgPSByZXRyaWV2ZWREYXRhLnNub3dbXCIxaFwiXSArIFwibW1cIjtcbiAgICB9XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IHJldHJpZXZlZERhdGEud2VhdGhlclswXS5kZXNjcmlwdGlvbjtcbiAgICB0aGlzLnByZXNzdXJlID0gcmV0cmlldmVkRGF0YS5tYWluLnByZXNzdXJlICsgXCJoUGFcIjtcbiAgICBpZiAoc3RhbmRhcmQgPT09IFwibWV0cmljXCIpIHtcbiAgICAgIHRoaXMuZmVlbHNMaWtlID0gcmV0cmlldmVkRGF0YS5tYWluLmZlZWxzX2xpa2UgKyBcIlxcdTAwQjBDXCI7XG4gICAgICB0aGlzLnRlbXBlcmF0dXJlID0gcmV0cmlldmVkRGF0YS5tYWluLnRlbXAgKyBcIlxcdTAwQjBDXCI7XG4gICAgICB0aGlzLm1pblRlbXBlcmF0dXJlID0gcmV0cmlldmVkRGF0YS5tYWluLnRlbXBfbWluICsgXCJcXHUwMEIwQ1wiO1xuICAgICAgdGhpcy5tYXhUZW1wZXJhdHVyZSA9IHJldHJpZXZlZERhdGEubWFpbi50ZW1wX21heCArIFwiXFx1MDBCMENcIjtcbiAgICAgIHRoaXMud2luZFNwZWVkID0gcmV0cmlldmVkRGF0YS53aW5kLnNwZWVkICsgXCJtL3NcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5mZWVsc0xpa2UgPSByZXRyaWV2ZWREYXRhLm1haW4uZmVlbHNfbGlrZSArIFwiXFx1MDBCMEZcIjtcbiAgICAgIHRoaXMudGVtcGVyYXR1cmUgPSByZXRyaWV2ZWREYXRhLm1haW4udGVtcCArIFwiXFx1MDBCMEZcIjtcbiAgICAgIHRoaXMubWluVGVtcGVyYXR1cmUgPSByZXRyaWV2ZWREYXRhLm1haW4udGVtcF9taW4gKyBcIlxcdTAwQjBGXCI7XG4gICAgICB0aGlzLm1heFRlbXBlcmF0dXJlID0gcmV0cmlldmVkRGF0YS5tYWluLnRlbXBfbWF4ICsgXCJcXHUwMEIwRlwiO1xuICAgICAgdGhpcy53aW5kU3BlZWQgPSByZXRyaWV2ZWREYXRhLndpbmQuc3BlZWQgKyBcIm1pbGVzL2hvdXJcIjtcbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIENoZWNrcyBpZiBpdHMgY3VycmVudGx5IGRheSBvciBuaWdodFxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICBnZXREYXlPck5pZ2h0KCkge1xuICAgIGNvbnN0IGN1cnJlbnRUaW1lID0gbmV3IERhdGUoKTtcbiAgICBjb25zdCBzdW5SaXNlID0gbmV3IERhdGUodGhpcy5zdW5yaXNlICogMTAwMCk7XG4gICAgY29uc3Qgc3VuU2V0ID0gbmV3IERhdGUodGhpcy5zdW5zZXQgKiAxMDAwKTtcbiAgICBpZiAoIWlzQWZ0ZXIoY3VycmVudFRpbWUsIHN1blJpc2UpKSB7XG4gICAgICByZXR1cm4gXCJOaWdodFwiO1xuICAgIH0gZWxzZSBpZiAoIWlzQWZ0ZXIoY3VycmVudFRpbWUsIHN1blNldCkpIHtcbiAgICAgIHJldHVybiBcIkRheVwiO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gXCJOaWdodFwiO1xuICAgIH1cbiAgfVxuICAvKipcbiAgICogZ2V0IGZ1bGwgbG9jYXRpb25cbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgZ2V0RnVsbExvY2F0aW9uKCkge1xuICAgIHJldHVybiBgJHt0aGlzLmNpdHl9LCAke3RoaXMuY291bnRyeX1gO1xuICB9XG4gIC8qKlxuICAgKiBnZXQgZnVsbCBkYXRlXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIGdldERhdGUoKSB7XG4gICAgcmV0dXJuIGZvcm1hdChuZXcgRGF0ZSh0aGlzLmRhdGUgKiAxMDAwKSwgXCJQUFBQXCIpO1xuICB9XG4gIC8qKlxuICAgKiBnZXQgZnVsbCB0aW1lXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIGdldFRpbWUoKSB7XG4gICAgcmV0dXJuIGZvcm1hdChuZXcgRGF0ZSh0aGlzLmRhdGUgKiAxMDAwKSwgXCJwXCIpO1xuICB9XG59XG5cbi8qKlxuICogUmV0cmlldmUgd2VhdGhlciBpbmZvcm1hdGlvbiBhYm91dCBsb2NhdGlvblxuICogQHBhcmFtIHtzdHJpbmd9IGxvY2F0aW9uXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RhbmRhcmRcbiAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gLSBBIHByb21pc2UgdGhhdCByZXNvbHZlcyB0byB3ZWF0aGVyIGluZm9ybWF0aW9uXG4gKi9cbmNvbnN0IHJldHJpZXZlSW5mb3JtYXRpb24gPSBhc3luYyAobG9jYXRpb24gPSBcIkxhZ29zXCIsIHN0YW5kYXJkID0gXCJtZXRyaWNcIikgPT4ge1xuICBjb25zb2xlLmxvZyhzdGFuZGFyZCk7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBmaW5kTG9jYXRpb25XZWF0aGVyKGxvY2F0aW9uLCBzdGFuZGFyZCk7XG4gIGlmIChkYXRhLmNvZCA9PT0gMjAwKSB7XG4gICAgaWYgKCFkYXRhLnNub3cpIHtcbiAgICAgIGRhdGEuc25vdyA9IDA7XG4gICAgfVxuICAgIGlmICghZGF0YS5yYWluKSB7XG4gICAgICBkYXRhLnJhaW4gPSAwO1xuICAgIH1cbiAgICBjb25zdCBpbmZvcm1hdGlvbiA9IG5ldyBJbmZvcm1hdGlvbk1ha2VyKGRhdGEsIHN0YW5kYXJkKTtcbiAgICByZXR1cm4gaW5mb3JtYXRpb247XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgZXJyb3JEaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNlcnJvckRpc3BsYXlcIik7XG4gICAgZXJyb3JEaXNwbGF5LnRleHRDb250ZW50ID0gYCR7ZGF0YS5tZXNzYWdlfWA7XG4gIH1cbn07XG5cbmV4cG9ydCB7IHJldHJpZXZlSW5mb3JtYXRpb24gfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwidmFyIGRlZmVycmVkID0gW107XG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8gPSAocmVzdWx0LCBjaHVua0lkcywgZm4sIHByaW9yaXR5KSA9PiB7XG5cdGlmKGNodW5rSWRzKSB7XG5cdFx0cHJpb3JpdHkgPSBwcmlvcml0eSB8fCAwO1xuXHRcdGZvcih2YXIgaSA9IGRlZmVycmVkLmxlbmd0aDsgaSA+IDAgJiYgZGVmZXJyZWRbaSAtIDFdWzJdID4gcHJpb3JpdHk7IGktLSkgZGVmZXJyZWRbaV0gPSBkZWZlcnJlZFtpIC0gMV07XG5cdFx0ZGVmZXJyZWRbaV0gPSBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV07XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHZhciBub3RGdWxmaWxsZWQgPSBJbmZpbml0eTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV0gPSBkZWZlcnJlZFtpXTtcblx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGNodW5rSWRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRpZiAoKHByaW9yaXR5ICYgMSA9PT0gMCB8fCBub3RGdWxmaWxsZWQgPj0gcHJpb3JpdHkpICYmIE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uTykuZXZlcnkoKGtleSkgPT4gKF9fd2VicGFja19yZXF1aXJlX18uT1trZXldKGNodW5rSWRzW2pdKSkpKSB7XG5cdFx0XHRcdGNodW5rSWRzLnNwbGljZShqLS0sIDEpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZnVsZmlsbGVkID0gZmFsc2U7XG5cdFx0XHRcdGlmKHByaW9yaXR5IDwgbm90RnVsZmlsbGVkKSBub3RGdWxmaWxsZWQgPSBwcmlvcml0eTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYoZnVsZmlsbGVkKSB7XG5cdFx0XHRkZWZlcnJlZC5zcGxpY2UoaS0tLCAxKVxuXHRcdFx0dmFyIHIgPSBmbigpO1xuXHRcdFx0aWYgKHIgIT09IHVuZGVmaW5lZCkgcmVzdWx0ID0gcjtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn07IiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIi8vIG5vIGJhc2VVUklcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImluZGV4XCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbl9fd2VicGFja19yZXF1aXJlX18uTy5qID0gKGNodW5rSWQpID0+IChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPT09IDApO1xuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbnZhciB3ZWJwYWNrSnNvbnBDYWxsYmFjayA9IChwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiwgZGF0YSkgPT4ge1xuXHR2YXIgW2NodW5rSWRzLCBtb3JlTW9kdWxlcywgcnVudGltZV0gPSBkYXRhO1xuXHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcblx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG5cdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDA7XG5cdGlmKGNodW5rSWRzLnNvbWUoKGlkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2lkXSAhPT0gMCkpKSB7XG5cdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihydW50aW1lKSB2YXIgcmVzdWx0ID0gcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0fVxuXHRpZihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbikgcGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24oZGF0YSk7XG5cdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKCk7XG5cdFx0fVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkc1tpXV0gPSAwO1xuXHR9XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLk8ocmVzdWx0KTtcbn1cblxudmFyIGNodW5rTG9hZGluZ0dsb2JhbCA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmt3ZWF0aGVyYXBwXCJdID0gc2VsZltcIndlYnBhY2tDaHVua3dlYXRoZXJhcHBcIl0gfHwgW107XG5jaHVua0xvYWRpbmdHbG9iYWwuZm9yRWFjaCh3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIDApKTtcbmNodW5rTG9hZGluZ0dsb2JhbC5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCBjaHVua0xvYWRpbmdHbG9iYWwucHVzaC5iaW5kKGNodW5rTG9hZGluZ0dsb2JhbCkpOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgZGVwZW5kcyBvbiBvdGhlciBsb2FkZWQgY2h1bmtzIGFuZCBleGVjdXRpb24gbmVlZCB0byBiZSBkZWxheWVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyh1bmRlZmluZWQsIFtcInZlbmRvcnMtbm9kZV9tb2R1bGVzX2RhdGUtZm5zX2VzbV9mb3JtYXRfaW5kZXhfanMtbm9kZV9tb2R1bGVzX2RhdGUtZm5zX2VzbV9pc0FmdGVyX2luZGV4X2pzXCIsXCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc19mb3J0YXdlc29tZV9mb250YXdlc29tZS1mcmVlX2pzX2FsbF9qc1wiXSwgKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9zY3JpcHRzL2luZGV4LmpzXCIpKSlcbl9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8oX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=