import {Component} from '@angular/core';
import {NavItem, NavService} from '@core/nav.service';

@Component({
  selector: 'app-menu-footer-list',
  templateUrl: './menu-footer-list.component.html'
})

export class MenuFooterListComponent {
  navItems: NavItem[];

  constructor(private navService: NavService) {
    this.navItems = navService.getItemsMenu();

    if (this.navItems.length === 1){
      this.navItems = this.navItems[0].children;

    }
  }
}
