const express = require('express');
const app = express();
const mongoose = require('mongoose');
const env = require('dotenv');
env.config()
const router = require('./routes/api')
const cors = require('cors');


mongoose.connect(process.env.DB_CONNECT)
    .then(() => {
        console.log("connected to db");
    })
    .catch((err) => {
        console.log("error: " + err);

    })

app.use(cors());
app.use('/', router);


app.listen(3000, () => console.log("API server is running..."));