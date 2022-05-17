export class Subject{
  constructor(
    _id: string="", 
    year:  Number=0, 
    idTeacher: String="", 
    idProyects:  Array<String> =[]
) {
    this._id = _id
    this.year = year
    this.idTeacher = idTeacher
    this.idProyects = idProyects
  }


    
    _id:string;
    year:  Number;
    idTeacher:String;
    idProyects:  Array<String>; 
}