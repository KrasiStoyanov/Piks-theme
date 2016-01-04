(function () {
    'use strict';

    var authService = function authService(identity, data) {
        function register(user) {

        }

        function login(user) {

        }

        function logout() {

        }

        return {
            register: register,
            login: login,
            logout: logout
        };
    };

    angular.module('piksTheme.services')
        .factory('auth', ['identity', 'data', authService]);
}());