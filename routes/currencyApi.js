const express = require('express'),
router = express.Router(),
currencyApi = require("../controllers/currencyApi")

router.get('/', currencyApi.currencyApi)

module.exports = router