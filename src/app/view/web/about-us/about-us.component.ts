import {Component, OnInit} from '@angular/core';
import {NavService} from '@core/nav.service';
@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {



  constructor(public navService: NavService) {
  }


  ngOnInit(): void {
  }



}
