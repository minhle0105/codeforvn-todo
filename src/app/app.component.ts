import {Component, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'codeforvn-todo';
  // @ts-ignore
  @ViewChild(MatSort) sort: MatSort;
}
