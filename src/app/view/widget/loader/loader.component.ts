import {Component, OnInit, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-loader',
  template: '<div class="loader">\n' +
    '  <mat-spinner color="accent"></mat-spinner>\n\n' +
    '  <p> {{message}} </p>\n' +
    '</div>',
  styles: ['.loader > * {text-align: center;margin: 0 auto;}.loader p {margin-top: 1em;color:rgba(0,0,0,0.85);}'],
})
export class LoaderComponent implements OnInit {
  message = 'Please wait...';

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    if (data.message) {
      this.message = data.message;
    }
  }

  ngOnInit() {
  }
}
