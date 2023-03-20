const ProductController = require('../controllers/products.controllers')
module.exports = function(app){
    app.get('/api/products', ProductController.getAll)
    app.post('/api/products', ProductController.createProduct)
    app.get('/api/products/:id', ProductController.getOne)
}