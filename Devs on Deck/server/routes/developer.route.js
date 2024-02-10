const devControlelr = require('../controllers/developer.controller')
module.exports = (app) => {
    app.post('/api/register', devControlelr.register)
    app.post('/api/login', devControlelr.login)
<<<<<<< HEAD
    app.post('/api/getDev', devControlelr.findDev)
    app.post('/api/addSkill/:id', devControlelr.addSkills)
    app.get('/api/getAll', devControlelr.getAllDevs)
    app.get('/api/getAll', devControlelr.getAllDevs)
    app.get('/api/getOneDev/:id', devControlelr.getOneDev)
=======
    app.get('/api/getDev', devControlelr.findDev)
    app.post('/api/addSkillsBio/:id', devControlelr.addSkillsBio)
    app.post('/api/addSkills/:id', devControlelr.addSkills)
    app.get('/api/developers', devControlelr.getAllDevelopers)
>>>>>>> d75fde3d6f0c72ddb8b0734df569980a165cd785
}