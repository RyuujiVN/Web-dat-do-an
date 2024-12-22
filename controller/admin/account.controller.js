const Role = require("../../models/role.model");
const Account = require("../../models/account.model");

const systemConfig = require("../../config/system");

const md5 = require('md5');

// [GET] /admin/account
module.exports.account = async (req, res) => {
    const accounts = await Account.find({
        deleted: false,
    });

    for (const account of accounts) {
        const roleId = account.role_id;

        const role = await Role.findOne({
            _id: roleId,
            deleted: false
        });

        account.role = role.title;
    };

    res.render("admin/pages/account/index", {
        pageTitle: "Trang tài khoản admin",
        accounts: accounts
    });
}

// [GET] /admin/account/add
module.exports.add = async (req, res) => {
    const roles = await Role.find({
        deleted: false
    });

    res.render("admin/pages/account/add", {
        pageTitle: "Trang tài khoản admin",
        roles: roles
    });
}

// [POST] /admin/account/add
module.exports.addPost = async (req, res) => {
    const accounts = await Account.findOne({
        email: req.body.email
    }).select("-password -token");

    if (accounts) {
        res.redirect("back");
    }
    else {
        const newAccount = req.body;
        newAccount.password = md5(newAccount.password);
        if (req.file)
            newAccount.avatar = `/admin/uploads/${req.file.filename}`;

        await new Account(newAccount).save();

        res.redirect("back");
    }
}

// [PATCH] /admin/account/change-status/:status
module.exports.changeStatus = async (req, res) => {
    const [id, status] = req.params.status.split("-");

    await Account.updateOne({ _id: id }, { status: status });
    res.redirect("back");
}

// [DELETE] /admin/account/delete/:id
module.exports.delete = async (req, res) => {
    const id = req.params.id

    await Account.updateOne({ _id: id }, { deleted: true });
    res.redirect("back");
}

// [GET] /admin/account/edit/:id
module.exports.edit = async (req, res) => {
    try {
        const id = req.params.id
        const account = await Account.findOne({
            _id: id
        }).select("-passowrd -token");

        const roles = await Role.find({
            deleted: false
        });

        res.render("admin/pages/account/edit", {
            pageTitle: "Trang chỉnh sửa tài khoản",
            account: account,
            roles: roles
        });

    } catch (error) {
        req.redirect(`/${systemConfig.prefixAdmin}/account`);
    }
}

// [PATCH] /admin/account/edit/:id
module.exports.editPatch = async (req, res) => {
    const id = req.params.id;
    const account = req.body;
    if (account.password != "") {
        account.password = md5(account.password);
    }
    else {
        delete account.password;
    }

    if (req.file)
        account.avatar = `/admin/uploads/${req.file.filename}`;

    await Account.updateOne({ _id: id }, account);

    res.redirect("back");
}