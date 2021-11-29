/**======== CHANGE HEADER BACKGROUND ==========*/
const header = document.getElementById("header");
const navMenu = document.getElementById("nav__menu");
function changeHeaderBg() {
  if (this.scrollY >= 70) {
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
