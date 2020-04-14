import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClassrService {

  private baseUrl = 'http://localhost:8080/api/class';
  constructor(private http: HttpClient) { }

  getClassR(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
  getListClassR(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
  // tslint:disable-next-line:ban-types
  createClassR(classR: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, classR);
  }
  deleteClassR(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, {responseType: 'text'});
  }
  updateClassR(id: number, value: any): Observable<object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }
}
