const dashboardRoute = require("./dashboard.route");
const authenRoute = require("./authen.route");

const PATH_ADMIN = require("../../config/system");

module.exports = (app) => {
    app.use(PATH_ADMIN.prefixAdmin + '/dashboard', dashboardRoute);

    app.use(PATH_ADMIN.prefixAdmin + '/authen', authenRoute);
}