const express = require('express');
const bodyParser = require('body-parser');
const taskRoutes = require('./routes/tasks');

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));
app.set('view engine', 'ejs');

// Routes
app.use('/', taskRoutes);

// Server
const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
