import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
let AddCompanyComponent = class AddCompanyComponent {
    constructor(fb) {
        this.fb = fb;
    }
    ngOnInit() {
        this.firstForm = this.fb.group({
            firstCtrl: ['', Validators.required],
        });
        this.secondForm = this.fb.group({
            secondCtrl: ['', Validators.required],
        });
        this.thirdForm = this.fb.group({
            thirdCtrl: ['', Validators.required],
        });
    }
    onFirstSubmit() {
        this.firstForm.markAsDirty();
    }
    onSecondSubmit() {
        this.secondForm.markAsDirty();
    }
    onThirdSubmit() {
        this.thirdForm.markAsDirty();
    }
};
AddCompanyComponent = __decorate([
    Component({
        selector: 'ngx-add-company',
        templateUrl: './add-company.component.html',
        styleUrls: ['./add-company.component.scss'],
    }),
    __metadata("design:paramtypes", [FormBuilder])
], AddCompanyComponent);
export { AddCompanyComponent };
//# sourceMappingURL=add-company.component.js.map