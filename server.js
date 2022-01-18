const express = require("express");
const db = require("./db.js");
const path = require("path");
const jobsRoute = require('./routes/jobsRoute');
const userRoute = require('./routes/usersRoute');
const cors = require("cors");
var cookieParser = require('cookie-parser');


const app = express();
app.use(express.json());
app.use(cors())
app.use(cookieParser());

// using routes
app.use('/Jobs', jobsRoute)
app.use('/Users', userRoute)

const port = process.env.PORT || 8000;

//  for first page production
 if(process.env.NODE_ENV === 'production')
 {
     app.use('/' , express.static('client/build'))

     app.get("*", (req, res) => {

          res.sendFile(path.join(__dirname, 'client/build/index.html'))
       
     });
 }


app.listen(port, () => console.log('Node JS Server Started'));