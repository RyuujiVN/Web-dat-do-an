const mongoose = require("mongoose");

module.exports.connect = () => {
    try {
        mongoose.connect(process.env.MONGO_URL);
        console.log("Connect successfull!");
    } catch (error) {
        console.log("Connect failed!");
    }
};