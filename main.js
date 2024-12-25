/* ------ Package imports ------*/
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors")

/* ----- Routes Imports ----- */
const voyagesRoutes = require('./routes/voyages.routes');

/* ------ initialization ------*/
const app = express();
mongoose.connect("mongodb://127.0.0.1/KherjaApp")
.then(()=>{console.log("Connected")})
.catch((err)=>{console.log(err)})

/* ----- Global Middlewares ----- */
app.use(express.json());
app.use(cors());

/* ----- Using Routes ----- */
app.use(voyagesRoutes);

/* ------ App StartUp ------*/
app.listen(3001, ()=> {console.log("App started on: http://localhost:3000")});