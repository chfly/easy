
var routerApp=angular.module('routerApp',[
    'ui.router'
]);

routerApp.config(function($stateProvider,$urlRouterProvider){
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('home',{
            url:'/',
            views:{
              '':{templateUrl:'tpls/home.html'},
              'top@home':{templateUrl:'tpls/top.html'},
              'main@home':{templateUrl:'tpls/welcome.html'}
            }
        })
      .state('home.list',{
        url:'/list',
        views:{
          'main@home':{templateUrl:'tpls/bookType.html'}

        }
      })
      .state('home.list.detail',{
        url:'/detail/:id',
        views:{
          '':{templateUrl:'tpls/bookGrid.html'},
        }
      })

})
