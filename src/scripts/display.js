import Day from "../images/day.jpeg";
import Night from "../images/night.jpg";

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

const changeBackground = (period) => {
  const container = document.querySelector("main");
  const search = document.querySelector("#searchBar");
  if (period === "Day") {
    container.style.color = "black";
    search.style["box-shadow"] = "0px 0px 4px 4px black";
    container.style["background-image"] = `url(${Day})`;
  }
  if (period === "Night") {
    container.style.color = "white";
    search.style["box-shadow"] = "0px 0px 4px 4px white";
    container.style["background-image"] = `url(${Night})`;
  }
};

const display = (weatherObj) => {
  console.log(weatherObj.rainVolume);
  console.log(weatherObj.snowVolume);
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
};

export { display };
