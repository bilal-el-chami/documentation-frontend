'use strict';

/**
 * @ngdoc function
 * @name documentationFrontendApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the documentationFrontendApp
 */
angular.module('documentationFrontendApp')
  .controller('MainCtrl', function ($scope, ENV) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.DOMAIN_URL = ENV.DOMAIN_URL;
  });
