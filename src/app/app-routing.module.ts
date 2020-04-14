import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddressCreateComponent} from './component/address/address-create/address-create.component';
import {AddressListComponent} from './component/address/address-list/address-list.component';
import {AddressUpdateComponent} from './component/address/address-update/address-update.component';


const routes: Routes = [
  {path: '', redirectTo: 'addresses', pathMatch: 'full'},
  {
    path: 'create-address',
    component: AddressCreateComponent
  },
  {
    path: 'address',
    component: AddressListComponent
  },
  {
    path: 'update-address/:id',
    component: AddressUpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
