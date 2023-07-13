import {Directive, AfterViewInit, Input, ElementRef, Self, OnDestroy} from '@angular/core';
import {NavService} from '@core/nav.service';
import {ScrollDispatcher} from '@angular/cdk/overlay';
import {InViewportDirective} from '@core/in-viewport.directive';
import {filter, take} from 'rxjs/operators';
import {Subscription} from 'rxjs';

// https://github.com/cwadrupldijjit/ng2-parallax/blob/master/src/ts/parallax.directive.ts

export class ParallaxConfig{
  cssProperty?: string;
  ratio?: number;
  initialValue?: number;
  maxValue?: number;
  minValue?: number;
  cssUnit?: string;
}

@Directive({
  selector: '[appParalax]'
})
export class ParalaxDirective implements AfterViewInit, OnDestroy {

  @Input() config: Array<ParallaxConfig>;
  // the following @Inputs are all part of the config object, which for
  // brevity's sake, you can do a bunch of operations in bulk by passing
  // in the config object; caveat for this is that angular 2 won't permit
  // more than 9 keys being passed in an object via the template



  // this is used to define the css property you'd like to modify as you scroll
  // default is backgroundPositionY
  @Input() cssProperty = 'backgroundPositionY';
  // ratio defining how fast, slow, or the direction of the changes on scrolling
  @Input() ratio = -.7;
  // this is the initial value in pixels for the cssProperty property you defined
  // before or, if you didn't define one, it defaults to 0
  @Input() initialValue = 0.1;
  // use this if you want the parallax effect only if the passed in statement is
  // truthy; default is boolean true
  @Input() canMove: any = true;
  // the upper constraint for the css transformation
  @Input() maxValue: number;
  // the lower constraint for the css transformation
  @Input() minValue: number;
  // the unit (e.g. 'px', 'em', '%', 'vh', etc.) you want for the parallax effect to use
  @Input() cssUnit = 'px';
  // what you want to call it to find the particular instance of it if you need to debug
  @Input() name: 'parallaxDirectiv';

  private cssValue: string;
  private isSpecialVal = false;

  private hostElement: HTMLElement;
  private readonly subscription: Subscription = new Subscription();

  constructor(@Self() public inViewport: InViewportDirective,
              public navService: NavService,
              private scrollDispatcher: ScrollDispatcher,
              private elementRef: ElementRef) {
    this.hostElement = elementRef.nativeElement;
    if (this.config === undefined){this.config = [{}]; }
  }
  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  public ngAfterViewInit() {
    this.canMove = false;
    if (this.inViewport) {
      this.subscription.add(
        this.inViewport.inViewportAction
          .subscribe((e) => {
            this.canMove = e.visible;
            if (this.canMove && this.initialValue === 0.1){
              this.initialValue = this.navService.viewportPositionY();
              this.scrollDispatcher.scrolled().subscribe(() => this.paralax());
            }
          })
      );
    }
  }

  paralax(){
    if (this.canMove) {
      this.config.forEach(item => {
        const cssProperty = item.cssProperty ? item.cssProperty : this.cssProperty;
        const ratio = item.ratio ? item.ratio : this.ratio;
        const cssUnit = item.cssUnit ? item.cssUnit : this.cssUnit;
        const maxValue = item.maxValue ? item.maxValue : this.maxValue;
        const minValue = item.minValue ? item.minValue : this.minValue;
        let calcVal = 0;
        if (item.initialValue !== undefined){
          calcVal =  item.initialValue - (this.initialValue - this.navService.viewportPositionY()) * ratio;
        }else{
          calcVal =  (this.navService.viewportPositionY() - this.initialValue)  * ratio;
          // console.log('_____', this.name, cssProperty, calcVal, cssUnit, this.initialValue );
        }

        if (maxValue !== undefined && calcVal >= maxValue) {
          calcVal = maxValue;
        } else if (minValue !== undefined && calcVal <= minValue) {
          calcVal = minValue;
        }
        this.hostElement.style[cssProperty] = calcVal + cssUnit;
      });

     // console.log('initialized on element', this.name, this.hostElement , this.cssKey, resultVal);
    }
  }

}


