import {NgModule} from '@angular/core';
import {
    NbAutocompleteModule,
    NbBadgeModule,
    NbCardModule, NbInputModule,
    NbListModule,
    NbMenuModule,
    NbTabsetModule,
    NbTagModule
} from '@nebular/theme';

import {ThemeModule} from '../@theme/theme.module';
import {PagesComponent} from './pages.component';
import {DashboardModule} from './dashboard/dashboard.module';
import {PagesRoutingModule} from './pages-routing.module';
import {MiscellaneousModule} from './miscellaneous/miscellaneous.module';
import {ProfileComponent} from './profile/profile.component';
import {SignUpComponent} from './sign-up/sign-up.component';
import { StacksUpdateComponent } from './stacks-update/stacks-update.component';

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
    ],
    declarations: [
        PagesComponent,
        ProfileComponent,
        SignUpComponent,
        StacksUpdateComponent,
    ],
})
export class PagesModule {
}
