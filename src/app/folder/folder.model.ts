export class Folder {

    name: string;
  subfolders: Folder[];
  
    constructor(name: string) {
      this.name = name;
      this.subfolders = [];
    }
   
  }

  