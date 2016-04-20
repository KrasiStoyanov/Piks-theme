(function () {
    'use strict';

    function CategoryViewController(categories) {
        var vm = this;

        vm.categories = categories.getCategories();
        
        vm.openCategoryDetails = function (categoryId) {
            var details = categories.getCategoryDetails(categoryId);

            vm.category = details.category;
            vm.pictures = details.pictures;
        };
    }

    angular.module('piksTheme.controllers')
        .controller('CategoryViewController', ['categories', CategoryViewController]);
}());
