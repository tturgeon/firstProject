const express = require('express');
const path = require('path');
const $ = require('jquery');
const app = express();
const port = process.env.PORT || 3000;
app.use('/',express.static(path.join(__dirname, 'public')));
app.listen(port,()=>console.log("Served on " + port))
