import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {School} from '../../../model/school';
import {SchoolService} from '../../../service/school.service';

@Component({
  selector: 'app-school-create',
  templateUrl: './school-create.component.html',
  styleUrls: ['./school-create.component.css']
})
export class SchoolCreateComponent implements OnInit {

  school: School = new School();
  constructor(private schoolService: SchoolService, private router: Router) { }

  reloadData() {
    this.router.navigate(['create-school']);
  }

  ngOnInit() {
    this.reloadData();
  }
  newSchool(): void {
    this.school = new School();
  }
  save() {
    this.schoolService.createSchool(this.school).subscribe(data => console.log(data), error => console.log(error));
    this.school = new School();
  }
  onSubmit() {
    this.save();
    alert('Created school is successful!')
    this.reloadData();
  }

}
