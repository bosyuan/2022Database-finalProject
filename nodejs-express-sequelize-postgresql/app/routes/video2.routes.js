module.exports = app => {
    const videos2 = require("../controllers/video2.controller.js")
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", videos2.create);
  
    // Retrieve all Tutorials
    router.get("/", videos2.findAll);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", videos2.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", videos2.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", videos2.delete);
  
    // Delete all Tutorials
    router.delete("/", videos2.deleteAll);
  
    app.use("/api/videos2", router);
  };