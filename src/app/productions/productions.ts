export class Production {
  id : number;
  title:string;
  poster: File | null | undefined;
  genre: string;



  public constructor(id: number, genre:string, title:string, poster: File | null | undefined) {
      this.id = id;
      this.title = title;
      this.poster = poster;
      this.genre = genre;

  }
}

