(function () {
    'use strict';

    function identity($cookies) {
        function getCurrentUser() {

        }

        function setCurrentUser(user) {

        }

        function getIdentity() {

        }

        function isAuthenticated() {

        }

        return {
            getCurrentUser: getCurrentUser,
            setCurrentUser: setCurrentUser,
            getIdentity: getIdentity,
            isAuthenticated: isAuthenticated
        }
    }

    angular.module('piksTheme.services')
        .factory('identity', ['$cookies', identity]);
}());