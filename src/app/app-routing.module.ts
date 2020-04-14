import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddressCreateComponent} from './component/address/address-create/address-create.component';
import {AddressListComponent} from './component/address/address-list/address-list.component';
import {AddressUpdateComponent} from './component/address/address-update/address-update.component';
import {ClassRCreateComponent} from './component/classR/class-r-create/class-r-create.component';
import {ClassRListComponent} from './component/classR/class-r-list/class-r-list.component';
import {ClassRUpdateComponent} from './component/classR/class-r-update/class-r-update.component';
import {SchoolCreateComponent} from './component/school/school-create/school-create.component';
import {SchoolListComponent} from './component/school/school-list/school-list.component';
import {SchoolUpdateComponent} from './component/school/school-update/school-update.component';


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
  },
  {
    path: 'create-class',
    component: ClassRCreateComponent
  },
  {
    path: 'class',
    component: ClassRListComponent
  },
  {
    path: 'update-class/:id',
    component: ClassRUpdateComponent
  },
  {
    path: 'create-school',
    component: SchoolCreateComponent
  },
  {
    path: 'school',
    component: SchoolListComponent
  },
  {
    path: 'update-school/:id',
    component: SchoolUpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
