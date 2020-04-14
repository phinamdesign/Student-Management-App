import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RankerService {

  private baseUrl = 'http://localhost:8080/api/ranker';
  constructor(private http: HttpClient) { }

  getRanker(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
  getListRanker(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
  // tslint:disable-next-line:ban-types
  createRanker(ranker: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, ranker);
  }
  deleteRanker(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, {responseType: 'text'});
  }
  updateRanker(id: number, value: any): Observable<object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }
}
