const Park = require("../models/park.model");

module.exports.findAllParks = (req, res) => {
  Park.find()
    .then(allDaParks => res.json( allDaParks ))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.findOneSinglePark = (req, res) => {
	Park.findOne({ _id: req.params.id })
		.then(oneSinglePark => res.json( oneSinglePark ))
		.catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.createNewPark = (req, res) => {
  Park.create(req.body)
    .then(newlyCreatedPark => res.json( newlyCreatedPark ))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.updateExistingPark = (req, res) => {
  Park.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then(updatedPark => res.json({ user: updatedPark }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.deleteAnExistingPark = (req, res) => {
  Park.deleteOne({ _id: req.params.id })
    .then(result => res.json({ result: result }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};
