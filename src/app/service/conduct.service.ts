import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConductService {

  private baseUrl = 'http://localhost:8080/api/conduct';
  constructor(private http: HttpClient) { }

  getConduct(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
  getListConduct(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
  // tslint:disable-next-line:ban-types
  createConduct(conduct: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, conduct);
  }
  deleteConduct(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, {responseType: 'text'});
  }
  updateConduct(id: number, value: any): Observable<object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }
}
