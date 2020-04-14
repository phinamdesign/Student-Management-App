import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Address} from '../../../model/address';
import {AddressService} from '../../../service/address.service';
import {Router} from '@angular/router';
import {Sex} from '../../../model/sex';
import {SexService} from '../../../service/sex.service';

@Component({
  selector: 'app-sex-create',
  templateUrl: './sex-create.component.html',
  styleUrls: ['./sex-create.component.css']
})
export class SexCreateComponent implements OnInit {

  sex: Sex = new Sex();
  constructor(private sexService: SexService, private router: Router) { }

  reloadData() {
    this.router.navigate(['create-sex']);
  }

  ngOnInit() {
    this.reloadData();
  }
  newSex(): void {
    this.sex = new Sex();
  }
  save() {
    this.sexService.createSex(this.sex).subscribe(data => console.log(data), error => console.log(error));
    this.sex = new Sex();
  }
  onSubmit() {
    this.save();
    alert('Created sex is successful!')
    this.reloadData();
  }

}
