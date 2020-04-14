import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Department} from '../../../model/department';
import {DepartmentService} from '../../../service/department.service';

@Component({
  selector: 'app-department-create',
  templateUrl: './department-create.component.html',
  styleUrls: ['./department-create.component.css']
})
export class DepartmentCreateComponent implements OnInit {

  department: Department = new Department();
  constructor(private departmentService: DepartmentService, private router: Router) { }

  reloadData() {
    this.router.navigate(['create-department']);
  }

  ngOnInit() {
    this.reloadData();
  }
  newDepartment(): void {
    this.department = new Department();
  }
  save() {
    this.departmentService.createDepartment(this.department).subscribe(data => console.log(data), error => console.log(error));
    this.department = new Department();
  }
  onSubmit() {
    this.save();
    alert('Created department is successful!')
    this.reloadData();
  }

}
