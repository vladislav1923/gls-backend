const express = require('express');
const router = express.Router();
const htmlParseController = require('../controllers/parse/html-parse.controller');

router.get('/', function (request, response) {
    htmlParseController(request.query)
        .then((data) => {
            response.setHeader('statusCode', 200);
            response.send(data);
        })
        .catch((e) => {
            response.setHeader('statusCode', 400);
            response.send(e);
        });
});

module.exports = router;