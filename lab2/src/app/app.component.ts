import {
    Component, Input, OnChanges, SimpleChanges, OnInit, OnDestroy
} from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
    selector: "my-app",
    imports: [FormsModule],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent implements OnChanges, OnInit, OnDestroy {
    name = "";

    ngOnChanges(changes: SimpleChanges) {
        console.log('ngOnChanges: Обнаружены изменения', changes);
    }

    ngOnInit() {
        console.log('ngOnInit: Компонент был инициализирован');
    }

    ngOnDestroy() {
        console.log('ngOnDestroy: Компонент уничтожен');
    }

    onButtonClick(): void {
        alert("Добро пожаловать, " + this.name + "!");
    }
}