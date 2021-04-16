import {Component, OnInit, ViewChild} from '@angular/core';
import {Observable, of} from 'rxjs';
import {ApiService} from '../../../@core/mock/api.service';
import {CompaniesService} from '../../../@core/mock/companies.service';

@Component({
    selector: 'ngx-infinite-list',
    templateUrl: 'infinite-list.component.html',
    styleUrls: ['infinite-list.component.scss'],
})
export class InfiniteListComponent implements OnInit {
    firstCard = {
        news: [],
        placeholders: [],
        pageToLoadNext: 1,
    };
    options: string[];
    pageSize = 10;
    loading = true;
    stackList = '/api/valid-tags';
    filteredOptions$: Observable<string[]>;
    @ViewChild('autoInput') input;

    constructor(private apiService: ApiService, private newsService: CompaniesService) {
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
    ngOnInit(): void {
        this.loading = false;
    }
}
