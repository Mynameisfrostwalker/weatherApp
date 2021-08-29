import Icon from "../images/initial.jpg";
import { publish } from "./pubsub";

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
  container.style["background-image"] = `url(${Icon})`;
  container.appendChild(formDiv);
  container.appendChild(gridCreator("countryDetails"));
  container.appendChild(gridCreator("date"));
  container.appendChild(gridCreator("weatherDescription"));
  container.appendChild(gridCreator("humidPressureWind"));
  container.appendChild(gridCreator("temp"));
  container.appendChild(gridCreator("minMax"));
  container.appendChild(gridCreator("volume"));
  const icon = document.querySelector("#icon");
  publish("pageLoaded", icon);
};

export { initialPageLoad };
