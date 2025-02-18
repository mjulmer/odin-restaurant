"use strict";

import { renderHomepage } from "./homepage.js";
import { renderMenuPage } from "./menu.js";
import { renderContactPage } from "./contact.js";

renderHomepage();

document.querySelector("#home-button").addEventListener("click", () => {
  clearPage();
  renderHomepage();
});

document.querySelector("#menu-button").addEventListener("click", () => {
  clearPage();
  renderMenuPage();
});

document.querySelector("#contact-button").addEventListener("click", () => {
    clearPage();
    renderContactPage();
  });
  

function clearPage() {
  const contentContainer = document.querySelector("#content");
  contentContainer.replaceChildren();
}
