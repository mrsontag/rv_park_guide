const mongoose = require("mongoose");

const SpaceSchema = new mongoose.Schema({
	space_number: {
		type: String,
		required: [true, "Must have a space number"]
	},
	rv_allowed: {
		type: Boolean,
		required: [true, "Must specify if RVs are allowed."]
	},
	rv_maxlength: {
		type: Number,
		min: [0, "RV max length cannot be less than zero"],
		max: [100, "RV max length, if specified, cannot be more than 100"]
	}
}, { timestamps: true})

const Space = mongoose.model("Space", SpaceSchema);


const ParkSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, "Parks must have a name."],
		minlength: [3, "Must be at least 3 characters."]
	},
	zip_code: {
		type: String,
		minlength: [5, "Zip code must be 5 digits."],
		maxlength: [5, "Zip code must be 5 digits."]
	},
	dress_code: String,
	spaces: {
		type: [ SpaceSchema ],
		required: false
	},

});

const Park = mongoose.model("Park", ParkSchema);

module.exports = Park;
//module.exports = Space;