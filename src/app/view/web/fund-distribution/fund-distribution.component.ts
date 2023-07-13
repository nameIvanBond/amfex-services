import {Component, OnInit} from '@angular/core';
import {NavService} from '@core/nav.service';


@Component({
  selector: 'app-fund-distribution',
  templateUrl: './fund-distribution.component.html',
  styleUrls: ['./fund-distribution.component.scss']
})
export class FundDistributionComponent implements OnInit {

  constructor(public navService: NavService) {
  }


  ngOnInit(): void {
  }

}
