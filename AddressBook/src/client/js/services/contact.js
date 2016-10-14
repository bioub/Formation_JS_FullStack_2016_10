import angular from 'angular';
import ngResource from 'angular-resource';

var module = angular.module('app.services.contact', [
  ngResource
]);

module.factory('Contact', function($resource) {
  return $resource('/api/v1.0/contacts/:id', {id: '@_id'});
});

export default module.name;
