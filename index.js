

const menu = document.querySelector('.menu__burger')

if (menu) {
    const menuBody = document.querySelector('.menu__body')
    menu.addEventListener('click', function (e) {
      document.body.classList.toggle('lock') 
      menu.classList.toggle('active')
      menuBody.classList.toggle('active')
    })
}

var swiper = new Swiper(".mySwiper", {
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: 0,
        pagination: {
          type: "fraction",
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },

        pagination: {
              el: ".swiper-pagination",
              type: "fraction",
          },

        
      });

      var appendNumber = 4;
      var prependNumber = 1;
      document
        .querySelector(".prepend-2-slides")
        .addEventListener("click", function (e) {
          e.preventDefault();
          swiper.prependSlide([
            '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
            '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
          ]);
        });
      document
        .querySelector(".prepend-slide")
        .addEventListener("click", function (e) {
          e.preventDefault();
          swiper.prependSlide(
            '<div class="swiper-slide">Slide ' + --prependNumber + "</div>"
          );
        });
      document
        .querySelector(".append-slide")
        .addEventListener("click", function (e) {
          e.preventDefault();
          swiper.appendSlide(
            '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>"
          );
        });
      document
        .querySelector(".append-2-slides")
        .addEventListener("click", function (e) {
          e.preventDefault();
          swiper.appendSlide([
            '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
            '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
          ]);
        }); var swiper = new Swiper(".mySwiper", {
          slidesPerView: 3,
          centeredSlides: true,
          spaceBetween: 30,
          pagination: {
            el: ".swiper-pagination",
            type: "fraction",
          },
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
        });

var appendNumber = 4;
var prependNumber = 1;
document
  .querySelector(".prepend-2-slides")
  .addEventListener("click", function (e) {
    e.preventDefault();
    swiper.prependSlide([
      '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
      '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
    ]);
  });
document
  .querySelector(".prepend-slide")
  .addEventListener("click", function (e) {
    e.preventDefault();
    swiper.prependSlide(
      '<div class="swiper-slide">Slide ' + --prependNumber + "</div>"
    );
  });
document
  .querySelector(".append-slide")
  .addEventListener("click", function (e) {
    e.preventDefault();
    swiper.appendSlide(
      '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>"
    );
  });
document
  .querySelector(".append-2-slides")
  .addEventListener("click", function (e) {
    e.preventDefault();
    swiper.appendSlide([
      '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
      '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
    ]);
  });

