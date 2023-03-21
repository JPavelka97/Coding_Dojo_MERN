const { Product } = require('../models/products.model')

module.exports.createProduct = (request, response) => {
    const { title, price, description } = request.body;
    Product.create({
        title,
        price,
        description
    })
        .then(person => response.json(person))
        .catch(err => response.json(err))
}

module.exports.getAll = (request, response) => {
    Product.find()
        .then((allProducts) => {
            response.json({ products: allProducts})
        })
        .catch((err) => {
            response.json({ message: 'Something went wrong', error: err })
        })
}

module.exports.getOne = (request, response) => {
    Product.findOne({ _id: request.params.id })
        .then(oneProduct => {
            response.json({ product: oneProduct })
        })
        .catch((err) => {
            response.json({ message: "Something went wrong", error: err })
        })
}

module.exports.updateOne = (request, response) => {
    Product.findOneAndUpdate(
        { _id: request.params.id },
        request.body, { new: true, runValidators: true }
    )
    .then(updatedProduct => {
        response.json({ product: updatedProduct })
    })
    .catch((err) => {
        response.json({ message: 'Something went wrong', error: err})
    })
}

module.exports.updateOne = (request, response) => {
    Product.findOneAndUpdate(
        { _id: request.params.id },
        request.body, { new: true, runValidators: true }
    )
    .then(updatedProduct => {
        response.json({ product: updatedProduct })
    })
    .catch((err) => {
        response.json({ message: 'Something went wrong', error: err})
    })
}

module.exports.deleteOne = (request, response) => {
    Product.deleteOne(
        { _id: request.params.id })
    .then(deleteConfirm => {
        response.json({ deleteConfirm })
    })
    .catch((err) => {
        response.json({ message: 'Something went wrong', error: err})
    })
}