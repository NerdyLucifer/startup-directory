const dbConnect = require("../lib/dbConnect");
const Startup = require("../models/Startup");
const express = require("express");
var router = express();
router.get("/startups", async (request, response) => {
  console.log("Hello");
  await dbConnect();
  try {
    let finder = await Startup.find();
    response.status(201).send(finder);
  } catch (error) {
    response.send("Some error happened");
  }
});

module.exports = router;
