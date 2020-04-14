import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  private baseUrl = 'http://localhost:8080/api/department';
  constructor(private http: HttpClient) { }

  getDepartment(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
  getListDepartment(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
  // tslint:disable-next-line:ban-types
  createDepartment(department: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, department);
  }
  deleteDepartment(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, {responseType: 'text'});
  }
  updateDepartment(id: number, value: any): Observable<object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }
}
