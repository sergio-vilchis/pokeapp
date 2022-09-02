export class Language{

  constructor(id: number, name: String, official: boolean, iso639: String, iso3166: String){
    this.id = id;
    this.name = name;
    this.official = official;
    this.iso639 = iso639;
    this.iso3166 = iso3166;
  }

  id: number;
  name: String;
  official: boolean;
  iso639: String;
  iso3166: String;
}
