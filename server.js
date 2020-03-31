const express = require('express');
const cors    = require('cors');
const mongoose= require('mongoose');

require('dotenv').config();

// App
const app = express();

// Middleware
app.use(cors());

// Body Parser, MW
app.use(express.json());
// app.use(express.urlencoded({extended: false}));

// mongoose
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});

const connection = mongoose.connection;
connection.once('open', () => console.log('MongoDB esatablished!'));
connection.on('error', err => console.log(`Error: ${err}`))


// Routers
app.use('/api/users', require('./routes/api/users'));
app.use('/api/exercises', require('./routes/api/exercises'));

// PORTS
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on ${PORT}`));