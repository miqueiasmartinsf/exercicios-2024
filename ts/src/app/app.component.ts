import { Component } from '@angular/core';
import { Renderer2, ElementRef, ViewChild, AfterViewInit, OnInit } from '@angular/core';

enum TopicState {
    label,
    create,
    created
}

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
