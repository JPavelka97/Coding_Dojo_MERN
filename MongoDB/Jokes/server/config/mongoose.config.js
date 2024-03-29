const mongoose = require('mongoose');
const dbName = process.env.DB;
const username = process.env.USERNAME1;
const pw = process.env.PASSWORD;
console.log(username, pw)
const uri = `mongodb+srv://${username}:${pw}@jpcluster.cyxvfiv.mongodb.net/${dbName}?retryWrites=true&w=majority`;

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Established a connection to the database"))
    .catch(err => console.log("Something went wrong when connecting to the database", err));