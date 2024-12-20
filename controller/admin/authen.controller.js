

// [GET] /admin/authen/login
module.exports.login = (req, res) => {

    res.render("admin/pages/auth/login", {
        pageTitle: "Trang login"
    });
}