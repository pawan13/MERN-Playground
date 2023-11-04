const mongoose = require("mongoose");

const strSchema = new mongoose.Schema({
  str: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("String", strSchema);
