const mongoose = require('mongoose');
const NoteModel = mongoose.model('noteModel');

const getNotesListController = function (queryParams) {
    return new Promise((resolve, reject) => {
        NoteModel.find()
            .then((data) => resolve(data))
            .catch((e) => reject(e))
    });
};

module.exports = getNotesListController;