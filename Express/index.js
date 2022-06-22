const express = require('express');
const { hostname } = require('os');
const path = require('path'); 
const app = express();
const exphbs  = require('express-handlebars');
const logger = require('./middleware/logger');
const members = require('./Members');


// app.use(logger);  //Initialize middleware

//Handlebars middleware
app.engine('handlebars', exphbs.engine({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


//Body parser middleware
app.use(express.json());
app.use(express.urlencoded({extended : false}));

// Homepage route
app.get('/', (req,res) => res.render('index', {
    title: 'Member App',
    members
}));

//Set static folder
app.use(express.static(path.join(__dirname, "public")));

// Members API routes
app.use('/api/members', require('./routes/api/members'));

 
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {console.log(`Server Started on ${PORT}`)});
