import {Directive,  AfterViewInit,  OnDestroy,  Input,  ElementRef,  Renderer2, Self} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Subscription, throwError} from 'rxjs';
import {catchError, delay, filter, take, tap} from 'rxjs/operators';
import {InViewportDirective} from '@core/in-viewport.directive';
import {NotificationService} from '@core/notification/notification.service';

@Directive({
  selector: '[appLazyImg]'
})
export class LazyImgDirective implements AfterViewInit, OnDestroy {
  private static LOADING_CLASS_NAME = 'loading';
  private static LOADED_CLASS_NAME = 'loaded';

  @Input('appLazyImg') private src: string;


  private loading$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  private loaded$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  private readonly subscription: Subscription = new Subscription();


  // @HostListener('inViewportAction', ['$event']) highlightTile($event) {
  //   if ($event.visible && this.loaded === false) {
  //     this.load();
  //   }
  // }

  constructor(@Self() public inViewport: InViewportDirective,
              private elementRef: ElementRef,
              private http: HttpClient,
              private renderer: Renderer2,
              private notificationService: NotificationService) {
 //   console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ - constructor', elementRef, inViewport);
  }

  public ngAfterViewInit(): void {
 //   console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ - ngAfterContentInit',
 //     this.elementRef, this.inViewport);
    if (this.inViewport) {
      this.subscription.add(
        this.inViewport.inViewportAction
          .pipe(
            filter(({visible}) => visible),
            take(1)
          )
          .subscribe(() => this.load())
      );
    }
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public load(): void {
    this.loading = true;
  //  console.log('@@@@@- load', this);
    this.subscription.add(
      this.http.get(this.src, {responseType: 'blob'})
        .pipe(
          catchError(error => throwError(`Error during getting image from: ${this.src} ${error}`)),
          tap((data: Blob) => this.renderer.setAttribute(this.elementRef.nativeElement, 'src', URL.createObjectURL(data))),
          delay(10)
        )
        .subscribe(
          () => {
            this.loading = false;
            this.loaded = true;
          },
          (error) => {
            this.loading = false;
            this.notificationService.error(`This path is wrong - {{this.src}} ${error}`);
            // this.snackBar.open(error, undefined, { duration: 3000, panelClass: 'error-snackbar' });
          }
        )
    );
  }

  public get loading(): boolean {
    return this.loading$.getValue();
  }

  public set loading(value: boolean) {
    this.loading$.next(value);
    if (value) {
      this.renderer.addClass(this.elementRef.nativeElement, LazyImgDirective.LOADING_CLASS_NAME);
    } else {
      this.renderer.removeClass(this.elementRef.nativeElement, LazyImgDirective.LOADING_CLASS_NAME);
    }
  }

  public get loaded(): boolean {
    return this.loaded$.getValue();
  }

  public set loaded(value: boolean) {
    this.loaded$.next(value);
    if (value) {
      this.renderer.addClass(this.elementRef.nativeElement, LazyImgDirective.LOADED_CLASS_NAME);
    } else {
      this.renderer.removeClass(this.elementRef.nativeElement, LazyImgDirective.LOADED_CLASS_NAME);
    }
  }
}
