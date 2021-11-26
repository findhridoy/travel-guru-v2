/**======== CHANGE HEADER BACKGROUND ==========*/
const header = document.getElementById("header");
const navMenu = document.getElementById("nav__menu");
function changeBackground() {
  if (this.scrollY >= 80) {
    header.classList.add("scroll-header");
    navMenu.classList.add("show-navMenu");
  } else {
    header.classList.remove("scroll-header");
    navMenu.classList.remove("show-navMenu");
  }
}
window.addEventListener("scroll", changeBackground);
