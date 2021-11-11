const express = require('express')
const router = express.Router()
const Book = require('./model/bookModel')

// Gets All
router.get('/', async (req,res) => {
    try
    {
        const books = await Book.find()
        res.json(books);
    }
    catch (err)
    {
        res.status(500).json({message: err.message})
    }
})

// Getting one

router.get('/:id', getBook ,(req,res) => {
    res.send(res.book)

})

// Creating One

router.post('/', async (req,res) => {
    

})

// Updating One

router.patch('/:id', (req,res) => {
    
})

// Deleting One

router.patch('/:id', (req,res) => {
    
})

async function getBook(req, res, next)
{
    let book
    try
    {
        //book = await Book.findById(req.params.id)
        book = await Book.findOne({book_id: req.params.id});
        if (book == null)
        {
            return res.status(404).json({message:'Cannot find book'})
        }
    } 
    catch (err)
    {
        return res.status(500).json({message:err.message})
    }
    
    res.book = book
    
    next()
}

module.exports = router;



/*
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    book_id: Number,
    book_author: String,
    book_name: String
}, {timestamps:true});

const Book = mongoose.model('Book', bookSchema);
module.exports = Book;
*/

