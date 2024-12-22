const express = require("express");
const router = express.Router();

const controller = require("../../controller/admin/role.controller");

router.get('/', controller.role);

router.get('/add', controller.add);

router.post('/add', controller.addPost);

module.exports = router;