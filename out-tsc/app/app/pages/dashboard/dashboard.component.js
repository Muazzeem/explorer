import { __decorate, __metadata } from "tslib";
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ToastrService } from '../service/toastr.service';
import { ApiService } from '../../@core/mock/api.service';
let DashboardComponent = class DashboardComponent {
    constructor(toastrService, apiService) {
        this.toastrService = toastrService;
        this.apiService = apiService;
        this.totalCompanyURL = `/api/companies-count`;
        this.doughnutChartLabels = ['web', 'mobile', 'other'];
        this.doughnutChartData = [
            [55, 25, 20],
        ];
        this.doughnutChartType = 'doughnut';
        this.data = [
            { name: 'Binate Solutions Ltd.', web: 'https://www.binate-solutions.com' },
            { name: 'CodersTrust Bangladesh Ltd.', web: 'https://coderstrustbd.com/' },
            { name: 'Giga Tech Ltd.', web: 'https://gigatechltd.com/' },
            { name: 'Millennium Information Solution Ltd.', web: 'https://www.mislbd.com/' },
            { name: 'Solar Electro Bangladesh Ltd.', web: 'http://www.solarelectrobd.com/' },
            { name: 'LEADS Corporation Limited.', web: 'https://leads.com.bd/' },
            { name: 'Echologyx Ltd.', web: 'https://echologyx.com/' },
            { name: 'Walton Hi-Tech Industries Ltd.', web: 'https://waltonbd.com/' },
            { name: '3DEVs IT Ltd.', web: 'https://3-devs.com/' },
            { name: 'aamra networks limited.', web: 'https://www.aamra.com.bd/' },
        ];
        this.stacks = [
            { name: 'python' },
            { name: 'javascript' },
            { name: 'c#' },
            { name: 'php' },
            { name: 'ruby' },
            { name: 'go' },
        ];
    }
    ngOnInit() {
        this.count_total_company();
    }
    count_total_company() {
        this.apiService.get(this.totalCompanyURL).subscribe((data) => {
            this.total = data;
            console.warn(data);
        });
    }
};
DashboardComponent = __decorate([
    Component({
        selector: 'ngx-dashboard',
        styleUrls: ['./dashboard.component.scss'],
        templateUrl: './dashboard.component.html',
        changeDetection: ChangeDetectionStrategy.OnPush,
    }),
    __metadata("design:paramtypes", [ToastrService,
        ApiService])
], DashboardComponent);
export { DashboardComponent };
//# sourceMappingURL=dashboard.component.js.map