(function () {
    'use strict';

    angular.module('Data')
        .component('itemsList', {
            templateUrl: 'src/templates/itemsList.template.html',
            bindings: {
                menuItems: '<'
            }
        });
})();