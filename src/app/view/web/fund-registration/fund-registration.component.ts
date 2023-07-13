import {Component, OnInit} from '@angular/core';
import {NavService} from '@core/nav.service';

@Component({
  selector: 'app-fund-registration',
  templateUrl: './fund-registration.component.html',
  styleUrls: ['./fund-registration.component.scss']
})
export class FundRegistrationComponent implements OnInit {

  constructor(public navService: NavService) {
  }


  ngOnInit(): void {
  }


}
