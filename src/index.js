import { addHome } from "./homepage.js";
import { calculator } from "./calculator.js";
import "./style.css";
import { addMenu } from "./menu.js";
import { addContact } from "./contact.js";

//Navigation bar creation
navEl.id = "navBar";
contentEL.appendChild(navEl);

const headerEl = document.createElement("header");
headerEl.id = "head";
navEl.appendChild(headerEl);

const navListEL = document.createElement("ul");
navListEL.id = "navList";
navEl.appendChild(navListEL);

const navHome = document.createElement("li");
const navMenu = document.createElement("li");
const navContact = document.createElement("li");

navHome.textContent = "Home";
navMenu.textContent = "Menu";
navContact.textContent = "Contact";

navListEL.appendChild(navHome);
navListEL.appendChild(navMenu);
navListEL.appendChild(navContact);

//Footer section Creation
const footerEl = document.createElement("footer");
footerEl.classList.add("foot");
footerEl.textContent = "©2023 | Restaurant Dessert Haven Delights";
contentEL.appendChild(footerEl);

//Homepage
// addHome.hide();

//Menu
// addMenu.hide();

//Contact
// addContact();
