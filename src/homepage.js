const home = function () {
  const contentEl = document.getElementById("content");
  const navEl = document.createElement("nav");
  navEl.id = "navBar";
  contentEl.appendChild(navEl);

  const headerEl = document.createElement("header");
  headerEl.id = "head";
  navEl.appendChild(headerEl);

  const welcomeTitleEl = document.createElement("h1");
  welcomeTitleEl.classList.add("welcomeTitle");
  welcomeTitleEl.textContent = "Welcome to Dessert Haven Delights";
  headerEl.appendChild(welcomeTitleEl);

  const mainEl = document.createElement("div");
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
  contentEl.appendChild(mainEl);
};

export default home;
