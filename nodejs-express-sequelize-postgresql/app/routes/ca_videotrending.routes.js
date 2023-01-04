module.exports = app => {
    const ca_videotrendings = require("../controllers/ca_videotrending.controller.js")
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", ca_videotrendings.create);
  
    // Retrieve all Tutorials
    router.get("/", ca_videotrendings.findAll);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", ca_videotrendings.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", ca_videotrendings.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", ca_videotrendings.delete);
  
    // Delete all Tutorials
    router.delete("/", ca_videotrendings.deleteAll);
  
    app.use("/api/ca_videotrendings", router);
  };