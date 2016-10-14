"use strict";

const contactDAO = require('../dao/contact-dao');

module.exports = class contactController {
  static getAll(req, res) {
    contactDAO
      .getAll()
      .then(contact => res.status(200).json(contact))
      .catch(error => res.status(400).json(error));
  }

  static createNew(req, res) {
    let _contact = req.body;

    contactDAO
      .createNew(_contact)
      .then(contact => res.status(201).json(contact))
      .catch(error => res.status(400).json(error));
  }

  static removeById(req, res) {
    let _id = req.params.id;

    contactDAO
      .removeById(_id)
      .then(() => res.status(200).end())
      .catch(error => res.status(400).json(error));
  }
}
