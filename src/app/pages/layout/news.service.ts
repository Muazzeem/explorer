import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {delay, map} from 'rxjs/operators';
import {ApiService} from '../../@core/mock/api.service';

const TOTAL_PAGES = 7;

export class NewsPost {
    title: string;
    link: string;
    creator: string;
    text: string;
}

@Injectable()
export class NewsService {

    constructor(private http: HttpClient, private apiService: ApiService) {
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