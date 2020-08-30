const hiddenNav = document.querySelector(".hidden-nav");
const navBtn = document.querySelector(".nav-button-container");
const closeBtn = document.querySelector(".close-btn");

navBtn.addEventListener("click", () => {
  hiddenNav.classList.add("toggle");
});
closeBtn.addEventListener("click", () => {
  hiddenNav.classList.remove("toggle");
});
