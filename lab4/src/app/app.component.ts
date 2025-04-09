import { Component } from '@angular/core';
import { Page1Component } from "./page1/page1.component";
import { Page2Component } from './page2/page2.component';

@Component({
  selector: 'my-app',
  imports: [
    Page1Component,
    Page2Component
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
