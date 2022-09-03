import { BasicURL } from "./basic_url.model";

export class Description{
  constructor(language:BasicURL,description:string) {
    this.language=language;
    this.description=description;
  }

  language: BasicURL;
  description: string;

}
