import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Pokedex } from 'src/app/models/pokedex.model';
import { ServiceUtils } from '../services-utils.model';

@Injectable()
export class PokedexService {
  constructor(
    private http: HttpClient,
    private serviceUtils: ServiceUtils
  ) {}

  getPokedexDetails(url: string) {
    return this.http.get<Pokedex>(url)
  }

}
