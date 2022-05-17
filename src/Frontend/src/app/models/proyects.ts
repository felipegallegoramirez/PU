export class Proyects{



  constructor(
    _id: string ="", 
    name:  string ="", 
    abstract:  string ="", 
    idSubject:  string ="", 
    idFormat:  string ="", 
    idProyects:  Array<string> =[], 
    idUsers:  Array<string> =[], 
    idTeacher:  string ="",
    part: Array<{
      name:String,
      item: Array<{
        type: string;
        value: string;
        reference: string;
      }>
    }> =[]
) {
    this._id = _id
    this.name = name
    this.abstract = abstract
    this.idSubject = idSubject
    this.idFormat = idFormat
    this.idProyects = idProyects
    this.idUsers = idUsers
    this.idTeacher = idTeacher
    this.part = part
  }

    
    _id:string;
    name:  string;
    abstract:  string;
    idSubject:  string;
    idFormat:  string;
    idProyects:  Array<string>;
    idUsers:  Array<string>;
    idTeacher:  string;
    part:Array<{
      name:String,
      item: Array<{
        type: string;
        value: string;
        reference: string;
      }>
    }>
}