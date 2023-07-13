import {PLATFORM_ID, Injector, InjectionToken} from '@angular/core';
import {isPlatformServer} from '@angular/common';
import {TransferStateService} from '../api/transfer-state.service';


export const SERVER_PROFILE = new InjectionToken<object>('Some server data');

export function StateTransferFactory(
  transferStateService: TransferStateService,
  injector: Injector
): any {
  return () => {
    const platformId = injector.get(PLATFORM_ID);
    const isServer = isPlatformServer(platformId);
    let user: any;

    if (isServer) {
       user = transferStateService.getProfileByServer();  // injector.get(SERVER_PROFILE) || null;
       if (user !== null && user.jwt !== null) {
         transferStateService.set('serverJWT', user.jwt);
       }
    } else {
      user = transferStateService.get('serverJWT');
    }
    // console.log(platformId, user);
  };
}
