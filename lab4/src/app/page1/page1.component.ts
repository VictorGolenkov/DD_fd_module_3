import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { NgIf, NgFor } from "@angular/common";

@Component({
  selector: 'page1',
  imports: [
    ReactiveFormsModule,
    NgIf,
    NgFor
  ],
  templateUrl: './page1.component.html',
  styleUrl: './page1.component.css'
})
export class Page1Component {

  users: any[] = [];

  myForm: FormGroup = new FormGroup({
    "userName": new FormControl('', Validators.required),
    "userSurname": new FormControl('', Validators.required)
  });;

  constructor() {
    this.onreInitForm();
  }

  onSubmit() {
    this.users.push(this.myForm.getRawValue());
  }

  onreInitForm() {
    this.myForm = new FormGroup({
      "userName": new FormControl('', Validators.required),
      "userSurname": new FormControl('', Validators.required)
    });
  }
}
