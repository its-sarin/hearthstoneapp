var app = angular.module('app', ['firebase']);

app.service('firebaseSvc', ['$firebase', function ($firebase) {
    var cardRef = new Firebase('https://hearthstoneapp.firebaseio.com/decks');

    return $firebase(cardRef);
}]);

app.controller('CardCtrl', ['$scope', 'firebaseSvc', function ($scope, firebaseSvc) {
    $scope.selectedIndex = -1;

    $scope.cards = firebaseSvc;

    $scope.selectCard = function ($index) {
        $scope.selectedIndex === $index ? $scope.selectedIndex = -1 : $scope.selectedIndex = $index;
    }
}]);