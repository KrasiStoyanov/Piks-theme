(function () {
    'use strict';

    function aboutMeSection() {
        return {
            restrict: 'A',
            templateUrl: 'views/directives/about-me-section-directive.html'
        }
    }

    angular.module('piksTheme.directives')
        .directive('aboutMeSection', [aboutMeSection]);
}());