import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Curve } from './curve';
import { Timestamp } from './timestamp';
import * as moment from 'moment';

@Injectable()
export class InMemoryDataService  implements InMemoryDbService {
    timestamps1: Timestamp = {
      timeStamp: "12:00",
      glucoseLevel: 395
    };
    timestamps2: Timestamp = {
      timeStamp: "15:00",
      glucoseLevel: 200
    };
    timestamps3: Timestamp = {
      timeStamp: "16:30",
      glucoseLevel: 65
    };
    timestamps4: Timestamp = {
      timeStamp: "18:00",
      glucoseLevel: 300
    };
    timestamps5: Timestamp = {
      timeStamp: "23:00",
      glucoseLevel: 350
    };

    createCurve = (dayNumber: number): Curve => {
      return {
        date: moment().local().subtract(dayNumber, 'days').format('MM-DD-YYYY'),
        timestamps: [
          this.timestamps1,
          this.timestamps2,
          //   this.timestamps3,
          this.timestamps4,
          this.timestamps5,
        ]
      }
    }

  createDb() {
    const days: number[] = Array.from({length: 35}, (x, index) => index);
    const curves: Curve[] = days.map(dayNumber => this.createCurve(dayNumber));
    return { curves };
  }
}
