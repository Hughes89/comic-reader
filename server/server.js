/*
 * @CreateTime: Oct 6, 2018 11:34 PM
 * @Author: Mike Hughes
 * @Contact: mik3h89@gmail.com
 * @Last Modified By: Mike Hughes
 * @Last Modified Time: Oct 7, 2018 12:06 AM
 * @Description: Node server for serving up Comics from the files ystem.
 */


// =============================================================================
// Express - App
// =============================================================================
const express = require('express');
const app = express();

// =============================================================================
// Port
// =============================================================================
const port = process.env.PORT || 8080;

// =============================================================================
// Routes
// =============================================================================
const routes = require('./config/routes.js');
app.use('/', routes);

// =============================================================================
// Listen
// =============================================================================
app.listen(port, () =>  console.log(`Listening on port ${port}`));