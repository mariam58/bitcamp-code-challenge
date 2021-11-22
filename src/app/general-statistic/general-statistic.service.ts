import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IGeneralData, IGneneralDataArray } from './shared/general-data';
import { GLOBAL_TIMELINE } from 'config';
@Injectable({
  providedIn: 'root'
})
export class GeneralStatisticService {

  constructor(private http: HttpClient) { }

  
  getGlobalTimeline(): Observable<any> {
    return this.http.get<any>(`${GLOBAL_TIMELINE}`);
  } 
}


