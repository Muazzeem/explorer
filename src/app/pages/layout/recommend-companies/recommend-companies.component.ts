import {Component, OnInit} from '@angular/core';
import {RecommendCompanyService} from '../../../@core/mock/companies.service';
import {NbToastrService} from '@nebular/theme';
@Component({
    selector: 'ngx-infinite-list',
    templateUrl: 'recommend-companies.component.html',
    styleUrls: ['recommend-companies.component.scss'],
})
export class RecommendCompaniesComponent implements OnInit {
    firstCard = {
        news: [],
        placeholders: [],
        loading: false,
        pageToLoadNext: 1,
    };
    pageSize = 10;
    loading = true;
    error: any;
    private index: number = 0;
    constructor(private newsService: RecommendCompanyService,
                private toastrService: NbToastrService,
    ) {
    }
    loadNext(cardData) {
        if (cardData.loading) {
            return;
        }
        cardData.loading = true;
        cardData.placeholders = new Array(this.pageSize);
        this.loading = true;
        this.newsService.load(cardData.pageToLoadNext, this.pageSize)
            .subscribe(nextNews => {
                    cardData.placeholders = [];
                    this.loading = false;
                    cardData.news.push(...nextNews);
                    cardData.loading = false;
                    cardData.pageToLoadNext++;
                },
                err => {
                    this.error = err.error.message;
                    this.showToast('top-right', 'danger');
                },
            );
    }
    ngOnInit(): void {
        this.loading = false;
    }
    showToast(position, status) {
        this.index += 1;
        this.toastrService.show(
            '' || '',
            `${this.error}`,
            {position, status});
    }
}
