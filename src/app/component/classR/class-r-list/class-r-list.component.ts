import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import {ClassrService} from '../../../service/classr.service';

@Component({
  selector: 'app-class-r-list',
  templateUrl: './class-r-list.component.html',
  styleUrls: ['./class-r-list.component.css']
})
export class ClassRListComponent implements OnInit {

  classRs: Observable<any>;
  constructor(private classRService: ClassrService, private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }
  reloadData() {
    this.classRs = this.classRService.getListClassR();
  }
  deleteClassR(id: number) {
    const choice = confirm('are you sure to delete this classR');
    if (choice) {
      this.classRService.deleteClassR(id).subscribe(data => {console.log(data); this.reloadData(); },
        error => console.log(error));
    }
  }
  ClassRs(id: number) {
    this.router.navigate(['class', id]);
  }
  updateClassR(id: number) {
    this.router.navigate(['update-class', id]);
  }

}
