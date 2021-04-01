import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { NbGlobalPhysicalPosition, NbToastrService, } from '@nebular/theme';
let ToastrService = class ToastrService {
    constructor(toastrService) {
        this.toastrService = toastrService;
        this.duration = 2000;
        this.position = NbGlobalPhysicalPosition.TOP_RIGHT;
    }
    showToast(title, body) {
        const config = {
            status: 'primary',
            duration: this.duration,
            position: this.position,
        };
        const titleContent = title ? ` ${title}` : '';
        this.toastrService.success(body, `${titleContent}`, config);
    }
};
ToastrService = __decorate([
    Injectable({
        providedIn: 'root',
    }),
    __metadata("design:paramtypes", [NbToastrService])
], ToastrService);
export { ToastrService };
//# sourceMappingURL=toastr.service.js.map