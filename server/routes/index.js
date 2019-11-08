const express = require('express');

const app = express();

/* All Routes */

app.use(require('./users'));
app.use(require('./login'));
app.use(require('./category'));



module.exports = app;