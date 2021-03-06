$(function () {
  createCategoryView();
}());

function createCategoryView() {
  $('#portfolio .-content a').click(function () {
    var $this = $(this),
      $body = $('body'),
      $categoryViewWrapper = $('<div/>'),
      $vMiddle = $('<div/>'),
      $categoryCoverImage = $('<div/>'),
      coverImageSrc = $this.find('img').attr('src'),
      $categoryHeadingWrapper = $('<div/>'),
      $closeView = $('<a/>'),
      $closeIcon = $('<img/>'),
      $categoryH3 = $('<h3/>'),
      categoryHeadingText = $this.find('.-caption').text().trim(),
      windowScrollTop = $(window).scrollTop();

    $categoryViewWrapper.attr('id', 'category-view')
      .addClass('-category-view')
      .addClass('-vbox')
      .addClass('-dark-bg')
      .css('top', windowScrollTop);

    $vMiddle.addClass('-table')
      .addClass('-v-middle');

    $categoryCoverImage.addClass('-section')
      .addClass('-category-heading')
      .addClass('-vbox')
      .css('background-image', 'url(' + coverImageSrc + ')');

    $categoryHeadingWrapper.addClass('-vbox-content')
      .addClass('-text-center')
      .addClass('-dark-overlay-3');

    $closeView.addClass('-close-view')
      .addClass('-margin-r-xl')
      .addClass('left');

    $closeIcon.addClass('-v-middle')
      .attr('src', 'lib/icons/close.svg')
      .attr('alt', 'Close icon');

    $categoryH3.addClass('-thin')
      .text(categoryHeadingText);

    // Append the category heading to the wrapper
    $closeView.append($closeIcon);
    $categoryHeadingWrapper.append($closeView);
    $categoryHeadingWrapper.append($categoryH3);
    $categoryCoverImage.append($categoryHeadingWrapper);
    $vMiddle.append($categoryCoverImage);

    var $imageRow = $('<div/>'),
      $colWrapper = $('<div/>'),
      $imageLink = $('<a/>'),
      $image = $('<img/>');

    $imageRow.addClass('row');
    $colWrapper.addClass('col')
      .addClass('l3')
      .addClass('m6')
      .addClass('s12');

    $imageLink.addClass('-lightbox')
      .addClass('text-center');

    $image.attr('src', coverImageSrc);

    // Append a column to the images row
    $imageLink.append($image);
    $colWrapper.append($imageLink);
    $imageRow.append($colWrapper);

    // Append main content wrappers to the category view container
    $categoryViewWrapper.append($vMiddle);
    $categoryViewWrapper.append($imageRow);

    // Append the category view div to the body
    $body.prepend($categoryViewWrapper)
      .addClass('-category-view-opened');

    // Fade in transition
    function smoothFadeIn () {
      $('#category-view').addClass('-active');
    }
    setTimeout(smoothFadeIn, 1);

    removeCategoryView();
    createLightbox();
  });
}

function removeCategoryView() {
  $('.-close-view').click(function () {
    var $body = $('body'),
      $categoryView = $('.-category-view');

    $categoryView.removeClass('-active');
    setTimeout(function () {
      $body.removeClass('-category-view-opened');
      $categoryView.remove();
    }, 700);
  });
}

function createLightbox() {
  $('.-category-view .row a').click(function () {
    var $this = $(this),
      imageSrc = $this.find('img').attr('src'),
      imageAlt = $this.find('img').attr('alt'),
      $lightboxWrapper = $('<div/>'),
      $vbox = $('<div/>'),
      $lightboxContentWrapper = $('<div/>'),
      $image = $('<img/>'),
      $closeView = $('<a/>'),
      $closeIcon = $('<img/>'),
      windowScrollTop = $(window).scrollTop();

    $lightboxWrapper.addClass('-dark-bg')
      .addClass('-overlay')
      .css('top', windowScrollTop);
    $vbox.addClass('-vbox');

    $lightboxContentWrapper.addClass('-vbox-content')
      .addClass('-text-center');
    $image.attr('src', imageSrc)
      .attr('alt', imageAlt);

    $closeView.addClass('-close-view')
      .addClass('-margin-r-xl')
      .addClass('left');

    $closeIcon.addClass('-v-middle')
      .attr('src', 'lib/icons/close.svg')
      .attr('alt', 'Close icon');

    $closeView.append($closeIcon);
    $lightboxContentWrapper.append($image);
    $lightboxWrapper.append($closeView);
    $vbox.append($lightboxContentWrapper);
    $lightboxWrapper.append($vbox);
    $('body').prepend($lightboxWrapper);

    // Fade in transition
    function smoothFadeIn () {
      $lightboxWrapper.addClass('-active');
    }
    setTimeout(smoothFadeIn, 1);

    removeLightbox();
  });
}

function removeLightbox () {
  $('.-overlay .-close-view').click(function () {
    var $overlay = $('.-overlay'),
      $categoryView = $('.-category-view');

    $overlay.removeClass('-active');
    setTimeout(function () {
      $overlay.remove();
    }, 900);
  });
}
