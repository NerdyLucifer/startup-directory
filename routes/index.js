const dbConnect = require("../lib/dbConnect");
const Startup = require("../models/Startup");
const express = require("express");
var router = express();
router.get("/startups", async (request, response) => {
  console.log("Hello");
  await dbConnect();
  try {
    let finder = await Startup.find().sort({'Name':1});
    console.log(finder)
    response.status(201).send(finder);
  } catch (error) {
    response.send("Some error happened");
  }
});

module.exports = router;
