const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    name:  String,
    email:  String,
    password:  String,
    type:  String,
    idProyects:  [String],
  },
  {
    versionKey: false,
    timestamps: false,
  }
);

module.exports = mongoose.model("User", userSchema);