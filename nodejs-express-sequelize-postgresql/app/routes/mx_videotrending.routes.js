module.exports = app => {
    const mx_videotrendings = require("../controllers/mx_videotrending.controller.js")
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", mx_videotrendings.create);
  
    // Retrieve all Tutorials
    router.get("/", mx_videotrendings.findAll);
  
    //query most views video
    router.get("/trending", mx_videotrendings.findTrending);
  
    // Update a Tutorial with id
    router.put("/:id", mx_videotrendings.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", mx_videotrendings.delete);
  
    // Delete all Tutorials
    router.delete("/", mx_videotrendings.deleteAll);
  
    app.use("/api/mx_videotrending", router);
  };