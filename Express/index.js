const express = require('express');
const path = require('path'); 
const app = express();

//middleware
const logger = (req,res,next) => {
    console.log('Hello');
    next();
}

// app.use(logger);  //Initialize middleware



//Set static folder
app.use(express.static(path.join(__dirname, "public")));

app.use('/api/members', require('./routes/api/members'));
 
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {console.log(`Server Started on ${PORT}`)});
