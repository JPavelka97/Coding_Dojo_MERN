const mongoose = require('mongoose');
// const dbName = process.env.DB;
// const username = process.env.USERNAME;
// const pw = process.env.PASSWORD;
// const dbUri = process.env.DB_CONNECTION_STRING;
const uri = `mongodb+srv://jacobpavelka13:ducky@jpcluster.cyxvfiv.mongodb.net/products?retryWrites=true&w=majority`
// const uri = `mongodb+srv://${username}:${pw}@${dbUri}/${dbName}?retryWrites=true&w=majority`
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("Established a connection to the database"))
    .catch(err => console.log("Something went wrong when connection to the database", err))