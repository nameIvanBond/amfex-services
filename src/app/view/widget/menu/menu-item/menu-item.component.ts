import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {NavItem} from '@core/nav.service';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent implements OnInit {
  @Input() items: NavItem[];
  @Input() parentPath: string;
  @ViewChild('childMenu', {static: true}) public childMenu;

  constructor(public router: Router) {
  }

  ngOnInit() {
    this.parentPath = this.parentPath === null ? '' : this.parentPath;
  }
}
