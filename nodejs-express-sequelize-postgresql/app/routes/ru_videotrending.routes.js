module.exports = app => {
    const ru_videotrendings = require("../controllers/ru_videotrending.controller.js")
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", ru_videotrendings.create);
  
    // Retrieve all Tutorials
    router.get("/", ru_videotrendings.findAll);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", ru_videotrendings.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", ru_videotrendings.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", ru_videotrendings.delete);
  
    // Delete all Tutorials
    router.delete("/", ru_videotrendings.deleteAll);
  
    app.use("/api/ru_videotrendings", router);
  };