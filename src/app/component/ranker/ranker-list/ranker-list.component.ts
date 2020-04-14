import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import {RankerService} from '../../../service/ranker.service';

@Component({
  selector: 'app-ranker-list',
  templateUrl: './ranker-list.component.html',
  styleUrls: ['./ranker-list.component.css']
})
export class RankerListComponent implements OnInit {

  ranker: Observable<any>;
  constructor(private rankerService: RankerService, private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }
  reloadData() {
    this.ranker = this.rankerService.getListRanker();
  }
  deleteRanker(id: number) {
    const choice = confirm('are you sure to delete this ranker');
    if (choice) {
      this.rankerService.deleteRanker(id).subscribe(data => {console.log(data); this.reloadData(); },
        error => console.log(error));
    }
  }
  updateRanker(id: number) {
    this.router.navigate(['update-ranker', id]);
  }

}
