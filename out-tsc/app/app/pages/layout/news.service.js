import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, map } from 'rxjs/operators';
import { ApiService } from '../../@core/mock/api.service';
const TOTAL_PAGES = 7;
export class NewsPost {
}
let NewsService = class NewsService {
    constructor(http, apiService) {
        this.http = http;
        this.apiService = apiService;
    }
    load(page, pageSize) {
        const startIndex = ((page - 1) % TOTAL_PAGES) * pageSize;
        return this.http
            .get('https://it-jobs.fractalslab.com/api/companies?_start=1&_limit=5000')
            .pipe(map(news => news.splice(startIndex, pageSize)), delay(1500));
    }
};
NewsService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [HttpClient, ApiService])
], NewsService);
export { NewsService };
//# sourceMappingURL=news.service.js.map