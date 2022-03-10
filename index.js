const urlParams = new URLSearchParams(window.location.search);

const url = "https://kea22-7490.restdb.io/rest/customiseme?skip=4&max=4";

const products = {
  headers: {
    "x-apikey": "62274569dced170e8c83a054",
  },
};

fetch(url, products)
  .then((res) => res.json())
  .then((data) => handleFavourites(data));

function handleFavourites(data) {
  console.log(data);
  data.forEach(showFavourites);
}

function showFavourites(product) {
  // grab template
  const template = document.querySelector("template").content;

  // clone template
  const myClone = template.cloneNode(true);

  //  change content
  myClone.querySelector(".productName").textContent = product.productname;
  myClone.querySelector(".essential-oil-1").textContent =
    product.essentialoilname1;
  myClone.querySelector(".essential-oil-2").textContent =
    product.essentialoilname2;
  myClone.querySelector(
    "img"
  ).src = `http://carolinethostrup.dk/CustomiseMeImages/${product.imageurl}`;
  myClone.querySelector("img").alt = `${product.name}`;
  myClone
    .querySelector(".productButton")
    .setAttribute("href", `productPage.html?_id=${product._id}`);
  myClone.querySelector(".price").textContent = `DKK ${product.price},-`;

  // select parent & append
  const parent = document.querySelector("#favourites");
  parent.appendChild(myClone);
}

// burger button js

const showNav = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".menu");

  burger.addEventListener("click", () => {
    nav.classList.toggle("menu-active");
  });
};

showNav();

const text = document.querySelector("#circleText a");
text.innerHTML = text.innerText
  .split("")
  .map(
    (char, i) => `<span style="transform:rotate(${i * 9.5}deg)">${char}</span>`
  )
  .join("");
