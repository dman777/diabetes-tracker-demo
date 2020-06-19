import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class GetChartDataService {
  private chartDataUrl:string = 'api/curves';


  getData(): Observable<any> {
    return this.http.get(this.chartDataUrl);
  }

  constructor(private http: HttpClient) {}

}
