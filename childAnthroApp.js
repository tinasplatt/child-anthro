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

var childAnthroApp = angular.module("childAnthroApp", ["checklist-model","ui-rangeSlider"]);
childAnthroApp.controller('MeasureListCtrl', function ($scope) {
  $scope.roles = [
    {'id': 'one','name': 'Nexus S', 'type':'head',
     'snippet': 'Fast just got faster with Nexus S.', 'isselected': false},
    {'id': 'two','name': 'Motorola XOOM™ with Wi-Fi', 'type':'head',
     'snippet': 'The Next, Next Generation tablet.', 'isselected': false},
    {'id': 'three','name': 'MOTOROLA XOOM™', 'type':'torso',
     'snippet': 'The Next, Next Generation tablet.', 'isselected': false}
  ];
  $scope.types = [
    {'name':'head', 'altname':'head'},
    {'name':'torso', 'altname':'torso'},
    {'name':'whole body', 'altname':'whole_body'},
    {'name':'legs and feet', 'altname':'legs_and_feet'},
    {'name':'arms and hands', 'altname':'arms_and_hands'}
  ];
  $scope.genders = [
    {'name':'female', 'value':1},
    {'name':'male', 'value':2},
    {'name':'both', 'value':''}
  ];

  $scope.user = {
    roles:[]
  };

  $scope.selecttype= function (type) {
    $scope.selectedtype=type.altname;   
  }
  $scope.selectGender= function (gender) {
    $scope.selectedGender=gender;   
  }
  $scope.selectedtype = 'head';


  $scope.ageUnit = "months";

  $scope.selectedGender= {'name':'female', 'value':1};

  $scope.race=1;

  $scope.selectMeasure = function (role) {
    if(role.isselected==false) {
      role.isselected
    }
  }
  
  $scope.check = function(value, checked) {
    var idx = $scope.user.roles.indexOf(value);
    if (idx >= 0 && !checked) {
      $scope.user.roles.splice(idx, 1);
    }
    if (idx < 0 && checked) {
      $scope.user.roles.push(value);
    }
  };

  $scope.ageSlider = {
    min: 20,
    max: 80
  }


});