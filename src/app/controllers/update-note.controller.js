const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;
const NoteModel = mongoose.model('noteModel');

const updateNoteController = function (body) {
    return new Promise((resolve, reject) => {
        let updatedNote = new NoteModel(
            {
                url: body.url,
                name: body.name,
                description: body.description
            }
        );

        console.log(updatedNote);

        NoteModel.deleteOne({"_id": new ObjectId(body._id)});

        updatedNote.save()
            .then(() => resolve())
            .catch((e) => reject(e));
    })
};

module.exports = updateNoteController;