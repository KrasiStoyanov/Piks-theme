(function () {
    'use strict';

    function myClientsSection() {
        return {
            restrict: 'A',
            templateUrl: 'views/directives/my-clients-section-directive.html'
        }
    }

    angular.module('piksTheme.directives')
        .directive('myClientsSection', [myClientsSection]);
}());