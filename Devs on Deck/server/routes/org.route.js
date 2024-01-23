const orgController = require('../controllers/org.controller')

module.exports = (app) => {
    app.post('/api/orgRegister',orgController.register)
}