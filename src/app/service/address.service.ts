import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  private baseUrl = 'http://localhost:8080/api/address';
  constructor(private http: HttpClient) { }

  getAddress(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
  getAddressList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
  // tslint:disable-next-line:ban-types
  createAddress(address: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, address);
  }
  deleteAddress(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, {responseType: 'text'});
  }
  updateAddress(id: number, value: any): Observable<object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }
}
