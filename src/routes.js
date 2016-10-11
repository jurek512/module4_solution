(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/templates/home.template.html'
  })

  // Premade list page
  .state('categories', {
    url: '/categories',
    templateUrl: 'src/templates/categories.template.html',
    controller: 'CategoriesListController as categories',
    resolve: {
      items: ['MenuListService', function (MenuListService) {
        return MenuListService.getAllCategories();
      }]
    }
  })
  // Premade list page
  .state('items', {
    url: '/items/{itemId}',
    templateUrl: 'src/templates/items.template.html',
    controller: 'ItemDetailController as itemDetail',
    resolve: {
      item: ['$stateParams', 'MenuListService',
            function ($stateParams, MenuListService) {
              return MenuListService.getItemsForCategory($stateParams.itemId);
        }]
    }
	
  })
  ;
}

})();
