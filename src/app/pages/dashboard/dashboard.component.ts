import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ToastrService} from '../service/toastr.service';
import {ApiService} from '../../@core/mock/api.service';

@Component({
    selector: 'ngx-dashboard',
    styleUrls: ['./dashboard.component.scss'],
    templateUrl: './dashboard.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent implements OnInit {
    totalCompanyURL = `/api/companies-count`;
    total: number;
    user: any;

    constructor(private toastrService: ToastrService,
                private apiService: ApiService,
    ) {
    }

    count_total_company() {
        this.apiService.get(this.totalCompanyURL).subscribe((data: any) => {
            this.total = (data);
        });
    }

    ngOnInit(): void {
        this.count_total_company();
    }

}
