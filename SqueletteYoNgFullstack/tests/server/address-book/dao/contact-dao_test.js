"use strict";

const mongoose = require('mongoose');
const contactDAO = require(process.cwd() + '/server/api/address-book/dao/contact-dao');
const expect = require('chai').expect;
const setupMongoose = require('../../_helpers/db').setupMongoose;

describe('contactDAO', () => {
  before(() => {
    setupMongoose(mongoose);
  });

  afterEach(() => {
    contactDAO.remove();
  })

  describe('getAll', () => {

  })

  describe('createNew', () => {

  })

  describe('removeById', () => {

  })
})
