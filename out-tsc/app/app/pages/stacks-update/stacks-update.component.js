import { __decorate, __metadata } from "tslib";
import { Component, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiService } from '../../@core/mock/api.service';
let StacksUpdateComponent = class StacksUpdateComponent {
    constructor(apiService) {
        this.apiService = apiService;
        this.stackList = '/api/valid-tags';
        this.stacks = new Set();
    }
    onTagRemove(tagToRemove) {
        this.stacks.delete(tagToRemove.text);
    }
    onTagAdd({ value, input }) {
        if (value) {
            this.stacks.add(value);
        }
        input.nativeElement.value = '';
        console.warn(this.stacks);
    }
    ngOnInit() {
        this.apiService.get(this.stackList).subscribe((data) => {
            this.options = data.stacks;
            this.filteredOptions$ = of(this.options);
        });
    }
    filter(value) {
        const filterValue = value.toLowerCase();
        return this.options.filter(optionValue => optionValue.toLowerCase().includes(filterValue));
    }
    getFilteredOptions(value) {
        return of(value).pipe(map(filterString => this.filter(filterString)));
    }
    onChange() {
        this.filteredOptions$ = this.getFilteredOptions(this.input.nativeElement.value);
    }
    onSelectionChange($event) {
        this.filteredOptions$ = this.getFilteredOptions($event);
    }
};
__decorate([
    ViewChild('autoInput'),
    __metadata("design:type", Object)
], StacksUpdateComponent.prototype, "input", void 0);
StacksUpdateComponent = __decorate([
    Component({
        selector: 'ngx-stacks-update',
        templateUrl: './stacks-update.component.html',
        styleUrls: ['./stacks-update.component.scss'],
        changeDetection: ChangeDetectionStrategy.OnPush,
    }),
    __metadata("design:paramtypes", [ApiService])
], StacksUpdateComponent);
export { StacksUpdateComponent };
//# sourceMappingURL=stacks-update.component.js.map