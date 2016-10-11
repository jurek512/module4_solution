(function () {
'use strict';

angular.module('MenuApp')
.controller('CategoriesListController', CategoriesListController);

CategoriesListController.$inject = ['items'];
function CategoriesListController(items) {
  var mainlist = this;
  mainlist.items = items;
}

})();
