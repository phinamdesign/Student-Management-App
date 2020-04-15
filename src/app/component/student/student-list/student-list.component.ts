import { Component, OnInit } from '@angular/core';
import {Sex} from '../../../model/sex';
import {Address} from '../../../model/address';
import {School} from '../../../model/school';
import {ClassR} from '../../../model/classR';
import {Ranker} from '../../../model/ranker';
import {Conduct} from '../../../model/conduct';
import {Department} from '../../../model/department';
import {Student} from '../../../model/student';
import {FormControl, FormGroup} from '@angular/forms';
import {SexService} from '../../../service/sex.service';
import {AddressService} from '../../../service/address.service';
import {SchoolService} from '../../../service/school.service';
import {DepartmentService} from '../../../service/department.service';
import {ClassrService} from '../../../service/classr.service';
import {RankerService} from '../../../service/ranker.service';
import {ConductService} from '../../../service/conduct.service';
import {StudentService} from '../../../service/student.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  // private nameStudent = '';
  private id: number;
  // private name: string;
  // private age: number;
  // private sex: Sex;
  // private address: Address;
  // private school: School;
  // private classR: ClassR;
  // private ranker: Ranker;
  // private conduct: Conduct;
  // private department: Department;
  // listStudent: Student[] = [];
  students: Observable<any>;

  studentForm = new FormGroup({
    name: new FormControl('')
  });

  constructor(
    private sexService: SexService,
    private addressService: AddressService,
    private schoolService: SchoolService,
    private departmentService: DepartmentService,
    private classService: ClassrService,
    private rankerService: RankerService,
    private conductService: ConductService,
    private studentService: StudentService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {
    this.activatedRoute.params.subscribe(
      params => {
        this.id = params.id;
      }
    );
  }

  ngOnInit() {
    this.reloadData();
  }
  reloadData() {
    this.students = this.studentService.getListStudent();
  }

}
