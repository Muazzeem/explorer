import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UserService } from '../../@core/mock/users.service';
import { Router } from '@angular/router';
import { ToastrService } from '../service/toastr.service';
let UpdateProfileComponent = class UpdateProfileComponent {
    constructor(fb, userService, router, toastrService) {
        this.fb = fb;
        this.userService = userService;
        this.router = router;
        this.toastrService = toastrService;
        this.user = {};
        this.isSubmitting = false;
        this.errors = {};
        this.settingsForm = this.fb.group({
            name: '',
            email: '',
            phone: '',
            address: '',
        });
    }
    ngOnInit() {
        Object.assign(this.user, this.userService.getCurrentUser());
        console.warn(this.user['profile']);
        this.settingsForm.patchValue(this.user['profile']);
    }
    submitForm() {
        this.isSubmitting = true;
        // update the model
        this.updateUser(this.settingsForm.value);
        this.userService
            .update(this.user['profile'])
            .subscribe(() => this.router.navigateByUrl('pages/profile/'), err => {
            this.errors = err;
            this.isSubmitting = false;
        });
        this.toastrService.showToast('We are update your profile', '');
    }
    updateUser(values) {
        Object.assign(this.user, values);
    }
};
UpdateProfileComponent = __decorate([
    Component({
        selector: 'ngx-update-profile',
        templateUrl: './update-profile.component.html',
        styleUrls: ['./update-profile.component.scss'],
    }),
    __metadata("design:paramtypes", [FormBuilder,
        UserService,
        Router,
        ToastrService])
], UpdateProfileComponent);
export { UpdateProfileComponent };
//# sourceMappingURL=update-profile.component.js.map