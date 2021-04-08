import { __decorate, __metadata } from "tslib";
import { Component, ViewChild } from '@angular/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiService } from '../../../@core/mock/api.service';
import { NewsService } from '../news.service';
let InfiniteListComponent = class InfiniteListComponent {
    constructor(apiService, newsService) {
        this.apiService = apiService;
        this.newsService = newsService;
        this.firstCard = {
            news: [],
            placeholders: [],
            pageToLoadNext: 1,
        };
        this.pageSize = 10;
        this.loading = true;
        this.stackList = '/api/valid-tags';
        this.url = '/api/companies?_start=1&_limit=5000';
        this.stacks = new Set();
    }
    loadNext(cardData) {
        if (cardData.loading) {
            return;
        }
        cardData.loading = true;
        this.loading = true;
        cardData.placeholders = new Array(this.pageSize);
        this.newsService.load(cardData.pageToLoadNext, this.pageSize)
            .subscribe(nextNews => {
            this.loading = false;
            cardData.placeholders = [];
            cardData.news.push(...nextNews);
            cardData.loading = false;
            cardData.pageToLoadNext++;
        });
    }
    onTagRemove(tagToRemove) {
        this.stacks.delete(tagToRemove.text);
    }
    onTagAdd({ value, input }) {
        if (value) {
            this.stacks.add(value);
        }
        input.nativeElement.value = '';
        console.warn(this.stacks);
    }
    ngOnInit() {
        this.loading = false;
        this.apiService.get(this.stackList).subscribe((data) => {
            this.options = data.stacks;
            this.filteredOptions$ = of(this.options);
        });
    }
    filter(value) {
        const filterValue = value.toLowerCase();
        return this.options.filter(optionValue => optionValue.toLowerCase().includes(filterValue));
    }
    getFilteredOptions(value) {
        return of(value).pipe(map(filterString => this.filter(filterString)));
    }
    onChange() {
        this.filteredOptions$ = this.getFilteredOptions(this.input.nativeElement.value);
    }
    onSelectionChange($event) {
        this.filteredOptions$ = this.getFilteredOptions($event);
    }
};
__decorate([
    ViewChild('autoInput'),
    __metadata("design:type", Object)
], InfiniteListComponent.prototype, "input", void 0);
InfiniteListComponent = __decorate([
    Component({
        selector: 'ngx-infinite-list',
        templateUrl: 'infinite-list.component.html',
        styleUrls: ['infinite-list.component.scss'],
    }),
    __metadata("design:paramtypes", [ApiService, NewsService])
], InfiniteListComponent);
export { InfiniteListComponent };
//# sourceMappingURL=infinite-list.component.js.map