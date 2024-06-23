require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Middleware to parse JSON
app.use(express.json());

// Enable CORS for all routes
app.use(cors());

// Import the routes
const medicineRoute = require('./routes/medicine');
const userRoute = require('./routes/user');
const orderRoutes = require('./routes/order');

// Use the routes
app.use('/api/v1', medicineRoute);
app.use('/api/v1', userRoute);
app.use('/api/v1', orderRoutes);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
