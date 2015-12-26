(function () {
    'use strict';

    function portfolioSection() {
        return {
            restrict: 'A',
            templateUrl: 'views/directives/portfolio-section-directive.html'
        }
    }

    angular.module('piksTheme.directives')
        .directive('portfolioSection', [portfolioSection]);
}());