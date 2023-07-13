import { Component, OnInit } from '@angular/core';
import {NavService} from '@core/nav.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  username: string;

  constructor(public nav: NavService) {}


  ngOnInit() {
  }
}
