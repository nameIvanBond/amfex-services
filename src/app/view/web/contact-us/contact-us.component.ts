import {Component, OnInit} from '@angular/core';
import {NavService} from '@core/nav.service';
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {



  constructor(public navService: NavService) {
  }


  ngOnInit(): void {
  }



}
