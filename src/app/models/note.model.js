const mongoose = require('mongoose');
const noteModel = new mongoose.Schema({
    id: {},
    url: {
        type: String,
        required: [true, 'Не указана ссылка на материал']
    },
    name: {
        type: String,
        required: [true, 'Не указано название статьи']
    },
    description: {
        type: String
    },
    createDate: {
        type: Date,
        default: Date.now()
    },
    imagePath: {
        type: String
    }
});

mongoose.model('noteModel', noteModel);