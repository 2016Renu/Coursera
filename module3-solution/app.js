(function () {
    'use strict';
    angular.module('NarrowItDownApp', [])
        .controller('NarrowItDownController', NarrowItDownController)
        .service('MenuCategorySearchService', MenuCategorySearchService)
        .directive('foundItems', NarrowItDownDirective);

    function NarrowItDownDirective() {
        var ddo = {
            templateUrl: 'loader/itemsloaderindicator.template.html',
            scope: {
                narrowedMenu: '<',
                onRemove: '&'
            },
            controller: NarrowItDownDirectiveController,
            controllerAs: 'narrowedListCtrl',
            bindToController: true
        };
        return ddo;
    }

    function NarrowItDownDirectiveController() {
        var narrowedListCtrl = this;
    }

    NarrowItDownController.$inject = ['MenuCategorySearchService'];
    function NarrowItDownController(MenuCategorySearchService) {
        var mainCtrl = this;
        mainCtrl.searchTerm = '';
        mainCtrl.isHidden = true;

        mainCtrl.getFilteredItems = function () {
            mainCtrl.found = [];
            if (mainCtrl.searchTerm == undefined || mainCtrl.searchTerm.length == 0) {
                mainCtrl.isHidden = false;
            }
            else {
                var promise = MenuCategorySearchService.getMatchedMenuItems(mainCtrl.searchTerm);

                promise.then(function (response) {
                    mainCtrl.found = response;
                    mainCtrl.isHidden = mainCtrl.found.length != 0 ? true : false;
                }).catch(function (error) {
                    console.log("Something went wrong");
                });
             }
        };

        mainCtrl.removeItem = function (itemIndex) {
            MenuCategorySearchService.removeItem(itemIndex, mainCtrl.found);
        };
    }

    MenuCategorySearchService.$inject = ['$http'];
    function MenuCategorySearchService($http) {
        var service = this;

        service.getMatchedMenuItems = function (searchTerm) {
            return $http({
                method: 'GET',
                url: 'https://davids-restaurant.herokuapp.com/menu_items.json'
            }).then(function (response) {
                var foundItems = [];
                var menuItems = response.data.menu_items;
                angular.forEach(menuItems, function (item, itemIndex) {
                    if (item.description.indexOf(searchTerm) !== -1) {
                        foundItems.push(item);
                    }
                });
                return foundItems;
            }).catch(function (error) {
                console.log("Something went wrong in $http service level.")
            });
        };

        service.removeItem = function (itemIndex, narrowedList) {
            narrowedList.splice(itemIndex, 1);
        };
    }
})();
