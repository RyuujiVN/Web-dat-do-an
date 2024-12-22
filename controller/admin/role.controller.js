const Role = require("../../models/role.model");

// [GET] /admin/role
module.exports.role = async (req, res) => {
    const roles = await Role.find({
        deleted: false
    });

    res.render("admin/pages/role/index", {
        pageTitle: "Trang nhóm quyền",
        roles: roles
    });
}

// [GET] /admin/role/add
module.exports.add = (req, res) => {
    res.render("admin/pages/role/add", {
        pageTitle: "Thêm mới nhóm quyền"
    });
}

// [POST] /admin/role/add
module.exports.addPost = async (req, res) => {
    await new Role(req.body).save();
    res.redirect("back");
}