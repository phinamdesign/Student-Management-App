import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Address} from '../../../model/address';
import {ActivatedRoute, Router} from '@angular/router';
import {Ranker} from '../../../model/ranker';
import {RankerService} from '../../../service/ranker.service';

@Component({
  selector: 'app-ranker-update',
  templateUrl: './ranker-update.component.html',
  styleUrls: ['./ranker-update.component.css']
})
export class RankerUpdateComponent implements OnInit {

  rankerS: Observable<any>;
  id: number;
  ranker: Ranker;
  constructor(private route: ActivatedRoute, private router: Router, private rankerService: RankerService) { }

  reloadData() {
    this.rankerS = this.rankerService.getListRanker();
  }

  ngOnInit() {
    this.ranker = new Ranker();
    this.id = this.route.snapshot.params.id;
    this.rankerService.getRanker(this.id).subscribe(data => {console.log(data); this.ranker = data; }, error => console.log(error));
    this.reloadData();
  }
  updateRanker() {
    this.rankerService.updateRanker(this.id, this.ranker).subscribe(data => console.log(data), error => console.log(error));
    this.ranker = new Address();
    this.gotoList();
  }
  onSubmit() {
    this.updateRanker();
  }
  gotoList() {
    this.reloadData();
    this.router.navigate(['ranker']);
  }

}
