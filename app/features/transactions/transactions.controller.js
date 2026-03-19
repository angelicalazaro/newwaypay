angular.module('newWayPay').controller('TransactionsController', ['$scope', 'PaymentService', function($scope, PaymentService) {
  $scope.allTransactions = PaymentService.getTransactions();
  $scope.filterStatus = 'all';
  $scope.searchQuery = '';

  $scope.filtered = function() {
    return $scope.allTransactions.filter(function(t) {
      var matchesStatus = $scope.filterStatus === 'all' || t.status === $scope.filterStatus;
      var matchesSearch = !$scope.searchQuery || t.label.toLowerCase().indexOf($scope.searchQuery.toLowerCase()) > -1;
      return matchesStatus && matchesSearch;
    });
  };

  $scope.getStatusClass = function(status) {
    return 'badge badge--' + status;
  };
}]);
