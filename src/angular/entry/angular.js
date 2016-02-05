require('bootstrap_css');
require('ng_grid_css');
require('jquery');
require('bootstrap_js');
require('angular');
require('angular-ui-router');
require('angular-animate');
require('ng_grid_js');

//require('../js/animations')
//require('../js/controllers')
//require('../js/services')
//require('../js/filters')


var routerApp=angular.module('routerApp',[
    'ui.router'
]);

routerApp.config(function($stateProvider,$urlRouterProvider){
    $urlRouterProvider.otherwise('/index');
    $stateProvider
        .state('index',{
            url:'/index',
            templateUrl:'tpls/index.html'
        })

})