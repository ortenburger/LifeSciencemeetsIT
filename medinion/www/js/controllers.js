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

.controller('AvatarCtrl', function($scope,$state,$ionicHistory,$ionicViewSwitcher,$timeout) {
  $scope.minions=['img/Minion_1.jpg','img/Minion_2.jpg','img/Minion_3.jpg','img/Minion_4.jpg'];
  $scope.currentMinion=1;
  $scope.minionIncrement=1;
  $scope.nextPill=new Date();
  $scope.nextPill.setTime(Date.parse("2016-05-22"));
  $scope.nextPill.setHours(18);
  $scope.untilNext=function() {
    var diff=$scope.nextPill.getTime()-(new Date()).getTime();
    var hours=Math.floor(diff/1000/60/60);
    hours=hours<10?'0'+hours:hours;
    var minutes=Math.floor(diff/1000/60)-hours*60;
    minutes=minutes<10?'0'+minutes:minutes;
    var seconds=Math.floor(diff/1000)-(hours*60*60)-(minutes*60);
    seconds=seconds<10?'0'+seconds:seconds;
    $scope.timeUntilNext=hours+':'+minutes+':'+seconds;
    $timeout($scope.untilNext, 1000);
  };
  $scope.untilNext();
  $scope.nextMinion=function() {
    if($scope.currentMinion>=$scope.minions.length||$scope.currentMinion<0) {
      $scope.minionIncrement*=-1;
      $scope.currentMinion+=$scope.minionIncrement;
    }else {
      $scope.currentMinion+=$scope.minionIncrement;
    }
  }
  $scope.goto=function(view) {
    $ionicHistory.nextViewOptions({
        historyRoot: view=='dash'?true:false
    });
    $ionicViewSwitcher.nextDirection(view=='dash'?'back':'forward');
    $state.go(view);
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
