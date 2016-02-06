require('bootstrap_css')
require('ng_grid_css')
require('jquery')
require('angular')
require('angular-ui-router')
require('angular-animate')
require('ng_grid_js')

require('../js/animations')
require('../js/controllers')
require('../js/services')
require('../js/filters')
require('../js/app')

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
        .state('home',{
            url:'/home',
            views:{
                '':{templateUrl:'tpls/home.html'},
                'top@home':{templateUrl:'tpls/topbar.html'},
                'main@home':{templateUrl:'tpls/welcome.html'}
            }
        })
        .state('home.bookList',{
            url:'/bookList',
            views:{
                'main@home':{
                    templateUrl:'tpls/bookList.html'
                },

            }
        })
        .state('home.bookList.bookType',{
            url:'/{bookType:[0-9]{1,4}}',
            templateUrl:'tpls/bookGrid.html'
        })




})