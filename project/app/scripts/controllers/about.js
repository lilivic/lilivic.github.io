'use strict';

angular.module('lilivicApp').controller('AboutCtrl', function ($rootScope, $scope, i18n) {
  i18n.init($scope);
  $rootScope.$broadcast(constants.EVENTS.VIEW_CHANGE);
});
