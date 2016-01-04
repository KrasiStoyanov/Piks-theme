(function () {
    'use strict';

    function MainController() {
        var main = this;
        main.isAuthenticated = false;
    }

    angular.module('piksTheme.controllers')
        .controller('MainController', [MainController]);
}());