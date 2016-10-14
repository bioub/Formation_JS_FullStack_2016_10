;(function(ng) {
  'use strict';

  ng.module('squelette-fullstack')
    .config([
      '$locationProvider',
      function($locationProvider) {
        
        $locationProvider.html5Mode(true);
        
      }
    ]);
}(window.angular));
