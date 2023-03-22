const express = require('express');
require('dotenv').config();
const cors = require('cors')
const app = express();
require('../server/config/mongoose.config')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
require('../server/routes/authors.routes')(app);

const port = 8000;

app.listen(port, () => console.log(`Listening on port: ${port}`));