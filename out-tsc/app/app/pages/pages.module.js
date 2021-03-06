import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { NbAutocompleteModule, NbBadgeModule, NbButtonModule, NbCardModule, NbIconModule, NbInputModule, NbListModule, NbMenuModule, NbPopoverModule, NbSpinnerModule, NbStepperModule, NbTabsetModule, NbTagModule, } from '@nebular/theme';
import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { ProfileComponent } from './profile/profile.component';
import { StacksUpdateComponent } from './stacks-update/stacks-update.component';
import { SettingsComponent } from './settings/settings.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { SignUpComponent } from './sign-up/sign-up.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddCompanyComponent } from './add-company/add-company.component';
let PagesModule = class PagesModule {
};
PagesModule = __decorate([
    NgModule({
        imports: [
            PagesRoutingModule,
            ThemeModule,
            NbMenuModule,
            MiscellaneousModule,
            NbCardModule,
            NbTabsetModule,
            NbListModule,
            NbTagModule,
            NbBadgeModule,
            NbAutocompleteModule,
            NbInputModule,
            NbStepperModule,
            ReactiveFormsModule,
            NbButtonModule,
            ChartsModule,
            NbSpinnerModule,
            NbPopoverModule,
            NbIconModule,
        ],
        declarations: [
            PagesComponent,
            ProfileComponent,
            StacksUpdateComponent,
            SettingsComponent,
            UpdateProfileComponent,
            SignUpComponent,
            DashboardComponent,
            AddCompanyComponent,
        ],
        exports: [
            SignUpComponent,
            UpdateProfileComponent,
        ],
    })
], PagesModule);
export { PagesModule };
//# sourceMappingURL=pages.module.js.map