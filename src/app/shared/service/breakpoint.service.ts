import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Router, Scroll} from '@angular/router';
import {NavService} from '@core/nav.service';

export interface IBreakPoint {
  name: string;
  pathname: string;
  hash: string;
  active: boolean;
  children?: IBreakPoint[];
}

@Injectable({
  providedIn: 'root'
})
export class BreakpointService {
  dataChange = new BehaviorSubject<IBreakPoint[]>([]);
  listOfBP: IBreakPoint[];
  pathname: string;
  constructor(
    public navService: NavService,
    public router: Router)
  {
    console.log('!_________BreakpointService - constructor');
    this.pathname = navService.pathname;
    const cleanFn = element => {
      console.log('cleanFn');
      element.active = false;
      if (!!element.children && element.children.length > 0) {
        element.children.forEach(cleanFn);
      }
    };

    this.router.events.subscribe((event) => {
      if (event instanceof Scroll) {
        if (this.pathname !== navService.pathname) {
          this.pathname = navService.window.location.pathname;
          this.listOfBP.forEach(cleanFn);
        }
      }
    });
  }

  initialization(initNew: IBreakPoint[]) {
    let path: string;
    const recurseFn = element => {
      if (!!element.pathname && element.pathname.length > 0) {
        path = element.pathname;
      }
      if (!!element.children && element.children.length > 0) {
        element.children = element.children.map(recurseFn);
      }
      element.pathname = path;
      return element;
    };

    this.listOfBP = initNew.map(recurseFn);
    //  console.log('this.listOfBP', this.listOfBP);
  }

  getListOfBP(): IBreakPoint[] { // Observable<IBreakPoint[]>
    //  return of(this.listOfBP);
    this.dataChange.next(this.listOfBP);
    return this.listOfBP;
  }


  setStatusByHash(hash: string, status: boolean) {

    const cangeActivityFn = (e, st) => {
      if (st === false && !!e.children && e.children.length > 0 && e.children.find(el => el.active === true)) {
        e.active = true;
        this.dataChange.next(this.listOfBP);
        //    console.log('cangeActivityFn', this.listOfBP);
      } else {
        e.active = st;
      }
    };
    const recurseFn = element => {
      if (element.hash === hash) {
        return true;
      } else {
        if (!!element.children && element.children.length > 0) {
          const res = element.children.find(recurseFn);
          if (res === undefined) {
            return false;
          } else {
            cangeActivityFn(res, status);
            return true;
          }
        } else {
          return false;
        }
      }
    };
    //  console.log('recurseFn');
    this.listOfBP.find(recurseFn).active = true;


  }

  // getBPByHref(hash: number | string): Observable<IBreakPoint>{
  //   return of(this.listOfBP.find(point => point.hash === hash));
  // }
}
