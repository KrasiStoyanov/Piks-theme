(function () {
    'use strict';

    function BaseController($scope) {
        $scope.isAuthenticated = false;
    }

    angular.module('piksTheme.controllers')
        .controller('BaseController', ['$scope', BaseController]);
}());