import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "getStatPercentage" })
export class GetStatPercentage implements PipeTransform {
  transform(stat: number) {
    let percentage = (stat*100)/255;
    return percentage;
  }
}
