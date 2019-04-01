const mongoose = require('mongoose');
const NoteModel = mongoose.model('noteModel');

const getNotesListController = function (queryParams) {
    return new Promise((resolve, reject) => {
        NoteModel.find()
            .then((data) => resolve(data))
            .catch(() => reject())
    });
};

module.exports = getNotesListController;