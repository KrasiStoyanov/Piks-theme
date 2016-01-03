(function () {
    'use strict';

    function HomeController($timeout, pictures) {
        var vm = this;

        vm.categories = pictures.getPictureCategories();
        //vm.aboutMe = person.getAboutMeText();
        //vm.clientQuotes = person.getClientQuotes();
        //vm.services = person.getServices();

        vm.openCategoryDetails = function (categoryId) {
            var details = pictures.getPictureCategoryDetails(categoryId);

            vm.category = details.category;
            vm.pictures = details.pictures;
        };

        vm.sendContactForm = function (form) {
            // throw new NotImplementedException();
        }
    }

    angular.module('piksTheme.controllers')
        .controller('HomeController', ['$timeout', 'pictures', HomeController]);
}());