import { Generation } from "src/app/models/generation.model";
import { HttpClient } from '@angular/common/http';
import { ServiceUtils } from "../services-utils.model";
import { Injectable } from "@angular/core";

@Injectable()
export class GenerationService {
  constructor(
    private http: HttpClient,
    private serviceUtils: ServiceUtils
  ) {}

  generations: Generation[] = [];

  getGenerations() {
    return this.http.get<Object>(this.serviceUtils.baseUrl+"generation");
  }

  getGenerationsDetails(url: string) {
    return this.http.get<Generation>(url)
  }

}
