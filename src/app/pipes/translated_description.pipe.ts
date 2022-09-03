import { Pipe, PipeTransform } from "@angular/core";
import { Description } from "../models/description.model";

@Pipe({ name: "getTranslatedDescription" })
export class GetTranslatedDescription implements PipeTransform {
  transform(descriptions: Description[], language: string): string {
    let translatedDescription: string = "";
    descriptions.forEach(description => {
      if(description.language.name===language || (translatedDescription=="" && description.language.name=="en")){
        translatedDescription = description.description;
      }
    });
    return translatedDescription;
  }
}
