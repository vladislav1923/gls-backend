const express = require('express');
const router = express.Router();
const getNotesListController = require('../controllers/get-notes-list.controller');
const createNoteController = require('../controllers/create-note.controller');
const updateNoteController = require('../controllers/update-note.controller');

router.get('/', function (request, response) {
    getNotesListController(request.query)
        .then((data) => {
            response.setHeader('statusCode', 200);
            response.send(data);
        })
        .catch((e) => {
            response.setHeader('statusCode', 400);
            const errorsMessages = Object.keys(e.errors)
                .map(key => e.errors[key].message)
                .join(', ');

            response.send({message: errorsMessages});
        });
});

router.post('/', function (request, response) {
    createNoteController(request.body)
        .then(() => {
            response.setHeader('statusCode', 200);
            response.send();
        })
        .catch((e) => {
            response.setHeader('statusCode', 400);
            response.send(e);
        });
});

router.put('/', function (request, response) {
    updateNoteController(request.body)
        .then(() => {
            response.setHeader('statusCode', 200);
            response.send();
        })
        .catch((e) => {
            response.setHeader('statusCode', 400);
            response.send(e);
        });
});

module.exports = router;