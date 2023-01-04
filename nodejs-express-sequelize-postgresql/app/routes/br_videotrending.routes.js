module.exports = app => {
  const br_videotrendings = require("../controllers/br_videotrending.controller.js")

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", br_videotrendings.create);

  // Retrieve all Tutorials
  router.get("/", br_videotrendings.findAll);

  // Retrieve a single Tutorial with id
  router.get("/:id", br_videotrendings.findOne);

  // Update a Tutorial with id
  router.put("/:id", br_videotrendings.update);

  // Delete a Tutorial with id
  router.delete("/:id", br_videotrendings.delete);

  // Delete all Tutorials
  router.delete("/", br_videotrendings.deleteAll);

  app.use("/api/br_videotrendings", router);
};