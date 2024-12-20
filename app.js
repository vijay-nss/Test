const express = require('express');
const mongoose = require('mongoose');
const dataRouter = require('./router/data.router');

const app = express();
const PORT = 3000;
const MONGO_URI = 'mongodb://localhost:27017/DataStore';

app.use(express.json());
app.use('/api', dataRouter);

mongoose
    .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');
        app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
    })
    .catch((error) => console.error('MongoDB connection error:', error));
