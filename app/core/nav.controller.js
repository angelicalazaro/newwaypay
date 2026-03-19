angular.module('newWayPay').controller('NavController', ['$scope', '$location', 'AuthService', function($scope, $location, AuthService) {
  $scope.isLoggedIn = function() {
    return AuthService.isLoggedIn();
  };

  $scope.logout = function() {
    AuthService.logout();
    $location.path('/login');
  };
}]);
