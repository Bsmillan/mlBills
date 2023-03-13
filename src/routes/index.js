const express = require('express');
const bill_routes_access = require('./bill.route');
const routes = express.Router();

const app_routes_system = (app) => {
  app.use("/api/v1", routes);

  routes.use("/bills", bill_routes_access);

};

module.exports = app_routes_system;