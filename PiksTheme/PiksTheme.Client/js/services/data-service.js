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

        function post(url, postData) {
            var defered = $q.defer();

            $http.post(baseServiceUrl + '/' + url, postData)
                .then(function (response) {
                    defered.resolve(response.data);
                }, function (error) {
                    defered.reject(error);
                });

            return defered.promise;
        }

        return {
            get: get,
            post: post
        }
    }

    angular.module('piksTheme.services')
        .factory('data', ['$q', '$http', 'baseServiceUrl', dataService]);
}());