(function () {
    'use strict';

    function BaseController(pictures) {
        var bc = this;
        bc.active = false;
        bc.isAuthenticated = false;
    }

    angular.module('piksTheme.controllers')
        .controller('BaseController', ['pictures', BaseController]);
}());