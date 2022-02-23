import Swiper from "swiper/bundle";
import "swiper/css/bundle";
import Choices from "choices.js";
import "choices.js/public/assets/styles/choices.min.css";

//слайдер на странице about.html--------------------------------------------
if (document.documentElement.id === "pageAbout") {
  const swiperAbout = new Swiper(".fam-swiper", {
    loop: true,
    pagination: {
      el: ".fam-pagination",
    },
    navigation: {
      nextEl: ".fam-btn-next",
      prevEl: ".fam-btn-prev",
    },
  });
}
//end of слайдер на странице about.html-------------------------------------

//Открытие модального окна на странице terms.html---------------------------
if (document.documentElement.id === "pageTerms") {
  const termsShowModal = document.querySelector("#termsShowModal");
  const termsOverlay = document.querySelector("#termsOverlay");
  const termsSvmClose = document.querySelector("#termsSvmClose");
  termsShowModal.addEventListener("click", () => {
    termsOverlay.classList.add("show");
  });

  termsSvmClose.addEventListener("click", () => {
    termsOverlay.classList.remove("show");
  });

  termsOverlay.addEventListener("click", (e) => {
    if (e.target === termsOverlay) {
      termsOverlay.classList.remove("show");
    }
  });
}

//end of Открытие модального окна на странице terms.html--------------------

//стилизация селекта на странице novelties.html-----------------------------
if (document.documentElement.id === "pageNovelties") {
  const novSelect = document.querySelector("#novSelect");
  const choises = new Choices(novSelect, {
    allowHTML: true,
    searchEnabled: false,
  });
}

//end of стилизация селекта на странице novelties.html----------------------

//стилизация селекта на странице actions.html-----------------------------
if (document.documentElement.id === "pageActions") {
  const selects = document.querySelectorAll(".actions-select-item");
  selects.forEach((item) => {
    const choises = new Choices(item, {
      allowHTML: true,
      searchEnabled: false,
    });
  });
}

//end of стилизация селекта на странице business.html----------------------

//слайдер на странице about.html--------------------------------------------
if (document.documentElement.id === "pageBusiness") {
  const swiperBusiness = new Swiper(".css-swiper", {
    loop: true,
    slidesPerView: 2,
    spaceBetween: 20,
    // pagination: {
    //   el: '.fam-pagination',
    // },
    navigation: {
      nextEl: '.css-btn-next',
      prevEl: '.css-btn-prev',
    },
  });
}
//end of слайдер на странице business.html-------------------------------------
