import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '@shared/shared.module';
import {FeedbackFormComponent} from '@view/form/feedbackForm.component';
import {MatInputModule} from '@angular/material/input';



@NgModule({
  declarations: [
    FeedbackFormComponent
  ],
  imports: [
    FormsModule, ReactiveFormsModule,
    // MatAutocompleteModule,
    // MatBadgeModule,
    // MatButtonToggleModule,
    // MatDatepickerModule,
    // MatCheckboxModule,
    MatInputModule,
    // MatSelectModule,

    SharedModule,
    // NgxMatFileInputModule
  ],
  exports: [
    FeedbackFormComponent
  ]
})
export class AppFormModule {
}
