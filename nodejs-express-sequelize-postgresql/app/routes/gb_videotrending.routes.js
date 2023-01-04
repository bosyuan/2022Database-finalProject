module.exports = app => {
    const gb_videotrendings = require("../controllers/gb_videotrending.controller.js")
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", gb_videotrendings.create);
  
    // Retrieve all Tutorials
    router.get("/", gb_videotrendings.findAll);
  
    //query most views video
    router.get("/trending", gb_videotrendings.findTrending);
  
    // Update a Tutorial with id
    router.put("/:id", gb_videotrendings.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", gb_videotrendings.delete);
  
    // Delete all Tutorials
    router.delete("/", gb_videotrendings.deleteAll);
  
    app.use("/api/gb_videotrending", router);
  };