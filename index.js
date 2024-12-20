const express = require("express");
const database = require("./config/database");
const systemConfig = require("./config/system");
const methodOverride = require('method-override')

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

// Routes
routeAdmin(app);

// Local
app.locals.prefixAdmin = systemConfig.prefixAdmin;

// override with the X-HTTP-Method-Override header in the request
app.use(methodOverride('X-HTTP-Method-Override'));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});