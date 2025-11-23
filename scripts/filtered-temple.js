const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },

  // ⭐ NEW TEMPLES ADDED ⭐
  {
    templeName: "Rome Italy",
    location: "Rome, Italy",
    dedicated: "2019, March, 12",
    area: 41010,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/rome-italy/2019/400x250/2-Rome-Temple-2190090.jpg"
  },
  {
    templeName: "Paris France",
    location: "Le Chesnay, France",
    dedicated: "2017, May, 21",
    area: 44175,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/paris-france/2018/400x250/Paris-Temple02.jpg"
  },
  {
    templeName: "Tokyo Japan",
    location: "Tokyo, Japan",
    dedicated: "1980, October, 27",
    area: 53900,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/tokyo-japan/200x320/tokyo_japan_temple-main.jpeg"
  }
];

// const container = document.getElementById("templeCards");

// temples.forEach(temple => {
//   const card = document.createElement("section");
//   card.classList.add("temple-card");

//   card.innerHTML = `
//     <h2>${temple.templeName}</h2>
//     <p><strong>Location:</strong> ${temple.location}</p>
//     <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
//     <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
//     <img src="${temple.imageUrl}" 
//          alt="${temple.templeName}" 
//          loading="lazy">
//   `;

//   container.appendChild(card);
// });


// ============================
// Helper: Convert "YYYY, Month, Day" to year
// ============================
function getYear(dateString) {
  return parseInt(dateString.split(",")[0]);
}

// ============================
// Render Temple Cards
// ============================
const container = document.getElementById("templeCards");

function displayTemples(filteredList) {
  container.innerHTML = ""; // Clear existing cards

  filteredList.forEach((temple) => {
    const card = document.createElement("section");
    card.classList.add("temple-card");

    card.innerHTML = `
      <h2>${temple.templeName}</h2>
      <p><strong>Location:</strong> ${temple.location}</p>
      <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
      <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
      <img src="${temple.imageUrl}" 
           alt="${temple.templeName}" 
           loading="lazy">
    `;

    container.appendChild(card);
  });
}

// ============================
// FILTER FUNCTIONS
// ============================
function showAll() {
  displayTemples(temples);
}

function showOld() {
  const oldTemples = temples.filter(t => getYear(t.dedicated) < 1900);
  displayTemples(oldTemples);
}

function showNew() {
  const newTemples = temples.filter(t => getYear(t.dedicated) > 2000);
  displayTemples(newTemples);
}

function showLarge() {
  const largeTemples = temples.filter(t => t.area > 90000);
  displayTemples(largeTemples);
}

function showSmall() {
  const smallTemples = temples.filter(t => t.area < 10000);
  displayTemples(smallTemples);
}

// ============================
// NAVIGATION EVENT LISTENERS
// ============================
document.querySelector("nav a:nth-of-type(1)").addEventListener("click", showAll);
document.querySelector("nav a:nth-of-type(2)").addEventListener("click", showOld);
document.querySelector("nav a:nth-of-type(3)").addEventListener("click", showNew);
document.querySelector("nav a:nth-of-type(4)").addEventListener("click", showLarge);
document.querySelector("nav a:nth-of-type(5)").addEventListener("click", showSmall);

// Close menu after a link is clicked (mobile behavior)
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("show");
  });
});

// Load ALL temples on startup
showAll();



// MOBILE NAV MENU TOGGLE
const menuOn = document.getElementById("toggle-menu-on");
const menuOff = document.getElementById("toggle-menu-off");
const nav = document.querySelector("nav");

menuOn.addEventListener("click", () => {
  nav.classList.add("show");
});

menuOff.addEventListener("click", () => {
  nav.classList.remove("show");
});
