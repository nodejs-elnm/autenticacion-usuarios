const express = require('express');

const app = express();

/* All Routes */

app.use(require('./users'));
app.use(require('./login'));



module.exports = app;