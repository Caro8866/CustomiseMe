const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("_id");

const url = "https://kea22-7490.restdb.io/rest/customiseme/" + id;

const products = {
  headers: {
    "x-apikey": "62274569dced170e8c83a054",
  },
};

fetch(url, products)
  .then((res) => res.json())
  .then((data) => showProduct(data));

function showProduct(product) {
  console.log(product);

  // change content
  document.querySelector(
    ".productImage"
  ).src = `http://carolinethostrup.dk/CustomiseMeImages/${product.imageurl}`;
  document.querySelector(".productImage").alt = product.productname;
  document.querySelector(".product-name").textContent = product.productname;
  document.querySelector(".productName").textContent = product.productname;
  document.querySelector(".productIngredients").textContent =
    product.ingredients;
  document.querySelector(
    ".productColour"
  ).textContent = `Colour: ${product.color}`;
  document.querySelector(
    ".productWeight"
  ).textContent = `Weight: ${product.weight}g`;
  document.querySelector(
    ".productPrice"
  ).textContent = `DKK ${product.price},-`;

  document.querySelector(".butter1").textContent = product.buttername1;
  document.querySelector(".butter2").textContent = product.buttername2;
  document.querySelector(".butter3").textContent = product.buttername3;
  document.querySelector(".butter1_benefit").textContent = product.buttersdesc1;
  document.querySelector(".butter2_benefit").textContent = product.butterdesc2;
  document.querySelector(".butter3_benefit").textContent = product.butterdesc3;

  document.querySelector(".essentialOil1").textContent =
    product.essentialoilname1;
  document.querySelector(".essentialOil2").textContent =
    product.essentialoilname2;
  document.querySelector(".essentialOil1_benefit").textContent =
    product.essentialoildesc1;
  document.querySelector(".essentialOil2_benefit").textContent =
    product.essentialoildesc2;

  // change meta title
  document.querySelector(
    "head title"
  ).textContent = `Customise Me | ${product.productname}`;
}
