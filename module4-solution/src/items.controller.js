(function () {
    'use strict';

    angular.module('Data')
        .controller('ItemsController', ItemsController);

    ItemsController.$inject = ['menuItems'];
    function ItemsController(menuItems) {
        var itemsCtrl = this;
        itemsCtrl.menuItems = menuItems;
    }
})();