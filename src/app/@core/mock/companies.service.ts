import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {delay, map} from 'rxjs/operators';
import {StacksService} from './stacks.service';

const TOTAL_PAGES = 7;

export class NewsPost {}

@Injectable()
export class CompaniesService {

    constructor(private http: HttpClient, private stackService: StacksService) {
    }

    load(page: number, pageSize: number): Observable<NewsPost[]> {
        const startIndex = ((page - 1) % TOTAL_PAGES) * pageSize;
        return this.http
            .get<NewsPost[]>('https://it-jobs.fractalslab.com/api/companies?_start=1&_limit=5000')
            .pipe(
                map(news => news.splice(startIndex, pageSize)),
                delay(1500),
            );
    }
}


@Injectable()
export class RecommendCompanyService {
    baseUrl = `https://it-jobs.fractalslab.com/api/user/companies`;

    constructor(private http: HttpClient) {
    }

    load(page: number, pageSize: number): Observable<NewsPost[]> {
        const startIndex = ((page - 1) % TOTAL_PAGES) * pageSize;

        return this.http
            .get<NewsPost[]>(this.baseUrl)
            .pipe(
                map(news => news.splice(startIndex, pageSize)),
                delay(1500),
            );
    }
}
