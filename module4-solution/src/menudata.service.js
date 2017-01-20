(function () {
    'use strict';
    angular.module('Data')
        .service('MenuDataService', MenuDataService)
        .constant('baseUrl', "https://davids-restaurant.herokuapp.com");

    MenuDataService.$inject = ['$http', 'baseUrl'];
    function MenuDataService($http, baseUrl) {
        var service = this;

        service.getAllCategories = function () {
            var result = $http({
                method: "GET",
                url: (baseUrl + "/categories.json")
            })
                .then(function (response) {
                    return response.data;
                }).catch(function (error) {
                    console.log("something went wrong with getAllCategories http service");
                });

            return result;
        };

        service.getItemsForCategory = function (categoryShortName) {
            return $http({
                method: "GET",
                url: (baseUrl + "/menu_items.json"),
                params: {
                    category: categoryShortName
                }
            }).then(function (menuitems) {
                return menuitems.data.menu_items;
            }).catch(function (error) {
                console.log("something went wrong with getItemsForCategory http service");
            });
        };
    }

})();