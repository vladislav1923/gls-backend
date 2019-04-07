const mongoose = require('mongoose');
const NoteModel = mongoose.model('noteModel');

const createNoteController = function (body) {
    return new Promise((resolve, reject) => {
        let note = new NoteModel(
            {
                url: body.url,
                name: body.name,
                description: body.description
            }
        );

        note.save()
            .then((newNote) => resolve(newNote))
            .catch((e) => reject(e))
    });
};

module.exports = createNoteController;