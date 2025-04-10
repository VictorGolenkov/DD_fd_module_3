import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgFor } from "@angular/common";

export class User {
  constructor(public name: string, public age: number, public surname: string) {

  }
}
@Component({
  selector: 'page2',
  imports: [
    FormsModule,
    NgFor
  ],
  templateUrl: './page2.component.html',
  styleUrl: './page2.component.css'
})
export class Page2Component {

  users: User[] = [];

  name = '';
  surname = '';
  age = 0;
  isValid: boolean = false;

  validateFields() {

    const nameValid = /^[A-ZА-Я][a-zа-яё]+$/.test(this.name);

    const surnameValid = /^[A-ZА-Я][a-zа-яё]+$/.test(this.surname);

    const ageValid = this.age !== null && this.age >= 0 && this.age <= 120; 

    this.isValid = nameValid && surnameValid && ageValid;

}

  addUser() {
    this.users.push(new User(this.name, this.age, this.surname));
    this.name = '';
    this.surname = '';
    this.age = 0;
  }

  onNameChange(): void {
    console.log('Что-то изменилось в поле ' + this.name);
  }
}
