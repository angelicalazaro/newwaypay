angular.module('newWayPay').controller('LoginController', ['$scope', '$location', 'AuthService', 'NotificationService', function($scope, $location, AuthService, NotificationService) {
  if (AuthService.isLoggedIn()) {
    $location.path('/dashboard');
    return;
  }

  $scope.credentials = { email: '', password: '' };
  $scope.isLoading = false;

  $scope.login = function() {
    $scope.isLoading = true;
    var success = AuthService.login($scope.credentials.email, $scope.credentials.password);
    $scope.isLoading = false;

    if (success) {
      NotificationService.success('Connexion réussie. Bienvenue !');
      $location.path('/dashboard');
    } else {
      NotificationService.error('Email ou mot de passe incorrect.');
    }
  };
}]);
