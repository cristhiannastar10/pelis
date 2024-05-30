export class Production {
  id : number;
  title:string;
  poster: string | null | undefined;
  genre: string;



  public constructor(id: number, genre:string, title:string, poster: string | null | undefined) {
      this.id = id;
      this.title = title;
      this.poster = poster;
      this.genre = genre;

  }
}

