import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
let ChartsComponent = class ChartsComponent {
    constructor() {
        this.doughnutChartLabels = ['web', 'mobile', 'other'];
        this.doughnutChartData = [
            [55, 25, 20],
        ];
        this.doughnutChartType = 'doughnut';
    }
    ngOnInit() {
    }
};
ChartsComponent = __decorate([
    Component({
        selector: 'ngx-charts',
        templateUrl: './charts.component.html',
        styleUrls: ['./charts.component.scss'],
    }),
    __metadata("design:paramtypes", [])
], ChartsComponent);
export { ChartsComponent };
//# sourceMappingURL=charts.component.js.map