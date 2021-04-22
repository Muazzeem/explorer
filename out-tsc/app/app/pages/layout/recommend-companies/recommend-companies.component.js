import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { NewsService } from '../news.service';
let RecommendCompaniesComponent = class RecommendCompaniesComponent {
    constructor(newsService) {
        this.newsService = newsService;
        this.firstCard = {
            news: [],
            placeholders: [],
            loading: false,
            pageToLoadNext: 1,
        };
        this.pageSize = 10;
    }
    loadNext(cardData) {
        if (cardData.loading) {
            return;
        }
        cardData.loading = true;
        cardData.placeholders = new Array(this.pageSize);
        this.newsService.load(cardData.pageToLoadNext, this.pageSize)
            .subscribe(nextNews => {
            cardData.placeholders = [];
            cardData.news.push(...nextNews);
            cardData.loading = false;
            cardData.pageToLoadNext++;
        });
    }
};
RecommendCompaniesComponent = __decorate([
    Component({
        selector: 'ngx-companies-list',
        templateUrl: 'recommend-companies.component.html',
        styleUrls: ['recommend-companies.component.scss'],
    }),
    __metadata("design:paramtypes", [NewsService])
], RecommendCompaniesComponent);
export { RecommendCompaniesComponent };
//# sourceMappingURL=recommend-companies.component.js.map