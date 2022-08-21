const nav = document.getElementById("navbar");
const limit = 80;

const darkNavToggler =
  "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%280, 0, 0, 0.55%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e";
const lightNavToggler =
  "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 0.55%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e";
const navTogglerIcon = nav.querySelector(".navbar-toggler-icon");

document.querySelector(".navbar-toggler").addEventListener("click", (e) => {
  nav.classList.remove("bg-trans");
  navTogglerIcon.style.backgroundImage = `url("${darkNavToggler}")`;
});

document.addEventListener("scroll", changeNavTheme);
document.addEventListener("DOMContentLoaded", changeNavTheme);



let carouselSetting = {
  direction: "ttb",
  type: "loop",
  height: "30rem",
  pagination: false,
  arrows: false,
  perPage: 2.5,
  perMove: 1,
  drag: "free",

  autoScroll: {
    speed: 1,
    autoStart: true,
  },
  breakpoints: {
    1200: {
      direction: "ltr",
      perPage: 2,
      height: "auto",
      padding: false,

      autoScroll: {
        speed: 1,
      },
    },
  },
};

let carouselSetting2 = {
  ...carouselSetting,
  autoScroll: { ...carouselSetting.autoScroll, speed: .8 },
  breakpoints: {
    ...carouselSetting.breakpoints,
    1200: {
      direction: "ltr",
      perPage: 2,
      height: "auto",
      padding: false,
      autoScroll: {
        speed: .8,
      },
    },
  },
};

const splideVert1 = new Splide("#splideVertCar1", carouselSetting);
const splideVert2 = new Splide("#splideVertCar2", carouselSetting2);

splideVert1.mount(window.splide.Extensions);
splideVert2.mount(window.splide.Extensions);

function changeNavTheme() {

  if (
    document.body.scrollTop > limit ||
    document.documentElement.scrollTop > limit
  ) {
    nav.classList.remove("bg-trans");
    navTogglerIcon.style.backgroundImage = `url("${darkNavToggler}")`;
  } else {
    if (document.getElementById("navbarNavDropdown").classList.contains("show"))
      return;

    nav.classList.add("bg-trans");
    navTogglerIcon.style.backgroundImage = `url("${lightNavToggler}")`;
  }
}
