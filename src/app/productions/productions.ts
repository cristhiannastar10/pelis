export class Production {
  title:string;
  description: string;
  poster: string;
  duration: string;
  director: string;
  country: string;
  cast: string;
  release: string;
  trailer: string;
  platform: string;

  public constructor(title:string,description: string,poster: string,duration: string,director: string,country: string,cast: string,release: string,trailer: string, platform: string
  ) {
      this.title = title;
      this.description = description;
      this.poster = poster;
      this.duration = duration;
      this.director = director;
      this.country = country;
      this.cast = cast;
      this.release = release;
      this.trailer = trailer;
      this.platform = platform;
  }
}

