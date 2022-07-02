// server/index.js

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const cors = require('cors');


const PORT = process.env.PORT || 3001;
const mongoURL = 'mongodb+srv://fynii:Mongo123@cluster0.6ofh0.mongodb.net/Fynii?retryWrites=true&w=majority';
const app = express();
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended:true}))

app.use(cors());

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

app.get("/api", (req, res) => {
  res.send({ message: "Hello from server!" + req.body.name});
});

app.use(express.json({
  type: ['application/json', 'text/plain']
}))


mongoose.connect(mongoURL,{
  useNewUrlParser: true,
  useUnifiedTopology: true 
});
mongoose.connection.on('connected',()=>{
  console.log('Connected to mongo instance');
});
mongoose.connection.on('error',(err)=>{
  console.error('Error to mongo instance',err); 
});

const User = mongoose.model('users', {
  username : { type: String},
  email: { type: String},
  number: { type: String},
  birthday: {type: Date},
  password: { type: String },
  you_are: {type:String},
  education_level: {type:String},
  looking_for: {type:String},
  userID: {type: String}
});

// const Admin = mongoose.model('admin', {
//   Email: { type: String},
//   Password: { type: String },
// });

// const Orders = mongoose.model('orders', {
//   ID: { type: String},
//   Name: { type: String },
//   Order_No :{type: Number}
// });

// const Menu = mongoose.model('menu', {
//   Name: { type: String},
//   Status : { type: String},
//   Cost: { type: Number },
//   Link: {type: String},
//   Description:{type: String}
// });

// app.post("/insertorder", (req, res) => {
//   Orders.insertMany([
//     { ID : req.body.userID, Name: req.body.name}
//   ]).then(function(){
//     console.log("Data inserted")  // Success
//   }).catch(function(error){
//     console.log(error)      // Failure
//   });


// });

app.post("/insertuser", (req, res) => {
  User.insertMany([
    { username : req.body.username,
    email: req.body.email,
    number: req.body.number,
    birthday: req.body.birthday,
    password: req.body.password,
    you_are: req.body.you_are,
    education_level: req.body.education_level,
    looking_for: req.body.looking_for}
  ]).then(function(){
    console.log("Data inserted")  // Success
    res.send(["true"])
  }).catch(function(error){
        console.log(error)      // Failure
        res.send(["false"])
      });
});

// app.post("/checkadmin", (req, res) => {
//   Admin.find(
//     {$and:[
//       {"Email":{"$eq":req.body.email}},
//       {"Password":{"$eq":req.body.password}}
//     ]}
//   ).then(function(results) {
//     if (results.length == 1) {
//       res.send("1");
//     } else {
//       res.send("2")
//     }
//   });
// });

app.post("/checklogin", (req, res) => {
  User.find(
    {$and:[
      {"email":{"$eq":req.body.email}},
      {"password":{"$eq":req.body.password}}
    ]}
  ).then(function(results) {
    if (results.length >= 1) {
      res.json(["1",results[0].username]);
    } else {
      res.json([2])
    }
  });
});

// app.post("/checkorders", (req, res) => {
//   Orders.find(
//     {
//       "ID":{"$eq":req.body.userID},
//     }
//   ).then(function(results) {
//     res.send(results)
//   });
// });

// app.post("/checkallorders", (req, res) => {
//   Orders.find(
//     {}
//   ).then(function(results) {
//     res.send(results)
//   });
// });