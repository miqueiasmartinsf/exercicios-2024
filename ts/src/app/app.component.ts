import { Component } from '@angular/core';
import {
    Renderer2,
    ElementRef,
    ViewChild,
    AfterViewInit,
    OnInit,
} from '@angular/core';

enum TopicState {
    label,
    create,
    created,
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
    public seeMore: boolean = false;
    public topicStage = TopicState;
    public stage = this.topicStage.label;
    public seeComments: boolean = false;
    public toggleMobileMenu: boolean = false;

    constructor(private renderer: Renderer2, private elementRef: ElementRef) {}

    ngOnInit(): void {}

    @ViewChild('topicContentParagraph') contentParagraph!: ElementRef;

    onClick(event: any): void {
        const element = event.target;
        element.classList.add = 'selected';
    }

    viewMore(): void {
        console.log(this.seeMore);
        this.seeMore = !this.seeMore;
    }

    showLess(): void {
        console.log(this.seeMore);
        this.seeMore = !this.seeMore;
    }

    createNewTopic(): void {
        this.stage = this.topicStage.create;
    }

    handleTopicSubmit(): void {
        this.stage = this.topicStage.created;
    }

    commentsToggle(): void {
        this.seeComments = !this.seeComments;
    }

    mobileMenuClose(): void {
        console.log(this.toggleMobileMenu);
        this.toggleMobileMenu = false;
    }

    mobileMenuOpen():void{
        console.log(this.toggleMobileMenu);
        this.toggleMobileMenu = true;
    }
}
