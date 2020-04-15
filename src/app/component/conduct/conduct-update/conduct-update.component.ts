import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {Conduct} from '../../../model/conduct';
import {ConductService} from '../../../service/conduct.service';

@Component({
  selector: 'app-conduct-update',
  templateUrl: './conduct-update.component.html',
  styleUrls: ['./conduct-update.component.css']
})
export class ConductUpdateComponent implements OnInit {

  conducts: Observable<any>;
  id: number;
  conduct: Conduct;
  constructor(private route: ActivatedRoute, private router: Router, private conductService: ConductService) { }

  reloadData() {
    this.conducts = this.conductService.getListConduct();
  }

  ngOnInit() {
    this.conduct = new Conduct();
    this.id = this.route.snapshot.params.id;
    this.conductService.getConduct(this.id).subscribe(data => {console.log(data); this.conduct = data; }, error => console.log(error));
  }
  updateConduct() {
    this.conductService.updateConduct(this.id, this.conduct).subscribe(data => console.log(data), error => console.log(error));
    this.conduct = new Conduct();
    this.reloadData();
    this.gotoList();
  }
  onSubmit() {
    this.updateConduct();
  }
  gotoList() {
    this.router.navigate(['conduct']);
  }

}
