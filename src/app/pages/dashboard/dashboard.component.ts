import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ChartType} from 'chart.js';
import {Label, MultiDataSet} from 'ng2-charts';
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
    doughnutChartLabels: Label[] = ['web', 'mobile', 'other'];
    doughnutChartData: MultiDataSet = [
        [55, 25, 20],
    ];
    doughnutChartType: ChartType = 'doughnut';

    constructor(private toastrService: ToastrService,
                private apiService: ApiService,
    ) {
    }

    data = [
        {name: 'Binate Solutions Ltd.', web: 'https://www.binate-solutions.com'},
        {name: 'CodersTrust Bangladesh Ltd.', web: 'https://coderstrustbd.com/'},
        {name: 'Giga Tech Ltd.', web: 'https://gigatechltd.com/'},
        {name: 'Millennium Information Solution Ltd.', web: 'https://www.mislbd.com/'},
        {name: 'Solar Electro Bangladesh Ltd.', web: 'http://www.solarelectrobd.com/'},
        {name: 'LEADS Corporation Limited.', web: 'https://leads.com.bd/'},
        {name: 'Echologyx Ltd.', web: 'https://echologyx.com/'},
        {name: 'Walton Hi-Tech Industries Ltd.', web: 'https://waltonbd.com/'},
        {name: '3DEVs IT Ltd.', web: 'https://3-devs.com/'},
        {name: 'aamra networks limited.', web: 'https://www.aamra.com.bd/'},

    ];
    stacks = [
        {name: 'python'},
        {name: 'javascript'},
        {name: 'c#'},
        {name: 'php'},
        {name: 'ruby'},
        {name: 'go'},
    ];

    ngOnInit(): void {
        this.count_total_company();
    }

    count_total_company() {
        this.apiService.get(this.totalCompanyURL).subscribe((data: any) => {
            this.total = data;
            console.warn(data);
        });
    }

}
