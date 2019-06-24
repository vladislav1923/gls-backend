const mongoose = require('mongoose');
const NoteModel = mongoose.model('noteModel');

const getNotesListController = function (queryParams) {
    return new Promise((resolve, reject) => {
        NoteModel.find()
            .sort({createDate: -1})
            .then((data) => {
                let filteredList = data;

                if (queryParams.searchString) {
                    filteredList = filterListByString(filteredList, queryParams.searchString);
                }

                if (queryParams.searchKeywords) {
                    filteredList = filterListByKeywords(filteredList, queryParams.searchKeywords);
                }

                const startNote = (queryParams.page - 1) * queryParams.notesPerPage;
                const endNote = queryParams.page * queryParams.notesPerPage;
                filteredList = filteredList.slice(startNote, endNote);

                const response = {
                    list: filteredList,
                    page: Number(queryParams.page),
                    notesPerPage: Number(queryParams.notesPerPage),
                    total: data.length
                };
                resolve(response)
            })
            .catch((e) => reject(e))
    });
};

const filterListByString = function(list, searchString) {
    return list.filter((note) => {
        return note.title.toLowerCase().includes(searchString.toLowerCase()) ||
               note.description.toLowerCase().includes(searchString.toLowerCase());
    });
};

const filterListByKeywords = function(list, searchKeywords) {
    searchKeywords = searchKeywords.split(',');

    return list.filter((note) => {
        let result = false;

        searchKeywords.forEach((keyword) => {
            if (note.keywords.includes(keyword)) {
                result = true;
            }
        });

        return result;
    });
};

module.exports = getNotesListController;
