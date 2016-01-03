(function () {
    function dataService($q, $http, baseServiceUrl) {
        function get (url, params) {
            var defered = $q.defer();

            $http.get(baseServiceUrl + '/' + url, { params: params })
                .then(function (response) {
                    defered.resolve(response.data);
                }, function (error) {
                    defered.reject(error);
                });

            return defered.promise;
        }

        function post(url, payload) {
            var defered = $q.defer();

            $http.post(baseServiceUrl + '/' + url, payload)
                .then(function (response) {
                    defered.resolve(response.data);
                }, function (error) {
                    defered.reject(error);
                });

            return defered.promise;
        }

        function put(url, payload) {
            var defered = $q.defer();

            $http.put(baseServiceUrl + '/' + url, payload)
                .then(function (response) {
                    defered.resolve(response.data);
                }, function (error) {
                    defered.reject(error);
                });

            return defered.promise;
        }

        return {
            get: get,
            post: post,
            put: put
        }
    }

    angular.module('piksTheme.services')
        .factory('data', ['$q', '$http', 'baseServiceUrl', dataService]);
}());