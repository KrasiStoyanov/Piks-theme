$(function () {
  showMenu();
  hideMenu();
  changeBackgroundColor();
}());

function showMenu() {
  $('.-button-collapse').click(function () {
    var $body = $('body'),
      $sideNav = $('.-side-nav');

    if ($sideNav.hasClass('-active')) {
      $sideNav.removeClass('-active');
      $body.removeClass('-menu-opened');
    } else {
      $sideNav.addClass('-active');
      $body.addClass('-menu-opened');
    }
  });
}

function hideMenu() {
  var $body = $('body'),
    $sideNav = $('.-side-nav');

  $('.-close-nav').click(function () {
    $sideNav.removeClass('-active');
    $body.removeClass('-menu-opened');
  });

  $('.-side-nav li a').click(function () {
    $sideNav.removeClass('-active');
    $body.removeClass('-menu-opened');
  });
}

function changeBackgroundColor() {
  var $window = $(window),
    $headerOffset = $('header').offset(),
    $navbar = $('nav');

  $window.scroll(function () {
    if ($window.scrollTop() > $headerOffset.top + 80) {
      $navbar.addClass('-dark-overlay-9');
    }
    else {
      $navbar.removeClass('-dark-overlay-9');
    }
  });
}
