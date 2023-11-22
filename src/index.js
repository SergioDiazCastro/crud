const express = require('express');
const moongose = require('mongoose');
require("dotenv").config();
const productsRoutes = require("./routes/products.js")

const app = express(); 
const port = process.env.PORT || 9000;

//middleware
app.use(express.json());    
app.use('/api', productsRoutes);

//routes
app.get('/', (req, res) => {
    res.send("welcome to my APi")
});

//mongoDb connection
moongose.connect(process.env.MONGODB_URI)
.then(() => console.log("connected to mongoDB atlas"))
.catch((error) => console.error(error));


const server = app.listen(port, () => console.log('Server running on port', port));

module.exports = { app, server };  // Exportar app y server

