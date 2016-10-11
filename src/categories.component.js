(function () {
'use strict';

angular.module('MenuApp')
.component('categoryList', {
  templateUrl: 'src/categoryList.html',
  bindings: {
    items: '<'
  }
});


})();
