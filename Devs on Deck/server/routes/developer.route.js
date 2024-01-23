const devControlelr = require('../controllers/developer.controller')
module.exports = (app) => {
    app.post('/api/register', devControlelr.register)
}