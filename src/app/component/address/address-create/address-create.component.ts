import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Address} from '../../../model/address';
import {AddressService} from '../../../service/address.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-address-create',
  templateUrl: './address-create.component.html',
  styleUrls: ['./address-create.component.css']
})
export class AddressCreateComponent implements OnInit {

  addresses: Observable<any>;
  address: Address = new Address();
  constructor(private addressService: AddressService, private router: Router) { }

  reloadData() {
    this.router.navigate(['create-address']);
  }

  ngOnInit() {
    this.reloadData();
  }
  newAddress(): void {
    this.address = new Address();
  }
  save() {
    this.addressService.createAddress(this.address).subscribe(data => console.log(data), error => console.log(error));
    this.address = new Address();
  }
  onSubmit() {
    this.save();
    alert('Created address is successful!')
    this.reloadData();
  }

}
