import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Address} from '../../../model/address';
import {ActivatedRoute, Router} from '@angular/router';
import {AddressService} from '../../../service/address.service';

@Component({
  selector: 'app-address-update',
  templateUrl: './address-update.component.html',
  styleUrls: ['./address-update.component.css']
})
export class AddressUpdateComponent implements OnInit {

  addresses: Observable<any>;
  id: number;
  address: Address;
  constructor(private route: ActivatedRoute, private router: Router, private addressService: AddressService) { }

  reloadData() {
    this.addresses = this.addressService.getAddressList();
  }

  ngOnInit() {
    this.address = new Address();
    this.id = this.route.snapshot.params.id;
    this.addressService.getAddress(this.id).subscribe(data => {console.log(data); this.address = data; }, error => console.log(error));
    this.reloadData();
  }
  updateAddress() {
    this.addressService.updateAddress(this.id, this.address).subscribe(data => console.log(data), error => console.log(error));
    this.address = new Address();
    this.gotoList();
  }
  onSubmit() {
    this.updateAddress();
  }
  gotoList() {
    this.reloadData();
    this.router.navigate(['addresses']);
  }

}
