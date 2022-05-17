export class Format{

  constructor(
    _id: string="", 
    name:  string="", 
    optionCss:  string="", 
    parts:  Array<string>=[]
) {
    this._id = _id
    this.name = name
    this.optionCss = optionCss
    this.parts = parts
  }

    
    _id:string;
    name:  string;
    optionCss:  string;
    parts:  Array<string>;
}