(function () {
    'use strict';

    angular.module('Data')
        .component('categoriesList', {
            templateUrl: 'src/templates/categoriesList.template.html',
            bindings: {
                items: '<'
            }
        });
})();