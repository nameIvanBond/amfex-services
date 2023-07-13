// https://learn.javascript.ru/size-and-scroll-window#window-scroll

import {ElementRef, Inject, Injectable, LOCALE_ID, PLATFORM_ID} from '@angular/core';
import {
  ActivatedRoute,
  NavigationEnd,
  NavigationError,
  NavigationExtras,
  NavigationStart,
  Router,
  Routes,
  RoutesRecognized,
  Scroll
} from '@angular/router';
import {Meta, Title} from '@angular/platform-browser';
import {WINDOW} from '@core/window.service';
import {CdkScrollable} from '@angular/cdk/overlay';
import {DOCUMENT, Location, LocationStrategy, PlatformLocation} from '@angular/common';
import {BehaviorSubject} from 'rxjs';
import {environment} from '@env';

export interface NavItem extends Array<NavItem> {
  displayName: string;
  disabled?: boolean;
  iconName: string;
  route?: string;
  anchor?: string;
  children?: NavItem[];
}

// TODO изучить возможности https://angular.io/api/common/Location#go
@Injectable({
  providedIn: 'root',
})
export class NavService {
  private $routes: Routes;
  public pathnameBack: string;
  public appDrawer: any;
  public appDrawerContentElement: ElementRef;
  public appDrawerContentScrollable: CdkScrollable;
  public scrollTop$: BehaviorSubject<number>;
  public pageChange$: BehaviorSubject<string>;
  public env: any;
  public localesList: any;
  public metaDataCurrentPage: any;

  constructor(@Inject(PLATFORM_ID) public platformId: any,
              @Inject(LOCALE_ID) public locale,
              @Inject(DOCUMENT) public document: any,
              @Inject(WINDOW) public window: Window,
              private location: Location,
              private strategy: LocationStrategy,
              private platformLocation: PlatformLocation,
              private route: ActivatedRoute,
              public router: Router,
              private metaTagService: Meta,
              private title: Title) {
    this.localesList = [
      {code: 'ar-AE', lang: 'ar', label: 'العربية', link: '/ar/'},
      {code: 'en-US', lang: 'en', label: 'English', link: '/'}
    ];

    this.env = environment.hosts[this.hostname] ? environment.hosts[this.hostname] : environment.hosts.default;

    this.scrollTop$ = new BehaviorSubject<number>(this.scrollPosition);
    this.pageChange$ = new BehaviorSubject<string>(this.pathname);


    // console.log('!_________NavService - constructor', platformId, this.env); // router, route,


    this.$routes = router.config;
    this.pathnameBack = this.pathname;
// Understand ActivatedRoute Interface Class Properties

//     Snapshot – This is the current snapshot of this route.
//     URL – It is an observable of the URL segments and it matched by this route
//     Params – Observable of the matrix parameters scoped to this route
//     QueryParams – Observable of the query parameters shared by all the routes
//     Fragment – Observable of the URL fragment shared by all the routes
//     Data – Observable of the static and resolved data of this route.
//     Root – This is the root of the router state
//     Parent – This property is the parent of this route in the router state tree
//     FirstChild – First child of this route in the router state tree
//     Children – Children of this route in the router state tree
//     pathFromRoot – Path from the root of the router state tree to this route
//     paramMap – It is read-only
//     queryParamMap – It is read-only
//     Outlet – It’s a constant and outlet name of the route
//     Component – It’s a constant and a component of the route
//     RouteConfig – This configuration used to match this route

    // });
    this.router.events.subscribe((event) => {
      if (event instanceof Scroll) {
        if (this.pathnameBack !== this.pathname && this.pathname.substring(0, 4) !== '/faq') {
          // forward navigation
          console.log('$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ forward ', this.pathname);
          // viewportScroller.scrollToPosition([0, 0]);
          this.pathnameBack = this.pathname;
          this.scrollTo(0, 0);
          setTimeout(() => {
            if (event.position) {
              this.scrollTo(event.position[0], event.position[1]);
            } else if (event.anchor) {
              this.scrollToElementById(event.anchor);
            }
          }, 500);
        } else {
          if (event.position) {
            // backward navigation
            console.log('$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ backward navigation', event.position);
            this.scrollTo(event.position[0], event.position[1]);
            // viewportScroller.scrollToPosition(event.position);
          } else if (event.anchor) {
            // anchor navigation
            console.log('$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ anchor ', event.anchor);
            this.scrollToElementById(event.anchor);
          }
        }

      }

      if (event instanceof NavigationStart) {
        // Show loading indicator
      }

      if (event instanceof RoutesRecognized) { // event triggered Layout

        // An event triggered before lazy loading a route configuration.
        // the same in child component => ActivatedRoute.snapshot.data
        // const snapshot = event.state.root.firstChild;
        // const child = event.state.root.children;
        // console.log('AppComponent - RoutesRecognized', event);
      }

      if (event instanceof NavigationEnd) {
        // Hide loading indicator
        let snapshot = router.routerState.snapshot.root.children[0].firstChild;
        // console.log(router.routerState.snapshot);
        if (router.routerState.snapshot.root.children[0].children[0].children.length > 0) {
          snapshot = router.routerState.snapshot.root.children[0].children[0].firstChild;
        }
       // console.log('+++++++++++',snapshot.data,route)
        // console.log('NavService - ', event, snapshot.data);
        this.metaDataCurrentPage = snapshot.data;
        this.title.setTitle(snapshot.data.title);
        this.metaTagService.updateTag({name: 'description', content: snapshot.data.description});
        this.metaTagService.updateTag({name: 'keywords', content: snapshot.data.keywords});
        this.metaTagService.updateTag({property: 'og:title', content: snapshot.data.title});
        this.metaTagService.updateTag({property: 'og:description', content: snapshot.data.description});
        //     this.metaTagService.addTags([
        //       { name: 'description',  content:  },
        //       { name: 'keywords',     content: snapshot.data.keywords },
        //       { name: 'robots', content: 'index, follow' },
        //       { name: 'author', content: 'Digamber Singh' },
        //       { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        //       { name: 'date', content: '2019-10-31', scheme: 'YYYY-MM-DD' },
        //       { charset: 'UTF-8' }
        //     ]);
        // Twitter metadata
        // this.meta.addTag({name: 'twitter:card', content: 'summary'});
        // this.meta.addTag({name: 'twitter:site', content: '@AngularUniv'});
        // this.meta.addTag({name: 'twitter:title', content: this.course.description});
        // this.meta.addTag({name: 'twitter:description', content: this.course.description});
        // this.meta.addTag({name: 'twitter:text:description', content: this.course.description});
        // this.meta.addTag({name: 'twitter:image', content: 'https://avatars3.githubusercontent.com/u/16628445?v=3&s=200'});

        this.pageChange$.next(this.location.path());
      }

      if (event instanceof NavigationError) {
        // Hide loading indicator

        // Present error to user
        console.log('NavService - NavigationError', event);
      }
    });
  }

