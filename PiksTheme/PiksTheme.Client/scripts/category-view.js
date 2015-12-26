$(function () {
  showCategoryView();
  hideCategoryView();
}());

function showCategoryView() {
  $('#portfolio .-content a').click(function () {
    // var $body = $('body'),
    //   $categoryView = $('.-category-view'),
    //   $header = $('#home');
    //
    // if ($categoryView.hasClass('-active')) {
    //   $categoryView.removeClass('-active');
    //   setTimeout(function () {
    //     $body.removeClass('-category-view-opened');
    //   }, 500);
    //   $header.removeClass('-hide');
    // } else {
    //   $categoryView.addClass('-active');
    //   $body.addClass('-category-view-opened');
    //   $header.addClass('-hide');
    // }

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

    $image.attr('src', '');

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
  });
}

function hideCategoryView() {
  $('.-close-view').click(function () {
    var $body = $('body'),
      $categoryView = $('.-category-view');

    $categoryView.removeClass('-active');
    setTimeout(function () {
      $body.removeClass('-category-view-opened');
    }, 700);
    $categoryView.remove();
  });
}

/* <div id="category-view" class="-category-view -vbox -dark-bg">
  <div class="-dark-bg -overlay -vbox">
    <div class="-vbox-content">
    </div>
  </div>
  <div class="-table -v-middle">
    <div class="-section -category-heading -vbox" data-image="images/header-image-1.jpg">
      <div class="-vbox-content -text-center -dark-overlay-5">
        <a class="-close-view -margin-r-xl left">
          <img class="-v-middle" src="lib/icons/close.svg" alt="Arrow Right">
        </a>
        <h3 class="-thin">Sample Category</h3>
      </div>
    </div>
    <div class="row">
      <div class="col l3 m6 s12">
        <a href="#" class="-lightbox -text-center">
          <img src="images/portfolio-image-1.jpg" alt="">
        </a>
      </div>
      <div class="col l3 m6 s12">
        <a href="#category-view" class="-lightbox -text-center">
          <img src="images/portfolio-image-2.jpg" alt="">
        </a>
      </div>
      <div class="col l3 m6 s12">
        <a href="#category-view" class="-lightbox -text-center">
          <img src="images/portfolio-image-3.jpg" alt="">
        </a>
      </div>
      <div class="col l3 m6 s12">
        <a href="#category-view" class="-lightbox -text-center">
          <img src="images/portfolio-image-4.jpg" alt="">
        </a>
      </div>
      <div class="col l3 m6 s12">
        <a href="#category-view" class="-lightbox -text-center">
          <img src="images/portfolio-image-3.jpg" alt="">
        </a>
      </div>
      <div class="col l3 m6 s12">
        <a href="#category-view" class="-lightbox -text-center">
          <img src="images/portfolio-image-2.jpg" alt="">
        </a>
      </div>
      <div class="col l3 m6 s12">
        <a href="#category-view" class="-lightbox -text-center">
          <img src="images/portfolio-image-1.jpg" alt="">
        </a>
      </div>
      <div class="col l3 m6 s12">
        <a href="#category-view" class="-lightbox -text-center">
          <img src="images/portfolio-image-2.jpg" alt="">
        </a>
      </div>
    </div>
  </div>
</div> */
