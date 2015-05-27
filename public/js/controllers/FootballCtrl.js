// public/js/controllers/FootballCtrl.js
angular.module('FootballCtrl', []).controller('FootballController', function($scope, $http) {

    //$scope.tagline = 'FootballCtrl - Zaminamina Waka Waka!';

    $http.get('/api/nerds').
      success(function(response) {
        // this callback will be called asynchronously
        // when the response is available
        $scope.tagline = response;
      });


});
