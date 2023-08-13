import image1 from "./images/facebook.png";
import image2 from "./images/instagram.png";
import image3 from "./images/twitter.png";
import image4 from "./images/whatsapp.png";

const addContact = (function () {
  const contentEL = document.querySelector("#content");

  const mainEl = document.createElement("div");
  contentEL.appendChild(mainEl);

  const mainContactEl = document.createElement("div");
  mainEl.appendChild(mainContactEl);
  const contactInfoEl = document.createElement("div");
  const socialMediaLinksEl = document.createElement("div");
  const contactInfo = {
    "Operating Hours": `mon/sun: 3pm till 12pm`,
    "Phone Number": "+1 (608) 251-1802",
    "E-mail": "info@DessertHavenDelights.com",
    Address: "707 S Mills St, Shadowfen Marshes, Kingdom of Eldoria",
    Directions: `Embark from serene Silverlake Village through Misty Mountains 
        to the magical Enchanted Valley. Reach bustling Emerald City, 
        then cross the open Whispering Plains. Explore chilling Frostbite 
        Caverns and shimmering Starfall Canyon. Relax on the Golden 
        Coastline before delving into mysterious Shadowfen Marshes.`,
    "Parking Information": `We offer valley parking for your horses, Pegasus Runner, 
        Unicorn Charger and Griffonsteed. Unfortunately we don't offer
        valley parking for Tamed Ogres.`,
  };

  mainContactEl.classList.add("contact");
  contentEL.appendChild(mainContactEl);

  contactInfoEl.classList.add("contactInfo");
  mainContactEl.appendChild(contactInfoEl);

  const contactTitle = document.createElement("h1");
  contactTitle.classList.add("contactTitle");
  contactTitle.textContent = "Dessert Haven Delights Contact";
  contactInfoEl.appendChild(contactTitle);

  let divC = [];
  let divCText = [];
  let h1C = [];
  let icons = [];
  let imagesAlt = ["facebook icon", "instagram icon", "whatsapp icon", "whatsapp icon"];
  let images = [image1, image2, image3, image4];

  for (let i = 0; i < 1; i++) {
    for (let items in contactInfo) {
      divC[i] = document.createElement("div");
      h1C[i] = document.createElement("h1");
      divCText[i] = document.createElement("div");

      divC[i].classList.add(`divContact${i}`);
      h1C[i].classList.add(`h1C${i}`);
      divCText[i].classList.add(`contactText${i}`);

      h1C[i].textContent = items;
      divCText[i].textContent = contactInfo[items];

      contactInfoEl.appendChild(divC[i]);
      divC[i].appendChild(h1C[i]);
      divC[i].appendChild(divCText[i]);
    }
  }

  socialMediaLinksEl.classList.add("socials");
  mainContactEl.appendChild(socialMediaLinksEl);

  const ourSocials = document.createElement("h1");
  ourSocials.classList.add("titleSocials");
  ourSocials.textContent = "Our Socials";
  socialMediaLinksEl.appendChild(ourSocials);

  for (let n = 0; n < 4; n++) {
    icons[n] = document.createElement("img");
    icons[n].classList.add(`icons${n}`);
    icons[n].alt = imagesAlt[n];
    icons[n].src = images[n];
    socialMediaLinksEl.appendChild(icons[n]);
  }

  const hide = () => {
    mainContactEl.setAttribute("style", "display: none");
  };

  const show = () => {
    mainContactEl.setAttribute("style", "display: block");
  };

  return { hide, show };
})();

export { addContact };
