(function () {
    'use strict';

    function categoryView() {
        return {
            restrict: 'A',
            templateUrl: 'views/directives/category-view-directive.html',
        }
    }

    angular.module('piksTheme.directives')
        .directive('categoryView', [categoryView]);
}());