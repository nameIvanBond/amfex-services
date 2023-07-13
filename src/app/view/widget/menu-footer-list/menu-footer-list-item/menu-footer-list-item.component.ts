import {ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {NavItem, NavService} from '@core/nav.service';
import {Router} from '@angular/router';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-menu-footer-list-item',
  templateUrl: './menu-footer-list-item.component.html',
  styleUrls: ['./menu-footer-list-item.component.scss'],
  animations: [
    trigger('indicatorRotate', [
      state('collapsed', style({transform: 'rotate(0deg)'})),
      state('expanded', style({transform: 'rotate(180deg)'})),
      transition('expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4,0.0,0.2,1)')
      ),
    ])
  ]
})
export class MenuFooterListItemComponent implements OnInit {
  expanded: boolean;
  url: string;
  // @HostBinding('attr.aria-expanded') ariaExpanded = this.expanded;
  @Input() item: NavItem;
  @Input() parentPath: string;
  @Input() depth: number;

  constructor(public navService: NavService,
              public router: Router) {
  }

  onItemSelected(item: NavItem) {
    // console.log('#########onItemSelected', item);
    if (!item.children || !item.children.length) {
      const url = item.anchor !== undefined ? item.route + '#' + item.anchor : item.route;
    //  this.navService.navigate([url]);
      this.navService.closeNav();
    }
    if (item.children && item.children.length) {
      this.expanded = !this.expanded;
    }
  }

  ngOnInit() {
    if (this.item.children && this.item.children.length) {
      this.parentPath = this.item.route !== null ? this.parentPath + this.item.route : this.item.route;
      this.url = '';
    } else {
      this.url =  this.parentPath !== null ? this.parentPath + this.item.route : this.item.route;
     // console.log('item ', this.url);
    }
  }
}
