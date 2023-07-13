import {Injectable} from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NavService } from '@core/nav.service';
import {isPlatformServer} from '@angular/common';
import {TransferStateService} from '../../api/transfer-state.service';


@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  profile = '';
// ,
//   @Optional() @Inject('SERVER_PROFILE') public message: string,
//   private readonly transferState: TransferState
  constructor( public transferState: TransferStateService, public nav: NavService) {
    this.profile = this.transferState.get('serverJWT');
    // console.log('#########!!!!!!!!!############', transferState, message);
    // const storeKey = makeStateKey<string>('serverJWT');
    // if (isPlatformServer(this.nav.platformId)) // get message from transferState if browser side
    // {
    //   this.message = this.transferState.get(storeKey, 'defaultMessageValue');
    // }
    // else // server side: get provided message and store in in transfer state
    // {
    //  // this.transferState.set(storeKey, this.message);
    // }
    // console.log('#########$$$$$$$$$############', this.message);
  }


  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // `${this.profileService.getToken()}`
    // const authReq = request.clone({
    //   setHeaders: {Authorization: '111112222233333'}
    // });
    if (isPlatformServer(this.nav.platformId)) {
    //  console.log('intercept serv - ', this.nav.platformId, this.nav.locale, this.nav.jwtId);
    }
    // const profile = this.transferState.getProfileByServer();
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${this.profile}`
      }
    });
    console.log('intercept', this.profile, this.nav.platformId, this.nav.locale);
    return next.handle(request);
    // return next.handle(authReq).pipe(  // request OR authReq
    //   tap(event => {
    //     if (event instanceof HttpResponse){
    //        console.log('Server response', event);
    //     }
    //   }, err => {
    //     if (err instanceof HttpErrorResponse) {
    //       if (err.status === 401){console.log('Unauthorized', err); }
    //     }
    //   })
    // );
  }

 // https://webdraftt.com/tutorial/angular-http-interceptor
}
