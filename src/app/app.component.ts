import { Component } from '@angular/core';
import {TableComponentComponent} from './TableComponent/table-component'

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css', 'main-style.css'],
  directives: [TableComponentComponent],
})
export class AppComponent {
  title = 'Hello world';
}
