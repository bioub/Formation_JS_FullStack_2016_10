const Contact = require('../models/Contact');

module.exports.list = (req, res, next) => {
  Contact.find({}, 'prenom nom').then((contacts) => {
    res.json(contacts)
  }, next);
  /*
  Contact.find({}, 'prenom nom', (err, contacts) => {
    if (err) {
      return next(err);
    }

    res.json(contacts);
  });
  */
};

module.exports.add = (req, res, next) => {
  let contact = new Contact(req.body);
  contact.save().then((contact) => {
    res.statusCode = 201;
    res.json(contact);
  }).catch(next);
};

module.exports.show = (req, res, next) => {
  Contact.findById(req.params.id).then((contact) => {
    res.json(contact);
  }, next);
};

module.exports.modify = (req, res) => {
  res.send('TODO');
};

module.exports.remove = (req, res, next) => {
  Contact.findByIdAndRemove(req.params.id).then((contact) => {
    if (!contact) {
      return next();
    }
    res.json(contact);
  }, next);
};
