import food0 from "./images/pancakes.jpg";
import food1 from "./images/cake.jpg";
import food2 from "./images/tart.jpg";

// const contentEL = document.getElementById("content");
// const mainMenuEl = document.createElement("div");
// const footMenuEl = document.createElement("footer");

const addMenu = (function () {
  const contentEL = document.getElementById("content");
  const mainMenuEl = document.createElement("div");

  contentEL.appendChild(mainMenuEl);
  mainMenuEl.classList.add("mainMenu");

  // Content Creation
  let menuItemsEl = [];
  let menuImagesEl = [];
  let menuDivTextEl = [];
  let menuTextTitleEl = [];
  let menuTextTitle = [`Berry Bliss Pancake Stack`, `Decadent Chocolate Delight Cake`, `Vanilla Raspberry Dream Tart`];
  let food = [food0, food1, food2];
  let altText = ["delicious pancakes", "delicious cake", "delicious tart"];
  let menuTextEl = [];
  let menuText = [
    `Indulge in the irresistible delight of our pancake masterpiece,
      generously adorned with a delicate snowfall of powdered sugar and
      crowned with vibrant, plump raspberries. Each bite presents a harmonious
       symphony of textures and flavors, blending the rich warmth of
       pancakes with the gentle sweetness of berries. A taste worth savoring!`,
    `Experience pure decadence with our layered rectangular cake, a
       symphony of flavors and textures. Velvety powdered chocolate covers
       each luscious layer, while rivers of rich chocolate sauce cascade
       indulgently. The finishing touch: a sprinkle of crunchy peanuts.
       A dessert that's an irresistible ode to chocolate lovers. Satisfy
       your cravings today!`,
    `Savor the exquisite harmony of flavors in our tart menu delight.
        A buttery, flaky crust cradles a luscious vanilla whipcream filling,
        perfectly balanced with the brightness of fresh raspberries.
        Each bite offers a symphony of sweet and tangy notes, a dessert
        that epitomizes elegance and taste. Treat yourself to this divine
        pleasure!`,
  ];

  for (let i = 0; i < 3; i++) {
    menuItemsEl[i] = document.createElement("div");
    menuItemsEl[i].classList.add(`menuItems${i}`);
    mainMenuEl.appendChild(menuItemsEl[i]);

    menuImagesEl[i] = document.createElement("img");
    menuImagesEl[i].classList.add(`images${i}`);
    menuImagesEl[i].src = food[i];
    menuImagesEl[i].alt = altText[i];
    menuItemsEl[i].appendChild(menuImagesEl[i]);

    menuDivTextEl[i] = document.createElement("div");
    menuDivTextEl[i].classList.add(`divText${i}`);
    menuItemsEl[i].appendChild(menuDivTextEl[i]);

    menuTextTitleEl[i] = document.createElement("h1");
    menuTextTitleEl[i].classList.add(`textTitle${i}`);
    menuTextTitleEl[i].textContent = menuTextTitle[i];
    menuDivTextEl[i].appendChild(menuTextTitleEl[i]);

    menuTextEl[i] = document.createElement("div");
    menuTextEl[i].classList.add(`text${i}`);
    menuTextEl[i].textContent = menuText[i];
    menuDivTextEl[i].appendChild(menuTextEl[i]);
  }

  const hide = () => {
    mainMenuEl.setAttribute("style", "display: none");
  };

  const show = () => {
    mainMenuEl.setAttribute("style", "display: block");
  };

  return { hide, show };
})();

export { addMenu };
