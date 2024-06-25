/* ------ Package imports ------*/
const express = require("express");
const mongoose = require("mongoose");

/* ----- Routes Imports ----- */
const voyagesRoutes = require('./routes/voyages.routes');

/* ------ initialization ------*/
const app = express();
mongoose.connect("mongodb://127.0.0.1/KherjaApp")
.then(()=>{console.log("Connected")})
.catch((err)=>{console.log(err)})

/* ----- Global Middlewares ----- */
app.use(express.json());

/* ----- Using Routes ----- */
app.use(voyagesRoutes);

/* ------ App StartUp ------*/
app.listen(3000, ()=> {console.log("App started on: http://localhost:3000")});