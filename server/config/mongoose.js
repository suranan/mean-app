var mongoose = require('mongoose');

module.exports = function() {
    mongoose.set('debug', true);
    var db = mongoose.connect('mongodb://localhost/mean-app');

    require('../app/models/user.model');
    require('../app/models/invoice.model');

    return db;
}