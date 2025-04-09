import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
  
@Injectable()
export class DataService{
  
    constructor(private http: HttpClient){ }
      
    getData(){
        return this.http.get("https://victorgolenkov.github.io/DD_fd_module_3/lab3/dist/assets/data.json")
    }
}