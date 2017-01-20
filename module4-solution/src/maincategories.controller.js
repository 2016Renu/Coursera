(function () {
    'use strict';

    angular.module('Data')
        .controller('MainCategoriesController', MainCategoriesController);

    MainCategoriesController.$inject = ['categories'];
    function MainCategoriesController(categories) {
        var mainCategoriesCtrl = this;
        mainCategoriesCtrl.categories = categories;
    }
})();