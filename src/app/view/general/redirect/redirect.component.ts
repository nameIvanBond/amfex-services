import { Component, OnInit } from '@angular/core';
import {NavService} from '@core/nav.service';

@Component({
  selector: 'app-redirect',
  template: 'redirecting...'
})
export class RedirectComponent implements OnInit {
  constructor(public nav: NavService) { }

  ngOnInit() {
    if (this.nav.platformId !== 'server'){
  //    console.log(this.nav.metaDataCurrentPage.externalUrl);
      window.location.href = this.nav.metaDataCurrentPage.externalUrl;
  //    window.open(this.nav.metaDataCurrentPage.externalUrl, '_blank');
    }
  }
}
