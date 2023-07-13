import {NgModule} from '@angular/core';

import {SharedModule} from '@shared/shared.module';
import {AppFormModule} from '@view/form/appForm.module';

import { HomeComponent } from '@view/web/home/home.component';
import { FundRegistrationComponent } from '@view/web/fund-registration/fund-registration.component';

import { FundDistributionComponent } from '@view/web/fund-distribution/fund-distribution.component';
import { TermsOfUseComponent } from '@view/web/terms-of-use/terms-of-use.component';
import { FundPromotionComponent } from '@view/web/fund-promotion/fund-promotion.component';



import {PrivacyPolicyComponent} from '@view/web/privacy-policy/privacy-policy.component';
import {DisclaimerComponent} from '@view/web/disclaimer/disclaimer.component';
import {LegalRepresentationComponent} from '@view/web/legal-representation/legal-representation.component';

import {CompanyComponent} from '@view/web/company/company.component';
import {ViewModule} from '@view/view.module';
import {MatPaginatorModule} from '@angular/material/paginator';










@NgModule({
  declarations: [
    HomeComponent,
    FundRegistrationComponent,
    PrivacyPolicyComponent,
    DisclaimerComponent,
    FundDistributionComponent,
    TermsOfUseComponent,
    FundPromotionComponent,
    CompanyComponent,
    LegalRepresentationComponent,
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
