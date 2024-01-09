import {Component, OnInit, Input} from '@angular/core';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

    @Input() portfolioSection: HTMLElement;
    @Input() aboutSection: HTMLElement;
    @Input() contactSection: HTMLElement;
    @Input() toolsSection: HTMLElement;
    @Input() topSection: HTMLElement;

    constructor() {
    }

    scrollToPortfolio() {
        this.portfolioSection.scrollIntoView({behavior: 'smooth'});
    }
    scrollToAbout() {
        this.aboutSection.scrollIntoView({behavior: 'smooth'});
    }
    scrollToContact() {
        this.contactSection.scrollIntoView({behavior: 'smooth'});
    }
    scrollToTools() {
        this.toolsSection.scrollIntoView({behavior: 'smooth'});
    }
    scrollToTop() {
        this.topSection.scrollIntoView({behavior: 'smooth'});
    }

    ngOnInit(): void {
    }
}
