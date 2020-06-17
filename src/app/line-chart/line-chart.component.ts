import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import { LineChartService } from './line-chart.service';
import { animate, trigger, transition, style, query, state } from '@angular/animations';


@Component({
  selector: 'line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css'],

  animations: [
    trigger('fade', [
      state('false', style({ opacity: 0 })),
      state('true', style({ opacity: 1 })),
      transition('false => true', animate('150ms 2000ms ease-in')),
    ]),
  ]
})

export class LineChartComponent {
  @Input('curve-data') curveData: Array<object>;
  @Input('graph-size') graphSize: String;
  public fadeInStart: boolean = false;


  constructor(
    private lineChartService: LineChartService,
    private elRef: ElementRef,
  ) { }

  ngAfterViewInit() {

    this.lineChartService.makeGraph(
      this.curveData,
      this.elRef.nativeElement.querySelector('.graph-sheet'),
      this.graphSize,
    );
    this.fadeInStart = true;
  }
}
