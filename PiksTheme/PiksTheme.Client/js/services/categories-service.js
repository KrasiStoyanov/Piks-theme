(function () {
    function categoriesService(data) {
        var exampleCategories = [
                {
                    id: 0,
                    content: 'Category 0',
                    imageUrl: 'images/portfolio-image-1.jpg'
                },
                {
                    id: 1,
                    content: 'Category 1',
                    imageUrl: 'images/portfolio-image-2.jpg'
                },
                {
                    id: 2,
                    content: 'Category 2',
                    imageUrl: 'images/portfolio-image-3.jpg'
                },
                {
                    id: 3,
                    content: 'Category 3',
                    imageUrl: 'images/portfolio-image-1.jpg'
                },
                {
                    id: 4,
                    content: 'Category 4',
                    imageUrl: 'images/portfolio-image-2.jpg'
                }
        ];

        var examplePictures = [
            'http://i.telegraph.co.uk/multimedia/archive/02690/Anne-Guichard_2690182k.jpg',
            'http://coolwildlife.com/wp-content/uploads/galleries/post-1593/Brown%20Bear%20Picture%20001.jpg',
            'http://i.telegraph.co.uk/multimedia/archive/03235/potd-husky_3235255k.jpg',
            'http://cdn1.matadornetwork.com/blogs/1/2015/04/lion-photo.jpg',
            'http://ichef-1.bbci.co.uk/news/976/media/images/83351000/jpg/_83351965_explorer273lincolnshirewoldssouthpicturebynicholassilkstone.jpg'
        ];

        function getCategories() {
            return exampleCategories;
        }

        function getCategoryDetails(id) {
            return {
                details: exampleCategories[id],
                pictures: examplePictures
            };
        }

        return {
            getCategories: getPictureCategories,
            getCategoryDetails: getPictureCategoryDetails
        };
    }

    angular.module('piksTheme.services')
        .factory('categories', ['data', categoriesService]);
}());