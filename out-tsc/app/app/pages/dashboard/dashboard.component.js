import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { ToastrService } from '../service/toastr.service';
import { ApiService } from '../../@core/mock/api.service';
import { UserService } from '../../@core/mock/users.service';
let DashboardComponent = class DashboardComponent {
    constructor(toastrService, apiService, userService) {
        this.toastrService = toastrService;
        this.apiService = apiService;
        this.userService = userService;
        this.totalCompanyURL = `/api/companies-count`;
    }
    count_total_company() {
        this.apiService.get(this.totalCompanyURL).subscribe((data) => {
            this.total = (data);
        });
    }
    ngOnInit() {
        this.count_total_company();
    }
};
DashboardComponent = __decorate([
    Component({
        selector: 'ngx-dashboard',
        styleUrls: ['./dashboard.component.scss'],
        templateUrl: './dashboard.component.html',
    }),
    __metadata("design:paramtypes", [ToastrService,
        ApiService,
        UserService])
], DashboardComponent);
export { DashboardComponent };
//# sourceMappingURL=dashboard.component.js.map