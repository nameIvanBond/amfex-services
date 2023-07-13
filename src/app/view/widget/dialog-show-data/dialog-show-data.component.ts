import {Component, Inject} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

/*export class DialogData{
  title: string;
  desc: string;
  price: string;
  img: string;
}*/

@Component({
  selector: 'app-dialog-data-example-dialog',
  template:  /*'<div mat-dialog-actions>' +
    '<button mat-button mat-dialog-close><mat-icon>close</mat-icon></button>' +
    '</div>' +
    '<div mat-dialog-content class="dialog_box" fxLayout="row wrap" fxLayoutAlign="space-between start">' +
    '<div fxFlex="100" fxFlex.gt-sm="40"><img src="/assets/home/{{data.img}}@2x.webp"  alt="{{data.title}}"></div>' +
    '<div fxFlex="100"  fxFlex.gt-sm="55">' +
    '<h3 class="dialog_title">{{data.title}}</h3>' +
    '<div class="dialog_desc" [innerHTML]="data.desc"></div>' +
    '<p class="dialog_price">{{data.price}}</p>' +
    '</div>' +
    '</div>'*/
  '<div mat-dialog-content><div class="popUpLimited"><p>txt</p></div></div>' +
  '<div mat-dialog-actions>' +
  '<a class="btn btn_blue " mat-dialog-close>I understand</a>' +
  '</div>'


})
/*export class DialogShowDataComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}
}*/
export class DialogShowDataComponent {
  constructor(public dialog: MatDialog) {}
}

/*
*     '<button mat-button mat-dialog-close><mat-icon>close</mat-icon></button>' +
    '</div>' +
    '<div mat-dialog-content class="dialog_box" fxLayout="row wrap" fxLayoutAlign="end start" style="position:relative;height:100%;">' +
    '<div style="position: absolute;width:33%;height:100%;left:80px;right:0"><img src="/assets/home/{{data.img}}@2x.webp"  alt="{{data.title}}" style="max-width: 660px;width:100%;"></div>' + // fxFlex="100" fxFlex.gt-sm="40"
    '<div fxFlex="100"  fxFlex.gt-sm="55">' +
    '<h3 class="dialog_title">{{data.title}}</h3>' +
    '<div class="dialog_desc" [innerHTML]="data.desc"></div>' +
    '<p class="dialog_price">{{data.price}}</p>' +
    '</div>' +
    '</div>'
* */
