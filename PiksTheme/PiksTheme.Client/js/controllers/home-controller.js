(function () {
    'use strict';

    function HomeController(pictures) {
        var vm = this;
        vm.categories = pictures.getCategories();

        var appElement = document.querySelector('[ng-app=piksTheme]');
        var $baseScope = angular.element(appElement).scope();

        $baseScope.openCategoryDetails = function (categoryId) {
            var details = pictures.getCategoryDetails(categoryId);

            $baseScope.category = details.category;
            $baseScope.pictures = details.pictures;

            $baseScope.topScroll = $(window).scrollTop();
            $baseScope.active = true;
            console.log();
        };

        $baseScope.closeCategoryDetails = function () {
            $baseScope.active = false;
            console.log();
        }
    }

    angular.module('piksTheme.controllers')
        .controller('HomeController', ['pictures', HomeController]);
}());