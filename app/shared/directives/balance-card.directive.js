angular.module('newWayPay').directive('balanceCard', function() {
  return {
    restrict: 'E',
    scope: {
      balance: '=',
      currency: '@',
      userName: '@'
    },
    template: `
      <div class="balance-card">
        <div class="balance-card__header">
          <span class="balance-card__greeting">Bonjour, {{ userName }}</span>
          <span class="balance-card__label">Solde disponible</span>
        </div>
        <div class="balance-card__amount">
          {{ balance | currencyEur }}
        </div>
        <div class="balance-card__footer">
          <a href="#!/checkout" class="btn btn--primary">Payer en fractionné</a>
        </div>
      </div>
    `
  };
});
