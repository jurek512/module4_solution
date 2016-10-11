(function () {
'use strict';

angular.module('MenuData')
.service('MenuListService', MenuListService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");

MenuListService.$inject = ['$http', 'ApiBasePath']
function MenuListService($http, ApiBasePath) {
  var service = this;

  service.getItemsForCategory = function (categoryShortName) {
    return $http({
      method: "GET",
      url: (ApiBasePath + "//menu_items.json?category=" + categoryShortName)
    }).then(function (response) {
      return response.data.menu_items;
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  
  service.getAllCategories = function () {
    return $http({
      method: "GET",
      url: (ApiBasePath + "//categories.json")
    }).then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  
}

})();
