/*
SharedModule - общепринятое название для Angular модуля, служащим единым хранилищем для компонентов,
директив и фильтров, которыми пользуются другие модули.
 */
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HttpClientModule} from '@angular/common/http';
import {AppMaterialModule} from './app-material.module';
import {RouterModule} from '@angular/router';


import {LazyImgDirective} from '@core/lazy-img.directive';
import {InViewportDirective} from '@core/in-viewport.directive';
import {ParalaxDirective} from '@core/paralax.directive';



@NgModule({
  imports: [CommonModule],
  declarations: [
    // ComponentPreloaderDirective
    LazyImgDirective,
    InViewportDirective,
    ParalaxDirective
  ],
  exports: [
    LazyImgDirective, InViewportDirective, ParalaxDirective,
    CommonModule,
    HttpClientModule,
    AppMaterialModule,
    RouterModule
  ]
})
export class SharedModule {}
