import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
  id: Number,
  name: String,
  author: String,
  description: String,
  price: Number,
  image: String,
  category: String,
});

const Book = mongoose.model("Book", bookSchema);
export default Book;
