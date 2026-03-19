angular.module('newWayPay').filter('currencyEur', function() {
  return function(amount) {
    if (amount === null || amount === undefined) return '';
    return new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: 'EUR'
    }).format(amount);
  };
});
