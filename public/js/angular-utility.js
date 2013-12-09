"use strict";
/*
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.2.0rc1/angular-route.min.js"></script>

var app = angular.module('myapp', ['ngRoute']);
*/ 
var Portfolio = angular.module('Portfolio', ['ngRoute']);
Portfolio.config(function ($routeProvider, $locationProvider) {
    $routeProvider. 
      when('/', {
        templateUrl: '../_assets.html',
        controller: 'mainCtrl'
      }). 
      when('/goals', {
        templateUrl: '../_goals.html',
        controller: 'mainCtrl'
      }).
      when('/questions', {
        templateUrl: '../_questions.html',
        controller: 'mainCtrl'
      }).
      when('/projects', {
        templateUrl: '../_projects.html',
        controller: 'mainCtrl'
      }).
      when('/salary-expectations', {
        templateUrl: '../_salary.html',
        controller: 'mainCtrl'
      }).
      otherwise({
        redirectTo: '../_assets.html'
      });
      $locationProvider.html5Mode(true);
  });

Portfolio.controller('mainCtrl', function ($scope) {

});