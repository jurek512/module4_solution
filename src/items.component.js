(function () {
'use strict';

angular.module('MenuApp')
.component('itemsList', {
  templateUrl: 'src/itemsList.html',
  bindings: {
    items: '<'
  }
});

})();
