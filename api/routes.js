const companyController = require('./controllers/company-controller')
const virkopediaController = require('./controllers/virkopedia-controller')
const userController = require('./controllers/user-controller')

const loadRoutes = (app) => {
  // Companies
  app.get('/companies', companyController().getCompanies)
  app.get('/companies/:id', companyController().getCompany)
  app.post('/companies', companyController().createCompany)
  app.put('/companies/:id', companyController().updateCompany)
  app.delete('/companies/:id', companyController().deleteCompany)
  app.delete('/companies-delete-all', companyController().deleteAllCompanies)

  // Virkopedias
  app.get('/virkopedias', virkopediaController().getVirkopedias)
  app.post('/virkopedias', virkopediaController().createVirkopedias)

  // Users
  app.get('/users', userController().getUsers)
  app.get('/users/:id', userController().getUser)
  app.post('/users', userController().createUser)
  app.put('/users/:id', userController().updateUser)
  app.delete('/users/:id', userController().deleteUser)
  app.delete('/users-delete-all', userController().deleteAllUsers)
}

module.exports = loadRoutes
