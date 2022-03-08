const urlParams = new URLSearchParams(window.location.search);

const url = "https://kea22-7490.restdb.io/rest/customiseme";

const products = {
  headers: {
    "x-apikey": "62274569dced170e8c83a054",
  },
};

fetch(url, products)
  .then((res) => res.json())
  .then((data) => handleProductList(data));

function handleProductList(data) {
  console.log(data);
  data.forEach(showProduct);
}

function showProduct(product) {
  // grab template
  const template = document.querySelector("template").content;

  // clone template
  const myClone = template.cloneNode(true);

  // change content
  myClone.querySelector(".productName").textContent = product.productname;
  myClone.querySelector(".essential-oil-1").textContent =
    product.essentialoilname1;
  myClone.querySelector(".essential-oil-2").textContent =
    product.essentialoilname2;
  myClone.querySelector(
    "img"
  ).src = `http://carolinethostrup.dk/CustomiseMeImages/${product.imageurl}`;
  myClone
    .querySelector(".productButton")
    .setAttribute("href", `productPage.html?id=${product._id}`);

  // select parent & append
  const parent = document.querySelector("main");
  parent.appendChild(myClone);
}
