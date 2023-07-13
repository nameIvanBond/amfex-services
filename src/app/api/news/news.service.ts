import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {map, tap} from 'rxjs/operators';
import {NavService} from '@core/nav.service';
import {of} from 'rxjs';
import {TransferState} from '@angular/platform-browser';


export interface INews{
  idNews: string;
  idSite: string;
  url: string;
  createdDate: string;
  publishedDate: string;
  layout: string;
  title: string;
  keywords: string;
  intro: string;
  news: string;
  gallery: string;
  visible: string;
  idLanguage: string;
  type: string;
  index: string;
}


export interface IWidgetNewsResponse{
  count: number;
  news: INews[];
}
export interface IOneNewsResponse{
  count: number;
  current: INews;
}

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  loading: boolean;
  count = 0;
  // widgetNews$: BehaviorSubject<INews[]|boolean> = new BehaviorSubject(false);


  constructor(public nav: NavService, private http: HttpClient, private readonly transferState: TransferState) {
  }

  getCount(){
      return this.count;
  }
  getCountCache(start, end){
    let str = '';
    for (let i = start; i < end; i++){
      str = str + i + `,`;
    }
    return str;
  }
  getWidgetNewsState(count){

    // const resState = this.transferState.get(count, undefined);
    // if (resState !== undefined){
    //   return of(resState);
    // }else {
    //   return  this.getWidgetNews(count).pipe(tap((res) =>  this.transferState.set(count, res)));
    // }
    return  this.getWidgetNews(count).pipe(tap((res) =>  this.transferState.set(count, res)));
  }
  getWidgetNews(count){
    return this.http.post(this.nav.env.apiUrl + '/api/news/view-list.html?all&success',
      {needLoad: count, type: '2'}).pipe(map((res: IWidgetNewsResponse) => {
      if (typeof res.news !== 'undefined') {
        this.count = res.count;
        return res.news.reverse();
      }else{
        throw new HttpErrorResponse({
          error: res,
          status: 500,
          statusText: 'Validation Error',
          url: 'API/Registration/???????'
        });
      }
    }));
  }
  getOneNewsState(page){

    const resState = this.transferState.get(page, undefined);
    if (resState !== undefined){
      return of(resState);
    }else {
      return  this.getOneNews(page).pipe(tap((res) =>  this.transferState.set(page, res)));
    }

  }
  getOneNews(page){
    return this.http.post(this.nav.env.apiUrl + '/api/news/view-one.html?success',
      {url: page, type: '2'}).pipe(map((res: IOneNewsResponse) => {
      if (typeof res.current !== 'undefined') {
        this.count = res.count;
        return res.current;
      }else{
        throw new HttpErrorResponse({
          error: res,
          status: 500,
          statusText: 'Validation Error',
          url: 'API/Registration/??????'
        });
      }
    }));
  }


}
