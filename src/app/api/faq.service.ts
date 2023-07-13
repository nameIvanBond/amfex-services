import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {map, tap} from 'rxjs/operators';
import {NavService} from '@core/nav.service';
import {TransferStateService} from './transfer-state.service';
import { of } from 'rxjs';
import {TransferState} from '@angular/platform-browser';

export interface IFaq{
  id: number;
  parentId: number|string;
  name: string;
  url: string;
  text: string;
}

export interface IFaqResponse{
  message: IFaq[];
  error: string;
  success: string;
}
export interface IFaqRequest{
//  _csrf: string;
  categoryFaq: string;
}


export interface PostObject {
  instrument: string;
  bid: number;
  ask: number;
  statusBid: string;
  statusAsk: string;
}


@Injectable({
  providedIn: 'root'
})
export class FaqService {
  constructor(public nav: NavService, private http: HttpClient, private readonly transferState: TransferState) {  }

  getFAQstate(categoryFaq){

        const resState = this.transferState.get(categoryFaq, undefined);
        if (resState !== undefined){
          return of(resState);
        }else {
          return  this.getFAQ(categoryFaq).pipe(tap((res) =>  this.transferState.set(categoryFaq, res)));
        }

  }
  getFAQ(categoryFaq){

    // const _csrf = 'csrf token';
    // const data: IFaqRequest = { _csrf, categoryFaq};
    const data: IFaqRequest = {categoryFaq};
    // this.nav.env.apiUrl
    return this.http.post(this.nav.env.apiUrl + '/api/category-faq.html', data).pipe(map((res: IFaqResponse) => {
    //  console.log('faq - 111112222', res);
      if (res.error) {
        throw new HttpErrorResponse({
          error: res,
          status: 500,
          statusText: res.error,
          url: this.nav.env.apiUrl + '/api/category-faq.html'
        });
      } else {
        return  res.message;
      }
    }));
  }


}
