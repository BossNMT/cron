const express = require('express');
const router = express.Router()
const homeController = require('../app/controllers/homeController');
const { verifyToken } = require('../middlewares/verifyToken');

router.get('/', verifyToken, homeController.home);
router.get('/cron', homeController.callApi)
router.get('/get-all', homeController.getAll)
router.post('/get-list', homeController.getList)

module.exports = router