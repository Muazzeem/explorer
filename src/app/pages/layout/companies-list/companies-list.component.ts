import {Component, OnInit, ViewChild} from '@angular/core';
import {Observable, of} from 'rxjs';
import {ApiService} from '../../../@core/mock/api.service';
import {CompaniesService} from '../../../@core/mock/companies.service';
import {NbTagComponent} from '@nebular/theme';
import {StacksService} from '../../../@core/mock/stacks.service';
import {map} from 'rxjs/operators';

@Component({
    selector: 'ngx-infinite-list',
    templateUrl: 'companies-list.component.html',
    styleUrls: ['companies-list.component.scss'],
})
export class CompaniesListComponent implements OnInit {
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
    trees: Set<string> = new Set();

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
