(function(){
  'use strict';

  angular.module('public')
  .controller('SignUpController', SignUpController);

  SignUpController.$inject = ['MenuService'];
  function SignUpController(MenuService){
    var signupCtrl = this;

    signupCtrl.user = {
      "firstname": '',
      "lastname": '',
      "email": '',
      "phone": '',
      "favDish": '',
      "dishName": '',
      "dishDesc": '',
      "shortName": ''
    };

    signupCtrl.errorMessage = '';
    signupCtrl.successMesssage = '';

    var promise = '';
signupCtrl.getMenuDetails = function(){

    signupCtrl.errorMessage = '';
    promise = MenuService.getMenuDetails(signupCtrl.user.favDish);

  promise
  .catch(function(error){
    // console.log("Controller Error", error);
    signupCtrl.errorMessage = 'No such menu number exists.';
    signupCtrl.successMesssage = '';
  });
};

    signupCtrl.setMyInfo = function(){
        promise.then(function(response){
          signupCtrl.errorMessage = '';
          signupCtrl.user.dishDesc = response.data.description;
          signupCtrl.user.dishName = response.data.name;
          signupCtrl.user.shortName = response.data.short_name;

          MenuService.user = signupCtrl.user;
          signupCtrl.successMesssage = "Your information has been saved."
          // console.log("service user", MenuService.user);
      }).catch(function(error){
        // console.log("Controller Error", error);
        signupCtrl.successMesssage = '';
      });
    };
  }
})();
