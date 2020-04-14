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

@NgModule({
  declarations: [
    AppComponent,
    AddressCreateComponent,
    AddressListComponent,
    AddressUpdateComponent,
    NavigatorComponent,
    ClassRCreateComponent,
    ClassRListComponent,
    ClassRUpdateComponent
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
