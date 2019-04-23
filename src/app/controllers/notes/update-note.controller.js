const mongoose = require('mongoose');
const NoteModel = mongoose.model('noteModel');

const updateNoteController = function (body) {
    return new Promise((resolve, reject) => {
        NoteModel.findOneAndUpdate({_id: body._id}, {
            url: body.url,
            title: body.title,
            description: body.description,
            language: body.language,
            keywords: body.keywords,
            imageUrl: body.imageUrl,
            group: body.group,
            isClicked: body.isClicked
        }, {new: true})
            .then((updatedNote) => resolve(updatedNote))
            .catch((e) => reject(e));
    })
};

module.exports = updateNoteController;
