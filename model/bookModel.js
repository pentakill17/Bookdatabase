const mongoose = require('mongoose');


const bookSchema = new mongoose.Schema(
    {
        book_id:
        {
            required: true,
            type: Number
        }, 
        book_author:
        {
            required: true,
            type: String
        }, 
        book_name:
        {
            required: true,
            type: String
        }, 
        book_img:
        {
            required: true,
            type: String
        }, 
        book_timeAdded:
        {
            required: true,
            type: Date,
            default: Date.now
        }
    }
)



module.exports = mongoose.model('book', bookSchema);