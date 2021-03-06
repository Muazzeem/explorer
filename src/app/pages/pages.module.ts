import {NgModule} from '@angular/core';
import {
    NbAutocompleteModule,
    NbBadgeModule, NbButtonModule,
    NbCardModule, NbIconModule, NbInputModule,
    NbListModule,
    NbMenuModule, NbPopoverModule, NbSpinnerModule, NbStepperModule,
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
import {AddCompanyComponent} from './add-company/add-company.component';
import {CvUploaderComponent} from './cv-uploader/cv-uploader.component';
import {FilePickerModule} from 'ngx-awesome-uploader';
import {RatingModule} from 'ng-starrating';

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
        NbPopoverModule,
        NbIconModule,
        FilePickerModule,
        RatingModule,
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
        CvUploaderComponent,
    ],
    exports: [
        SignUpComponent,
        UpdateProfileComponent,
    ],
})
export class PagesModule {
}
