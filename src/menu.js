"use strict";

import "./menu.css";

export { renderMenuPage };

const menu = new Array();

function renderMenuPage() {
  const menuContainer = document.createElement("div");

  const header = document.createElement("h1");
  header.textContent = "Menu";
  menuContainer.appendChild(header);

  addNewMenuItem("$8","Hash brown wrap", "Hashbrowns wrapped in lavash with your choice of green salsa, ketchup, or sriracha mayo. Add runny egg +$1");
  addNewMenuItem("$4", "Green smoothie", "For people who prefer to drink their breakfast, our green smoothie has greens and sprouts blended with seasonal fruit and yogurt (non-dairy available, +$1)");
  addNewMenuItem("$5","Bircher breakfast", "Parfait with chia pudding, granola, and seasonal fruit.");


  for (const item of menu) {
    menuContainer.appendChild(item);
  }

  const contentContainer = document.querySelector("#content");
  contentContainer.appendChild(menuContainer);
}

function addNewMenuItem(price, name, description) {
  const item = document.createElement("div");
  item.className = "menu-item";

  const itemName = document.createElement("span");
  itemName.textContent = price + " - " + name;

  const itemDescription = document.createElement("p");
  itemDescription.className = "menu-item-description";
  itemDescription.textContent = description;

  const imagePlaceholder = document.createElement("div");
  imagePlaceholder.className = "menu-image";

  item.appendChild(imagePlaceholder);
  item.appendChild(itemName);
  item.appendChild(itemDescription);

  menu.push(item);
}
