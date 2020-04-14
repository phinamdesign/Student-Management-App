import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Address} from '../../../model/address';
import {ActivatedRoute, Router} from '@angular/router';
import {School} from '../../../model/school';
import {SchoolService} from '../../../service/school.service';

@Component({
  selector: 'app-school-update',
  templateUrl: './school-update.component.html',
  styleUrls: ['./school-update.component.css']
})
export class SchoolUpdateComponent implements OnInit {

  schools: Observable<any>;
  id: number;
  school: School;
  constructor(private route: ActivatedRoute, private router: Router, private schoolService: SchoolService) { }

  reloadData() {
    this.schools = this.schoolService.getListSchool();
  }

  ngOnInit() {
    this.school = new Address();
    this.id = this.route.snapshot.params.id;
    this.schoolService.getSchool(this.id).subscribe(data => {console.log(data); this.school = data; }, error => console.log(error));
    this.reloadData();
  }
  updateSchool() {
    this.schoolService.updateSchool(this.id, this.school).subscribe(data => console.log(data), error => console.log(error));
    this.school = new Address();
    this.gotoList();
  }
  onSubmit() {
    this.updateSchool();
  }
  gotoList() {
    this.reloadData();
    this.router.navigate(['school']);
  }

}
