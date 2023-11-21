const express = require('express');
const moongose = require('mongoose');
require("dotenv").config();
const userRoutes = require("./routes/user.js")

const app = express(); 
const port = process.env.PORT || 9000;

//middleware
app.use(express.json());    
app.use('/api', userRoutes);

//routes
app.get('/', (req, res) => {
    res.send("welcome to my APi")
});

//mongoDb connection
moongose.connect(process.env.MONGODB_URI)
.then(() => console.log("connected to mongoDB atlas"))
.catch((error) => console.error(error));


app.listen(port, () => console.log('server listening on port', port));