import { __decorate, __metadata } from "tslib";
import { Component, Input, TemplateRef, ViewChild } from '@angular/core';
import { NbWindowService } from '@nebular/theme';
import { NewsPost } from '../../news.service';
let NewsPostComponent = class NewsPostComponent {
    constructor(windowService) {
        this.windowService = windowService;
        this.showMore = false;
        this.showbusiness = false;
    }
    openWindow() {
        this.windowService.open(this.contentTemplate, { title: this.post['name'], context: { text: '' } });
        this.businessText = this.post['business'];
        if (this.businessText.length === 0) {
            this.showbusiness = true;
        }
        else if (this.businessText.length >= 180) {
            this.showbusiness = false;
        }
        else {
            this.showMore = true;
        }
    }
};
__decorate([
    ViewChild('contentTemplate'),
    __metadata("design:type", TemplateRef)
], NewsPostComponent.prototype, "contentTemplate", void 0);
__decorate([
    Input(),
    __metadata("design:type", NewsPost)
], NewsPostComponent.prototype, "post", void 0);
NewsPostComponent = __decorate([
    Component({
        selector: 'ngx-news-post',
        templateUrl: 'news-post.component.html',
        styles: [`
        :host {
            display: block;
            padding-bottom: 1rem;
        }
    `],
    }),
    __metadata("design:paramtypes", [NbWindowService])
], NewsPostComponent);
export { NewsPostComponent };
//# sourceMappingURL=news-post.component.js.map