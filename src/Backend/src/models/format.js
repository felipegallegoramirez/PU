const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    name:  String,
    optionCss:  String,
    parts:  [String],
  },
  {
    versionKey: false,
    timestamps: false,
  }
);

module.exports = mongoose.model("User", userSchema);