// CREATE CUSTOM SOAP BUTTON JS

const customText = document.querySelector(".customText");
customText.innerHTML = customText.innerText
  .split("")
  .map(
    (char, i) => `<span style="transform:rotate(${i * 8.5}deg)">${char}</span>`
  )
  .join("");
