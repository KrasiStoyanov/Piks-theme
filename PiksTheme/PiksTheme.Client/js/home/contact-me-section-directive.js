(function () {
    'use strict';

    function contactMeSection() {
        return {
            restrict: 'A',
            templateUrl: 'views/directives/contact-me-section-directive.html'
        }
    }

    angular.module('piksTheme.directives')
        .directive('contactMeSection', [contactMeSection]);
}());