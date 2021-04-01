import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { Router } from '@angular/router';
import { UserService } from '../../../../@core/mock/users.service';
let LogoutdialogDialogComponent = class LogoutdialogDialogComponent {
    constructor(ref, userService, route) {
        this.ref = ref;
        this.userService = userService;
        this.route = route;
    }
    dismiss() {
        this.ref.close();
    }
    logout() {
        this.userService.purgeAuth();
        this.route.navigateByUrl('/');
        this.ref.close();
    }
};
__decorate([
    Input(),
    __metadata("design:type", String)
], LogoutdialogDialogComponent.prototype, "title", void 0);
LogoutdialogDialogComponent = __decorate([
    Component({
        selector: 'ngx-showcase-dialog',
        templateUrl: 'log-out-dialog.component.html',
        styleUrls: ['log-out-dialog.component.scss'],
    }),
    __metadata("design:paramtypes", [NbDialogRef,
        UserService,
        Router])
], LogoutdialogDialogComponent);
export { LogoutdialogDialogComponent };
//# sourceMappingURL=log-out-dialog.component.js.map