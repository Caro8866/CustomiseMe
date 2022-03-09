// burger button js

const showNav = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".menu");

  burger.addEventListener("click", () => {
    nav.classList.toggle("menu-active");
  });
};

showNav();
