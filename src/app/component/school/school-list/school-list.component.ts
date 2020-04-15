import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import {SchoolService} from '../../../service/school.service';

@Component({
  selector: 'app-school-list',
  templateUrl: './school-list.component.html',
  styleUrls: ['./school-list.component.css']
})
export class SchoolListComponent implements OnInit {

  schools: Observable<any>;
  constructor(private schoolService: SchoolService, private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }
  reloadData() {
    this.schools = this.schoolService.getListSchool();
  }
  deleteSchool(id: number) {
    const choice = confirm('are you sure to delete this address');
    if (choice) {
      this.schoolService.deleteSchool(id).subscribe(data => {console.log(data); this.reloadData(); },
        error => console.log(error));
    }
  }
  updateASchool(id: number) {
    this.router.navigate(['update-school', id]);
  }

}
