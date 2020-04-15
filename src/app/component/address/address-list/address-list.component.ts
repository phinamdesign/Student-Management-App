import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import {AddressService} from '../../../service/address.service';

@Component({
  selector: 'app-address-list',
  templateUrl: './address-list.component.html',
  styleUrls: ['./address-list.component.css']
})
export class AddressListComponent implements OnInit {

  addresses: Observable<any>;
  constructor(private addressService: AddressService, private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }
  reloadData() {
    this.addresses = this.addressService.getAddressList();
  }
  deleteAddress(id: number) {
    const choice = confirm('are you sure to delete this address');
    if (choice) {
      this.addressService.deleteAddress(id).subscribe(data => {console.log(data); this.reloadData(); },
        error => console.log(error));
    }
  }
  updateAddress(id: number) {
    this.router.navigate(['update-address', id]);
  }

}
