$(document).ready(function() {
  var counter = 0,
    $slides = $('.-slides li');

  setControllers($slides);
  resizeSlider();

  $('.-controllers .-button').click(function () {
    var $this = $(this),
      $dataTarget = $this.attr('data-target');

    $slides.css('opacity', 0);
    $('#' + $dataTarget).css('visibility', 'hidden');
    $('#' + $dataTarget).css('opacity', 1);
    $('#' + $dataTarget).css('visibility', 'visible');

    $('.-controllers .-button').removeClass('-active');
    $this.addClass('-active');
  });
}());

function setControllers($slides) {
  var $controllersWrapper = $('<div/>');
  $controllersWrapper
    .addClass('-margin-t-m')
    .addClass('-controllers')
    .addClass('-table-row')
    .addClass('-about-text')
    .addClass('-margin-atuo')
    .addClass('-text-center');

  $slides.each(function (index) {
    var $currentId = $($slides[index]).attr('id'),
      $currentController = $('<a/>');

    $currentController
      .attr('data-target', $currentId)
      .addClass('-button')
      .addClass('-circle')
      .addClass('-line');

    if (index === 0) {
      $currentController.addClass('-active');
      $($slides[index]).addClass('-active');
    }
    $currentController.appendTo($controllersWrapper);
  });

  $controllersWrapper.appendTo('.-slider');
}

function resizeSlider() {
  var maxHeight = 0,
    $slides = $('.-slides .-slide');

  $slides.each(function (index) {
    var $currentSlide = $($slides[index]),
      $currentSlideHeight = $currentSlide.height();

    if ($currentSlideHeight > maxHeight) {
      maxHeight = $currentSlideHeight;
    }
  });

  $slides.height(maxHeight);
}
