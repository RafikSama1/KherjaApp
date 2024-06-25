const Voyage = require("../models/Voyage");

exports.index = async(req, res) =>{
    const voyages = await Voyage.find();
    res.json(voyages);}