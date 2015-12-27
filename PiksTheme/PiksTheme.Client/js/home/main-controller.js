(function () {
    'use strict';

    function MainController(pictures) {
        var vm = this;
        vm.categories = pictures.getCategories();
        vm.showPicturesDirective = false;
        vm.active = false;

        vm.getPictures = function (categoryId) {
            var details = pictures.getCategoryDetails(categoryId);

            vm.category = details.category;
            vm.pictures = details.pictures;

            vm.topScroll = $(window).scrollTop();
            vm.active = true;
        };
    }

    angular.module('piksTheme.controllers')
        .controller('MainController', ['pictures', MainController]);
}());