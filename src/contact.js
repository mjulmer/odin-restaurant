"use strict";

import "./contact.css";

export { renderContactPage };

function renderContactPage() {
    const contactContainer = document.createElement("div");
    contactContainer.className = "contact-container";

  const header = document.createElement("p");
  header.textContent = "Contact us";

  const telephone = document.createElement("p");
  telephone.textContent = "1 (872) 000-0000";

  const email = document.createElement("p");
  email.textContent = "contact@secondbreakfasttruck.com";

  const contentContainer = document.querySelector("#content");
  contactContainer.appendChild(header);
  contentContainer.appendChild(contactContainer);
  contactContainer.appendChild(telephone);
  contactContainer.appendChild(email);
}
