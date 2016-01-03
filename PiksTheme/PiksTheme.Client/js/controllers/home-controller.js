(function () {
    'use strict';

    function HomeController(pictures) {
        var vm = this;
        var appElement = $('[ng-app=piksTheme]').get(0); 
        var base = angular.element(appElement).scope(); 
        
        vm.categories = pictures.getPictureCategories();

        vm.openCategoryDetails = function (categoryId) {
            var details = pictures.getPictureCategoryDetails(categoryId);
            vm.categoryDetailsTopScroll = $(window).scrollTop();

            vm.category = details.category;
            vm.pictures = details.pictures;

            base.isCategoryDetailsOpen = true;
        };

        vm.closeCategoryDetails = function () {
            base.isCategoryDetailsOpen = false;
        }

        vm.sendContactForm = function (form) {
            // throw new NotImplementedException();
        }
    }

    angular.module('piksTheme.controllers')
        .controller('HomeController', ['pictures', HomeController]);
}());