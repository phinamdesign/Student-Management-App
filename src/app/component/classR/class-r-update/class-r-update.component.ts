import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Address} from '../../../model/address';
import {ActivatedRoute, Router} from '@angular/router';
import {ClassR} from '../../../model/classR';
import {ClassrService} from '../../../service/classr.service';

@Component({
  selector: 'app-class-r-update',
  templateUrl: './class-r-update.component.html',
  styleUrls: ['./class-r-update.component.css']
})
export class ClassRUpdateComponent implements OnInit {

  classRs: Observable<any>;
  id: number;
  classR: ClassR;
  constructor(private route: ActivatedRoute, private router: Router, private classRService: ClassrService) { }

  reloadData() {
    this.classRs = this.classRService.getListClassR();
  }

  ngOnInit() {
    this.classR = new Address();
    this.id = this.route.snapshot.params.id;
    this.classRService.getClassR(this.id).subscribe(data => {console.log(data); this.classR = data; }, error => console.log(error));
    this.reloadData();
  }
  updateAddress() {
    this.classRService.updateClassR(this.id, this.classR).subscribe(data => console.log(data), error => console.log(error));
    this.classR = new Address();
    this.gotoList();
  }
  onSubmit() {
    this.updateAddress();
  }
  gotoList() {
    this.reloadData();
    this.router.navigate(['class']);
  }

}
