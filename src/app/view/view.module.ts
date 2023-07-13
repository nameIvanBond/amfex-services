import {NgModule} from '@angular/core';
import {SharedModule} from '@shared/shared.module';

import {FooterComponent} from '@view/widget/footer/footer.component';
import {HeaderComponent} from '@view/widget/header/header.component';
import {ServicesComponent} from '@view/widget/services/services.component';
import {MenuComponent} from '@view/widget/menu/menu.component';
import {MenuItemComponent} from '@view/widget/menu/menu-item/menu-item.component';
import {MenuListComponent} from '@view/widget/menu-list/menu-list.component';
import {MenuFooterListComponent} from '@view/widget/menu-footer-list/menu-footer-list.component';
import {MenuFooterListItemComponent} from '@view/widget/menu-footer-list/menu-footer-list-item/menu-footer-list-item.component';
import {MenuListItemComponent} from '@view/widget/menu-list/menu-list-item/menu-list-item.component';
import {LoaderComponent} from '@view/widget/loader/loader.component';
import {TopButtonComponent} from '@view/widget/top-button/top-button.component';

import {PopupComponent} from '@core/notification/popup.component';

import {EmptyLayoutComponent} from '@view/layout/empty-layout/empty-layout.component';
import {WebLayoutComponent} from '@view/layout/web-layout/web-layout.component';


import {ErrorComponent} from '@view/general/error/error.component';
import {AppFormModule} from '@view/form/appForm.module';
import {LifeQuotesComponent} from '@view/widget/live-quotes/life-quotes.component';
import {DialogShowDataComponent} from '@view/widget/dialog-show-data/dialog-show-data.component';
import {RedirectComponent} from '@view/general/redirect/redirect.component';



@NgModule({
  declarations: [
    MenuComponent, MenuItemComponent, MenuListComponent, MenuFooterListComponent, MenuFooterListItemComponent, MenuListItemComponent,
    EmptyLayoutComponent, WebLayoutComponent,
    HeaderComponent, FooterComponent, ServicesComponent, ErrorComponent, RedirectComponent,
    LoaderComponent, TopButtonComponent,

    LifeQuotesComponent,
    PopupComponent, DialogShowDataComponent
  ],
  imports: [
    SharedModule,
    AppFormModule,
  ],
  exports: [
    LifeQuotesComponent,
    ServicesComponent,

  ]
})
export class ViewModule {}
