module.exports = app => {
    const jp_videotrendings = require("../controllers/jp_videotrending.controller.js")
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", jp_videotrendings.create);
  
    // Retrieve all Tutorials
    router.get("/", jp_videotrendings.findAll);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", jp_videotrendings.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", jp_videotrendings.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", jp_videotrendings.delete);
  
    // Delete all Tutorials
    router.delete("/", jp_videotrendings.deleteAll);
  
    app.use("/api/jp_videotrendings", router);
  };