const mongoose = require("mongoose");

const generateHelper = require("../helpers/generate");

const accountSchema = new mongoose.Schema({
    fullName: String,
    email: String,
    phone: String,
    password: String,
    avatar: String,
    role_id: String,
    status: {
        type: String,
        default: "active"
    },
    token: {
        type: String,
        default: generateHelper.generateString(10)
    },
    deleted: {
        type: Boolean,
        default: false
    },
    deletedBy: {
        account_id: String,
        deletedAt: Date,
    },
}, {
    timestamps: true
});

const Account = mongoose.model("Accout", accountSchema, "accounts");

module.exports = Account;