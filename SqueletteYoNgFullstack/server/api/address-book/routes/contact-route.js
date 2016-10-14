"use strict";

const contactController = require('../controller/contact-controller');

module.exports = class contactRoutes {
  static init(router) {
    router
      .route('/api/contact')
      .get(contactController.getAll)
      .post(contactController.createNew);

    router
      .route('/api/contact/:id')
      .delete(contactController.removeById);
  }
}
