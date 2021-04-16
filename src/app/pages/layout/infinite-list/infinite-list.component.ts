import {Component, OnInit, ViewChild} from '@angular/core';
import {Observable, of} from 'rxjs';
import {ApiService} from '../../../@core/mock/api.service';
import {CompaniesService} from '../../../@core/mock/companies.service';
import {NbTagComponent} from '@nebular/theme';
import {StacksService} from '../../../@core/mock/stacks.service';

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
    trees: any;

    constructor(private apiService: ApiService,
                private newsService: CompaniesService,
                private stackService: StacksService,
    ) {
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
        this.apiService.get(this.stackList).subscribe((data: any) => {
            this.options = data.stacks;
            this.filteredOptions$ = of(this.options);
        });
    }

    onTagRemove(tagToRemove: NbTagComponent): void {
        this.trees.delete(tagToRemove.text);
    }

    onTagAdd({value, input}): void {
        this.trees = this.stackService.onTagAdd({value, input});
    }

    onChange() {
        this.stackService.onChange();
    }

    onSelectionChange($event) {
        this.stackService.onSelectionChange($event);
    }
}
