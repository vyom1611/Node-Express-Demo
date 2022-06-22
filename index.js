const express = require('express');
const { hostname } = require('os');
const path = require('path'); 
const app = express();
const Logger = require('./middleware/logger');


// app.use(Logger);  //Initialize middleware


//Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended : false}))

//Set static folder
app.use(express.static(path.join(__dirname, "public")));

// Members API routes
app.use('/api/members', require('./routes/api/members'));
 
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {console.log(`Server Started on ${PORT}`)});
