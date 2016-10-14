import angular from 'angular';
import contact from '../services/contact';

let module = angular.module('app.controllers.contact-show', [
  contact
]);

class ContactShowCtrl {

  constructor(Contact, $stateParams) {
    this.contact = Contact.get({id: $stateParams.id});
  }

}

module.controller('ContactShowCtrl', ContactShowCtrl);

export default module.name;
