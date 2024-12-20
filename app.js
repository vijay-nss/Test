const express = require('express');
const mongoose = require('mongoose');
const dataRouter = require('./router/data.router');
require('dotenv').config()

const app = express();
const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI;
console.log(MONGO_URI);

app.use(express.json());
app.use('/api', dataRouter);

mongoose
    .connect(MONGO_URI)
    .then(() => {
        console.log('Connected to MongoDB');
        app.listen(PORT, () => console.log(`Server running on ${MONGO_URI}`));
    })
    .catch((error) => console.error('MongoDB connection error:', error));
