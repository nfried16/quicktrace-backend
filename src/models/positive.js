const mongoose = require("mongoose");
// do I have to import data?

const posSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  locations: {
    type: Array, 
    require: true,
  },
});

const Chart = mongoose.model("Chart", posSchema);
module.exports = Chart;
