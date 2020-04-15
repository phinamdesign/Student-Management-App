import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Student} from '../model/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private baseUrl = 'http://localhost:8080/api/student';

  constructor(private http: HttpClient) { }

  getStudent(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
  createStudent(student: Student): Observable<any> {
    console.log(Student);
    return this.http.post(this.baseUrl, {
      name: student.name,
      age: student.age,
      sex: student.sex,
      address: student.address,
      school: student.school,
      department: student.department,
      classR: student.classR,
      ranker: student.ranker,
      conduct: student.conduct
    });
  }


  updateStudent(student: Student): Observable<any> {
    return this.http.put(this.baseUrl + '/' + student.id, {
      name: student.name,
      age: student.age,
      sex: student.sex,
      address: student.address,
      school: student.school,
      department: student.department,
      classR: student.classR,
      ranker: student.ranker,
      conduct: student.conduct
    });
  }

  deleteStudent(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  getListStudent(): Observable<any> {
    return this.http.get<Student[]>(`${this.baseUrl}`);
  }
}
