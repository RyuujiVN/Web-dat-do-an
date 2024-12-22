const express = require("express");
const multer = require('multer');

const storageHelper = require("../../helpers/storage-multer");
const uploadMiddleware = require("../../middleware/uploadCloud");

const upload = multer();

const router = express.Router();

const controller = require("../../controller/admin/account.controller");

router.get('/', controller.account);

router.get('/add', controller.add);

router.post('/add', upload.single('avatar'), uploadMiddleware.uploadCloud, controller.addPost);

router.patch('/change-status/:status', controller.changeStatus);

router.delete('/delete/:id', controller.delete);

router.get('/edit/:id', controller.edit);

router.patch('/edit/:id', upload.single('avatar'), controller.editPatch);

module.exports = router;