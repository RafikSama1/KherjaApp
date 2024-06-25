const Voyage = require("../models/Voyage");

exports.index = async(req, res) =>{
    const filter = req.query.rating;
    console.log(req.query);
    const voyages = await Voyage.find().where("rating").gt(filter);
    res.json(voyages);
};

exports.show = async(req, res) => {
    const voyage = await Voyage.findById(req.params.id);
    res.json(voyage);
};

exports.store = async (req, res) => {
    const voyage = await Voyage.create(req.body);
    res.json(voyage);
};

exports.update = async (req, res) => {
    const voyage = await Voyage.findByIdAndUpdate(req.params.id, req.body, {new:true});
    res.json(voyage);
};

exports.delete = async (req, res) => {
    await Voyage.findByIdAndDelete(req.params.id);
    res.send('Deleted successfully');
};