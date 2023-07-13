import {Component, OnInit} from '@angular/core';
import {NavService} from '@core/nav.service';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  disclamerOn = false;
  constructor(public nav: NavService,private viewportScroller: ViewportScroller) {}

  currentYear: number = new Date().getFullYear();

  public onClick(): void {
    this.nav.scrollToElementById('footer_hide');
    if(!this.disclamerOn){
      this.disclamerOn = true;

    }else{
      this.disclamerOn = false;
    }
  }

  ngOnInit() {
  }

}
