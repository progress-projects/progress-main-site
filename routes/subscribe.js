var validator = require('validator');
var User = require('models/user').User;

exports.get = function (req, res, next) {
    next(404);
};

exports.post = function (req, res, next) {
    var email = req.body.email;
    
    if (validator.isEmail(email)) {
        User.findOne({ email: email }, function (err, user) {
            if (err) return next(err);

            if (user) {
                next(403);
            } else {
                var user = new User({ email: email });
                user.save(function (err) {
                    if (err) return next(err);
                    console.log(user);
                    res.end(); // res.send({});
                });
            }
        });
    } else {
        next(403);
    }
};