import { retrieveInformation } from "./weatherData";
import { publish } from "./pubsub";

// @ts-check

/**
 * @module Events
 */

/**
 * calls retrieveInformation function when search icon is clicked @see retrieveInformation
 * @function
 */
const fetchClickInfo = async () => {
  const input = document.querySelector("input");
  const info = await retrieveInformation(input.value);
  publish("display", info);
};

/**
 * calls retrieveInformation function when enter key is pressed @see retrieveInformation
 * @param {Object} event
 */
const fetchKeyInfo = async (event) => {
  if (event.keyCode === 13) {
    event.preventDefault();
    const input = document.querySelector("input");
    const info = await retrieveInformation(input.value);
    publish("display", info);
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

export { searchEventListener };
