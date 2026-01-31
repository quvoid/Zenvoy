const express = require('express');
// Server restart trigger
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to Database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/', (req, res) => {
    res.send('Zenvoy API is running...');
});

app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/trips', require('./routes/tripRoutes'));
app.use('/api/planning', require('./routes/planningRoutes'));

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
