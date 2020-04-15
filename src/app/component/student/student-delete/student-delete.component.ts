import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Student} from '../../../model/student';
import {StudentService} from '../../../service/student.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-student-delete',
  templateUrl: './student-delete.component.html',
  styleUrls: ['./student-delete.component.css']
})
export class StudentDeleteComponent implements OnInit {

  students: Observable<Student[]>;

  constructor(
    private studentService: StudentService,
    private router: Router
  ) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.students = this.studentService.getListStudent();
  }

  deleteStudent(id: number) {
    const choice = confirm('Bạn có chắc chắn muốn xoas ?');
    if (choice) {
      this.studentService.deleteStudent(id)
        .subscribe(
          data => {
            console.log(data);
            this.reloadData();
            this.router.navigate(['delete-student']);
          },
          error => console.log(error)
        );
    }
  }

}
