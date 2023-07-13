import {Component, OnInit} from '@angular/core';
import {NavService} from '@core/nav.service';

@Component({
  selector: 'app-fund-promotion',
  templateUrl: './fund-promotion.component.html',
  styleUrls: ['./fund-promotion.component.scss']
})
export class FundPromotionComponent implements OnInit {

  constructor(public navService: NavService) {
  }


  ngOnInit(): void {
  }




}
