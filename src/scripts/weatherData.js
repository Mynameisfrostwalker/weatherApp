import { isAfter } from "date-fns";

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
   * @param {Object} retrievedData - Retrieved data from APi
   * @param {String} standard
   */
  constructor(retrievedData, standard) {
    if (standard === "metric") {
      this.country = retrievedData.sys.country;
      this.description = retrievedData.weather[0].description;
      this.feelsLike = retrievedData.main.feels_like + "\u00B0C";
      this.temperature = retrievedData.main.temp + "\u00B0C";
      this.humidity = retrievedData.main.humidity + "%";
      this.sunrise = retrievedData.sys.sunrise;
      this.sunset = retrievedData.sys.sunset;
      this.windSpeed = retrievedData.wind.speed;
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
    if (!isAfter(currentTime, sunRise)) {
      return "Night";
    } else if (!isAfter(currentTime, sunSet)) {
      return "Day";
    } else {
      return "Night";
    }
  }
}

const retrieveInformation = async (location, standard = "metric") => {
  const data = await findLocationWeather(location, standard);
  if (data.cod === 200) {
    const information = new InformationMaker(data, standard);
    console.log(information);
    console.log(information.getDayOrNight());
  } else {
    console.log(data.message);
  }
};

retrieveInformation("lagos", "metric");
