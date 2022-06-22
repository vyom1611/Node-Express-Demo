const moment = require('moment');

//middleware
const logger = (req,res,next) => {
    console.log(`${req.protocol}://${req.get('host')}${req.originalUrl} : ${moment().format()}`)   // Gets the whole URL that is hit
    next();
}

module.exports = logger;