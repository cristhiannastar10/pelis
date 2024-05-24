export class Production {
  title:string;
  poster: File | null | undefined;


  public constructor(title:string, poster: File | null | undefined) {
      this.title = title;
      this.poster = poster;
    
  }
}

