(function () {
    'use strict';

    function categoryView() {
        return {
            restrict: 'A',
            templateUrl: 'views/directives/category-view-directive.html',
            link: function () {
                function openCategoryDetailsjQuery() {
                    $('#category-view')
                        .css("top", $(window).scrollTop())
                        .addClass('-active');

                    $('#category-view').offset().top == $('#category-view').css('top');

                    setTimeout(function () {
                        $('body').addClass('-category-view-opened');
                    }, 1);
                }

                function closeCategoryDetailsjQuery() {
                    $('.-category-view')
                        .removeClass('-active');

                    setTimeout(function () {
                        $('body').removeClass('-category-view-opened');
                    }, 700);

                    setTimeout(function () {
                        $('#category-view').css('top', '');
                    }, 700);
                }

                $('.category-box').on('click', openCategoryDetailsjQuery);
                $('.category-box-close').on('click', closeCategoryDetailsjQuery);

                // function openLightbox(imageSrc) {
                //     vm.lightboxSrc = imageSrc;
                //     console.log(vm.lightboxSrc);
                //     $('#lightbox')
                //         .css('top', $(window).scrollTop())
                //         .addClass('-active');
                //
                //     $('#lightbox').offset().top = $('#lightbox').css('top');
                //
                //     setTimeout(function () {
                //         $('body').addClass('-category-view-opened');
                //     }, 1);
                // }
                //
                // $('.lightbox-link').on('click', openLightbox);
                // console.log($('.lightbox-link').addClass('hello'));
                console.log($('.row .lightbox-link'));
            }
        }
    }

    angular.module('piksTheme.directives')
        .directive('categoryView', [categoryView]);
}());
