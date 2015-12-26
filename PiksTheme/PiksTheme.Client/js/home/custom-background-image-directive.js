(function () {
    'use strict';

    function customBackgroundImage() {
        return {
            restrict: 'A',
            link: function () {
                $('.-section').each(function () {
                    var $this = $(this),
                      hasDataImage = $this.attr('data-image');

                    if (hasDataImage) {
                        $this.css('background-image', 'url(' + hasDataImage + ')');
                    }
                });
            }
        }
    }

    angular.module('piksTheme.directives')
        .directive('customBackgroundImage', [customBackgroundImage]);
}());