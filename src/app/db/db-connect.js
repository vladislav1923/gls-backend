const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const config = require('../../../config');

mongoose.connect(`mongodb://${config.db.host}:${config.db.port}/${config.db.name}`, {
    user: config.db.user,
    password: config.db.password
}).catch((e) => {
    console.log(e);
    throw e;
});