
var routerApp=angular.module('routerApp',[
    'ui.router'
]);

routerApp.config(function($stateProvider,$urlRouterProvider){
    $urlRouterProvider.otherwise('/index');
    $stateProvider
        .state('index',{
            url:'/index',
            templateUrl:'tpls/loginForm.html'
        })

})