var mobileWidth = 767;
var tabletWidth = 768;
var deviceWidth = document.body.clientWidth;

// Menu

var navBlock = document.querySelector('.main-nav');
var navButton = document.querySelector('.page-header__nav-toggle');
var navBurger = document.querySelector('.page-header__nav-open');
var navClose = document.querySelector('.page-header__nav-close');

navButton.classList.remove('page-header__nav-toggle--active');
navBurger.classList.remove('page-header__nav-icon--active');
navClose.classList.remove('page-header__nav-icon--active');

if (deviceWidth <= mobileWidth) {
  navBlock.classList.remove('main-nav--active');
  navButton.classList.add('page-header__nav-toggle--active');
  navBurger.classList.add('page-header__nav-icon--active');
  navClose.classList.remove('page-header__nav-icon--active');

  navButton.addEventListener('click', function() {
    if (navBlock.classList.contains('main-nav--active')) {
      navBlock.classList.remove('main-nav--active');
      navBurger.classList.add('page-header__nav-icon--active');
      navClose.classList.remove('page-header__nav-icon--active');
    } else {
      navBlock.classList.add('main-nav--active');
      navBurger.classList.remove('page-header__nav-icon--active');
      navClose.classList.add('page-header__nav-icon--active');
    }
  })
}


// Example block/slider

var progress = document.querySelector('.example__progress');

if (progress) {
  var buttonBefore = progress.querySelector('.example__progress-button--before');
  var buttonAfter = progress.querySelector('.example__progress-button--after');

  buttonBefore.addEventListener('click', function() {
    if (progress.classList.contains('example__progress--after')) {
      progress.classList.remove('example__progress--after');
    }
  })

  buttonAfter.addEventListener('click', function() {
    if (!progress.classList.contains('example__progress--after')) {
      progress.classList.add('example__progress--after');
    }
  })

  if (deviceWidth >= tabletWidth) {
    var imageBefore = progress.querySelector('.example__illustration--before');
    var imageAfter = progress.querySelector('.example__illustration--after');
    var scale = progress.querySelector('.example__progress-bar');
    var range = scale.querySelector('.example__range');

    range.addEventListener('input', function() {
      imageBefore.style.width = (100 - range.value) + '%';
      imageAfter.style.width = range.value + '%';
    })

    buttonBefore.addEventListener('click', function () {
      imageBefore.style.width = '100%';
      imageAfter.style.width = '0%';
      range.value = 0;
    })

    buttonAfter.addEventListener('click', function () {
      imageBefore.style.width = '0%';
      imageAfter.style.width = '100%';
      range.value = 100;
    })
  }
}
