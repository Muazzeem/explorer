import {Component, OnInit} from '@angular/core';
import {ChartType} from 'chart.js';
import {Label, MultiDataSet} from 'ng2-charts';

@Component({
    selector: 'ngx-charts',
    templateUrl: './charts.component.html',
    styleUrls: ['./charts.component.scss'],
})
export class ChartsComponent implements OnInit {
    doughnutChartLabels: Label[] = ['web', 'mobile', 'other'];
    doughnutChartData: MultiDataSet = [
        [55, 25, 20],
    ];
    doughnutChartType: ChartType = 'doughnut';

    constructor() {
    }

    ngOnInit(): void {
    }

}
