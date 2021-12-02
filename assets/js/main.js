/**======== CHANGE HEADER BACKGROUND ==========*/
const header = document.getElementById("header");
const navMenu = document.getElementById("nav__menu");
function changeHeaderBg() {
  if (this.scrollY >= 50) {
    header.classList.add("scroll-header");
    navMenu.classList.add("show-navMenu");
  } else {
    header.classList.remove("scroll-header");
    navMenu.classList.remove("show-navMenu");
  }
}
window.addEventListener("scroll", changeHeaderBg);

/**======== SWIPER ==========*/
var swiper = new Swiper(".discover__container", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  loop: true,
  spaceBetween: 40,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: false,
  },
});

/**======== VIDEO ==========*/
const videoFile = document.getElementById("video-file");
const videoButton = document.getElementById("video-button");
const videoButtonIcon = document.getElementById("video-button-icon");

function playPause() {
  if (videoFile.paused) {
    videoFile.play();
    videoButtonIcon.classList.add("bx-pause");
    videoButtonIcon.classList.remove("bx-play");
  } else {
    videoFile.pause();
    videoButtonIcon.classList.remove("bx-pause");
    videoButtonIcon.classList.add("bx-play");
  }
}

videoButton.addEventListener("click", playPause);

function endedVideo() {
  videoButtonIcon.classList.remove("bx-pause");
  videoButtonIcon.classList.add("bx-play");
}
videoFile.addEventListener("ended", endedVideo);

/**======== SCROLL UP ==========*/
const scollUp = document.getElementById("scroll--up");

function showScroll() {
  if (this.scrollY >= 200) {
    scollUp.classList.add("show--scroll");
  } else {
    scollUp.classList.remove("show--scroll");
  }
}
window.addEventListener("scroll", showScroll);

/**======== DARK THEME ==========*/
const icon = document.getElementById("mood--icon");

function changeTheme() {
  document.body.classList.toggle("dark--theme");

  if (document.body.classList.contains("dark--theme")) {
    icon.classList.add("bx-sun");
    icon.classList.remove("bx-moon");
  } else {
    icon.classList.remove("bx-sun");
    icon.classList.add("bx-moon");
  }
}
icon.addEventListener("click", changeTheme);
