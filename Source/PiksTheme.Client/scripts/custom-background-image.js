$(function () {
  $('.-section').each(function () {
    var $this = $(this),
      hasDataImage = $this.attr('data-image');

    if (hasDataImage) {
      $this.css('background-image', 'url(' + hasDataImage + ')');
    }
  });
}());
