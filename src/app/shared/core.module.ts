/*
 CoreModule - общепринятое название для модуля, используемого исключительно для поставки сервисов.
 Он не содержит в себе компонентов, директив и фильтров.
 Angular модуль для поставки сервисов создается с использованием статического метода forRoot().
 */
import {ModuleWithProviders, NgModule} from '@angular/core';

import {NotificationService} from '@core/notification/notification.service';
import {LoaderService} from '@core/loader.service';
import {NavService} from '@core/nav.service';
import {NewsService} from '../api/news/news.service';

import {CookieService} from 'ngx-cookie-service';

@NgModule({
  imports: [],
  declarations: [],
  providers: []
})
export class CoreModule {
  static forRoot(): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [
        NavService,
        NotificationService,
        CookieService,
        NewsService,
        LoaderService,
      ]
    };
  }
}
