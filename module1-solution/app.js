(function(){
  'use strict';
  angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope){
    $scope.lunchItems = '';
    $scope.message = '';
    $scope.inputbordercolor = '';
    $scope.textcolor = '';

    $scope.getMessage = function(){
      var length = $scope.lunchItems.split(',').length;
      console.log(length);
      if(length == 1)
      {
        InvalidData();
      }else if (length <= 3) {
        validData();
      }
      else if (length >3) {
        tooMuchData();
      }
    };

    function InvalidData(){
      $scope.message = 'Please enter data first';
      $scope.inputbordercolor = 'errorbordercolor';
      $scope.textcolor = 'errortextcolor';
    }

    function validData(){
      $scope.message = 'Enjoy!';
      $scope.inputbordercolor = 'noerrorbordercolor';
      $scope.textcolor = 'noerrortextcolor';
    }

    function tooMuchData(){
      $scope.message = 'Too much!';
      $scope.inputbordercolor = 'noerrorbordercolor';
      $scope.textcolor = 'noerrortextcolor';
    }
  };

})();
