import {NgModule} from '@angular/core';
import {
    NbAutocompleteModule,
    NbBadgeModule, NbButtonModule,
    NbCardModule, NbInputModule,
    NbListModule,
    NbMenuModule, NbSpinnerModule, NbStepperModule,
    NbTabsetModule,
    NbTagModule,
} from '@nebular/theme';

import {ThemeModule} from '../@theme/theme.module';
import {PagesComponent} from './pages.component';
import {PagesRoutingModule} from './pages-routing.module';
import {MiscellaneousModule} from './miscellaneous/miscellaneous.module';
import {ProfileComponent} from './profile/profile.component';
import {StacksUpdateComponent} from './stacks-update/stacks-update.component';
import {SettingsComponent} from './settings/settings.component';
import {UpdateProfileComponent} from './update-profile/update-profile.component';
import {ReactiveFormsModule} from '@angular/forms';
import {ChartsModule} from 'ng2-charts';
import {SignUpComponent} from './sign-up/sign-up.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ChartsComponent} from './dashboard/charts/charts.component';


@NgModule({
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
    ],
    declarations: [
        PagesComponent,
        ProfileComponent,
        StacksUpdateComponent,
        SettingsComponent,
        UpdateProfileComponent,
        SignUpComponent,
        DashboardComponent,
        ChartsComponent,
    ],
    exports: [
        SignUpComponent,
        UpdateProfileComponent,
        ChartsComponent,
    ],
})
export class PagesModule {
}
