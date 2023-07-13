import {
  Component,
  OnDestroy,
  OnInit
} from '@angular/core';
import {NavService} from '@core/nav.service';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {of} from 'rxjs';
import {map, tap} from 'rxjs/operators';
import {makeStateKey, TransferState} from '@angular/platform-browser';
import {InViewportMetadata} from '@core/in-viewport.directive';



export interface Ticker {
  instrument: string;
  bid: number;
  ask: number;
  statusBid: string;
  statusAsk: string;
}
export class Res {
  data: Ticker[];
}

@Component({
  selector: 'app-life-quotes',
  templateUrl: 'life-quotes.component.html',
  styleUrls: ['life-quotes.component.scss'],
})
export class  LifeQuotesComponent implements OnInit, OnDestroy {
  arrayTickers = [];
  idInterval;
  lang = 'en-US';
  bid = 'Bid';
  ask = 'Ask';
  random = 'start';
  constructor(public nav: NavService,
              private http: HttpClient,
              private readonly transferState: TransferState
  ) {  }

  ngOnInit() {

    this.lang =  this.nav.locale;

    const bidLang = {'en-US': 'Bid', 'ar-AE': 'محاوله', es: 'Bid', ru: 'Bid'};
    const askLang = {'en-US': 'Ask', 'ar-AE': 'أسال', es: 'Ask', ru: 'Ask'};
    this.bid = bidLang[this.lang];
    this.ask = askLang[this.lang];
    this.getTickers();
  }

  ngOnDestroy() {
    if (this.idInterval) {
      clearInterval(this.idInterval);
    }
  }

 public updateQuotes(event){
   const {[InViewportMetadata]: {entry}, target, visible} = event;
   if ( visible ){
     if (this.nav.platformId !== 'server' && this.idInterval === undefined){
           this.random = (Math.random() + 1).toString(36).substring(7);
           this.getTickers();
           this.idInterval = setInterval(() => {
             this.random = (Math.random() + 1).toString(36).substring(7);
             this.getTickers();
           }, 5000);
     }
   } else {
     if (this.idInterval) {
       clearInterval(this.idInterval);
       this.idInterval = undefined;
     }
   }
 }

  public getTickers(){
    // console.log('platformId', this.nav.platformId, this.random);
    const tradingDayWeekArr = {
        EURUSD: 'EURUSD',
        USDCHF: 'USDCHF',
        USDJPY: 'USDJPY',
        EURJPY: 'EURJPY',
        GBPUSD: 'GBPUSD',
        EURGBP: 'EURGBP',
        AUDUSD: 'AUDUSD',
        USDCAD: 'USDCAD',
        EURCHF: 'EURCHF',
        FT_DJ30: 'DJ30',
        FT_Gold: 'GOLD',
        CL_Spot: 'OIL'
    };
    this.getTickersRequestState().subscribe((obj: Ticker[]) => {
      const ArrayTickers = [];
      obj.forEach( (value: any, key: any) => {
        ArrayTickers[key] = {
          ask : parseFloat(value.ask.toFixed(5)),
          bid : parseFloat(value.bid.toFixed(5)),
          instrument : tradingDayWeekArr[value.instrument],
          statusBid : value.statusBid === 'down' ? ('down_ticker') : ('up_ticker'),
          statusAsk : value.statusAsk === 'down' ? ('down_ticker') : ('up_ticker')
        };
      });
      this.arrayTickers = ArrayTickers;
    });

    // this.http.get(
    //   this.nav.env.apiUrl + '/api/getprice.html?getprice=1'
    //   ).subscribe((obj: Ticker[]) => {
    //       const ArrayTickers = [];
    //       obj.forEach( (value: any, key: any) => {
    //         ArrayTickers[key] = {
    //           ask : parseFloat(value.ask.toFixed(5)),
    //           bid : parseFloat(value.bid.toFixed(5)),
    //           instrument : tradingDayWeekArr[value.instrument],
    //           statusBid : value.statusBid === 'down' ? ('down_ticker') : ('up_ticker'),
    //           statusAsk : value.statusAsk === 'down' ? ('down_ticker') : ('up_ticker')
    //         };
    //       });
    //       this.arrayTickers = ArrayTickers;
    // });
  }
  getTickersRequestState(){
    const storeKey = makeStateKey<string>(this.random);
    const resState = this.transferState.get(storeKey, undefined);
    if (resState !== undefined){
      return of(resState);
    }else {
      return  this.getTickersRequest().pipe(tap((res) =>  this.transferState.set(storeKey, res)));
    }

  }
  public getTickersRequest(){

    return this.http.get(this.nav.env.apiUrl + '/api/getprice.html?getprice=1').pipe(map((res) => {
      if (typeof res !== 'undefined') {
        return res;
      }else{
        throw new HttpErrorResponse({
          error: res,
          status: 500,
          statusText: 'Validation Error',
          url: '/api/getprice.html?getprice=1'
        });
      }
    }));
  }

}

