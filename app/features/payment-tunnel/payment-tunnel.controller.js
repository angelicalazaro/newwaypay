angular.module('newWayPay').controller('PaymentTunnelController', ['$scope', 'PaymentService', 'NotificationService', '$location', function($scope, PaymentService, NotificationService, $location) {
  $scope.currentStep = 1;
  $scope.totalSteps = 4;

  $scope.cart = {
    label: 'Achat exemple',
    amount: 300.00
  };

  $scope.selectedPlan = 3;
  $scope.installments = [];
  $scope.card = { number: '', expiry: '', cvc: '', holder: '' };
  $scope.confirmation = null;

  $scope.updateInstallments = function() {
    $scope.installments = PaymentService.calculateInstallments($scope.cart.amount, $scope.selectedPlan);
  };

  $scope.updateInstallments();

  $scope.goToStep = function(step) {
    if (step >= 1 && step <= $scope.totalSteps) {
      $scope.currentStep = step;
    }
  };

  $scope.nextStep = function() {
    $scope.goToStep($scope.currentStep + 1);
  };

  $scope.prevStep = function() {
    $scope.goToStep($scope.currentStep - 1);
  };

  $scope.submitPayment = function() {
    var result = PaymentService.processPayment($scope.cart, $scope.selectedPlan, $scope.card);
    if (result.success) {
      $scope.confirmation = result;
      $scope.currentStep = 4;
      NotificationService.success('Paiement validé avec succès !');
    } else {
      NotificationService.error('Échec du paiement. Veuillez réessayer.');
    }
  };

  $scope.goToDashboard = function() {
    $location.path('/dashboard');
  };
}]);
