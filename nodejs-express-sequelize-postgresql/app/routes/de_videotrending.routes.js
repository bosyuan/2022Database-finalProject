module.exports = app => {
    const de_videotrendings = require("../controllers/de_videotrending.controller.js")
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", de_videotrendings.create);
  
    // Retrieve all Tutorials
    router.get("/", de_videotrendings.findAll);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", de_videotrendings.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", de_videotrendings.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", de_videotrendings.delete);
  
    // Delete all Tutorials
    router.delete("/", de_videotrendings.deleteAll);
  
    app.use("/api/de_videotrending", router);
  };