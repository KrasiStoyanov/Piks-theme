
(function() {
  'use strict';

  function categoryView(categories) {
    return {
      restrict: 'A',
      templateUrl: 'views/directives/category-view-directive.html',
      scope: {
        control: '='
      },
      link: function(scope, elements, attrs) {
        function openCategoryDetailsjQuery(categoryId) {
          console.log(attrs)
          var details = categories.getCategoryDetails(categoryId);

          console.log(details);
          scope.category = details.category;
          scope.pictures = details.pictures;

          $('#category-view')
            .css("top", $(window).scrollTop())
            .addClass('-active');

          $('#category-view').offset().top == $('#category-view').css('top');

          setTimeout(function() {
            $('body').addClass('-category-view-opened');
          }, 1);
        }

        function closeCategoryDetailsjQuery() {
          $('.-category-view')
            .removeClass('-active');

          setTimeout(function() {
            $('body').removeClass('-category-view-opened');
          }, 700);

          setTimeout(function() {
            $('#category-view').css('top', '');
          }, 700);
        }

        $('.category-box').on('click', openCategoryDetailsjQuery);
        $('.category-box-close').on('click', closeCategoryDetailsjQuery);

        function openLightbox(imageSrc) {
          console.log('here')
          vm.lightboxSrc = imageSrc;
          $('#lightbox').addClass('-active');

          $('#lightbox').offset().top = $('#lightbox').css('top');
        }

        // $('.category-view .col').on('click', openLightbox('sample'));
      }
    }
  }

  angular.module('piksTheme.directives')
    .directive('categoryView', ['categories', categoryView]);
}());
