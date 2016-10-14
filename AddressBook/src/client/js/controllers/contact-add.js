import angular from 'angular';
import contact from '../services/contact';

let module = angular.module('app.controllers.contact-add', [
  contact
]);

var _$location = null;

class ContactAddCtrl {

  constructor(Contact, $location) {
    this.Contact = Contact;
    _$location = $location;
  }

  add() {
    var contact = new this.Contact(this.newContact);
    contact.$save((contact) => {
      // TODO récupérer l'URL depuis le nom de la route
      _$location.url('/contacts/' + contact._id);
    });
  }

}

module.controller('ContactAddCtrl', ContactAddCtrl);

export default module.name;
