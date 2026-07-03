# 📚 Book Management REST API

A simple REST API built using **Node.js** and **Express.js** to perform CRUD (Create, Read, Update, Delete) operations on an in-memory list of books.

## 🚀 Features

* 📖 Get all books
* ➕ Add a new book
* ✏️ Update an existing book
* ❌ Delete a book
* 💾 In-memory data storage (No database)

## 🛠️ Technologies Used

* Node.js
* Express.js
* JavaScript

## 📂 Installation

1. Clone or download this repository.
2. Install dependencies:

   ```bash
   npm install
   ```
3. Start the server:

   ```bash
   node server.js
   ```
4. Open your browser and visit:

   ```
   http://localhost:3000
   ```

## 📌 API Endpoints

| Method | Endpoint     | Description    |
| ------ | ------------ | -------------- |
| GET    | `/books`     | Get all books  |
| POST   | `/books`     | Add a new book |
| PUT    | `/books/:id` | Update a book  |
| DELETE | `/books/:id` | Delete a book  |

## 🧪 Testing the API

### Using Postman

1. Open Postman.
2. Create a new HTTP request.
3. Select the required method (GET, POST, PUT, DELETE).
4. Enter the endpoint URL (e.g., `http://localhost:3000/books`).
5. For POST and PUT requests, choose **Body → Raw → JSON** and provide the request data.
6. Click **Send**.

### Using Thunder Client (VS Code)

1. Install the **Thunder Client** extension in VS Code.
2. Open Thunder Client and create a new request.
3. Select the HTTP method and enter the endpoint URL.
4. For POST and PUT requests, open the **Body** tab, select **JSON**, and enter the request data.
5. Click **Send** to test the API.

## 🎯 Learning Outcome

This project demonstrates REST API fundamentals, Express routing, CRUD operations, HTTP methods, and JSON request/response handling.

---

**Developed by Nandini A**
