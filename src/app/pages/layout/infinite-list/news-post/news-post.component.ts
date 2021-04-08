import {TemplateRef, ViewChild, Component, OnInit, Input} from '@angular/core';
import {NbWindowService} from '@nebular/theme';
import {NewsPost} from '../../news.service';
import {FormControl, Validators} from '@angular/forms';

@Component({
    selector: 'ngx-news-post',
    templateUrl: 'news-post.component.html',
    styles: [`
        :host {
            display: block;
            padding-bottom: 1rem;
        }
    `],
})
export class NewsPostComponent implements OnInit {
    showMore = false;
    showbusiness = false;
    businessText: any[];
    ctrl = new FormControl(null, Validators.required);

    constructor(private windowService: NbWindowService) {
    }

    @ViewChild('contentTemplate') contentTemplate: TemplateRef<any>;
    @Input() post: NewsPost;
    starRating: any;
    currentRate: 5;


    openWindow() {
        this.windowService.open(
            this.contentTemplate,
            {title: this.post['name'], context: {text: ''}},
        );
        this.businessText = this.post['business'];
        if (this.businessText.length === 0) {
            this.showbusiness = true;
        } else if (this.businessText.length >= 180) {
            this.showbusiness = false;
        } else {
            this.showMore = true;
        }
    }
    ngOnInit(): void {
    }
}
