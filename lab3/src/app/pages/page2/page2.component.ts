import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'page2',
  imports: [],
  templateUrl: './page2.component.html',
  styleUrl: './page2.component.css'
})
export class Page2Component {

  constructor(private activateRoute: ActivatedRoute, private router: Router) {}
  goMain(): void {
    //this.router.navigate(['/']);
    this.router.navigateByUrl('/');
  }
}
