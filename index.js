const express = require("express");
const database = require("./config/database");
const systemConfig = require("./config/system");
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const path = require("path");

const routeAdmin = require("./routes/admin/route");

require('dotenv').config();

const app = express();
const port = process.env.PORT;

// public files
app.use(express.static('public'));

// pug
app.set('views', './views');
app.set('view engine', 'pug');

// Connect Database
database.connect();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// Local
app.locals.prefixAdmin = systemConfig.prefixAdmin;

// Method override
app.use(methodOverride('_method'));

// Tinymce
app.use('/tinymce', express.static(path.join(__dirname, 'node_modules', 'tinymce')));

// Routes
routeAdmin(app);


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});