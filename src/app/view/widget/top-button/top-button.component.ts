import {Component, ElementRef, OnDestroy, Renderer2, ViewChild, AfterViewInit, ViewContainerRef} from '@angular/core';
import {NavService} from '@core/nav.service';

@Component({
  selector: 'app-top-button',
  template: `
    <button #topbutton mat-mini-fab color="primary" (click)="navService.scrollTop()" aria-label="Scroll back to top">
      <mat-icon aria-label="Scroll back to top">keyboard_arrow_up</mat-icon>
    </button>`,
})
export class TopButtonComponent implements AfterViewInit, OnDestroy {
  @ViewChild('topbutton', {static: true}) public topButton: ElementRef;
  private isShow = false;
// ngView
// ngHost
  constructor(public navService: NavService,
              private renderer: Renderer2,
              private elementRef: ElementRef,
              private containerRef: ViewContainerRef
  ) {
  }

  public ngAfterViewInit() {
  //  console.log('test2222', this.topButton, this.topButton.nativeElement, this.containerRef);
    this.navService.scrollTop$.subscribe(event => {
      if (event > 500 && this.isShow === false) {
        this.isShow = true;
      //  console.log('test', this.elementRef.nativeElement, this.topButton.nativeElement);
        this.renderer.addClass(this.elementRef.nativeElement, 'inactive');
      } else if (event < 500 && this.isShow === true) {
        this.isShow = false;
        this.renderer.removeClass(this.elementRef.nativeElement, 'inactive');
      }

    });
  }


  public ngOnDestroy(): void {
    this.navService.scrollTop$.unsubscribe();
  }
}

