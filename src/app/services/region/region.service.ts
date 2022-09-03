import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Region } from 'src/app/models/region.model';
import { ServiceUtils } from '../services-utils.model';

@Injectable()
export class RegionService {
  constructor(
    private http: HttpClient,
    private serviceUtils: ServiceUtils
  ) {}

  regions: Region[] = [];

  getRegionDetails(url: string) {
    return this.http.get<Region>(url)
  }

}
