const connectTomongo=require("./db");
const express = require('express')
var cors=require('cors')
require('dotenv').config();


connectTomongo();

const app = express()
const port = process.env.PORT || 3005; // Use PORT from environment variables or default to 3005

// app.use(cors())

app.use(cors({
  origin: 'https://one-note-zeta.vercel.app', // Adjust this to your frontend domain
  methods: 'GET,POST,PUT,DELETE',
  allowedHeaders: 'Content-Type,Authorization,auth-token'
}));



app.use(express.json()); // this is the middle ware for using req.body in auth.js

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.use("/api/auth",require("./routes/auth")) // this will fetch the data from the auth.js of routes folder
app.use("/api/notes",require("./routes/notes")) 

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})