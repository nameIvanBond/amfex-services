import {APP_INITIALIZER, Injector, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {JwtInterceptor} from '@core/interceptor/jwt.interceptor';
import {ErrorInterceptor} from '@core/interceptor/error.interceptor';
import {WINDOW_PROVIDERS} from '@core/window.service';
import {CoreModule} from '@shared/core.module';
import {ViewModule} from '@view/view.module';


import {AppRouting} from './app.routing';

// ##############################################################################
import {AppComponent} from './app.component';
import {WebModule} from '@view/web/web.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '@env';
import {StateTransferFactory} from '@core/state-transfer-factory';
import {TransferStateService} from './api/transfer-state.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    // angular
    BrowserModule.withServerTransition({appId: 'serverApp'}), // like Root module
    BrowserAnimationsModule,
   // BrowserTransferStateModule, // https://brianflove.com/2020-06-05/angular-transfer-state/
    // core & shared
    CoreModule.forRoot(), // import service
    ViewModule, // import other domain component | directive

    // 3rd party domain module
    AppRouting,
    WebModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.serviceWorker })
  ],
  exports: [AppRouting],
  providers: [WINDOW_PROVIDERS,
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
    {provide: APP_INITIALIZER, useFactory: StateTransferFactory, deps: [TransferStateService, Injector], multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() { }
}
