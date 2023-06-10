const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const UserModel = require('./models/Users');
require("dotenv").config();
app.use(cors());
var bodyParser = require('body-parser');
const { count } = require('./models/Users');
app.use(bodyParser.json({limit: "50mb"}));
app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));


mongoose.connect(
  "mongodb+srv://<USER>:<PASS>@<cluster>.arvtx.mongodb.net/?retryWrites=true&w=majority",
{ useNewUrlParser: true, useUnifiedTopology: true }
);


app.get('/api/users', async (req, res) => {
    try {
      const users = await UserModel.find();
      res.json(users);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
  });

  


app.get("/hello", async (req,res) => {

    
console.log("HELLO")

res.send("HELLO");
})
  


app.post("/api/v1/addUser", async (req,res) => {

    const data = req.body.data

  
    const user = new UserModel({ data: data});
    await user.save();
    res.send('Success');

})
  


let port = process.env.PORT || 8001;

app.listen(port, () => {
    console.log("App is running on port " + port);
});