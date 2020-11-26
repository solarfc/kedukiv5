"use strict";

var myWidth = window.innerWidth,
    myHeight = window.innerHeight;
console.log("width ".concat(myWidth, " \n height ").concat(myHeight));

window.onload = function () {
  /*
      fancybox settings
   */
  $.fancybox.defaults.loop = true;
  $.fancybox.defaults.animationEffect = 'fade';
  /*
      form styler
   */

  $(function () {
    $('select').styler({
      selectSmartPositioning: false
    });
  });
  /*
      review slider
   */

  $('.review__content-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    rows: 0,
    speed: 300,
    arrows: true,
    prevArrow: $('.prev-arrow'),
    nextArrow: $('.next-arrow')
  }); // const headerImage = document.querySelector('.header__content-img figure img'),
  //     toggleImage = () => {
  //         headerImage.style.opacity = '0';
  //         setTimeout(() => {
  //             headerImage.src = 'img/header/shoe-second.png';
  //         }, 1600);
  //         setTimeout(() => {
  //             headerImage.style.opacity = '1';
  //         }, 1700);
  //         setTimeout(() => {
  //             headerImage.style.opacity = '0';
  //         },3200);
  //         setTimeout(() => {
  //             headerImage.src = 'img/header/shoe-first.png';
  //         }, 4800);
  //         setTimeout(() => {
  //             headerImage.style.opacity = '1';
  //         }, 6300);
  //     }
  //     setInterval(toggleImage, 10000);
  // setInterval(toggleImage, 2000);
  // console.log(obj);
  // /*
  //     change href on mobile
  //  */
  //
  // if(/iPhone|iPod|Android/i.test(navigator.userAgent)){
  //     document.querySelector('a.grande').href = '#formgrande';
  //     document.querySelector('a.lake').href = '#formlake';
  //     document.querySelector('a.lou').href = '#formlou';
  // }
};