"use strict";

var myWidth = window.innerWidth,
    myHeight = window.innerHeight;
console.log("width ".concat(myWidth, " \n height ").concat(myHeight));
document.querySelector('html').style.overflowY = 'hidden';

window.onload = function () {
  setTimeout(function () {
    document.querySelector('.loader').style.cssText = 'opacity: 0; z-index: -5;';
    document.querySelector('html').style.overflowY = 'scroll';
  }, 2000);
  /*
      increase date
   */

  var today = new Date(),
      tomorrow = new Date(),
      day,
      month,
      year,
      i = 3,
      period = document.querySelectorAll('h6 output');
  tomorrow.setDate(today.getDate() + i);
  day = tomorrow.getDate() > 9 ? tomorrow.getDate() : "0".concat(tomorrow.getDate());
  month = tomorrow.getMonth() + 1 > 9 ? tomorrow.getMonth() + 1 : "0".concat(tomorrow.getMonth() + 1);
  year = tomorrow.getFullYear();

  for (var _i = 0; _i < period.length; _i++) {
    period[_i].innerHTML = "".concat(day, ".").concat(month, ".").concat(year.toString().slice(2));
  }

  document.querySelector('h6.address b').innerHTML = year;
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
  });
  /*
      catalog change color
   */

  var color = document.querySelectorAll('.catalog figure span'),
      title = document.querySelector('.catalog__block.foggia .catalog__block-model h4 output'),
      block = document.querySelector('.catalog__block.foggia .catalog__block-model .catalog__block-model__img'),
      photo = document.querySelectorAll('.catalog__block.foggia .catalog__block-model .catalog__block-model__img img'),
      link = document.querySelectorAll('.catalog__block.foggia .catalog__block-model .catalog__block-model__img a');

  var _loop = function _loop(_i2) {
    var _loop2 = function _loop2(j) {
      color[j].addEventListener('click', function () {
        var activeColor = color[j].className;
        var activeModel = color[j].dataset.color;

        color[_i2].classList.remove('active');

        color[j].classList.add('active');
        block.style.opacity = '0';
        title.style.opacity = '0';
        setTimeout(function () {
          title.innerHTML = activeModel;

          for (var _i3 = 0; _i3 < link.length; _i3++) {
            link[_i3].href = "img/catalog/".concat(activeModel, "/").concat(_i3 + 1, "-1000.jpg");
            photo[_i3].src = "img/catalog/".concat(activeModel, "/").concat(_i3 + 1, ".jpg");
          }
        }, 600);
        setTimeout(function () {
          title.style.opacity = '1';
          block.style.opacity = '1';
        }, 700);
      });
    };

    for (var j = 0; j < color.length; j++) {
      _loop2(j);
    }
  };

  for (var _i2 = 0; _i2 < color.length; _i2++) {
    _loop(_i2);
  } // const headerImage = document.querySelector('.header__content-img figure img'),
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

  /*
      feedback
   */

  /*
      send feedback
   */


  var bodyFilter = document.querySelector('.body-filter'),
      openFeedback = document.querySelector('h6.send'),
      closeFeedback = document.querySelector('span.close'),
      feedback = document.querySelector('.feedback'),
      feedbackTitle = document.querySelector('.feedback p'),
      feedbackForm = document.querySelector('.feedback form'),
      inputValue = document.querySelector('.feedback form input'),
      textareaValue = document.querySelector('.feedback form textarea'),
      changeForm = function changeForm() {
    inputValue.value = '';
    textareaValue.value = '';
    feedbackTitle.style.display = 'none';
    feedbackForm.style.display = 'block';
  },
      toggleFeedback = function toggleFeedback(toggle) {
    if (toggle === false) {
      document.querySelector('html').style.overflowY = 'hidden';
      bodyFilter.style.cssText = 'z-index: 9999; background: rgba(0, 0, 0, 0.8)';
      feedback.style.cssText = 'opacity: 1; z-index: 99999;   transform: translate(-50%, -50%) rotateX(0deg);';
    } else {
      document.querySelector('html').style.overflowY = 'scroll';
      bodyFilter.style.cssText = 'z-index: -5; background: rgba(0, 0, 0, 0)';
      feedback.style.cssText = 'opacity: 0; z-index: -5;   transform: translate(-50%, -50%) rotateX(-90deg);';
      setTimeout(changeForm, 500);
    }
  };

  inputValue.addEventListener('change', function () {
    inputValue.value;
  });
  textareaValue.addEventListener('change', function () {
    textareaValue.value;
  });
  feedbackForm.addEventListener('submit', function (e) {
    e.preventDefault();
    feedback.style.opacity = '0';
    setTimeout(function () {
      feedbackForm.style.display = 'none';
      feedbackTitle.style.display = 'block';
    }, 500);
    setTimeout(function () {
      feedback.style.opacity = '1';
    }, 600);
  });
  openFeedback.addEventListener('click', function () {
    toggleFeedback(false);
  });
  closeFeedback.addEventListener('click', function () {
    toggleFeedback(true);
  });
  bodyFilter.addEventListener('click', function () {
    toggleFeedback(true);
  });
  /*
      toggle bucket
   */

  var toggleBucket = function toggleBucket() {
    var bucket = document.querySelector('a.bucket'),
        topOfWindow = window.pageYOffset + innerHeight,
        catalogTopPosition = document.querySelector('.catalog').offsetTop,
        photoTopPosition = document.querySelector('.photo').offsetTop,
        footerLink = $('h6.address').offset().top;

    if (topOfWindow > catalogTopPosition && topOfWindow < photoTopPosition || topOfWindow > footerLink) {
      bucket.style.cssText = 'opacity: 0; z-index: -5;';
    } else {
      bucket.style.cssText = 'opacity: 1; z-index: 9999;';
    }
  };
  /*
      slow scroll
   */


  var slowScroll = function slowScroll(href) {
    $('a.to-order, a.bucket').on('click', function () {
      $('html, body').animate({
        scrollTop: href
      }, 800);
      return false;
    });
  };

  if (/iPhone|iPod|iPad|Android/i.test(navigator.userAgent)) {
    var href = $('#mobile-order').offset().top - innerHeight;
    slowScroll(href);
    window.addEventListener('scroll', function () {
      toggleBucket();
    });
    window.addEventListener('resize', function () {
      toggleBucket();
    });
  } else {
    var _href = $('#catalog').offset().top;
    slowScroll(_href);
  }
};