import {Component, OnInit} from '@angular/core';
import {NavService} from '@core/nav.service';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {


  constructor(public nav: NavService) {}

  currentYear: number = new Date().getFullYear();



  ngOnInit() {
  }

}
