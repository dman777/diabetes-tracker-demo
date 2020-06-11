import {
  ChangeDetectorRef,
  Component,
  ViewChild,
  AfterViewInit,
  ViewEncapsulation,
  Input,
} from '@angular/core';

import { MediaMatcher } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { MatSidenavContent } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
})

// LEAVE OFF ... ADD BREAK POINT OBSERVER
export class AppComponent implements AfterViewInit {
  @ViewChild('snav') public snav: MatSidenav;
  @ViewChild('sideNavContent') public sideNavContent: MatSidenavContent;

  mobileQuery: MediaQueryList;
  private _mobileQueryListener: (media) => void;

  @Input()
  public scrollTopOffset:Number = 0;

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private media: MediaMatcher) {
      this.mobileQuery = this.media.matchMedia('(max-width: 1000px)');
  }

  runScroller() {
    const scroller = this.sideNavContent.elementScrolled();

    scroller.subscribe({
      next: () => {
        this.scrollTopOffset = this.sideNavContent.measureScrollOffset('top');
        this.changeDetectorRef.detectChanges();
      },
      error(msg) {
        console.log(msg);
      },
    });
  }

  ngAfterViewInit() {
    this._mobileQueryListener = (media) => {
      if (media.matches && this.snav.opened) {
        this.snav.close();
      } else if (!media.matches && !this.snav.opened) {
        this.snav.open();
      }
      this.changeDetectorRef.detectChanges();
    };

    this.mobileQuery.addListener(this._mobileQueryListener);
    this.runScroller();
  }
}
