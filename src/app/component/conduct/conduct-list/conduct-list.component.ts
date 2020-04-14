import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import {ConductService} from '../../../service/conduct.service';

@Component({
  selector: 'app-conduct-list',
  templateUrl: './conduct-list.component.html',
  styleUrls: ['./conduct-list.component.css']
})
export class ConductListComponent implements OnInit {

  conducts: Observable<any>;
  constructor(private conductService: ConductService, private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }
  reloadData() {
    this.conducts = this.conductService.getListConduct();
  }
  deleteConduct(id: number) {
    const choice = confirm('are you sure to delete this conduct');
    if (choice) {
      this.conductService.deleteConduct(id).subscribe(data => {console.log(data); this.reloadData(); },
        error => console.log(error));
    }
  }
  updateConduct(id: number) {
    this.router.navigate(['update-conduct', id]);
  }

}
