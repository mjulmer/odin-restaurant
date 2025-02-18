"use strict";

import { renderHomepage } from "./homepage.js";
import { renderMenuPage } from "./menu.js";

renderHomepage();

clearPage();

renderMenuPage();

function clearPage() {
    const contentContainer = document.querySelector("#content");
    contentContainer.replaceChildren();
}
