module.exports = app => {
    const fr_videotrendings = require("../controllers/fr_videotrending.controller.js")
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", fr_videotrendings.create);
  
    // Retrieve all Tutorials
    router.get("/", fr_videotrendings.findAll);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", fr_videotrendings.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", fr_videotrendings.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", fr_videotrendings.delete);
  
    // Delete all Tutorials
    router.delete("/", fr_videotrendings.deleteAll);
  
    app.use("/api/fr_videotrending", router);
  };