export class Temporal{

  constructor(
    name:  string ="", 
    email:  string ="", 
    type:  string ="", 
    idProyects:   Array<string> =[], 
    iduser:  string ="",
    id:string ="",
) {
    this.name = name
    this.email = email
    this.type = type
    this.idProyects = idProyects
    this.iduser = iduser
    this._id=id
  }
    
    _id:string;
    name:  string;
    email:  string;
    type:  string;
    idProyects:  Array<string>;
    iduser:  string;
}