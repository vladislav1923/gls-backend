const mongoose = require('mongoose');
const NoteModel = mongoose.model('noteModel');

const updateNoteController = function (body) {
    return new Promise((resolve, reject) => {
        NoteModel.findOneAndUpdate({_id: body._id}, {
            url: body.url,
            name: body.name,
            description: body.description
        }, {new: true})
            .then((updatedNote) => resolve(updatedNote))
            .catch((e) => reject(e));
    })
};

module.exports = updateNoteController;