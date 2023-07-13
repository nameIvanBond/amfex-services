import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {ErrorComponent} from '@view/general/error/error.component';
import {WebLayoutComponent} from '@view/layout/web-layout/web-layout.component';
import {HomeComponent} from '@view/web/home/home.component';
import {FundRegistrationComponent} from '@view/web/fund-registration/fund-registration.component';
import {FundDistributionComponent} from '@view/web/fund-distribution/fund-distribution.component';
import {FundPromotionComponent} from '@view/web/fund-promotion/fund-promotion.component';
import {TermsOfUseComponent} from '@view/web/terms-of-use/terms-of-use.component';
import {PrivacyPolicyComponent} from '@view/web/privacy-policy/privacy-policy.component';
import {DisclaimerComponent} from '@view/web/disclaimer/disclaimer.component';

import {LegalRepresentationComponent} from '@view/web/legal-representation/legal-representation.component';



import {CompanyComponent} from '@view/web/company/company.component';






const AppRoutes: Routes = [
  {
    path: '',
    component: WebLayoutComponent,
    data: {
      menu: 'Emirates Wealth',
      title: 'Emirates Wealth',
      description: 'Emirates Wealth',
    },
    children: [
      {
        path: '',
        component: HomeComponent,
        data: {

          title: 'Emirates Wealth – Mutual Funds, Promotion and Distribution Center',
          description: 'Emirates Wealth is your gateway to retail and qualified investors in the UAE, GCC, MEASA regions and to the global markets.',
        }
      },
      {
        path: 'registration.html',
        component: FundRegistrationComponent, pathMatch: 'full',
        data: {
          menu: 'Fund Registration',
          title: 'Funds Registration with the Securities & Commodities Authority (SCA)',
          description: 'Emirates Wealth will register your Fund with the SCA and handle your registration process from the beginning to the end.',
        }
      },

      {
        path: 'legal-representation.html',
        component: LegalRepresentationComponent, pathMatch: 'full',
        data: {
          menu: 'Legal Representation',
          title: 'Legal Representation – Emirates Wealth',
          description: 'We offer professional representation services for foreign fund houses and asset management companies (ACM) who wish to promote and distribute their funds in or from the UAE to the GCC and the wider MEANSA region.',
        }
      },

      {
        path: 'fund-promotion.html',
        component: FundPromotionComponent, pathMatch: 'full',
        data: {
          menu: 'Fund Promotion',
          title: 'Emirates Wealth – Your Gateway to the Emerging Markets',
          description: 'Becoming part of the Emirates Wealth promotion and distribution network guarantees your fund visibility to the regional client base and beyond.',
        }
      },

      {
        path: 'distribution.html',
        component: FundDistributionComponent, pathMatch: 'full',
        data: {
          menu: 'Fund Distribution',
          title: 'Emirates Wealth – Your fund distribution Gateway',
          description: 'Emirates Wealth is the distribution gateway for your funds in the UAE, GCC, MEASA regions and globally.',
        }
      },

      {
        path: 'company.html',
        component: CompanyComponent, pathMatch: 'full',
        data: {
          menu: 'Company',
          title: 'About Us – Emirates Wealth values each and every client',
          description: 'Emirates Wealth is to provide a complete fund solution package where we will drive your business forward and increase your AuM.',
        }
      },

      {
        path: 'terms-of-use.html',
        component: TermsOfUseComponent, pathMatch: 'full',
        data: {
          title: 'Terms of Use – Emirates Wealth',
          description: 'Terms of Use',
        }
      },
      {
        path: 'privacy-policy.html',
        component: PrivacyPolicyComponent, pathMatch: 'full',
        data: {
          title: 'Privacy Policy – Emirates Wealth',
          description: 'Privacy Policy',
        }
      },
      {
        path: 'disclaimer.html',
        component: DisclaimerComponent, pathMatch: 'full',
        data: {
          title: 'Disclaimer – Emirates Wealth',
          description: 'Disclaimer',
        }
      },



      {path: 'error', component: ErrorComponent},
      {path: '**', component: ErrorComponent} // otherwise redirect to ErrorComponent
    ]
  },
];

// export class PreloadModules implements PreloadingStrategy {
//
//   preload(route: Route, load: () => Observable<boolean>): Observable<boolean> {
//     if (route.data && route.data.noPreLoad) {
//       return of(null);
//     }
//     return of(true).pipe(delay(2000), switchMap((_: boolean) => load()));
//   }
//
// }
// ExtraOptions - https://angular.io/api/router/ExtraOptions

@NgModule({
  imports: [RouterModule.forRoot(AppRoutes, {
    //  preloadingStrategy: PreloadModules,
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
    initialNavigation: 'enabledBlocking'
  })],
  exports: [RouterModule]
})
export class AppRouting {
}

