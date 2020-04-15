import { Component, OnInit } from '@angular/core';
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
  private id: number;
  students: Observable<any>;

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
