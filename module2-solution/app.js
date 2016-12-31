(function() {

  angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService) {
    var ToBuy = this;
    ToBuy.items = ShoppingListCheckOffService.getBuyItems();

    ToBuy.addBuyItemsToBoughtList = function(buyItem, itemIndex) {
      try {
        console.log(buyItem, itemIndex);
        ShoppingListCheckOffService.addBuyItemsToBoughtList(buyItem, itemIndex);
      } catch (error) {
        ToBuy.errorMessage = error.message;
      }
    };
  }

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var AlreadyBought = this;
    AlreadyBought.items = ShoppingListCheckOffService.getBoughtItems();
  }

  function ShoppingListCheckOffService() {
    var service = this;
    var buyItems = [{
      name: 'cookies',
      quantity: 10
    }, {
      name: 'chips',
      quantity: 15
    }, {
      name: 'candy',
      quantity: 20
    }, {
      name: 'coke',
      quantity: 25
    }, {
      name: 'sprite',
      quantity: 30
    }];

    var boughtItems = [];

    service.getBuyItems = function() {
      return buyItems;
    };

    service.getBoughtItems = function() {
      return boughtItems;
    };

    service.addBuyItemsToBoughtList = function(buyItem, itemIndex) {
      console.log(buyItem.name, buyItem.quantity);
      buyItems.splice(itemIndex, 1);
      var item = {
        name: buyItem.name,
        quantity: buyItem.quantity
      };
      boughtItems.push(item);
      console.log(boughtItems);
      if (buyItems.length === 0) {
        throw new Error("Everything is bought!");
      }
    };
  }
})();
