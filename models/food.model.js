const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema({
    title: String,
    food_category_id: {
        type: String,
        default: ""
    },
    price: Number,
    description: String,
    thumbnail: String,
    updatedBy: {
        account_id: String,
        updatedAt: Date
    },
    deletedBy: {
        account_id: String,
        deletedAt: Date
    },
    slug: {
        type: String,
        slug: "title",
        unique: true
    },
    deleted: {
        type: Boolean,
        default: false
    }
});

const Food = mongoose.model("Food", foodSchema, "foods");

module.exports = Food;