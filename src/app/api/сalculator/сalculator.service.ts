import {Injectable} from '@angular/core';
import {Observable, Subject, switchMap} from 'rxjs';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {map, tap} from 'rxjs/operators';


export interface IGetInstrumentSettingsResponse{
  instrumentName: string;
  contractSize: number;
  buySwap: number;
  sellSwap: number;
  baseCurrency: string;
  quoteCurrency: string;
}
export interface IGetCurrencyResponse{
  CurrencyName: string;
}

@Injectable({ providedIn: 'root' })
export class CalculatorService {
  private GetInstrumentSettingsUrl = 'https://deybcy4zeb.execute-api.eu-central-1.amazonaws.com/Prod/api/v1/PlatformData/GetInstrumentSettings';
  private GetInstrumentSettingsHesder = {headers: new HttpHeaders().set('Authorization',  `Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjQ5QURDNDA0RjMzMkM3MkFCNDgzOEFCQzFERjIyMDQwN0JDNTUzOTZSUzI1NiIsInR5cCI6ImF0K2p3dCIsIng1dCI6IlNhM0VCUE15eHlxMGc0cThIZklnUUh2RlU1WSJ9.eyJuYmYiOjE2NzUyNTc0MTYsImV4cCI6MjAzNTI1NzQxNiwiaXNzIjoiaHR0cHM6Ly9kZXliY3k0emViLmV4ZWN1dGUtYXBpLmV1LWNlbnRyYWwtMS5hbWF6b25hd3MuY29tL3Byb2QiLCJhdWQiOiJ0b29scyIsImNsaWVudF9pZCI6InBsYXRpbnVtV2ViUGFnZSIsImlhdCI6MTY3NTI1NzQxNiwic2NvcGUiOlsiaW5zdHJ1bWVudHNldHRpbmdzLmdldCIsInN3YXBzbmFwc2hvdC5nZXQiLCJ0b29scy5hcGkiXX0.I1TycHb9xCFdd1Sa2z6gxsmZ2YadCoL6ZPPBHBPdbJR9Zoat9V92d4pAkZRjab-KJaDerFhuHBkNh6SZnT2j35NJJAfv655Q8CBVPOriafU2ovP3biObKlGtpKQuumbNS8-LoXcSRMiqjHOFLB5YGL_na4_H6kJdfNoi-w2zKYd84CVZunxOMueg81CVgUBDxL7BbUFR523C6HRb8fU726nWIoGVK-QuZA-yNuUpU3lbbPFwK3fjsCoOOjZu-h7U7gi7WMAoY0BQv-FDM9vkeeF9o7JGifM2xY9pnJSlaVCazkE17S5jpJnhdEnKKZynZY67LbWxEzOesJ7dsy78EQ`)};

  private getCurrencyUrl = 'https://deybcy4zeb.execute-api.eu-central-1.amazonaws.com/Prod/api/v1/PlatformData/GetInstrumentCollection';
  private getCurrencyHeader = {headers: new HttpHeaders().set('Authorization',  `Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjQ5QURDNDA0RjMzMkM3MkFCNDgzOEFCQzFERjIyMDQwN0JDNTUzOTZSUzI1NiIsInR5cCI6ImF0K2p3dCIsIng1dCI6IlNhM0VCUE15eHlxMGc0cThIZklnUUh2RlU1WSJ9.eyJuYmYiOjE2NzU4MTY4MTgsImV4cCI6MjAzNTgxNjgxOCwiaXNzIjoiaHR0cHM6Ly9kZXliY3k0emViLmV4ZWN1dGUtYXBpLmV1LWNlbnRyYWwtMS5hbWF6b25hd3MuY29tL3Byb2QiLCJhdWQiOiJ0b29scyIsImNsaWVudF9pZCI6InBsYXRpbnVtV2ViUGFnZSIsImlhdCI6MTY3NTgxNjgxOCwic2NvcGUiOlsiaW5zdHJ1bWVudG5hbWVzLmdldCIsImluc3RydW1lbnRzZXR0aW5ncy5nZXQiLCJzd2Fwc25hcHNob3QuZ2V0IiwidG9vbHMuYXBpIl19.jAzI-sV9EY9Rqgu98u_zaYzu35mo4yFywVIFx_P2lt619zXfYGbtu1bwUgF2nm2ieG8KGMC3ZS3SVbVdGEKh8i9YawIanefSIVvl0KFHy-y0UVpr3Q6sqzb1tgdbXKUxqR8n00J1dTtoP0smvO-5MP25hxX6Ju6e0LpqJK13A249V6JGlsshb2ylNxcMObWs_OYn52RsE87EiEszQiRGXRANVLnozjNv8atJnCDQTAdw9TQ23PJYD9liaa-mhhr6bkW1rEFvDd3hLU4vNQZ5BqmW5ALm3vsJQtPsc_lD3_2FhvTtVkYzUCe_mPrD7E-UkvbmsZz4DmMcciv2bIe96w`)};


  private instrumentSelectedSubject = new Subject();
  instrumentSelectedAction$ = this.instrumentSelectedSubject.asObservable();

  constructor(private http: HttpClient) {   }


  getCurrency$ = this.http.get(this.getCurrencyUrl, this.getCurrencyHeader).pipe(tap(console.log));
  selectedInstrument$ = this.instrumentSelectedAction$.pipe(
    switchMap(instrumentSet => this.http.get<IGetInstrumentSettingsResponse>(`${this.GetInstrumentSettingsUrl}?InstrumentName=${instrumentSet}`, this.GetInstrumentSettingsHesder)
      .pipe(map((res: IGetInstrumentSettingsResponse) => {
        if (typeof res.instrumentName !== 'undefined') {
          return res;
        }else{
          throw new HttpErrorResponse({
            error: res,
            status: 500,
            statusText: 'Validation Error',
            url: this.GetInstrumentSettingsUrl
          });
        }
      }
    )))
  );

  onSelected(instrumentSet: number): void {
    this.instrumentSelectedSubject.next(instrumentSet);
  }




}
