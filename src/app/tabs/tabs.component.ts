import {
  Component,
  ContentChildren,
  QueryList,
  TemplateRef,
} from '@angular/core';
import { TabDirective } from './tab.directive';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css'],
})
export class TabsComponent {
  @ContentChildren(TabDirective)
  tabs: QueryList<TabDirective>;

  currentTab: TemplateRef<any>;
}
