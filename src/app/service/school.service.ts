import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SchoolService {

  private baseUrl = 'http://localhost:8080/api/school';
  constructor(private http: HttpClient) { }

  getSchool(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
  getListSchool(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
  // tslint:disable-next-line:ban-types
  createSchool(school: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, school);
  }
  deleteSchool(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, {responseType: 'text'});
  }
  updateSchool(id: number, value: any): Observable<object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }
}
