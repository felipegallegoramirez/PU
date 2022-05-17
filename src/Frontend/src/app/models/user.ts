export class User{

  constructor(
    name:  string ="", 
    email:  string ="", 
    password:  string ="", 
    type:  string ="", 
    idProyects:  Array<string> =[], 
    id:string=""
) {
    this.name = name
    this.email = email
    this.password = password
    this.type = type
    this.idProyects = idProyects
    this._id=id
  }
    
    _id:string;
    name:  string;
    email:  string;
    password:  string;
    type:  string;
    idProyects:  Array<string>;
  }