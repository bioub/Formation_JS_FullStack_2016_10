var contacts = [{
  id: 1,
  prenom: 'Steve',
  nom: 'Jobs'
}, {
  id: 2,
  prenom: 'Bill',
  nom: 'Gates'
}];

module.exports.list = (req, res) => {
  res.json(contacts);
};

module.exports.add = (req, res) => {
  res.send('TODO');
};

module.exports.show = (req, res, next) => {
  var id = Number(req.params.id);

  var contactsById = contacts.find(c => c.id === id);

  if (!contactsById) {
    return next();
  }

  res.json(contactsById);
};

module.exports.modify = (req, res) => {
  res.send('TODO');
};

module.exports.remove = (req, res, next) => {
  var id = Number(req.params.id);

  var iToDelete = contacts.findIndex(c => c.id === id);

  if (iToDelete === -1) {
    return next();
  }

  var contactToDelete = contacts.splice(iToDelete, 1);

  res.json(contactToDelete[0]);
};
