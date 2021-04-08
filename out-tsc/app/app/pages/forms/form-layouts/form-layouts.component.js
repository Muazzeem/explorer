import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { NgRecaptcha3Service } from 'ng-recaptcha3';
import { ApiService } from '../../../@core/mock/api.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from '../../service/toastr.service';
let FormLayoutsComponent = class FormLayoutsComponent {
    constructor(apiService, toastrService, recaptcha3) {
        this.apiService = apiService;
        this.toastrService = toastrService;
        this.recaptcha3 = recaptcha3;
        this.feedbacks = new FormGroup({
            email: new FormControl('', [
                Validators.required,
                Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')
            ]),
            feedback: new FormControl('', Validators.required),
        });
        this.contact = `/api/user/contact`;
        this.SITE_KEY = environment.recaptchaKey;
    }
    onSubmit() {
        this.recaptcha3.getToken().then(token => {
            this.recapture = token;
            const formData = {
                email: this.feedbacks.value.email,
                comment: this.feedbacks.value.feedback, token: this.recapture,
            };
            this.apiService.post(this.contact, formData)
                .subscribe(data => {
                this.toastrService.showToast('Thanks! ', 'We received your feedback');
                this.feedbacks.reset();
            });
        });
    }
    ngOnInit() {
        this.recaptcha3.init(this.SITE_KEY).then(status => {
            console.warn(status);
        });
    }
    // tslint:disable-next-line:typedef
    get email() {
        return this.feedbacks.get('email');
    }
    // tslint:disable-next-line:typedef
    get feedback() {
        return this.feedbacks.get('feedback');
    }
};
FormLayoutsComponent = __decorate([
    Component({
        selector: 'ngx-form-layouts',
        styleUrls: ['./form-layouts.component.scss'],
        templateUrl: './form-layouts.component.html',
    }),
    __metadata("design:paramtypes", [ApiService,
        ToastrService,
        NgRecaptcha3Service])
], FormLayoutsComponent);
export { FormLayoutsComponent };
//# sourceMappingURL=form-layouts.component.js.map