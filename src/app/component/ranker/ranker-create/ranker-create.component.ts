import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Ranker} from '../../../model/ranker';
import {RankerService} from '../../../service/ranker.service';

@Component({
  selector: 'app-ranker-create',
  templateUrl: './ranker-create.component.html',
  styleUrls: ['./ranker-create.component.css']
})
export class RankerCreateComponent implements OnInit {

  ranker: Ranker = new Ranker();
  constructor(private rankerService: RankerService, private router: Router) { }

  reloadData() {
    this.router.navigate(['create-ranker']);
  }

  ngOnInit() {
    this.reloadData();
  }
  newRanker(): void {
    this.ranker = new Ranker();
  }
  save() {
    this.rankerService.createRanker(this.ranker).subscribe(data => console.log(data), error => console.log(error));
    this.newRanker();
  }
  onSubmit() {
    this.save();
    alert('Created ranker is successful!')
    this.reloadData();
  }

}
