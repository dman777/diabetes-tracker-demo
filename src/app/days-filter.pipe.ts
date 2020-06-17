import { Pipe, PipeTransform } from '@angular/core';
import * as moment from "moment";
import { Curve } from './curve';

@Pipe({
  name: 'daysFilter'
})

export class DaysFilterPipe implements PipeTransform {
  // returns ether curve object or curve array, so I used any.
  transform(chartData: Curve[], days: number): any {
    const checkToday = (targetDate)=> {
      const resultCharts = chartData.filter(curve => {
          return moment(curve.date, 'MM-DD-YYYY').isSameOrBefore(targetDate, 'day');
        })

      return resultCharts.splice(0, days);
    };

    if (chartData) {
      // addd # days to today
      const targetDate = moment();
      return checkToday(targetDate);
    }
  }
}
