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
