import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import {SexService} from '../../../service/sex.service';

@Component({
  selector: 'app-sex-list',
  templateUrl: './sex-list.component.html',
  styleUrls: ['./sex-list.component.css']
})
export class SexListComponent implements OnInit {

  sexes: Observable<any>;
  constructor(private sexService: SexService, private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }
  reloadData() {
    this.sexes = this.sexService.getListSex();
  }
  deleteSex(id: number) {
    const choice = confirm('are you sure to delete this sex');
    if (choice) {
      this.sexService.deleteSex(id).subscribe(data => {console.log(data); this.reloadData(); },
        error => console.log(error));
    }
  }
  Sex(id: number) {
    this.router.navigate(['sex', id]);
  }
  updateSex(id: number) {
    this.router.navigate(['update-sex', id]);
  }

}
