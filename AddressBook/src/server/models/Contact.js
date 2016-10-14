const mongoose = require('mongoose');

var Contact = mongoose.model('contacts', {
  prenom: {
    type: String,
    required: true
  },
  nom: {
    type: String,
    required: true
  },
  email: String,
  telephone: String,
  lastUpdated: { type: Date, default: Date.now },
});

module.exports = Contact;
