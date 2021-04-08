import {Component, OnInit, ViewChild} from '@angular/core';
import {NbTagComponent, NbTagInputAddEvent} from '@nebular/theme';
import {Observable, of} from 'rxjs';
import {delay, map} from 'rxjs/operators';
import {ApiService} from '../../../@core/mock/api.service';
import {NewsService} from '../news.service';

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
    url = '/api/companies?_start=1&_limit=5000';
    @ViewChild('autoInput') input;

    constructor(private apiService: ApiService, private newsService: NewsService) {
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

    stacks: Set<string> = new Set();

    onTagRemove(tagToRemove: NbTagComponent): void {
        this.stacks.delete(tagToRemove.text);
    }

    onTagAdd({value, input}: NbTagInputAddEvent): void {
        if (value) {
            this.stacks.add(value);
        }
        input.nativeElement.value = '';
        console.warn(this.stacks);
    }

    ngOnInit(): void {
        this.loading = false;
        this.apiService.get(this.stackList).subscribe((data: any) => {
            this.options = data.stacks;
            this.filteredOptions$ = of(this.options);
        });
    }

    private filter(value: string): string[] {
        const filterValue = value.toLowerCase();
        return this.options.filter(optionValue => optionValue.toLowerCase().includes(filterValue));
    }

    getFilteredOptions(value: string): Observable<string[]> {
        return of(value).pipe(
            map(filterString => this.filter(filterString)),
        );
    }

    onChange() {
        this.filteredOptions$ = this.getFilteredOptions(this.input.nativeElement.value);
    }

    onSelectionChange($event) {
        this.filteredOptions$ = this.getFilteredOptions($event);
    }
}
