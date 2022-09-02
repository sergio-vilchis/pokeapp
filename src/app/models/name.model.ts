import { BasicURL } from "./basic_url.model";

export class Name{
  constructor(language:BasicURL,name:String) {
    this.language=language;
    this.name=name;
  }

  language: BasicURL;
  name: String;

}
