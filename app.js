require('dotenv').config()

const express = require('express')    // Import exrepss, a light-weight framework
const app = express()                 // Init exrpess, and save it in "app" variable
const mongoose = require('mongoose')  // Import mongoose, a tool that gives NoSQL DB  (such as MongoDB) the abilities of a relational DB
const PORT = process.env.PORT || 5000;

//middleware
app.use(express.json());    // Formats data to Json
const postRouter = require('./routes/posts');
app.use('/posts', postRouter);

/*********************************************************** 
/ Base URL
************************************************************/

app.get('/', function (req, res) 
{
  res.send('Hello World');
})

//DB connection
mongoose.connect(
    `mongodb+srv://uggla-gut:ComHem2011@cluster0.qrygrvo.mongodb.net/Contacts`,
    { useNewUrlParser: true, useUnifiedTopology: true},
    () => {
        console.log('DB connected...');
    }
)

//Listen to server
//app.listen(PORT); //Listen through port 5000
app.listen(PORT, err => 
    {
        if (err) 
        {
            return console.log('Error', err);
        }
        else
        {
            console.log(`Server listening on port ${PORT}...`);
        }
    });