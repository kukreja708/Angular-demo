import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(
    private http: HttpClient
  ) { }

  getCountrylist(): Observable<any> {
    return this.http.get<any>(`${environment.baseUrl}/all`);
  }

  getCountryDetails(id: string): Observable<any> {
    return this.http.get<any>(`${environment.baseUrl}/alpha/${id}`);
  }
}
