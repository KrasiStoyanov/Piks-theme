(function () {
    'use strict';

    function lightbox() {
        return {
            restrict: 'A',
            templateUrl: 'views/directives/lightbox-directive.html',
            link: function () {
                function openCategoryDetailsjQuery() {
                    debugger;
                    $('#lightbox')
                        .css('top', $(window).scrollTop())
                        .addClass('-active');

                    $('#lightbox').offset().top == $('#lightbox').css('top');

                    setTimeout(function () {
                        $('body').addClass('-category-view-opened');
                    }, 1);
                }

                function closeCategoryDetailsjQuery() {
                    $('#lightbox')
                        .removeClass('-active');

                    setTimeout(function () {
                        $('#lightbox').css('top', '');
                    }, 700);
                }
                
                $('.lightbox-link').on('click', openCategoryDetailsjQuery);
                $('.-close-view').on('click', closeCategoryDetailsjQuery);
            }
        }
    }

    angular.module('piksTheme.directives')
        .directive('lightbox', [lightbox]);
}());