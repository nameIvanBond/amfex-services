import {Component} from '@angular/core';
import {IconService} from '@core/icon.service';
import {NavService} from '@core/nav.service';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent{
  // multilanguage = '';
  // menuArr = [];


  /*  Жизненный цикл компонента
      OnChanges - устанавливаются или изменяются значения входных свойств класса компонента;
      OnInit - устанавливаются "обычные" свойства; вызывается единожды вслед за первым вызовом OnChanges();
      DoCheck - происходит изменения свойства или вызывается какое-либо событие;
      AfterContentInit - в шаблон включается контент, заключенный между тегами компонента;
      AfterContentChecked - аналогичен DoCheck(), только используется для контента, заключенного между тегами компонента;
      AfterViewInit - инициализируются компоненты, которые входят в шаблон текущего компонента;
      AfterViewChecked - аналогичен DoCheck(), только используется для дочерних компонентов;
      OnDestroy - компонент "умирает", т.е. удаляется из DOM-дерева
   */



  constructor(
              private iconService: IconService,
              private navService: NavService
  ) {
    // console.log('############# AppComponent - constructor');
  }

}
