import { Pipe, PipeTransform } from "@angular/core";
import { Name } from "../models/name.model";

@Pipe({ name: "getTranslatedName" })
export class GetTranslatedName implements PipeTransform {
  transform(names: Name[], language: string): string {
    let translatedName: string = "";
    names.forEach(name => {
      if(name.language.name===language){
        translatedName = name.name;
      }
      else if(translatedName=="" && name.language.name=="en"){
        translatedName = name.name;
      }
    });
    return translatedName;
  }
}
