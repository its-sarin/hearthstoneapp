var app = angular.module('app', ['firebase']);

app.service('cardSvc', ['$http', function ($http) {
    return $http.get('http://hearthstoneapi.herokuapp.com/api/v1/cards.json');
}]);

app.service('firebaseSvc', ['$firebase', function ($firebase) {
    var cardRef = new Firebase('https://hearthstoneapp.firebaseio.com/cards');

    return $firebase(cardRef);
}]);

app.controller('CardCtrl', ['$scope', 'cardSvc', 'firebaseSvc', function ($scope, cardSvc, firebaseSvc) {
    $scope.selectedIndex = -1;

    $scope.cards = firebaseSvc;

    //cardSvc.success(function (data) {
    //    $scope.cards = data.cards;
    //});

    $scope.selectCard = function ($index) {
        $scope.selectedIndex === $index ? $scope.selectedIndex = -1 : $scope.selectedIndex = $index;
    }
}]);