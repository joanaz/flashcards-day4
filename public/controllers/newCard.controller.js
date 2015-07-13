app.controller('NewCardController', function($scope, $rootScope, NewCardFactory, FlashCardFactory) {

  $scope.newCard = {
    question: null,
    category: null,
    answers: [{
      text: null,
      correct: false
    }, {
      text: null,
      correct: false
    }, {
      text: null,
      correct: false

    }]
  }

  $scope.submit = function() {
    NewCardFactory.submit($scope.newCard)
      .then(function() {
        $rootScope.$broadcast("newCard")
        console.log("get flash cards")
        $scope.reset()
      })
      .then(null, function(err) {
        next(err)
      })
  }

  $scope.reset = function() {
    $scope.newCard = {
      question: null,
      category: null,
      answers: [{
        text: null,
        correct: false
      }, {
        text: null,
        correct: false
      }, {
        text: null,
        correct: false

      }]
    }
    $scope.submitted = false
  }
})