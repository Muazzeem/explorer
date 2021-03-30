import {NgModule} from '@angular/core';
import {
    NbAutocompleteModule,
    NbBadgeModule, NbButtonModule,
    NbCardModule, NbInputModule,
    NbListModule,
    NbMenuModule, NbStepperModule,
    NbTabsetModule,
    NbTagModule,
} from '@nebular/theme';

import {ThemeModule} from '../@theme/theme.module';
import {PagesComponent} from './pages.component';
import {DashboardModule} from './dashboard/dashboard.module';
import {PagesRoutingModule} from './pages-routing.module';
import {MiscellaneousModule} from './miscellaneous/miscellaneous.module';
import {ProfileComponent} from './profile/profile.component';
import {SignUpComponent} from './sign-up/sign-up.component';
import {StacksUpdateComponent} from './stacks-update/stacks-update.component';
import {SettingsComponent} from './settings/settings.component';
import {UpdateProfileComponent} from './update-profile/update-profile.component';
import {ReactiveFormsModule} from '@angular/forms';
import {ChartsModule} from 'ng2-charts';

@NgModule({
    imports: [
        PagesRoutingModule,
        ThemeModule,
        NbMenuModule,
        DashboardModule,
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
    ],
    declarations: [
        PagesComponent,
        ProfileComponent,
        SignUpComponent,
        StacksUpdateComponent,
        SettingsComponent,
        UpdateProfileComponent,
    ],
    exports: [
    ],
})
export class PagesModule {
}
