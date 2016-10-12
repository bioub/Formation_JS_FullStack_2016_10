const express = require('express');
const contacts = require('./routes/contacts');

let app = express();

app.use('/api/v1.0/contacts', contacts);

app.listen(80, () => {
  console.log('Serveur démarré http://localhost/');
});
