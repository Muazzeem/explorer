import { NgModule } from '@angular/core';
import {
    NbActionsModule, NbAlertModule,
    NbButtonModule,
    NbCardModule,
    NbCheckboxModule,
    NbDatepickerModule, NbFormFieldModule, NbIconModule,
    NbInputModule,
    NbRadioModule,
    NbSelectModule,
    NbUserModule,
} from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { FormsRoutingModule } from './forms-routing.module';
import { FormsComponent } from './forms.component';
import { FormLayoutsComponent } from './form-layouts/form-layouts.component';
import {FormsModule as ngFormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
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
export class FormsModule { }
