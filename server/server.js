const express = require("express");
const cors = require('cors');
const app = express();

// This will fire our mongoose.connect statement to initialize our database connection
require("./config/mongoose.config");

app.use(cors());
app.use(express.json(), express.urlencoded({ extended: true }));

// This is where we import the users routes function from our user.routes.js file
const AllMyParkRoutes = require("./routes/park.routes");
AllMyParkRoutes(app);

app.listen(8000, () => console.log("The server is all fired up on port 8000"));
