import { addHome, removeHome } from "./homepage.js";
import { calculator } from "./calculator.js";
import "./style.css";
import { addMenu } from "./menu.js";

//Homepage
// addHome();
// console.log(removeHome);

//Menu
addMenu();
console.log(addMenu().hideMenu);

console.log(calculator.multi(4, 8));
