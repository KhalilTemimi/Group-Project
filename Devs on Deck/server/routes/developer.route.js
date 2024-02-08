const devControlelr = require('../controllers/developer.controller')
module.exports = (app) => {
    app.post('/api/register', devControlelr.register)
    app.post('/api/login', devControlelr.login)
    app.get('/api/getDev', devControlelr.findDev)
    app.post('/api/addSkillsBio/:id', devControlelr.addSkillsBio)
    app.post('/api/addSkills/:id', devControlelr.addSkills)
    app.get('/api/developers', devControlelr.getAllDevelopers)
}