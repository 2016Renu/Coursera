(function(){
  'use strict';
  angular.module('public')
  .controller('MyInfoController', MyInfoController);

  MyInfoController.$inject = ['info', 'ApiPath'];
  function MyInfoController(info, ApiPath){
    var myinfoCtrl = this;
    myinfoCtrl.show = true;

    if(info.firstname !== undefined){
      myinfoCtrl.show = false;
    }

    myinfoCtrl.info = info;
    myinfoCtrl.basePath = ApiPath;

    console.log("myinfoCtrl", info);
    console.log("show flag", myinfoCtrl.show);
    console.log("basePath", myinfoCtrl.basePath);
  }
})();
