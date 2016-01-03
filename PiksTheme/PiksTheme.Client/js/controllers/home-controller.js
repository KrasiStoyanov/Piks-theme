(function () {
    'use strict';

    function HomeController($document, pictures) {
        var vm = this;
        vm.categories = pictures.getCategories();

        var appElement = $('[ng-app=piksTheme]').get(0);
        var $baseScope = angular.element(appElement).scope();

        $baseScope.openCategoryDetails = function (categoryId) {
            var details = pictures.getCategoryDetails(categoryId);

            $baseScope.category = details.category;
            $baseScope.pictures = details.pictures;

            $baseScope.categoryDetailsTopScroll = $(window).scrollTop();
            $baseScope.isCategoryDetailsOpen = true;
            console.log();
        };

        $baseScope.closeCategoryDetails = function () {
            $baseScope.isCategoryDetailsOpen = false;
            console.log();
        }
    }

    angular.module('piksTheme.controllers')
        .controller('HomeController', ['$document','pictures', HomeController]);
}());