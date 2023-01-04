module.exports = app => {
    const kr_videotrendings = require("../controllers/kr_videotrending.controller.js")
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", kr_videotrendings.create);
  
    // Retrieve all Tutorials
    router.get("/", kr_videotrendings.findAll);
  
    //query most views video
    router.get("/trending", kr_videotrendings.findTrending);
  
    // Update a Tutorial with id
    router.put("/:id", kr_videotrendings.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", kr_videotrendings.delete);
  
    // Delete all Tutorials
    router.delete("/", kr_videotrendings.deleteAll);
  
    app.use("/api/kr_videotrending", router);
  };