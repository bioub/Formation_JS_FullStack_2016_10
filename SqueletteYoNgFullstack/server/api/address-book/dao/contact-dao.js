"use strict";

const mongoose = require('mongoose');
const Promise = require('bluebird');
const contactSchema = require('../model/contact-model');
const _ = require('lodash');

contactSchema.statics.getAll = () => {
  return new Promise((resolve, reject) => {
    let _query = {};

    contact
      .find(_query)
      .exec((err, todos) => {
        err ? reject(err)
          : resolve(todos);
      });
  });
}

contactSchema.statics.createNew = (contact) => {
  return new Promise((resolve, reject) => {
    if (!_.isObject(contact)) {
      return reject(new TypeError('Todo is not a valid object.'));
    }

    let _something = new contact(contact);

    _something.save((err, saved) => {
      err ? reject(err)
        : resolve(saved);
    });
  });
}

contactSchema.statics.removeById = (id) => {
  return new Promise((resolve, reject) => {
    if (!_.isString(id)) {
      return reject(new TypeError('Id is not a valid string.'));
    }

    contact
      .findByIdAndRemove(id)
      .exec((err, deleted) => {
        err ? reject(err)
          : resolve();
      });
  });
}

const contact = mongoose.model('contact', contactSchema);

module.exports = contact;
