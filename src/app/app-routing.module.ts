import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodayChartComponent } from './today-chart/today-chart.component';
import { LastSevenDaysChartComponent } from './last-seven-days-chart/last-seven-days-chart.component';

const routes: Routes = [
  { path: 'today', component: TodayChartComponent },
  { path: 'lastSeven', component: LastSevenDaysChartComponent },
  { path: '', redirectTo: '/today', pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})


export class AppRoutingModule { }
