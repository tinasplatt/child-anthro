/*var childAnthroApp = angular.module('childAnthroApp', []);

childAnthroApp.controller('MeasureListCtrl', function ($scope) {
  $scope.roles = [
    {'id': 'one','name': 'Nexus S',
     'snippet': 'Fast just got faster with Nexus S.', 'selected': false},
    {'id': 'two','name': 'Motorola XOOM™ with Wi-Fi',
     'snippet': 'The Next, Next Generation tablet.', 'selected': false},
    {'id': 'three','name': 'MOTOROLA XOOM™',
     'snippet': 'The Next, Next Generation tablet.', 'selected': false}
  ];
  $scope.user = {
  	roles:[$scope.roles[1]]
  }
});*/

var childAnthroApp = angular.module("childAnthroApp", ["checklist-model",'ui-rangeSlider']);
childAnthroApp.controller('MeasureListCtrl', function ($scope) {
  $scope.roles = [
    {'id': 'one','name': 'Nexus S', 'type':'data1',
     'snippet': 'Fast just got faster with Nexus S.', 'selected': false},
    {'id': 'two','name': 'Motorola XOOM™ with Wi-Fi', 'type':'data1',
     'snippet': 'The Next, Next Generation tablet.', 'selected': false},
    {'id': 'three','name': 'MOTOROLA XOOM™', 'type':'data2',
     'snippet': 'The Next, Next Generation tablet.', 'selected': false}
  ];
  $scope.user = {
    roles:[]
  };
  $scope.checkAll = function() {
    $scope.user.roles = angular.copy($scope.roles);
  };
  $scope.uncheckAll = function() {
    $scope.user.roles = [];
  };
  $scope.checkFirst = function() {
    $scope.user.roles.splice(0, $scope.user.roles.length); 
    $scope.user.roles.push('guest');
  };
  $scope.getRoles = function() {
    return $scope.user.roles;
  };
  $scope.check = function(value, checked) {
    var idx = $scope.user.roles.indexOf(value);
    if (idx >= 0 && !checked) {
      $scope.user.roles.splice(idx, 1);
    }
    if (idx < 0 && checked) {
      $scope.user.roles.push(value);
    }
  };


});