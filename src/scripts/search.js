import { retrieveInformation } from "./weatherData";

// @ts-check

/**
 * @module Events
 */

const fetchClickInfo = async () => {
  const input = document.querySelector("input");
  const info = await retrieveInformation(input.value);
  console.log(info);
};

const fetchKeyInfo = async (event) => {
  if (event.keyCode === 13) {
    event.preventDefault();
    const input = document.querySelector("input");
    const info = await retrieveInformation(input.value);
    console.log(info);
  }
};

const searchEventListener = (data) => {
  data.addEventListener("click", fetchClickInfo);
  data.nextElementSibling.addEventListener("keydown", fetchKeyInfo);
};

console.log("a");

export { searchEventListener };
