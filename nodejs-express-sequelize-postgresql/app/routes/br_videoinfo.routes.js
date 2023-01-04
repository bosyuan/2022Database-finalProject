module.exports = app => {
  const br_videoinfos = require("../controllers/br_videoinfo.controller.js")

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", br_videoinfos.create);

  // Retrieve all Tutorials
  router.get("/", br_videoinfos.findAll);

  // Retrieve a single Tutorial with id
  router.get("/:id", br_videoinfos.findOne);

  // Update a Tutorial with id
  router.put("/:id", br_videoinfos.update);

  // Delete a Tutorial with id
  router.delete("/:id", br_videoinfos.delete);

  // Delete all Tutorials
  router.delete("/", br_videoinfos.deleteAll);

  app.use("/api/br_videoinfos", router);
};