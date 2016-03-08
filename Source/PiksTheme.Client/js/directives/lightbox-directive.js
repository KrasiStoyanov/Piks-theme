(function () {
    'use strict';

    function lightbox() {
        return {
            restrict: 'A',
            templateUrl: 'views/directives/lightbox-directive.html',
            link: function () {
                // function openLightbox() {
                //     debugger;
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

                function closeLightbox() {
                    $('#lightbox')
                        .removeClass('-active');

                    setTimeout(function () {
                        $('#lightbox').css('top', '');
                    }, 700);
                }

                // $('.lightbox-link').on('click', openLightbox);
                $('.-close-view').on('click', closeLightbox);
            }
        }
    }

    angular.module('piksTheme.directives')
        .directive('lightbox', [lightbox]);
}());
