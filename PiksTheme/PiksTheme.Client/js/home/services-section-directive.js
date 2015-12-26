(function () {
    'use strict';

    function servicesSection() {
        return {
            restrict: 'A',
            templateUrl: 'views/directives/services-section-directive.html'
        }
    }

    angular.module('piksTheme.directives')
        .directive('servicesSection', [servicesSection]);
}());