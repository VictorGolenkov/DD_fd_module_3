import {
    Component, Input, OnChanges, SimpleChanges, OnInit, OnDestroy, ViewChild, AfterViewInit
} from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { Page3Component } from "./pages/page3/page3.component";
import { ItalicDirective } from './core/directive/italic.directive'

@Component({
    selector: "my-app",
    imports: [
        FormsModule,
        RouterModule,
        ItalicDirective
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent implements OnChanges, OnInit, OnDestroy {
      
    ngOnChanges(changes: SimpleChanges) {
        console.log('ngOnChanges: Обнаружены изменения', changes);
    }

    ngOnInit() {
        console.log('ngOnInit: Компонент был инициализирован');
    }

    ngOnDestroy() {
        console.log('ngOnDestroy: Компонент уничтожен');
    }
}
