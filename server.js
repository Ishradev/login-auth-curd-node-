// server.js (or app.js)
const express = require('express');
const bodyParser = require('body-parser');
const customerRoutes = require('./routes/customerRoutes');

const userRoutes = require('./routes/userRoutes');

const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON requests
app.use(bodyParser.json());

// Use the customer routes
app.use('/api', customerRoutes);

// Use the user routes
app.use('/api', userRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
