import { Pipe, PipeTransform } from "@angular/core";
import { FlavorTextEntry } from "../models/flavor_text_entry.model";

@Pipe({ name: "getTranslatedFlavorText" })
export class GetTranslatedFlavorText implements PipeTransform {
  transform(flavor_text_entries: FlavorTextEntry[], language: string): string {
    let translatedFlavorText: string = "";
    flavor_text_entries.forEach(flavor_text_entry => {
      if(flavor_text_entry.language.name===language || (translatedFlavorText=="" && flavor_text_entry.language.name=="en")){
        translatedFlavorText = flavor_text_entry.flavor_text;
      }
    });
    return translatedFlavorText;
  }
}
