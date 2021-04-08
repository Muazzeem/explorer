import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { NbActionsModule, NbAlertModule, NbButtonModule, NbCardModule, NbCheckboxModule, NbDatepickerModule, NbFormFieldModule, NbIconModule, NbInputModule, NbRadioModule, NbSelectModule, NbUserModule, } from '@nebular/theme';
import { ThemeModule } from '../../@theme/theme.module';
import { FormsRoutingModule } from './forms-routing.module';
import { FormsComponent } from './forms.component';
import { FormLayoutsComponent } from './form-layouts/form-layouts.component';
import { FormsModule as ngFormsModule, ReactiveFormsModule } from '@angular/forms';
let FormsModule = class FormsModule {
};
FormsModule = __decorate([
    NgModule({
        imports: [
            ThemeModule,
            NbInputModule,
            NbCardModule,
            NbButtonModule,
            NbActionsModule,
            NbUserModule,
            NbCheckboxModule,
            NbRadioModule,
            NbDatepickerModule,
            FormsRoutingModule,
            NbSelectModule,
            NbIconModule,
            ngFormsModule,
            NbFormFieldModule,
            ReactiveFormsModule,
            NbAlertModule,
        ],
        declarations: [
            FormsComponent,
            FormLayoutsComponent,
        ],
    })
], FormsModule);
export { FormsModule };
//# sourceMappingURL=forms.module.js.map