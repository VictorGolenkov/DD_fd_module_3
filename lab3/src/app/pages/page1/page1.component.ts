import { Component, OnInit } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { DataService } from 'src/app/core/services/data.service'
import { HttpClientModule } from '@angular/common/http';
import {User} from "src/app/user";

@Component({
  selector: 'page1',
  imports: [FormsModule, HttpClientModule],
  templateUrl: './page1.component.html',
  styleUrl: './page1.component.css',
  providers: [DataService]
})

export class Page1Component implements OnInit{

  user: User;
       
    constructor(private httpService: DataService){}
       
    ngOnInit(){
           
        this.httpService.getData().subscribe({next:(data:any) => this.user=new User(data.name, data.age)});
    }
}
