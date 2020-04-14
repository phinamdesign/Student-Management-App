import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SexService {

  private baseUrl = 'http://localhost:8080/api/sex';
  constructor(private http: HttpClient) { }

  getSex(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
  getListSex(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
  // tslint:disable-next-line:ban-types
  createSex(sex: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, sex);
  }
  deleteSex(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, {responseType: 'text'});
  }
  updateSex(id: number, value: any): Observable<object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }
}
