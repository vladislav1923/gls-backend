const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/', function (res, req, next) {
    req.sendFile(path.resolve('dist', 'index.html'));
});

module.exports = router;
