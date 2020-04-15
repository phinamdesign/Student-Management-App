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
import {DepartmentCreateComponent} from './component/department/department-create/department-create.component';
import {DepartmentListComponent} from './component/department/department-list/department-list.component';
import {DepartmentUpdateComponent} from './component/department/department-update/department-update.component';
import {SexCreateComponent} from './component/sex/sex-create/sex-create.component';
import {SexListComponent} from './component/sex/sex-list/sex-list.component';
import {SexUpdateComponent} from './component/sex/sex-update/sex-update.component';
import {RankerCreateComponent} from './component/ranker/ranker-create/ranker-create.component';
import {RankerListComponent} from './component/ranker/ranker-list/ranker-list.component';
import {RankerUpdateComponent} from './component/ranker/ranker-update/ranker-update.component';
import {ConductCreateComponent} from './component/conduct/conduct-create/conduct-create.component';
import {ConductListComponent} from './component/conduct/conduct-list/conduct-list.component';
import {ConductUpdateComponent} from './component/conduct/conduct-update/conduct-update.component';
import {StudentCreateComponent} from './component/student/student-create/student-create.component';
import {StudentListComponent} from './component/student/student-list/student-list.component';
import {StudentUpdateComponent} from './component/student/student-update/student-update.component';
import {StudentDeleteComponent} from './component/student/student-delete/student-delete.component';


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
  },
  {
    path: 'create-department',
    component: DepartmentCreateComponent
  },
  {
    path: 'department',
    component: DepartmentListComponent
  },
  {
    path: 'update-department/:id',
    component: DepartmentUpdateComponent
  },
  {
    path: 'create-sex',
    component: SexCreateComponent
  },
  {
    path: 'sex',
    component: SexListComponent
  },
  {
    path: 'update-sex/:id',
    component: SexUpdateComponent
  },
  {
    path: 'create-ranker',
    component: RankerCreateComponent
  },
  {
    path: 'ranker',
    component: RankerListComponent
  },
  {
    path: 'update-ranker/:id',
    component: RankerUpdateComponent
  },
  {
    path: 'create-conduct',
    component: ConductCreateComponent
  },
  {
    path: 'conduct',
    component: ConductListComponent
  },
  {
    path: 'update-conduct/:id',
    component: ConductUpdateComponent
  },
  {
    path: 'create-student',
    component: StudentCreateComponent
  },
  {
    path: 'student',
    component: StudentListComponent
  },
  {
    path: 'update-student/:id',
    component: StudentUpdateComponent
  },
  {
    path: 'delete-student',
    component: StudentDeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
