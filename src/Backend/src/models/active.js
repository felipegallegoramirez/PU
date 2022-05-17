const mongoose = require("mongoose");
const { Schema } = mongoose;

const activeSchema = new Schema(
  {
    name:  String,
    email:  String,
    type:  String,
    idProyects:  [String],
    idUser:String,
  },
  {
    versionKey: false,
    timestamps: false,
  }
);

module.exports = mongoose.model("Active", activeSchema);