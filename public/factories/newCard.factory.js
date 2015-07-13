app.factory('NewCardFactory', function($http) {
  return {
    submit: function(newCard) {
      return $http.post('/cards', newCard)
    }
  }
})