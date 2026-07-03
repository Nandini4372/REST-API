const express = require("express");

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// In-memory database
let books = [
    {
        id: 1,
        title: "Atomic Habits",
        author: "James Clear"
    },
    {
        id: 2,
        title: "Rich Dad Poor Dad",
        author: "Robert Kiyosaki"
    }
];

// Home Route
app.get("/", (req, res) => {
    res.send("📚 Welcome to Book Management REST API");
});

// GET All Books
app.get("/books", (req, res) => {
    res.json(books);
});

// GET Single Book
app.get("/books/:id", (req, res) => {

    const id = parseInt(req.params.id);

    const book = books.find(book => book.id === id);

    if (!book) {
        return res.status(404).json({
            message: "Book not found"
        });
    }

    res.json(book);
});

// POST Add Book
app.post("/books", (req, res) => {

    const { title, author } = req.body;

    if (!title || !author) {
        return res.status(400).json({
            message: "Title and Author are required"
        });
    }

    const newBook = {
        id: books.length ? books[books.length - 1].id + 1 : 1,
        title,
        author
    };

    books.push(newBook);

    res.status(201).json({
        message: "Book added successfully",
        book: newBook
    });
});

// PUT Update Book
app.put("/books/:id", (req, res) => {

    const id = parseInt(req.params.id);

    const { title, author } = req.body;

    const book = books.find(book => book.id === id);

    if (!book) {
        return res.status(404).json({
            message: "Book not found"
        });
    }

    if (title) {
        book.title = title;
    }

    if (author) {
        book.author = author;
    }

    res.json({
        message: "Book updated successfully",
        book
    });
});

// DELETE Book
app.delete("/books/:id", (req, res) => {

    const id = parseInt(req.params.id);

    const index = books.findIndex(book => book.id === id);

    if (index === -1) {
        return res.status(404).json({
            message: "Book not found"
        });
    }

    books.splice(index, 1);

    res.json({
        message: "Book deleted successfully"
    });
});

// Start Server
app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
});