(function () {
    'use strict';

    function BaseController($scope) {
        $scope.isAuthenticated = false;
        //$scope.isCategoryDetailsOpen = false;
    }

    angular.module('piksTheme.controllers')
        .controller('BaseController', ['$scope', BaseController]);
}());