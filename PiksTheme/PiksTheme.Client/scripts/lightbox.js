$(function () {
  showLightbox();
  hideLightbox();
}());

function showLightbox() {
  $('.-category-view img').click(function () {
    var $this = $(this),
      windowTop = $(window).scrollTop(),
      currentImageSrc = $this.attr('src'),
      $categoryView = $('.-category-view'),
      $overlay = $('.-category-view .-overlay');

      console.log(windowTop);

    if ($overlay.hasClass('-active')) {
      $categoryView.css('overflow', 'scroll');
      $overlay.removeClass('-active');
      $overlay.css('top', windowTop);
    }
    else {
      $categoryView.css('overflow', 'hidden');
      $overlay.addClass('-active');
      $overlay.css('top', windowTop);
    }
  });
}

function hideLightbox() {
  $('.-close-view').click(function () {

  });
}
