import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {Department} from '../../../model/department';
import {DepartmentService} from '../../../service/department.service';

@Component({
  selector: 'app-department-update',
  templateUrl: './department-update.component.html',
  styleUrls: ['./department-update.component.css']
})
export class DepartmentUpdateComponent implements OnInit {

  departments: Observable<any>;
  id: number;
  department: Department;
  constructor(private route: ActivatedRoute, private router: Router, private departmentService: DepartmentService) { }

  reloadData() {
    this.departments = this.departmentService.getListDepartment();
  }

  ngOnInit() {
    this.department = new Department();
    this.id = this.route.snapshot.params.id;
    // tslint:disable-next-line:max-line-length
    this.departmentService.getDepartment(this.id).subscribe(data => {console.log(data); this.department = data; }, error => console.log(error));
  }
  updateDepartment() {
    this.departmentService.updateDepartment(this.id, this.department).subscribe(data => console.log(data), error => console.log(error));
    this.department = new Department();
    this.reloadData();
    this.gotoList();
  }
  onSubmit() {
    this.updateDepartment();
  }
  gotoList() {
    this.router.navigate(['department']);
  }

}
