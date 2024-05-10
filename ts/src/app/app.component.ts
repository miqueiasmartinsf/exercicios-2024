import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
    onClick(event:any):void{
        const element = event.target;
        element.classList.add = "selected";
    }
}
