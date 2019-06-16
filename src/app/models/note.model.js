const mongoose = require('mongoose');
const noteModel = new mongoose.Schema({
    url: {
        type: String,
        required: [true, 'Не указана ссылка на материал']
    },
    title: {
        type: String,
        required: [true, 'Не указано название статьи']
    },
    description: {
        type: String
    },
    language: {
        type: String
    },
    keywords: {
        type: [String]
    },
    imageUrl: {
        type: String
    },
    isClicked: {
        type: Boolean
    },
    createDate: {
        type: Date,
        default: Date.now()
    },
});

mongoose.model('noteModel', noteModel);