  /*
  window.location.host = "example.com:80"
  window.location.hostname = "example.com"
  window.location.protocol = "https:"
  window.location.port = "80"
  window.location.pathname = "/a/b/c"
  URI
  window.location.href     = "https://example.com:80/a/b/c#anchor"
   */
  get host() {
    return this.platformId === 'server' ? '/' : this.document.URL.split('/')[2];
  }

  get hostname() {
    return this.platformId === 'server' ? '/' : this.document.URL.split('/')[2].split(':')[0];
  }

  get port() {
    return this.platformId === 'server' ? '/' : this.document.URL.split('/')[2].split(':')[1];
  }

  get pathname() {
    return this.platformId === 'server' ? '/' : this.location.path();
  }

  get hash() {
    return this.platformId === 'server' ? 'hash' : this.location.path(true).split('#')[1];
  }

  get URI() {
    return this.platformId === 'server' ? '/' : this.location.path(true);
  }

  getItemsMenu($pages = this.$routes): NavItem {
    const $rootMenu = [] as NavItem;
    for (const $page of $pages) {
      if (typeof $page.data !== 'undefined' && typeof $page.data.menu !== 'undefined') { // published
        const $elem = [] as NavItem;
        $elem.displayName = $page.data.menu;
        $elem.iconName = 'star_rate';
        const sip = $page.path.split('#');
        if (sip[1] !== undefined) {
          $elem.anchor = sip[1];
          $elem.route = sip[0].length < 1 ? '/' : '/' + sip[0];
        } else {
          $elem.anchor = null;
          $elem.route = $page.path.length < 1 ? null : '/' + $page.path;
        }
        if (typeof $page.children !== 'undefined') {
          $elem.children = this.getItemsMenu($page.children);
        }
        $rootMenu.push($elem);
      }
    }
    return $rootMenu.length > 0 ? $rootMenu : {} as NavItem;
  }

  public returnUrl() {
    return this.route.snapshot.queryParams.returnUrl || '/';
  }

  public navigate(commands: any[], extras?: NavigationExtras) {
    return this.router.navigate(commands, extras);
  }

  public closeNav() {
    this.appDrawer.close();
  }

  public openNav() {
    this.appDrawer.open();
  }

  // return Math.max(
  //       this.document.body.scrollHeight, this.document.documentElement.scrollHeight,
  //       this.document.body.offsetHeight, this.document.documentElement.offsetHeight,
  //       this.document.body.clientHeight, this.document.documentElement.clientHeight
  //     );


