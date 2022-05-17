const mongoose = require("mongoose");
const { Schema } = mongoose;

const subjectSchema = new Schema(
  {
    name:  String,
    year:  Number,
    idTeacher:String,
    idProyects:  [String],  
  },
  {
    versionKey: false,
    timestamps: false,
  }
);

module.exports = mongoose.model("Subject", subjectSchema);