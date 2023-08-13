import { navigationBar } from "./navbar.js";
import { addHome } from "./homepage.js";
// import { calculator } from "./calculator.js";
import "./style.css";
import { addMenu } from "./menu.js";
import { addContact } from "./contact.js";

//Footer section Creation
const contentEL = document.querySelector("#content");
const mainEl = document.createElement("div");
const footerEl = document.createElement("footer");
footerEl.classList.add("foot");
footerEl.textContent = "©2023 | Restaurant Dessert Haven Delights";
contentEL.appendChild(footerEl);

//Navigation
navigationBar;

//Homepage
addHome.show();

//Menu
addMenu.hide();

//Contact
addContact.hide();

const homeBtn = document.querySelector(".navHome");
homeBtn.addEventListener("click", () => {
  addHome.show();
  addMenu.hide();
  addContact.hide();
});

const menuBtn = document.querySelector(".navMenu");
menuBtn.addEventListener("click", () => {
  addHome.hide();
  addMenu.show();
  addContact.hide();
});

const ContactBtn = document.querySelector(".navContact");
ContactBtn.addEventListener("click", () => {
  addHome.hide();
  addMenu.hide();
  addContact.show();
});
