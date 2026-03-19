angular.module('newWayPay').factory('AuthService', ['$window', function($window) {
  var STORAGE_KEY = 'nwp_user';

  var MOCK_USER = {
    id: 'usr_001',
    firstName: 'Angelica',
    lastName: 'Lazaro',
    email: 'angelica@newwaypay.fr',
    balance: 4250.80
  };

  return {
    login: function(email, password) {
      if (email === 'angelica@newwaypay.fr' && password === 'demo1234') {
        $window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(MOCK_USER));
        return true;
      }
      return false;
    },

    logout: function() {
      $window.sessionStorage.removeItem(STORAGE_KEY);
    },

    isLoggedIn: function() {
      return !!$window.sessionStorage.getItem(STORAGE_KEY);
    },

    getCurrentUser: function() {
      var raw = $window.sessionStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : null;
    }
  };
}]);
