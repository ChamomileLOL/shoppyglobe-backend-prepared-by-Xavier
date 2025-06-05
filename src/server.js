/**
 * src/server.js
 *
 * Entry point for ShoppyGlobe backend.
 * Loads environment variables from src/.env, then connects to MongoDB.
 * Finally, it mounts routes and starts the Express server.
 */

const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// 1) Load .env from within src/ folder
require('dotenv').config({ path: path.join(__dirname, '.env') });

const app = express();

// 2) Middleware
app.use(cors());
app.use(express.json());

// 3) Health-check route
app.get('/', (req, res) => {
  res.send('ShoppyGlobe API is up and running!');
});

// 4) Mount API routes
//    - These paths assume you have a sibling folder to src named "routes"
app.use(
  '/products',
  require(path.join(__dirname, '../routes/productRoutes'))
);
app.use(
  '/cart',
  require(path.join(__dirname, '../routes/cartRoutes'))
);
app.use(
  '/auth',
  require(path.join(__dirname, '../routes/authRoutes'))
);

// 5) Read PORT and MONGO_URI from environment
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

// 6) Verify that MONGO_URI is defined
if (!MONGO_URI) {
  console.error(
    'Error: MONGO_URI is undefined. Make sure src/.env exists and contains MONGO_URI.'
  );
  process.exit(1);
}

// 7) Connect to MongoDB (no deprecated flags required in Mongoose 6+)
mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log('MongoDB connected successfully');
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  });
