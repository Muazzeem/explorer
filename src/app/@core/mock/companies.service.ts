import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {delay, map} from 'rxjs/operators';
import {StacksService} from './stacks.service';
import {ApiService} from './api.service';

const TOTAL_PAGES = 7;

export class NewsPost {
}

@Injectable()
export class CompaniesService {
    companyListURL = '/api/companies';

    constructor(private http: HttpClient, private stackService: StacksService, private apiService: ApiService) {
    }

    load(page: number, pageSize: number): Observable<NewsPost[]> {
        const startIndex = ((page - 1) % TOTAL_PAGES) * pageSize;
        const httpParams = new HttpParams({
            fromObject: {
                _start: '1',
                _limit: '2000',
            },
        });
        return this.apiService
            .get(this.companyListURL, httpParams)
            .pipe(
                map(news => news.splice(startIndex, pageSize)),
                delay(1500),
            );
    }
}


@Injectable()
export class RecommendCompanyService {
    baseUrl = `/api/user/companies`;

    constructor(private apiService: ApiService) {
    }

    load(page: number, pageSize: number): Observable<NewsPost[]> {
        const startIndex = ((page - 1) % TOTAL_PAGES) * pageSize;

        return this.apiService
            .get(this.baseUrl)
            .pipe(
                map(news => news.splice(startIndex, pageSize)),
                delay(1500),
            );
    }
}
