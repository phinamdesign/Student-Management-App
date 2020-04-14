import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import {ClassR} from '../../../model/classR';
import {ClassrService} from '../../../service/classr.service';

@Component({
  selector: 'app-class-r-create',
  templateUrl: './class-r-create.component.html',
  styleUrls: ['./class-r-create.component.css']
})
export class ClassRCreateComponent implements OnInit {

  classRs: Observable<any>;
  classR: ClassR = new ClassR();
  constructor(private classRService: ClassrService, private router: Router) { }

  reloadData() {
    this.router.navigate(['create-class']);
  }

  ngOnInit() {
    this.reloadData();
  }
  newClassR(): void {
    this.classR = new ClassR();
  }
  save() {
    this.classRService.createClassR(this.classR).subscribe(data => console.log(data), error => console.log(error));
    this.classR = new ClassR();
  }
  onSubmit() {
    this.save();
    alert('Created classR is successful!')
    this.reloadData();
  }

}
