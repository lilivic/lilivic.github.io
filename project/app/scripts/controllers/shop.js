'use strict';

angular.module('lilivicApp').controller('ShopCtrl', function ($rootScope, $scope, i18n) {
  i18n.init($scope);
  $rootScope.$broadcast(constants.EVENTS.VIEW_CHANGE);
});
