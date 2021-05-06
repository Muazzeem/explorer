import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ChartType} from 'chart.js';
import {Label, MultiDataSet} from 'ng2-charts';
import {ApiService} from '../../@core/mock/api.service';
import {DialogService} from '../service/dialog.service';

@Component({
    selector: 'ngx-dashboard',
    styleUrls: ['./dashboard.component.scss'],
    templateUrl: './dashboard.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent implements OnInit {
    totalCompanyURL = `/api/companies-count`;
    total: any;
    user: any;
    doughnutChartLabels: Label[] = ['web', 'mobile', 'other'];
    doughnutChartData: MultiDataSet = [
        [55, 25, 20],
    ];
    doughnutChartType: ChartType = 'doughnut';

    constructor(private apiService: ApiService, private dialog: DialogService) {
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
        this.apiService.get(this.totalCompanyURL).subscribe((data: any) => {
            this.total = data;
            console.warn(this.total);
        });
        this.advertisement();
    }

    advertisement() {
        const alerted = localStorage.getItem('advertisement') || '';
        if (alerted !== 'yes') {
            setTimeout(() => {
                this.dialog.add();
            }, 1000);
            localStorage.setItem('advertisement', 'yes');
        }
    }
}
