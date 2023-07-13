import {Component, OnInit} from '@angular/core';
import {NavService} from '@core/nav.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  username: string;
  public localesList: any;
  public currentKey: any;

  constructor(public nav: NavService) {
    const tmp = nav.localesList.filter(item => item.code !== nav.locale);
    this.localesList = tmp[0];
  }


  ngOnInit() {
  }
}
