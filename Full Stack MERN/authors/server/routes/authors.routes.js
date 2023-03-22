const AuthorController = require('../controllers/authors.controllers')
module.exports = function(app){
    app.get('/api/authors', AuthorController.getAll)
    app.post('/api/authors', AuthorController.create)
    app.get('/api/authors/:id', AuthorController.getOne)
    app.put('/api/authors/:id/edit', AuthorController.updateOne)
    app.delete('/api/authors/:id', AuthorController.deleteOne)
}