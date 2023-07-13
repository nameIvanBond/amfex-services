import {ApplicationRef, ComponentFactoryResolver, Inject, Injectable, Injector, NgZone} from '@angular/core';
import {MatSnackBar, MatSnackBarConfig} from '@angular/material/snack-bar';
import {PopupComponent} from '@core/notification/popup.component';
import {DOCUMENT} from '@angular/common';
// import { NgElement, WithProperties } from '@angular/elements';
/*  Usage
    init => constructor(public notificationService: NotificationService)
    controller =>   this.notification.error(message);
    (click)="notificationService.warn('This is warning notification')"
 */

@Injectable({providedIn: 'root'})
export class NotificationService {
  constructor(
    @Inject(DOCUMENT) public document: any,
    private injector: Injector,
    private applicationRef: ApplicationRef,
    private componentFactoryResolver: ComponentFactoryResolver,
    private readonly snackBar: MatSnackBar,
    private readonly zone: NgZone
  ) {
  }

  default(message: string, isHandset?: boolean, buttonLabel: string = 'OK') {
    this.show(message, buttonLabel, {
      duration: 5000,
      panelClass: 'default-notification-overlay'
    }, isHandset);
  }

  info(message: string, isHandset?: boolean, buttonLabel: string = 'OK') {
    this.show(message, buttonLabel, {
      duration: 10000,
      panelClass: 'info-notification-overlay'
    }, isHandset);
  }

  success(message: string, isHandset?: boolean, buttonLabel= null) {
    this.show(message, buttonLabel, {
      duration: 2000,
      panelClass: 'success-notification-overlay'
    }, isHandset);
  }

  warn(message: string, isHandset?: boolean, buttonLabel: string = 'OK') {
    this.show(message, buttonLabel, {
      duration: 25000,
      panelClass: 'warning-notification-overlay'
    }, isHandset);
  }

  error(message: string, isHandset?: boolean, buttonLabel: string = 'OK') {
    this.show(message, buttonLabel, {
      duration: 30000,
      panelClass: 'error-notification-overlay'
    }, isHandset);
  }

  private show(message: string, buttonLabel, configuration: MatSnackBarConfig, isHandset?: boolean) {
    // If desktop, move it to top-right
    if (!isHandset) {
      configuration.horizontalPosition = 'right';
      configuration.verticalPosition = 'top';
    }

    // Need to open snackBar from Angular zone to prevent issues with its position per
    // https://stackoverflow.com/questions/50101912/snackbar-position-wrong-when-use-errorhandler-in-angular-5-and-material
    this.zone.run(() => this.snackBar.open(message, buttonLabel, configuration));
  }

  // Previous dynamic-loading method required you to set up infrastructure
  // before adding the popup to the DOM.
  showAsComponent(message: string) {
    // Create element
    const popup = this.document.createElement('popup-component');

    // Create the component and wire it up with the element
    const factory = this.componentFactoryResolver.resolveComponentFactory(PopupComponent);
    const popupComponentRef = factory.create(this.injector, [], popup);

    // Attach to the view so that the change detector knows to run
    this.applicationRef.attachView(popupComponentRef.hostView);

    // Listen to the close event
    popupComponentRef.instance.closed.subscribe(() => {
      this.document.body.removeChild(popup);
      this.applicationRef.detachView(popupComponentRef.hostView);
    });

    // Set the message
    popupComponentRef.instance.message = message;

    // Add to the DOM
    this.document.body.appendChild(popup);
  }

  // This uses the new custom-element method to add the popup to the DOM.
  // showAsElement(message: string) {
  //   // Create element
  //   const popupEl: NgElement & WithProperties<PopupComponent> = this.document.createElement('popup-element') as any;
  //
  //   // Listen to the close event
  //   popupEl.addEventListener('closed', () => this.document.body.removeChild(popupEl));
  //
  //   // Set the message
  //   popupEl.message = message;
  //
  //   // Add to the DOM
  //   this.document.body.appendChild(popupEl);
  // }
}
