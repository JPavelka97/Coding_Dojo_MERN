const mongoose = require('mongoose');
const dbName = process.env.DB;
const user = process.env.USER;
const pw = process.env.PASSWORD;
const dbUri = process.env.DB_CONNECTION_STRING;
const uri = `mongodb+srv://${user}:${pw}@${dbUri}/${dbName}?retryWrites=true&w=majority`
console.log(uri)
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("Established a connection to the database"))
    .catch(err => console.log("Something went wrong when connection to the database", err))