const mongoose = require("mongoose");
const { Schema } = mongoose;

const proyectsSchema = new Schema(
  {
    name:  String,
    abstract:  String,
    idSubject:  String,
    idFormat:  String,
    idProyects:  [String],
    idUsers:  [String],
    idTeacher:  String,
    part:[{
      name:String,
      item: [{
        type: String,
        value: String,
        reference: String,
      }]
    }]
  },
  {
    versionKey: false,
    timestamps: false,
  }
);

module.exports = mongoose.model("Proyect", proyectsSchema);