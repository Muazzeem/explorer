import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { ShowcaseDialogComponent } from '../modal-overlays/dialog/showcase-dialog/showcase-dialog.component';
import { LogoutdialogDialogComponent } from '../modal-overlays/dialog/log-out-dialog/log-out-dialog.component';
let DialogService = class DialogService {
    constructor(dialogService) {
        this.dialogService = dialogService;
    }
    open() {
        this.dialogService.open(ShowcaseDialogComponent);
    }
    logOut() {
        this.dialogService.open(LogoutdialogDialogComponent);
    }
};
DialogService = __decorate([
    Injectable({
        providedIn: 'root',
    }),
    __metadata("design:paramtypes", [NbDialogService])
], DialogService);
export { DialogService };
//# sourceMappingURL=dialog.service.js.map