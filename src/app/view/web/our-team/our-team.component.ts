import {Component, OnInit} from '@angular/core';
import {NavService} from '@core/nav.service';
@Component({
  selector: 'app-our-team',
  templateUrl: './our-team.component.html',
  styleUrls: ['./our-team.component.scss']
})
export class OurTeamComponent implements OnInit {



  constructor(public navService: NavService) {
  }


  ngOnInit(): void {
  }



}
