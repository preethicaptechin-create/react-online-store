



 Project Overview

ShopSphere is a full-stack e-commerce web application that allows users to browse products, add them to the cart, and place orders. The app also includes an admin dashboard to manage products and orders.

This project demonstrates full-stack development skills including React frontend, Node.js backend, MongoDB database, authentication, and CRUD operations.


Tech Stack

Frontend: ReactJS, Axios, React Router

Backend: Node.js, Express.js

Database: MongoDB

Authentication: JWT, bcrypt

State Management: React useState & Context API (optional)

Styling: CSS / Tailwind (based on your choice)

Tech Stack

Frontend: ReactJS, Axios, React Router

Backend: Node.js, Express.js

Database: MongoDB

Authentication: JWT, bcrypt

State Management: React useState & Context API (optional)

Styling: CSS / Tailwind (based on your choice)

Features
User Features

View products by category

Product details page

Add/remove items in cart

Update cart quantity & total price

Place orders

User authentication (Register/Login)

Protected routes for authenticated users

Admin Features

Admin login

CRUD operations for products

Update order status

Admin-only routes protection


Setup Instructions

### Option A: Run with Docker (recommended)

1. From the project root, run:
   ```bash
   docker compose up --build
   ```
2. Open the app: **http://localhost:3000** (frontend), API: **http://localhost:5000**
3. MongoDB runs in a container; the API connects to it and **GET /api/products** returns all products from the database.

To use your own secrets (e.g. JWT), create a `.env` in the project root and set `JWT_SECRET`, `JWT_REFRESH_SECRET`. Optional: create `back-end/.env` from `back-end/.env.example` for local overrides.

### Option B: Run locally

1. Frontend Setup
   ```bash
   cd frond-end
   npm install
   npm run dev
   ```
2. Backend Setup
   ```bash
   cd back-end
   cp .env.example .env   # then edit .env with MONGO_URI (e.g. mongodb://127.0.0.1:27017/onlinestore)
   npm install
   npm start
   ```

Use Postman or your frontend to test endpoints like:

/api/products – Get all products

/api/products/:id – Get product by ID

/api/users/register – Register user

/api/users/login – Login

/api/orders – Place order


