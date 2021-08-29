import "../styles/reset.css";
import "../styles/main.css";
import "@fortawesome/fontawesome-free/js/all";
import { initialPageLoad } from "./initialPage";
import { subscribe } from "./pubsub";
import { searchEventListener } from "./search";
import { display } from "./display";
import { switchActive } from "./switch";

// @ts-check

/**
 * @fileoverview Index .js is the root of this file.
 * @author Frostwalker
 */

subscribe("pageLoaded", searchEventListener);

subscribe("pageLoaded", switchActive);

subscribe("display", display);

initialPageLoad();
