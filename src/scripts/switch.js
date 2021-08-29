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

export { switchActive };
