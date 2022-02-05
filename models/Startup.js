const mongoose = require("mongoose");

const startupSchema = new mongoose.Schema(
  {
    Name: {
      type: String, //givenName
      required: true,
    },
    website: {
      type: String,
      required: true,
    },
    founders: {
      type: Array,
      required: true,
    },
    currentStatus: {
      type: String,
      required: true,
    },
    yearOfGraduation: {
      type: String,
      required: true,
    },
    domain: {
      type: String,
      required: true,
    },
    description: {
      // Why How What
      type: String,
      required: true,
    },
    avatar: {
      data: Buffer,
      contentType: String,
    },
  },
  { collections: "allStartups" }
);

module.exports =
  mongoose.models.Startup || mongoose.model("Startup", startupSchema);

// Startup Name
// Logo
// Description
// Website Link
// Founders: {personname:linkedinurl, person2:linkedinurl}
// Current Status: { Current : Graduate : Seed Support : Established Startups}
// Sector: { Healthtech/Fintech }
// Avatar
