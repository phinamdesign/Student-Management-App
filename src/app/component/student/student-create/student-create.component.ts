import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Student} from '../../../model/student';
import {Sex} from '../../../model/sex';
import {Address} from '../../../model/address';
import {School} from '../../../model/school';
import {Department} from '../../../model/department';
import {ClassR} from '../../../model/classR';
import {Ranker} from '../../../model/ranker';
import {Conduct} from '../../../model/conduct';
import {SexService} from '../../../service/sex.service';
import {AddressService} from '../../../service/address.service';
import {SchoolService} from '../../../service/school.service';
import {DepartmentService} from '../../../service/department.service';
import {ClassrService} from '../../../service/classr.service';
import {RankerService} from '../../../service/ranker.service';
import {ConductService} from '../../../service/conduct.service';
import {StudentService} from '../../../service/student.service';

@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.css']
})
export class StudentCreateComponent implements OnInit {
  studentForm: FormGroup;
  student: Student;
  name: any;
  age: any;
  sex: any;
  address: any;
  school: any;
  department: any;
  classR: any;
  ranker: any;
  conduct: any;
  sexList: Sex[];
  addressList: Address[];
  schoolList: School[];
  departmentList: Department[];
  classList: ClassR[];
  rankerList: Ranker[];
  conductList: Conduct[];

  constructor(
    private sexService: SexService,
    private addressService: AddressService,
    private schoolService: SchoolService,
    private departmentService: DepartmentService,
    private classService: ClassrService,
    private rankerService: RankerService,
    private conductService: ConductService,
    private studentService: StudentService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.studentForm = this.fb.group({
      id: '',
      name: ['', [Validators.required, Validators.minLength(1)]],
      age: ['', [Validators.required, Validators.min(0)]]
    });
    this.sexService.getListSex().subscribe(next => this.sexList = next);
    this.addressService.getAddressList().subscribe(next => this.addressList = next);
    this.schoolService.getListSchool().subscribe(next => this.schoolList = next);
    this.departmentService.getListDepartment().subscribe(next => this.departmentList = next);
    this.classService.getListClassR().subscribe(next => this.classList = next);
    this.rankerService.getListRanker().subscribe(next => this.rankerList = next);
    this.conductService.getListConduct().subscribe(next => this.conductList = next);
    this.sex = [];
    this.address = [];
    this.department = [];
    this.school = [];
    this.classR = [];
    this.ranker = [];
    this.conduct = [];
  }

  onSubmit() {
    if (this.studentForm.valid) {
      const {value} = this.studentForm;
      this.student = value;
    } else {
      console.log('error');
    }
    setTimeout(() => {
      this.createStudent();
    }, 1200);
  }

  createStudent() {
    this.student.sex = this.sex;
    this.student.address = this.address;
    this.student.school = this.school;
    this.student.department = this.department;
    this.student.classR = this.classR;
    this.student.ranker = this.ranker;
    this.student.conduct = this.conduct;
    this.studentService.createStudent(this.student).subscribe(next => {
      this.ngOnInit();
      alert('Created a new student!');
    });
  }

  addSex(id) {
    this.sexService.getSex(id).subscribe(next => this.sex = next);
  }

  addAddress(id) {
    this.addressService.getAddress(id).subscribe(next => this.address = next);
  }

  addSchool(id) {
    this.schoolService.getSchool(id).subscribe(next => this.school = next);
  }

  addDepartment(id) {
    this.departmentService.getDepartment(id).subscribe(next => this.department = next);
  }

  addRanker(id) {
    this.rankerService.getRanker(id).subscribe(next => this.ranker = next);
  }

  addClass(id) {
    this.classService.getClassR(id).subscribe(next => this.classR = next);
  }

  addConduct(id) {
    this.conductService.getConduct(id).subscribe(next => this.conduct = next);
  }

}
