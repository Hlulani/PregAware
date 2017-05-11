import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {Routes} from "@angular/router";
import {OvulationCalendarComponent} from './Ovulation-Calender/ovulation-calendar.component';
import {AppRoutingModule} from './app-routing.module';


const  appRoutes : Routes = [
  { path: 'ovulation-calendar', component: OvulationCalendarComponent }


];

@NgModule({
  declarations: [
    AppComponent,
    OvulationCalendarComponent


  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
