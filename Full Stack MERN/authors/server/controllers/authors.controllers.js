const { Author } = require("../models/authors.model");

module.exports.create = (request, response) => {
    Author.create(
        request.body
    )
        .then((author) => response.json(author))
        .catch((err) => {
            response
                .status(400)
                .json({ message: "Something went wrong", error: err });
        });
};

module.exports.getAll = (request, response) => {
    Author.find()
        .then((allAuthors) => response.json(allAuthors))
        .catch((err) => {
            response
                .status(400)
                .json({ message: "Something went wrong", error: err });
        });
};

module.exports.getOne = (request, response) => {
    Author.findOne({ _id: request.params.id })
        .then((oneAuthor) => response.json(oneAuthor))
        .catch((err) => {
            response
                .status(400)
                .json({ message: "Something went wrong", error: err });
        });
};

module.exports.updateOne = (request, response) => {
    Author.findOneAndUpdate({ _id: request.params.id }, request.body, {
        new: true,
        runValidators: true,
    })
        .then((oneAuthor) => response.json(oneAuthor))
        .catch((err) => {
            response
                .status(400)
                .json({ message: "Something went wrong", error: err });
        });
};

module.exports.deleteOne = (request, response) => {
    Author.deleteOne({ _id: request.params.id })
        .then((deleteConfirm) => {
            response.json({ deleteConfirm });
        })
        .catch((err) => {
            response.json({ message: "Something went wrong", error: err });
        });
};
