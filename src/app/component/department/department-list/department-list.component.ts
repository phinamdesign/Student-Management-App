import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import {DepartmentService} from '../../../service/department.service';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {

  departments: Observable<any>;
  constructor(private departmentService: DepartmentService, private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }
  reloadData() {
    this.departments = this.departmentService.getListDepartment();
  }
  deleteDepartment(id: number) {
    const choice = confirm('are you sure to delete this department');
    if (choice) {
      this.departmentService.deleteDepartment(id).subscribe(data => {console.log(data); this.reloadData(); },
        error => console.log(error));
    }
  }
  updateDepartment(id: number) {
    this.router.navigate(['update-department', id]);
  }

}
