angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope,$state,$ionicHistory,$ionicViewSwitcher) {
  $scope.goto=function(view) {
    $ionicHistory.nextViewOptions({
        historyRoot: true
    });
    $ionicViewSwitcher.nextDirection('forward');
    $state.go(view);
  };
})

.controller('AvatarCtrl', function($scope,$state,$ionicHistory,$ionicViewSwitcher) {
  $scope.minions=['img/Minion_1.jpg','img/Minion_2.jpg','img/Minion_3.jpg','img/Minion_4.jpg'];
  $scope.currentMinion=1;
  $scope.minionIncrement=1;
  $scope.nextPill=new Date();
  $scope.nextPill.setTime(Date.parse("2016-05-22"));
  $scope.nextPill.setHours(20);
  var diff=$scope.nextPill.getTime()-(new Date()).getTime();
  $scope.untilNext=diff;
  $scope.nextMinion=function() {
    if($scope.currentMinion>=$scope.minions.length||$scope.currentMinion<0) {
      $scope.minionIncrement*=-1;
      $scope.currentMinion+=$scope.minionIncrement;
    }else {
      $scope.currentMinion+=$scope.minionIncrement;
    }
  }
  $scope.gotoDash=function() {
    $ionicHistory.nextViewOptions({
        historyRoot: true
    });
    $ionicViewSwitcher.nextDirection('back');
    $state.go('dash');
  };
})

.controller('HealthCtrl', function($scope,$state,$ionicHistory,$ionicViewSwitcher) {
  $scope.minion='img/Minion_4.jpg';
  $ionicHistory.nextViewOptions({
      historyRoot: true
  });
  $scope.gotoDash=function() {
    $ionicViewSwitcher.nextDirection('back');
    $state.go('dash');
  }
})

.controller('QuestionnaireCtrl', function($scope, Questionnaires) {
  $scope.questionnaires=Questionnaires.get();
})

.controller('PhysiciansCtrl', function($scope, Chats, $state,$ionicHistory,$ionicViewSwitcher) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.gotoDash=function() {
    $ionicHistory.nextViewOptions({
        historyRoot: true
    });
    $ionicViewSwitcher.nextDirection('back');
    $state.go('dash');
  };

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('PhysicianDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
