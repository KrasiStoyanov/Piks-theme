(function () {
    'use strict';

    function HomeController($timeout, pictures) {
        var vm = this;

        vm.categories = pictures.getPictureCategories();
        //vm.aboutMe = person.getAboutMeText();

        vm.openCategoryDetails = function (categoryId) {
            var details = pictures.getPictureCategoryDetails(categoryId);
            vm.categoryDetailsTopScroll = $(window).scrollTop();

            vm.category = details.category;
            vm.pictures = details.pictures;

            openCategoryDetailsjQuery();
        };

        vm.closeCategoryDetails = function () {
        }

        vm.sendContactForm = function (form) {
            // throw new NotImplementedException();
        }
    }

    angular.module('piksTheme.controllers')
        .controller('HomeController', ['$timeout', 'pictures', HomeController]);
}());