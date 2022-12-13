require('dotenv').config()

const express = require('express')              //Import exrepss
const app = express()                           //Init exrpess
const mongoose = require('mongoose')            //Import mongoose
const PORT = process.env.PORT || 5000;          //Define port

//middleware
app.use(express.json());                        // Formats data to Json
const postRouter = require('./routes/posts');
app.use('/posts', postRouter);

//*********************************************************** 
// Base URL

app.get('/', function (req, res) 
{
  res.send('Hello World');
})

//*********************************************************** 
//DB connection
mongoose.connect(
    process.env.DB_URL,
    { useNewUrlParser: true, useUnifiedTopology: true},
    () => {
        console.log(`***********************************`);
        console.log('DB connected...');
        console.log(`***********************************`);
    }
)

//*********************************************************** 
//Listen to server
app.listen(PORT, err => 
    {
        if (err) 
        {
            return console.log('Error', err);
        }
        else
        {
            console.log(`\n***********************************`);
            console.log(`Server listening on port ${PORT}...`);
        }
    });