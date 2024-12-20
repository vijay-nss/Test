const express = require('express');
const { addData } = require('../controller/data.controller');

const router = express.Router();

router.post('/data', addData);

module.exports = router;
