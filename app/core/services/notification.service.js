angular.module('newWayPay').factory('NotificationService', ['$timeout', function($timeout) {
  var notifications = [];

  return {
    getAll: function() {
      return notifications;
    },

    success: function(message) {
      var n = { type: 'success', message: message, id: Date.now() };
      notifications.push(n);
      $timeout(function() {
        var idx = notifications.indexOf(n);
        if (idx > -1) notifications.splice(idx, 1);
      }, 4000);
    },

    error: function(message) {
      var n = { type: 'error', message: message, id: Date.now() };
      notifications.push(n);
      $timeout(function() {
        var idx = notifications.indexOf(n);
        if (idx > -1) notifications.splice(idx, 1);
      }, 6000);
    },

    dismiss: function(id) {
      var idx = notifications.findIndex(function(n) { return n.id === id; });
      if (idx > -1) notifications.splice(idx, 1);
    }
  };
}]);
