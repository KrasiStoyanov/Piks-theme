(function () {
    'use strict';

    function config($routeProvider) {

        var PARTIALS_PREFIX = 'views/partials/';
        var CONTROLLER_AS_VIEW_MODEL = 'vm';

        $routeProvider
            .when('/', {
                templateUrl: PARTIALS_PREFIX + 'home/home.html',
                controller: 'HomeController',
                controllerAs: CONTROLLER_AS_VIEW_MODEL
            })
            .otherwise({ redirectTo: '/' });
    }

    angular.module('piksTheme.directives', []);
    angular.module('piksTheme.controllers', []);
    angular.module('piksTheme', ['ngRoute', 'piksTheme.controllers', 'piksTheme.directives'])
        .config(['$routeProvider', config]);
}());