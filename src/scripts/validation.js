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

export { inputEventListener, validate };
