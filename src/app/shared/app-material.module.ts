import {NgModule} from '@angular/core';

import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {MatToolbarModule} from '@angular/material/toolbar';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTableModule} from '@angular/material/table';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  exports: [
    // MatBottomSheetModule,
    MatButtonModule,
    MatDialogModule,
    // MatCardModule,
    // MatChipsModule,
    // MatStepperModule,
    // MatPaginatorModule,
    // MatDividerModule,
    // MatExpansionModule,
    // MatGridListModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatSidenavModule,
    // MatNativeDateModule,
    // MatProgressBarModule,
    MatProgressSpinnerModule,
    // MatRadioModule,
    // MatRippleModule,
     MatSelectModule,
    // MatSliderModule,
    // MatSlideToggleModule,
    // MatSnackBarModule,
    // MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatInputModule,
    // MatTooltipModule,
    // MatTreeModule,
    FlexLayoutModule
   // FlexLayoutModule.withConfig({}, {ssrObserveBreakpoints: ['xs', 'lt-md']})
  ]
})
export class AppMaterialModule {
}
