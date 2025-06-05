# 📚 Book Review API (Node.js + Express + MongoDB)

This is a RESTful API built with Node.js and Express for managing books and reviews. It supports JWT authentication and MongoDB for storage.

---

## 🔧 Tech Stack

- Node.js
- Express.js
- MongoDB (via Mongoose)
- JWT (JSON Web Token)
- Postman (for API testing)

---

## 🧾 Features

### 🧑‍💻 Authentication

- POST /signup – Register a user
- POST /login – Login and get a JWT token

### 📘 Books

- POST /books – Add a book (JWT required)
- GET /books – List all books (pagination, filter by author or genre)
- GET /books/:id – Get details of a single book (with reviews + avg rating)

### ✍ Reviews

- POST /books/:id/reviews – Add a review to a book (one per user)
- PUT /reviews/:id – Edit your review
- DELETE /reviews/:id – Delete your review

### 🔍 Search

- GET /search?title=...&author=... – Search by title or author (partial & case-insensitive)

---

## ⚙ How to Run Locally

1. Clone the project:
   ```bash
   git clone https://github.com/your-username/book-review-api.git
   cd book-review-api

## 📦 Database Schema

The application uses a MongoDB database with the following collections:

### 1. Users

| Field      | Type     | Description                    |
|------------|----------|--------------------------------|
| _id      | ObjectId | Unique user ID (auto-generated)|
| username | String   | User’s name                    |
| email    | String   | User email                     |
| password | String   | Hashed password                |

### 2. Books

| Field        | Type     | Description                    |
|--------------|----------|--------------------------------|
| _id        | ObjectId | Unique book ID                 |
| title      | String   | Title of the book              |
| author     | String   | Author of the book             |
| description| String   | Book description               |

### 3. Reviews

| Field      | Type     | Description                     |
|------------|----------|---------------------------------|
| _id      | ObjectId | Unique review ID                |
| bookId   | ObjectId | Reference to the book           |
| userId   | ObjectId | Reference to the user           |
| rating   | Number   | Rating given by the user        |
| comment  | String   | User’s comment about the book   |
