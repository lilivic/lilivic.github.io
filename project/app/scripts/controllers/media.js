'use strict';

angular.module('lilivicApp').controller('MediaCtrl', function ($rootScope, $scope, $routeParams) {

  $scope.currentSection = $routeParams.section;

  $rootScope.$broadcast(constants.EVENTS.VIEW_CHANGE);
});
