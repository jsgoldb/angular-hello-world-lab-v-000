function MainController($scope){
  $scope.name = 'Tommy';
  $scope.email = 'fake@fake.com';
  $scope.phone = '1234456666';
}

angular
  .module('app')
  .controller('MainController', MainController)