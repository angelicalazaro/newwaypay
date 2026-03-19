angular.module('newWayPay').controller('DashboardController', ['$scope', 'AuthService', 'PaymentService', function($scope, AuthService, PaymentService) {
  $scope.user = AuthService.getCurrentUser();
  $scope.transactions = PaymentService.getTransactions().slice(0, 3);

  $scope.getStatusClass = function(status) {
    return 'badge badge--' + status;
  };

  $scope.totalSpent = $scope.transactions
    .filter(function(t) { return t.status === 'completed'; })
    .reduce(function(sum, t) { return sum + t.amount; }, 0);
}]);
