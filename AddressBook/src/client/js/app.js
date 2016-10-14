import $ from 'bootstrap';

import {Horloge} from './horloge/horloge';

import angular from 'angular';
import uiRouter from 'angular-ui-router';

import contactList from './controllers/contact-list';
import contactShow from './controllers/contact-show';
import contactAdd from './controllers/contact-add';

let divHorloge = document.querySelector('#horloge');
let horloge = new Horloge(divHorloge);
horloge.start();

let module = angular.module('app', [
  uiRouter,
  contactList, contactShow, contactAdd
]);


module.config(function($stateProvider, $locationProvider, $urlRouterProvider) {

  // https://ui-router.github.io/docs/latest/interfaces/ng1.ng1statedeclaration.html
  $stateProvider.state({
    name: 'contacts',
    url: '/contacts',
    controller: 'ContactListCtrl',
    controllerAs: 'ctcList',
    templateUrl: '/views/contact-list.html'
  });

  $stateProvider.state({
    name: 'contacts.add',
    url: '/add',
    controller: 'ContactAddCtrl',
    controllerAs: 'ctcAdd',
    templateUrl: '/views/contact-add.html'
  });

  $stateProvider.state({
    name: 'contacts.show',
    url: '/{id}',
    controller: 'ContactShowCtrl',
    controllerAs: 'ctcShow',
    templateUrl: '/views/contact-show.html'
  });

  $urlRouterProvider.otherwise('/contacts');
  $locationProvider.html5Mode(true);
});
