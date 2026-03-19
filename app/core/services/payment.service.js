angular.module('newWayPay').factory('PaymentService', [function() {
  var transactions = [
    { id: 'txn_001', label: 'Achat Fnac', amount: 299.99, status: 'completed', plan: '3x', date: '2024-02-15', installments: [99.99, 100.00, 100.00] },
    { id: 'txn_002', label: 'Abonnement Sport', amount: 180.00, status: 'pending', plan: '4x', date: '2024-02-20', installments: [45.00, 45.00, 45.00, 45.00] },
    { id: 'txn_003', label: 'Achat Darty', amount: 450.00, status: 'completed', plan: '3x', date: '2024-01-10', installments: [150.00, 150.00, 150.00] },
    { id: 'txn_004', label: 'Formation en ligne', amount: 120.00, status: 'failed', plan: '3x', date: '2024-01-25', installments: [40.00, 40.00, 40.00] }
  ];

  return {
    getTransactions: function() {
      return angular.copy(transactions);
    },

    calculateInstallments: function(amount, count) {
      var base = Math.floor((amount * 100) / count) / 100;
      var remainder = Math.round((amount - base * count) * 100) / 100;
      var result = [];
      result.push(Math.round((base + remainder) * 100) / 100);
      for (var i = 1; i < count; i++) {
        result.push(base);
      }
      return result;
    },

    processPayment: function(cartItem, plan, cardDetails) {
      return {
        success: true,
        transactionId: 'txn_' + Date.now(),
        installments: this.calculateInstallments(cartItem.amount, plan)
      };
    }
  };
}]);
