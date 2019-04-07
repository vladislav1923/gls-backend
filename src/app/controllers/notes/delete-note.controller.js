const mongoose = require('mongoose');
const NoteModel = mongoose.model('noteModel');

const deleteNoteController = function (queryParams) {
    return new Promise((resolve, reject) => {
        NoteModel.findOneAndRemove({_id: queryParams.id})
            .then(() => resolve())
            .catch((e) => reject(e));
    })
};

module.exports = deleteNoteController;