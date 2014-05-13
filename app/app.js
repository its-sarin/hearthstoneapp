var app = angular.module('app', ['firebase']);

app.service('firebaseSvc', ['$firebase', function ($firebase) {
    var cardRef = new Firebase('https://hearthstoneapp.firebaseio.com/cards');

    return $firebase(cardRef);
}]);

app.controller('CardCtrl', ['$scope', 'firebaseSvc', function ($scope, firebaseSvc) {
    $scope.selectedIndex = -1;

    $scope.cards = firebaseSvc;

    //cardSvc.success(function (data) {
    //    $scope.cards = data.cards;
    //});

    $scope.selectCard = function ($index) {
        $scope.selectedIndex === $index ? $scope.selectedIndex = -1 : $scope.selectedIndex = $index;
    }
}]);