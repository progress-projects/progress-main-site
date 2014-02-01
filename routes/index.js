module.exports = function (app) {
    
    app.get('/', require('./announce').get);
    
    app.post('/subscribe', require('./subscribe').post);
    
};