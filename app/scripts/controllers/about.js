'use strict';

/**
 * @ngdoc function
 * @name porygonApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the porygonApp
 */
angular.module('porygonApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.todos = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
