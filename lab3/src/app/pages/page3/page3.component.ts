import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'page3',
  imports: [],
  templateUrl: './page3.component.html',
  styleUrl: './page3.component.css'
})
export class Page3Component {
  title = 'item';
  id: number = 0;

  constructor(private activateRoute: ActivatedRoute, private router: Router) {
    this.id = activateRoute.snapshot.params['id'];
  }

  ngOnInit() {
    this.activateRoute.paramMap
      .pipe(switchMap((params: any) => params.getAll('id')))
      .subscribe((data: any) => this.id = +data);
  }

  goMain(): void {
    this.router.navigate(['/']);
    //this.router.navigateByUrl('/');
  }
}