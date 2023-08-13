import table from "./images/table.jpg";
import bar from "./images/bar.jpg";

// const contentEL = document.querySelector("#content");
// const mainEl = document.createElement("div");
// const navEl = document.createElement("nav");
// const footerEl = document.createElement("footer");

const addHome = (function () {
  const contentEL = document.querySelector("#content");
  const mainEl = document.createElement("div");
  const mainHomeEl = document.createElement("div");
  mainHomeEl.classList.add("mainHome");
  contentEL.appendChild(mainEl);
  mainEl.appendChild(mainHomeEl);

  // content Creation
  let divH = [];
  let divBoxEl = [];
  let divTextEl = [];
  let divText = [];
  let imageHome = [];
  let images = [table, bar];
  let imagesAlt = ["beautiful forest view from table", "bar with a lot of wines"];
  let mainText = [
    `Experience culinary bliss at "Dessert Haven Delights," where every visit is a journey through exquisite
    flavors and impeccable service. Nestled in a cozy ambiance, our restaurant celebrates the art of Italian cuisine
    with a modern twist. Indulge in a symphony of handcrafted pasta, rich sauces, and locally sourced
    ingredients that dance harmoniously on your palate. Our passionate chefs, dedicated to perfection, craft
    each dish with love. From the first bite to the last, you'll be immersed in a culinary symphony that
    transcends ordinary dining. "Dessert Haven Delights" isn't just a restaurant; it's an unforgettable
    gastronomic experience that captures the essence of Italian culinary magic`,

    `"Embark on a journey of sweet sensations, where every bite is a moment of pure enchantment at Dessert Haven Delights"`,
  ];
  let mainText2 = [
    `Dine immersed in nature's embrace. Our restaurant offers a breathtaking view of lush, verdant forests stretching to the horizon. Enjoy a meal enveloped in tranquility as sunlight filters through the foliage, creating a serene ambiance that elevates your culinary experience to unparalleled heights.`,
    `Elevate your spirits at our bar adorned with a splendid array of wines and libations. From the comfort of your seat, gaze upon a dazzling selection that caters to every palate. The symphony of colors and textures promises a delightful journey for connoisseurs and enthusiasts alike, setting the perfect tone for your evening.`,
  ];

  const welcomeTitleEl = document.createElement("h1");
  welcomeTitleEl.classList.add("welcomeTitle");
  welcomeTitleEl.textContent = "Welcome to Dessert Haven Delights";
  mainHomeEl.appendChild(welcomeTitleEl);

  for (let i = 0; i < 2; i++) {
    divH[i] = document.createElement("div");
    divH[i].classList.add(`divH${i}`);
    divH[i].textContent = mainText[i];
    mainHomeEl.appendChild(divH[i]);

    divBoxEl[i] = document.createElement("div");
    divBoxEl[i].classList.add(`divBoxEl${i}`);
    mainHomeEl.appendChild(divBoxEl[i]);

    divTextEl[i] = document.createElement("div");
    divTextEl[i].classList.add(`divTextEl${i}`);
    divBoxEl[i].appendChild(divTextEl[i]);

    divText[i] = document.createElement("div");
    divText[i].classList.add(`divText${i}`);
    divText[i].textContent = mainText2[i];
    divTextEl[i].appendChild(divText[i]);

    imageHome[i] = document.createElement("img");
    imageHome[i].classList.add(`image${i}`);
    imageHome[i].src = images[i];
    imageHome[i].alt = imagesAlt[i];
    divBoxEl[i].appendChild(imageHome[i]);
  }

  //   Styling content

  function hide() {
    mainHomeEl.setAttribute("style", "display: none");
  }

  function show() {
    mainHomeEl.setAttribute("style", "display: flex");
  }
  return { hide, show };
})();

export { addHome };
