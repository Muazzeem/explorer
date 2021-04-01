import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsComponent } from './forms.component';
import { FormLayoutsComponent } from './form-layouts/form-layouts.component';
const routes = [
    {
        path: '',
        component: FormsComponent,
        children: [
            {
                path: 'layouts',
                component: FormLayoutsComponent,
            },
            {
                path: 'layouts',
                component: FormLayoutsComponent,
            },
        ],
    },
];
let FormsRoutingModule = class FormsRoutingModule {
};
FormsRoutingModule = __decorate([
    NgModule({
        imports: [
            RouterModule.forChild(routes),
        ],
        exports: [
            RouterModule,
        ],
    })
], FormsRoutingModule);
export { FormsRoutingModule };
//# sourceMappingURL=forms-routing.module.js.map