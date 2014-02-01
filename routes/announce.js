exports.get = function (req, res, next) {
    res.render('announce', {
        complete: 25
    });
}