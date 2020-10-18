const ParkController = require("../controllers/park.controller");

module.exports = app => {
  app.get("/api/parks/", ParkController.findAllParks);
  app.get("/api/parks/:id", ParkController.findOneSinglePark);
  app.put("/api/parks/update/:id", ParkController.updateExistingPark);
  app.post("/api/parks/new", ParkController.createNewPark);
  app.delete("/api/parks/delete/:id", ParkController.deleteAnExistingPark);
};