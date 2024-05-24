export class Production {
  id : number;
  title:string;
  poster: File | null | undefined;


  public constructor(id: number, title:string, poster: File | null | undefined) {
      this.id = id;
      this.title = title;
      this.poster = poster;
    
  }
}

