// public/js/appRoutes.js
angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

  $routeProvider

      // home page
      .when('/', {
          templateUrl: 'views/home.html',
          controller: 'MainController'
      })

      // nerds page that will use the NerdController
      .when('/nerds', {
          templateUrl: 'views/nerd.html',
          controller: 'NerdController'
      })

      // football page that will use the FootballController
      .when('/football', {
          templateUrl: 'views/football.html',
          controller: 'FootballController'
      });


  $locationProvider.html5Mode(true);

}]);
