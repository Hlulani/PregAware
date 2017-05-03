import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {OvulationCalendarComponent} from './Ovulation-Calender/ovulation-calendar.component';



export const routes: Routes = [
  {
    path: 'ovulation-calendar',
    component: OvulationCalendarComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
