import {NgModule} from '@angular/core';

import {SharedModule} from '@shared/shared.module';
import {AppFormModule} from '@view/form/appForm.module';

import { HomeComponent } from '@view/web/home/home.component';
import { AboutUsComponent } from '@view/web/about-us/about-us.component';

import {ViewModule} from '@view/view.module';
import {MatPaginatorModule} from '@angular/material/paginator';
import {OurTeamComponent} from '@view/web/our-team/our-team.component';
import {ContactUsComponent} from '@view/web/contact-us/contact-us.component';










@NgModule({
  declarations: [
    HomeComponent,
    AboutUsComponent,
    OurTeamComponent,
    ContactUsComponent
  ],
  imports: [
    SharedModule,
    AppFormModule,
    //  DragDropModule,
    //  MatExpansionModule,
    ViewModule,
    MatPaginatorModule,
  ]
})
export class WebModule {
}
