document
  .querySelector("#cedarButton")
  .addEventListener("click", cedarBackground);

document
  .querySelector("#sandalButton")
  .addEventListener("click", sandalBackground);

document
  .querySelector("#bergamotButton")
  .addEventListener("click", bergamotBackground);

document
  .querySelector("#orangeSweetButton")
  .addEventListener("click", orangeSweetBackground);

document
  .querySelector("#rosemaryButton")
  .addEventListener("click", rosemaryBackground);

document
  .querySelector("#cinnamonButton")
  .addEventListener("click", cinnamonBackground);

document
  .querySelector("#cinnamonButton")
  .addEventListener("click", cinnamonBackground);

document.querySelector("#resetButton").addEventListener("click", reset);
document.querySelector("#createButton").addEventListener("click", reset);
function cedarBackground() {
  console.log("cedarBackground");
  document
    .querySelector("#changingSoap")
    .classList.remove("orangeSweetBackground");
  document
    .querySelector("#changingSoap")
    .classList.remove("bergamotBackground");
  document.querySelector("#changingSoap").classList.remove("sandalBackground");
  document.querySelector("#changingSoap").classList.add("cedarBackground");
}

function sandalBackground() {
  console.log("sandalBackground");

  document.querySelector("#changingSoap").classList.remove("cedarBackground");
  document.querySelector("#changingSoap").classList.add("sandalBackground");
}

function bergamotBackground() {
  console.log("bergamotBackground");
  document
    .querySelector("#changingSoap")
    .classList.remove("orangeSweetBackground");
  document
    .querySelector("#changingSoap")
    .classList.remove("rosemaryBackground");
  document.querySelector("#changingSoap").classList.remove("cedarBackground");
  document.querySelector("#changingSoap").classList.remove("sandalBackground");
  document
    .querySelector("#changingSoap")
    .classList.remove("cinnamonBackground");
  document.querySelector("#changingSoap").classList.add("bergamotBackground");
}

function orangeSweetBackground() {
  console.log("orangeSweetBackground");
  document
    .querySelector("#changingSoap")
    .classList.remove("bergamotBackground");
  document
    .querySelector("#changingSoap")
    .classList.remove("rosemaryBackground");
  document.querySelector("#changingSoap").classList.remove("cedarBackground");
  document.querySelector("#changingSoap").classList.remove("sandalBackground");
  document
    .querySelector("#changingSoap")
    .classList.remove("cinnamonBackground");
  document
    .querySelector("#changingSoap")
    .classList.add("orangeSweetBackground");
}

function rosemaryBackground() {
  console.log("rosemaryBackground");
  document
    .querySelector("#changingSoap")
    .classList.remove("bergamotBackground");
  document
    .querySelector("#changingSoap")
    .classList.remove("orangeSweetBackground");
  document.querySelector("#changingSoap").classList.remove("cedarBackground");
  document.querySelector("#changingSoap").classList.remove("sandalBackground");
  document
    .querySelector("#changingSoap")
    .classList.remove("cinnamonBackground");
  document.querySelector("#changingSoap").classList.add("rosemaryBackground");
}

function cinnamonBackground() {
  console.log("cinnamonBackground");
  document
    .querySelector("#changingSoap")
    .classList.remove("bergamotBackground");
  document
    .querySelector("#changingSoap")
    .classList.remove("orangeSweetBackground");
  document.querySelector("#changingSoap").classList.remove("cedarBackground");
  document.querySelector("#changingSoap").classList.remove("sandalBackground");
  document
    .querySelector("#changingSoap")
    .classList.remove("rosemaryBackground");
  document.querySelector("#changingSoap").classList.add("cinnamonBackground");
}

function reset() {
  document
    .querySelector("#changingSoap")
    .classList.remove("bergamotBackground");
  document
    .querySelector("#changingSoap")
    .classList.remove("orangeSweetBackground");
  document.querySelector("#changingSoap").classList.remove("cedarBackground");
  document.querySelector("#changingSoap").classList.remove("sandalBackground");
  document
    .querySelector("#changingSoap")
    .classList.remove("rosemaryBackground");
  document
    .querySelector("#changingSoap")
    .classList.remove("cinnamonBackground");
}
