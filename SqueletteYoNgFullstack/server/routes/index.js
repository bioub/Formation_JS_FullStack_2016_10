"use strict";

const TodoRoutes = require('../api/todo/routes/todo-routes');
const ContactRoutes = require('../api/address-book/routes/contact-route');

const StaticDispatcher = require('../commons/static/index');


module.exports = class Routes {
   static init(app, router) {
     TodoRoutes.init(router);
     ContactRoutes.init(router);

     router
       .route('*')
       .get(StaticDispatcher.sendIndex);


     app.use('/', router);
   }
}
