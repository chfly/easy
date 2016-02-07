angular.module('starter', ['ionic'])

  .run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if(window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      }
      if(window.StatusBar) {
        StatusBar.styleDefault();
      }
    });
  })

  .controller( 'actionsheetCtl',['$scope','$timeout' ,'$http',function($scope,$timeout,$http){

    $scope.items=[
      {
        "name":"HTML5"
      },
      {
        "name":"JavaScript"
      },
      {
        "name":"Css3"
      }
    ];

    $scope.doRefresh = function() {
      $http.get('http://localhost:8100/data/item.json')  //注意改为自己本站的地址，不然会有跨域问题
        .success(function(newItems) {
          $scope.items = newItems;
        })
        .finally(function() {
          $scope.$broadcast('scroll.refreshComplete');
        });
    };
  }])
