(function () {
    'use strict';

    function categoryView() {
        return {
            restrict: 'A',
            templateUrl: 'views/directives/category-view-directive.html',
            link: function () {
                function openCategoryDetailsjQuery() {
                    $('#category-view').addClass('-active');
                    setTimeout(function () {
                        $('body').addClass('-category-view-opened');
                    }, 1);
                }

                function closeCategoryDetailsjQuery() {
                    $('.-category-view').removeClass('-active');
                    setTimeout(function () {
                        $('body').removeClass('-category-view-opened');
                    }, 700);
                }
                
                $('.category-box').on('click', openCategoryDetailsjQuery);
                $('.category-box-close').on('click', closeCategoryDetailsjQuery);
            }
        }
    }

    angular.module('piksTheme.directives')
        .directive('categoryView', [categoryView]);
}());