  public get clientHeight(): number {
    return this.document.documentElement.clientHeight;
  }

  public get clientWidth(): number {
    return this.document.documentElement.clientWidth;
  }

  public get scrollHeight(): number {
    return this.document.documentElement.scrollHeight;
  }

  public get scrollWidth(): number {
    return this.document.documentElement.scrollWidth;
  }

  public get offsetHeight(): number {
    return this.document.documentElement.offsetHeight;
  }

  public get offsetWidth(): number {
    return this.document.documentElement.offsetWidth;
  }

  public get scrollTopMax(): number {
    return this.document.documentElement.scrollTopMax;
  }

  public get scrollPosition(): number {
    return this.document.documentElement.scrollTop;
  }

  // ###################################### methods ##########################################
  // if (this.appDrawerContentScrollable) {this.appDrawerContentScrollable.scrollTo(top);}
  // this.appDrawerContentScrollable.elementScrolled()

  public elementRefPositionY(elementRef) {
    if (elementRef !== null) {
      let y = elementRef.offsetTop;
      let node = elementRef;
      while (node.offsetParent && node.offsetParent !== this.document.body) {
        // @ts-ignore
        node = node.offsetParent;
        y += node.offsetTop;
      }
      return y;
    } else {
      return 0;
    }
  }

  public viewportPositionY(): number {
    // console.log('scrollTop', this.document.documentElement.scrollTop, this.appDrawerContentElement.nativeElement.scrollTop);
    if (this.appDrawerContentElement) {
      return this.appDrawerContentElement.nativeElement.scrollTop;
    }
    /* Firefox, Chrome, Opera, Safari */
    if (typeof self !== 'undefined' && self.pageYOffset) {
      return self.pageYOffset;
    }
    /* Internet Explorer 6 - standards mode */
    if (this.document.documentElement && this.document.documentElement.scrollTop) {
      return this.document.documentElement.scrollTop;
    }
    /*основанных на старом WebKit (Safari) + Internet Explorer 6, 7 and 8 */
    if (this.document.body.scrollTop) {
      return this.document.body.scrollTop;
    }
    return 0;
  }

  public scrollTo(scrollLeft = 0, scrollTop = 0) {
    if (this.appDrawerContentElement) {
      this.appDrawerContentElement.nativeElement.scrollTop = scrollTop;
      this.appDrawerContentElement.nativeElement.scrollLeft = scrollLeft;
    } else {
      this.document.documentElement.scrollTop = scrollTop;
      this.document.documentElement.scrollLeft = scrollLeft;
    }
  }

  public animationScrollToY(startY, endY) {
    const distance = endY - startY;
    const duration = 800;
    let currentTime = 0;
    const increment = 20;

    // t = current time
    // b = start value
    // c = change in value
    // d = durationz
    const easeInOutQuad = (t, b, c, d) => {
      t /= d / 2;
      if (t < 1) {
        return c / 2 * t * t + b;
      }
      t--;
      return -c / 2 * (t * (t - 2) - 1) + b;
    };

    const animateScroll = () => {
      currentTime += increment;
      const val = easeInOutQuad(currentTime, startY, distance, duration);
      this.scrollTo(0, val);
      if (currentTime < duration) {
        setTimeout(animateScroll, increment);
      }
    };
    animateScroll();
  }

  public scrollTop() {
    const startY = this.viewportPositionY();
    this.animationScrollToY(startY, 0);
    // this.scrollTo(0, 0);
  }

  public scrollToElementById(elemId): void {
    if (typeof elemId === 'string') { // || eID instanceof String
      const startY = this.viewportPositionY();
      const elementRef = this.document.getElementById(elemId);
      console.log(this.elementRefPositionY(elementRef));
      const endY = this.elementRefPositionY(elementRef)-100;
      //   console.log('scrollByElementId');
      this.animationScrollToY(startY, endY);
      // this.scrollTo(0, endY);
    }
  }

  public sleep(millis) {
    const date = Date.now();
    let curDate = null;
    do {
      curDate = Date.now();
    } while (curDate - date < millis);
  }

  public appDrawerContentScrolledCb(event) {
    // console.log('scrolled', this.appDrawerContentElement.nativeElement.scrollTop, event);
    this.scrollTop$.next(this.viewportPositionY());
    return this.viewportPositionY();
  }

  // @HostListener('window:resize', [])
  // public appDrawerContentResize(scrolled) {
  //    console.log('Resize', this.appDrawerContentElement.nativeElement.clientWidth);
  // }
  // @HostListener('document:scroll', [])  onWindowScroll() {  }
  // @HostListener('window:scroll', [])

}
