const mongoose = require("mongoose");
require("./configdb");

// await mongoose.connect('mongodb://localhost:27017/Lerning')
const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  class: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone_no: {
    type: Number,
    require: true,
  },
});
const student = mongoose.model("student", studentSchema);

module.exports = student;
