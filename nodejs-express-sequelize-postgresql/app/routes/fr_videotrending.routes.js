module.exports = app => {
    const fr_videotrendings = require("../controllers/fr_videotrending.controller.js")
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", fr_videotrendings.create);
  
    // Retrieve all Tutorials
    router.get("/", fr_videotrendings.findAll);
  
  //query most views video
  router.get("/trending", fr_videotrendings.findTrending);
  
    // Update a Tutorial with id
    router.put("/:id", fr_videotrendings.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", fr_videotrendings.delete);
  
    // Delete all Tutorials
    router.delete("/", fr_videotrendings.deleteAll);
  
    app.use("/api/fr_videotrending", router);
  };