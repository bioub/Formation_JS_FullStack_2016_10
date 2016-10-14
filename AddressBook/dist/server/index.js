const express = require('express');
const contacts = require('./routes/contacts');
const path = require('path');
const morgan = require('morgan');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/addressbook');
mongoose.Promise = global.Promise;

let app = express();

app.use(morgan('dev'));
app.use(express.static(path.resolve(__dirname + '/../client')));

app.use('/api/v1.0/contacts', contacts);

// Erreur 404 de l'API
app.use('/api', (req, res, next) => {
  next({
    statusCode: 404,
    message: 'Page not found'
  });
});

// Rendu JSON des erreurs (404 ou non)
app.use('/api', (err, req, res, next) => {
  res.statusCode = err.statusCode || 500;
  delete err.statusCode;
  res.json(err);
});

// Les erreurs 404 soit traitées par AngularJS
app.use((req, res) => {
  res.sendFile(path.resolve(__dirname + '/../client/index.html'));
});

app.listen(80, () => {
  console.log('Serveur démarré http://localhost/');
});
