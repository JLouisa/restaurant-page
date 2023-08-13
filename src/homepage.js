import food1 from "./images/greenWhiteCake.jpg";
import food2 from "./images/smooties.jpg";

// const contentEL = document.querySelector("#content");
// const mainEl = document.createElement("div");
// const navEl = document.createElement("nav");
// const footerEl = document.createElement("footer");

const addHome = (function () {
  const contentEL = document.querySelector("#content");
  const mainEl = document.createElement("div");

  // content Creation
  const welcomeTitleEl = document.createElement("h1");
  welcomeTitleEl.classList.add("welcomeTitle");
  welcomeTitleEl.textContent = "Welcome to Dessert Haven Delights";
  headerEl.appendChild(welcomeTitleEl);

  const bioEl = document.createElement("div");
  bioEl.classList.add("bio");
  mainEl.appendChild(bioEl);
  bioEl.textContent = `Experience culinary bliss at "Dessert Haven Delights," where every visit is a journey through exquisite
    flavors and impeccable service. Nestled in a cozy ambiance, our restaurant celebrates the art of Italian cuisine
    with a modern twist. Indulge in a symphony of handcrafted pasta, rich sauces, and locally sourced
    ingredients that dance harmoniously on your palate. Our passionate chefs, dedicated to perfection, craft
    each dish with love. From the first bite to the last, you'll be immersed in a culinary symphony that
    transcends ordinary dining. "Dessert Haven Delights" isn't just a restaurant; it's an unforgettable
    gastronomic experience that captures the essence of Italian culinary magic`;

  mainEl.classList.add("main");
  contentEL.appendChild(mainEl);
  const div1El = document.createElement("div");
  div1El.classList.add("food1");
  mainEl.appendChild(div1El);

  const image1El = document.createElement("img");
  image1El.classList.add("image1");
  image1El.alt = "green and white cake slice";
  image1El.src = food1;
  div1El.appendChild(image1El);

  const div2El = document.createElement("div");
  div2El.classList.add("food1");
  mainEl.appendChild(div2El);
  div2El.textContent =
    "Savor the divine delight of our green and white cake slice, a luscious symphony of flavors and visual";

  const quoteEl = document.createElement("div");
  quoteEl.classList.add("quote");
  quoteEl.textContent = `Embark on a journey of sweet sensations, where every bite is a moment of pure
  enchantment at Dessert Haven Delights`;
  mainEl.appendChild(quoteEl);

  const div3El = document.createElement("div");
  div3El.classList.add("food2");
  mainEl.appendChild(div3El);

  const image2El = document.createElement("img");
  image2El.classList.add("image2");
  image2El.alt = "green smoothie with fruits";
  image2El.src = food2;
  div3El.appendChild(image2El);

  const div4 = document.createElement("div");
  div4.textContent = `Indulge in pure bliss with our refreshing smoothie, a burst of vibrant flavors that invigorate your
    senses with each sip.`;
  mainEl.appendChild(div4);

  //   Styling content

  function hide() {
    mainEl.setAttribute("style", "display: none");
  }

  function show() {
    mainEl.setAttribute("style", "display: block");
  }
  return { hide, show };
})();

export { addHome };
