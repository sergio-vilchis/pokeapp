import { Component, Injectable } from '@angular/core';
import { GenerationService } from 'src/app/services/generation/generation.service';
import { Generation } from 'src/app/models/generation.model';

@Component({
  selector: 'generation-list',
  templateUrl: './generation-list.component.html',
  styleUrls: ['./generation-list.component.css'],
  providers: [GenerationService]
})

@Injectable({  providedIn: "root"})
export class GenerationListComponent {

  generations: Generation[] = [];

  constructor(
    //Servicios para obtener datos relacionados a las generaciones
    private generationService: GenerationService
  ) {

   }

   getGenerations(){
    this.generationService.getGenerations()
    .subscribe((response:any) => {

      response.results.forEach((result:any) => {
        this.generationService.getGenerationsDetails(result.url)
        .subscribe((generation:Generation)=>{
          this.generations.push(generation);
          console.log(generation);
        });
      });
    });
   }

  ngOnInit(){
    this.getGenerations();
  }
}
