import { Component } from '@angular/core';
import { ItalicDirective } from '../../core/directive/italic.directive'

@Component({
  selector: 'home',
  imports: [ItalicDirective],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
