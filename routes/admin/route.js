const dashboardRoute = require("./dashboard.route");
const authenRoute = require("./authen.route");
const roleRoute = require("./role.route");
const accountRoute = require("./account.route");

const PATH_ADMIN = require("../../config/system");

module.exports = (app) => {

    app.use(PATH_ADMIN.prefixAdmin + '/dashboard', dashboardRoute);

    app.use(PATH_ADMIN.prefixAdmin + '/authen', authenRoute);

    app.use(PATH_ADMIN.prefixAdmin + '/role', roleRoute);

    app.use(PATH_ADMIN.prefixAdmin + '/account', accountRoute);
}