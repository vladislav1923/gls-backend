const express = require('express');
const router = express.Router();
const getNotesListController = require('../controllers/notes/get-notes-list.controller');
const createNoteController = require('../controllers/notes/create-note.controller');
const updateNoteController = require('../controllers/notes/update-note.controller');
const deleteNoteController = require('../controllers/notes/delete-note.controller');

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
    if (!request.body) {
        response.setHeader('statusCode', 400);
        response.send();
    }

    createNoteController(request.body)
        .then((newNote) => {
            response.setHeader('statusCode', 200);
            response.send(newNote);
        })
        .catch((e) => {
            response.setHeader('statusCode', 400);
            response.send(e);
        });
});

router.put('/', function (request, response) {
    updateNoteController(request.body)
        .then((updatedNote) => {
            response.setHeader('statusCode', 200);
            response.send(updatedNote);
        })
        .catch((e) => {
            response.setHeader('statusCode', 400);
            response.send(e);
        });
});

router.delete('/', function (request, response) {
    deleteNoteController(request.query)
        .then((deletedNote) => {
            response.setHeader('statusCode', 200);
            response.send(deletedNote);
        })
        .catch((e) => {
            response.setHeader('statusCode', 400);
            response.send(e);
        });
});

module.exports = router;
