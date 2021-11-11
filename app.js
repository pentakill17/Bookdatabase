const express = require('express');
const mongoose = require('mongoose');
const Book = require('./book');

const app = express();

const dbUri = "mongodb+srv://library_app:reniel123@library.5f0ok.mongodb.net/library?retryWrites=true&w=majority";

mongoose.connect(dbUri, {useNewUrlParser: true, useUnifiedTopology: true})
.then((result) => app.listen(3000))
.catch((err) => console.log(err));

app.use(express.json());

const bookRouter = require('./book');
app.use('/', bookRouter);

