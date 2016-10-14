import angular from 'angular';
import contact from '../services/contact';

let contactListModule = angular.module('app.controllers.contact-list', [
  contact
]);

class ContactListCtrl {

  constructor(Contact) {
    this.contacts = Contact.query();
  }

  delete(contact) {
    contact.$delete(() => {
      var i = this.contacts.findIndex(c => c === contact);
      this.contacts.splice(i, 1);
    });
  }

}

contactListModule.controller('ContactListCtrl', ContactListCtrl);

export default contactListModule.name;
