import {Component, Input} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {LoaderService} from '@core/loader.service';
import {NavService} from '@core/nav.service';
import {map} from 'rxjs/operators';
/*import {IProduct, ProductListServices} from '@core/product-list.services';*/


@Component({
  selector: 'app-feedback-form',
  template: `
    <container-element [ngSwitch]="formState">
      <div class="animate-switch" *ngSwitchCase="'success'">
        <p class="form_done">Thank you, your message has been sent.</p>
      </div>
      <div *ngSwitchDefault>
        <form class="" [formGroup]="FeedBackGroup" #userFeedbackForm="ngForm" (ngSubmit)="onSubmit()">
          <div fxLayout="row wrap" fxLayoutAlign="space-between start">
            <mat-form-field class="m_t_mob" appearance="outline" fxFlex="100" fxFlex.gt-sm="30">
              <mat-label >Name</mat-label>
              <input type="text" matInput formControlName="name" required>
              <mat-error *ngIf="key.name.invalid">{{getErrorName()}}</mat-error>
            </mat-form-field>

            <mat-form-field class="m_t_mob" appearance="outline" fxFlex="100" fxFlex.gt-sm="30">
              <mat-label >Email</mat-label>
              <input type="text" matInput formControlName="email" required>
              <mat-error *ngIf="key.email.invalid">{{getErrorEmail()}}</mat-error>
            </mat-form-field>

            <mat-form-field class="m_t_mob" appearance="outline" fxFlex="100" fxFlex.gt-sm="30">
              <mat-label >Phone</mat-label>
              <input type="text" matInput formControlName="phone" >
              <mat-error *ngIf="key.phone.invalid">{{getErrorPhone()}}</mat-error>
            </mat-form-field>





            <mat-form-field class="m_t_mob" appearance="outline" fxFlex="100">
              <mat-label >Your Comment</mat-label>
              <textarea matInput rows="8" formControlName="message" required></textarea>
              <mat-error *ngIf="key.message.invalid">{{getErrorMessage()}}</mat-error>
            </mat-form-field>
            <div fxLayout="row wrap" fxLayoutAlign="end start" fxFlex="100">
              <button [disabled]="loader.loading" class="btn btn_mob btn_blue" >SUBMIT FORM</button>
            </div>
          </div>
        </form>
      </div>
    </container-element>
  `,




})
export class FeedbackFormComponent {
  formState = 'default';
  @Input() formType: string;





  FeedBackGroup:FormGroup;

  get key() {
    return this.FeedBackGroup.controls;
  }

  constructor(
    public nav: NavService,
    private fb: FormBuilder,
    private http: HttpClient,
    public loader: LoaderService
    /*public product: ProductListServices*/) {
   /* product.loadingProduct$.subscribe((prod: IProduct) => {
      this.servicesTitle = prod.title;
      this.FeedBackGroup.controls.services.setValue(this.servicesTitle);
    });*/

    this.FeedBackGroup = this.fb.group({
      name: ['',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(150)
        ]
      ],
      email: ['',
        [
          Validators.email,
          Validators.required,
          Validators.maxLength(150)
        ]
      ],
      message: ['',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(300)
        ]
      ],

      phone: ['', [
        Validators.pattern(/^[0-9+-\\s]{5,22}$/)
      ]],

    });

  }

  getErrorName() {
    if (this.key.name.errors.required) {
      return 'You must enter a value';
    }
    if (this.key.name.errors.minlength) {
      return 'This field can be more 2 characters long.';
    }
    if (this.key.name.errors.maxlength) {
      return 'This field can be at most 150 characters long.';
    }
    if (this.key.name.errors.serverError) {return this.key.name.errors.serverError; }
  }




  getErrorMessage() {
    if (this.key.message.errors.required) {
      return 'You must enter a value';
    }
    if (this.key.message.errors.minlength) {
      return 'This field can be more 2 characters long.';
    }
    if (this.key.message.errors.maxlength) {
      return 'This field can be at most 300 characters long.';
    }
    if (this.key.message.errors.serverError) {return this.key.message.errors.serverError; }
  }

  getErrorEmail() {
    if (this.key.email.errors.required) {
      return 'An Email is required.';
    }
    if (this.key.email.errors.email) {
      return 'Please enter a valid email.';
    }
    if (this.key.email.errors.maxlength) {
      return 'This field can be at most 150 characters long.';
    }
    if (this.key.email.errors.serverError) {return this.key.email.errors.serverError; }
  }

  getErrorPhone() {
    if (this.key.phone.errors.required) {
      return 'A phone is required.';
    }
    if (this.key.phone.errors.pattern) {
      return 'That doesn‘t look like a valid phone.';
    }
    if (this.key.phone.errors.serverError) {return this.key.phone.errors.serverError; }
  }

  onSubmit() {


    this.loader.show();
    // stop here if form is invalid
    if (this.FeedBackGroup.invalid) { return; }

    const body = {
      name: this.key.name.value,
      /*services: this.key.services.value,*/
      email: this.key.email.value,
      phone: this.key.phone.value,
      message: this.key.message.value,
      formtype: 'Home Page - Contact Form'
    };
    this.http.post(this.nav.env.apiUrl + '/service/sendmail-api.html', body) .pipe(map((res: any) => {
      if (res.errors) {throw new HttpErrorResponse({error: res.errors}); }
    }))
      .subscribe((response) => {
          this.loader.hide();
          this.formState = 'success';

          this.FeedBackGroup.reset();
          //  console.log('response', response);
        }, (error) => {
          this.loader.hide();
          this.formState = 'default';
          Object.keys(error.error).forEach(item => {
            if (this.key[item]){
              console.log('serverError', {serverError: error.error[item][0]}, this.key[item]);
              this.key[item].setErrors({serverError: error.error[item][0]});
            }
          });
        }
      );


  }

}
