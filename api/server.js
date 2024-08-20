const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const mongoose = require("mongoose");

app.use(cors());
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
       next();
 });

const PORT = process.env.PORT || 8888;

const quoteRouter = require('./routes/quotes');

const DATABASE_URL = process.env.DATABASE_URL;

mongoose.connect(DATABASE_URL)

const db = mongoose.connection;
db.on('error', error => console.error(error));
db.once('open', () => {
    console.log("Database connection established")
});

app.use(express.json());
app.use('/api/v1/quotes', quoteRouter);

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`)
})