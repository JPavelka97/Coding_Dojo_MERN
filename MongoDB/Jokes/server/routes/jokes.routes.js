const JokeController = require("../controllers/jokes.controllers");

module.exports = (app) => {
    app.get("/api/jokes", JokeController.findAllJokes);
    app.get("/api/jokes/:id", JokeController.findOneJoke);
    app.put("/api/jokes/:id", JokeController.updateJoke);
    app.post("/api/jokes", JokeController.createNewJoke);
    app.delete("/api/jokes/:id", JokeController.deleteJoke);
};
