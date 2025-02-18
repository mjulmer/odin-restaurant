"use strict";

import { renderHomepage } from "./homepage.js";
import { renderMenuPage } from "./menu.js";

renderHomepage();

document.querySelector("#home-button").addEventListener("click", () => {
  clearPage();
  renderHomepage();
});

document.querySelector("#menu-button").addEventListener("click", () => {
  clearPage();
  renderMenuPage();
});

function clearPage() {
  const contentContainer = document.querySelector("#content");
  contentContainer.replaceChildren();
}
