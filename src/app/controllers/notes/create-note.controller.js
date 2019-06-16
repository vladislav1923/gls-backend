const mongoose = require('mongoose');
const NoteModel = mongoose.model('noteModel');

const createNoteController = function (body) {
    return new Promise((resolve, reject) => {
        let note = new NoteModel({
                url: body.url,
                title: body.title,
                description: body.description,
                language: body.language,
                keywords: body.keywords,
                imageUrl: body.imageUrl,
                isClicked: body.isClicked
            }
        );

        note.save()
            .then((newNote) => resolve(newNote))
            .catch((e) => reject(e))
    });
};

module.exports = createNoteController;
