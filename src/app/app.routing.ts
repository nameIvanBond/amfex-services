import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {ErrorComponent} from '@view/general/error/error.component';
import {WebLayoutComponent} from '@view/layout/web-layout/web-layout.component';
import {HomeComponent} from '@view/web/home/home.component';
import {AboutUsComponent} from '@view/web/about-us/about-us.component';
import {OurTeamComponent} from '@view/web/our-team/our-team.component';
import {ContactUsComponent} from '@view/web/contact-us/contact-us.component';







const AppRoutes: Routes = [
  {
    path: '',
    component: WebLayoutComponent,
    data: {
      menu: 'AMFEX Services',
      title: 'AMFEX Services',
      description: 'AMFEX Services',
    },
    children: [
      {
        path: '',
        component: HomeComponent,
        data: {
          menu: 'Home',
          title: 'AMFEX Services LLP - consultancy firm specializing in sourcing and procurement solutions for raw materials in India | amfexservices.com',
          description: 'AMFEX Services caters foreign companies seeking reliable sourcing options to meet their raw material requirements in Automotive, Energy, Construction, Electrical, Consumer Goods, Textile, Healthcare and other industries.',
        }
      },
      {
        path: 'about-us.html',
        component: AboutUsComponent, pathMatch: 'full',
        data: {
          menu: 'About Us',
          title: 'About Us – AMFEX Services LLP | amfexservices.com',
          description: 'About Us',
        }
      },
      {
        path: 'our-team.html',
        component: OurTeamComponent, pathMatch: 'full',
        data: {
          menu: 'Our Team',
          title: 'Our Team – AMFEX Services LLP | amfexservices.com',
          description: 'Our Team',
        }
      }, {
        path: 'contact-us.html',
        component: ContactUsComponent, pathMatch: 'full',
        data: {
          menu: 'Contact Us',
          title: 'Contact Us – AMFEX Services LLP | amfexservices.com',
          description: 'Contact Us',
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

