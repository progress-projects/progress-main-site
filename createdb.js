var mongoose = require('lib/mongoose');
var User = require('models/user').User;

mongoose.connection.on('open', function () {
    var db = mongoose.connection.db;
    db.dropDatabase(function (err) {
        if (err) throw err;

        mongoose.disconnect();
    });
});