import { retrieveInformation } from "./weatherData";
import { publish } from "./pubsub";
import { validate } from "./validation";

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
    if (validate()) {
      const info = await retrieveInformation(input.value, active.textContent);
      publish("display", info);
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
      if (validate()) {
        const info = await retrieveInformation(input.value, active.textContent);
        publish("display", info);
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

export { searchEventListener };
