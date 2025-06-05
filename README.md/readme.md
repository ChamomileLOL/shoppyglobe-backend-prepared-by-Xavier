# ShoppyGlobe Backend API

> Note: Make sure you're inside the project root folder before running this command.
> node src/server.js

What is this project?
This project is a backend API for an online shopping system called ShoppyGlobe.
It is made using Node.js and Express (which are tools to build web servers) and uses MongoDB Atlas (a cloud database) to store data.

You can:

Add and see products

Add, update, and delete items in a shopping cart

Log in as a user and get a special token (called JWT) to use protected features

How to use this project on your computer
Step 1: Download the project
You need to get the project files on your computer.
If you have Git installed, open a terminal or command prompt and type:

git clone <https://github.com/yourusername/shoppyglobe-backend.git>
(Change yourusername to your GitHub username)

Step 2: Install all required software libraries
Open your terminal or command prompt in the project folder and run:

npm install
This command will install all the tools (called dependencies) the project needs to work.

Step 3: Create a .env file
This file keeps secret information safe (like your database login and secret keys).

Create a new file named .env in the project folder with these lines:

MONGO_URI=your_mongodb_connection_string_here
JWT_SECRET=your_secret_key_here
Replace your_mongodb_connection_string_here with your MongoDB Atlas connection string (where your data is stored)

Replace your_secret_key_here with any secret password you want (like myverysecretkey123)

Step 4: Start the server
In the terminal, run:

npm start
This will start your backend server. It will listen on port 5000 (or another port if you set it).

How to test the API (the backend)
You can use tools like Thunder Client (a VSCode extension) or Postman to send requests to the backend.

1. Login and get a token
Send a POST request to:

<http://localhost:5000/auth/login>
In the request body, use JSON format:

{
  "email": "<xavier@example.com>",
  "password": "123456"
}
If successful, you will get a response with a message, user info, and a token (called JWT).

1. Use the token for protected routes
For routes that need authentication (like adding to cart), you must send this token in the headers:

Key: Authorization

Value: Bearer <your_token_here>

For example:

Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
Replace the dots with the full token you received from login.

1. Product Endpoints
Method URL What it does Body (JSON) example
GET /products Get list of all products None
POST /products Add a new product { "name": "Phone", "price": 500, "description": "Smartphone", "stockQuantity": 10 }
GET /products/:id Get product details by product ID None

1. Cart Endpoints (Require token)
Method URL What it does Body (JSON) example
POST /cart Add item to cart { "productId": "id_here", "quantity": 2 }
PUT /cart/:id Update quantity of an item { "quantity": 3 }
DELETE /cart/:id Remove item from cart None

Important Notes
The login is hardcoded for now (only works with email "<xavier@example.com>" and password "123456").

The JWT token is generated using a secret key from .env and expires in 1 day.

Make sure you always send the token in headers for protected routes.

If you see "Invalid Token" error, check that you are sending the token correctly and that your .env file has the right secret.

Do NOT share your .env file with anyone. It has secret information.

How to stop the server
Press Ctrl + C in the terminal where the server is running.

Troubleshooting
If you see error Cannot POST /products or Cannot GET /cart, check if you are using the correct HTTP method (GET, POST, PUT, DELETE) and URL.

If you get 401 Unauthorized or Invalid Token, check the Authorization header and token carefully.

If you get Error: Cannot find module 'server.js', make sure you are in the project folder and use the right start command.

Thank you!
You are now ready to use the ShoppyGlobe backend API.
If you have any questions, feel free to ask your instructor.
