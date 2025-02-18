"use strict";

import "./homepage.css";

export { renderHomepage };

function renderHomepage() {
  const header = document.createElement("h1");
  header.textContent = "Second Breakfast Food Truck";

  const bodyDiv = document.createElement("div");
  bodyDiv.className = "body-div";

  const bodyText = document.createElement("p");
  bodyText.textContent =
    "Sometimes a bowl of dry cereal in the car doesn't keep you. Have a proper breakfast: listen for the jingle as our truck passes by mid-morning.";

  const imagePlaceholder = document.createElement("div");
  imagePlaceholder.className = "image";

  const contentContainer = document.querySelector("#content");
  contentContainer.appendChild(header);
  contentContainer.appendChild(bodyDiv);
  bodyDiv.appendChild(bodyText);
  bodyDiv.appendChild(imagePlaceholder);
}
