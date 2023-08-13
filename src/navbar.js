//Navigation bar creation
const navigationBar = (function () {
  const contentEL = document.querySelector("#content");
  const navEl = document.createElement("nav");
  navEl.id = "navBar";
  contentEL.appendChild(navEl);

  const headerTitle = document.createElement("h3");
  headerTitle.textContent = "Dessert Haven Delights";
  headerTitle.classList.add("headerTitle");
  navEl.appendChild(headerTitle);

  const headerEl = document.createElement("header");
  headerEl.id = "head";
  navEl.appendChild(headerEl);

  const navListEL = document.createElement("ul");
  navListEL.id = "navList";
  navEl.appendChild(navListEL);

  const navHome = document.createElement("li");
  const navMenu = document.createElement("li");
  const navContact = document.createElement("li");

  navHome.classList.add("navHome");
  navMenu.classList.add("navMenu");
  navContact.classList.add("navContact");

  navHome.textContent = "Home";
  navMenu.textContent = "Menu";
  navContact.textContent = "Contact";

  navListEL.appendChild(navHome);
  navListEL.appendChild(navMenu);
  navListEL.appendChild(navContact);

  //   Styling content
  navEl.setAttribute("style", "display: flex");
  navListEL.setAttribute("style", "display: flex;");
})();

export { navigationBar };
