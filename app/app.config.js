angular.module('newWayPay').config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $routeProvider
    .when('/login', {
      templateUrl: 'app/features/auth/login.html',
      controller: 'LoginController'
    })
    .when('/dashboard', {
      templateUrl: 'app/features/dashboard/dashboard.html',
      controller: 'DashboardController',
      resolve: {
        auth: ['AuthService', '$location', function(AuthService, $location) {
          if (!AuthService.isLoggedIn()) {
            $location.path('/login');
          }
        }]
      }
    })
    .when('/checkout', {
      templateUrl: 'app/features/payment-tunnel/payment-tunnel.html',
      controller: 'PaymentTunnelController',
      resolve: {
        auth: ['AuthService', '$location', function(AuthService, $location) {
          if (!AuthService.isLoggedIn()) {
            $location.path('/login');
          }
        }]
      }
    })
    .when('/transactions', {
      templateUrl: 'app/features/transactions/transactions.html',
      controller: 'TransactionsController',
      resolve: {
        auth: ['AuthService', '$location', function(AuthService, $location) {
          if (!AuthService.isLoggedIn()) {
            $location.path('/login');
          }
        }]
      }
    })
    .otherwise({ redirectTo: '/login' });
}]);
