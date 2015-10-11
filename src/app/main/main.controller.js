'use strict';

class MainCtrl {
  constructor ($scope, $firebaseArray) {
    let ref = new Firebase('https://vivid-inferno-7856.firebaseio.com');
    $scope.posts = $firebaseArray(ref);
    console.log($scope.posts);
    $scope.addPost = function(e) {
      if (e.keyCode === 13 && $scope.comment) {
        var name = $scope.name || 'anonymouse';
        $scope.posts.$add({
          name: name,
          comment: $scope.comment
        });
        $scope.comment = '';
      }
    }
  }
}

MainCtrl.$inject = ['$scope', '$firebaseArray'];

export default MainCtrl;
