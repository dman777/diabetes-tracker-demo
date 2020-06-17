import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodayChartComponent } from './today-chart/today-chart.component';
import { LastSevenDaysChartComponent } from './last-seven-days-chart/last-seven-days-chart.component';
import { MonthChartComponent } from './month-chart/month-chart.component';

const routes: Routes = [
  { path: 'today', component: TodayChartComponent },
  { path: 'last-seven', component: LastSevenDaysChartComponent },
  { path: 'month', component: MonthChartComponent },
  { path: '', redirectTo: '/today', pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})


export class AppRoutingModule { }
