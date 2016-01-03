(function () {
    'use strict';

    function HomeController(categories) {
        var vm = this;

        vm.categories = pictures.getPictureCategories();
        //vm.aboutMe = details.getAboutMeText();
        //vm.clientQuotes = details.getClientQuotes();
        //vm.services = details.getServices();

        vm.openCategoryDetails = function (categoryId) {
            var details = pictures.getPictureCategoryDetails(categoryId);

            vm.category = details.category;
            vm.pictures = details.pictures;
        };

        vm.sendContactForm = function (form) {
            // contacts.sendForm(form);
            // notifier.success("Contact message sent");
        }
    }

    angular.module('piksTheme.controllers')
        .controller('HomeController', ['categories', HomeController]);
}());