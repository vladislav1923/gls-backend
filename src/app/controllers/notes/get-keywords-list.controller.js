const mongoose = require('mongoose');
const NoteModel = mongoose.model('noteModel');

const getNotesListController = function () {
    return new Promise((resolve, reject) => {
        NoteModel.find()
            .then((data) => resolve({list: getUniqueKeywords(data)}))
            .catch((e) => reject(e))
    });
};

const getUniqueKeywords = function(data) {
    const keywords = [];

    data.forEach((note) => {
        note.keywords.forEach((keyword) => {
            if (!keywords.includes(keyword)) {
                keywords.push(keyword);
            }
        });
    });

    return keywords;
};

module.exports = getNotesListController;
