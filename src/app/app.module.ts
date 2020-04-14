import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddressCreateComponent } from './component/address/address-create/address-create.component';
import { AddressListComponent } from './component/address/address-list/address-list.component';
import { AddressUpdateComponent } from './component/address/address-update/address-update.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';
import { NavigatorComponent } from './navigator/navigator.component';
import { ClassRCreateComponent } from './component/classR/class-r-create/class-r-create.component';
import { ClassRListComponent } from './component/classR/class-r-list/class-r-list.component';
import { ClassRUpdateComponent } from './component/classR/class-r-update/class-r-update.component';
import { SchoolCreateComponent } from './component/school/school-create/school-create.component';
import { SchoolListComponent } from './component/school/school-list/school-list.component';
import { SchoolUpdateComponent } from './component/school/school-update/school-update.component';
import { DepartmentCreateComponent } from './component/department/department-create/department-create.component';
import { DepartmentListComponent } from './component/department/department-list/department-list.component';
import { DepartmentUpdateComponent } from './component/department/department-update/department-update.component';
import { SexCreateComponent } from './component/sex/sex-create/sex-create.component';
import { SexListComponent } from './component/sex/sex-list/sex-list.component';
import { SexUpdateComponent } from './component/sex/sex-update/sex-update.component';
import { RankerCreateComponent } from './component/ranker/ranker-create/ranker-create.component';
import { RankerListComponent } from './component/ranker/ranker-list/ranker-list.component';
import { RankerUpdateComponent } from './component/ranker/ranker-update/ranker-update.component';
import { ConductCreateComponent } from './component/conduct/conduct-create/conduct-create.component';
import { ConductListComponent } from './component/conduct/conduct-list/conduct-list.component';
import { ConductUpdateComponent } from './component/conduct/conduct-update/conduct-update.component';

@NgModule({
  declarations: [
    AppComponent,
    AddressCreateComponent,
    AddressListComponent,
    AddressUpdateComponent,
    NavigatorComponent,
    ClassRCreateComponent,
    ClassRListComponent,
    ClassRUpdateComponent,
    SchoolCreateComponent,
    SchoolListComponent,
    SchoolUpdateComponent,
    DepartmentCreateComponent,
    DepartmentListComponent,
    DepartmentUpdateComponent,
    SexCreateComponent,
    SexListComponent,
    SexUpdateComponent,
    RankerCreateComponent,
    RankerListComponent,
    RankerUpdateComponent,
    ConductCreateComponent,
    ConductListComponent,
    ConductUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
