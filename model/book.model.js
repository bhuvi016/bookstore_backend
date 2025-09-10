import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
    id: Number,
    name: String,
    title: String,
    price: Number,
    category: String,
    image: String,
});

// The third parameter forces the exact collection name in MongoDB
const Book = mongoose.model("Book", bookSchema, "books");

export default Book;
