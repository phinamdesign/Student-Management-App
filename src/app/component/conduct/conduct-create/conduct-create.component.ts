import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Conduct} from '../../../model/conduct';
import {ConductService} from '../../../service/conduct.service';

@Component({
  selector: 'app-conduct-create',
  templateUrl: './conduct-create.component.html',
  styleUrls: ['./conduct-create.component.css']
})
export class ConductCreateComponent implements OnInit {

  conduct: Conduct = new Conduct();
  constructor(private conductService: ConductService, private router: Router) { }

  reloadData() {
    this.router.navigate(['create-conduct']);
  }

  ngOnInit() {
    this.reloadData();
  }
  newConduct(): void {
    this.conduct = new Conduct();
  }
  save() {
    this.conductService.createConduct(this.conduct).subscribe(data => console.log(data), error => console.log(error));
    this.newConduct();
  }
  onSubmit() {
    this.save();
    alert('Created conduct is successful!');
    this.reloadData();
  }

}
