import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Address} from '../../../model/address';
import {ActivatedRoute, Router} from '@angular/router';
import {Sex} from '../../../model/sex';
import {SexService} from '../../../service/sex.service';

@Component({
  selector: 'app-sex-update',
  templateUrl: './sex-update.component.html',
  styleUrls: ['./sex-update.component.css']
})
export class SexUpdateComponent implements OnInit {

  sexes: Observable<any>;
  id: number;
  sex: Sex;
  constructor(private route: ActivatedRoute, private router: Router, private sexService: SexService) { }

  reloadData() {
    this.sexes = this.sexService.getListSex();
  }

  ngOnInit() {
    this.sex = new Sex();
    this.id = this.route.snapshot.params.id;
    this.sexService.getSex(this.id).subscribe(data => {console.log(data); this.sex = data; }, error => console.log(error));
  }
  updateSex() {
    this.sexService.updateSex(this.id, this.sex).subscribe(data => console.log(data), error => console.log(error));
    this.sex = new Address();
    this.reloadData();
    this.gotoList();
  }
  onSubmit() {
    this.updateSex();
  }
  gotoList() {
    this.router.navigate(['sex']);
  }

}
