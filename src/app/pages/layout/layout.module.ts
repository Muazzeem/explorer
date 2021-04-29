import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
    NbAccordionModule, NbActionsModule, NbAlertModule, NbAutocompleteModule, NbBadgeModule, NbButtonGroupModule,
    NbButtonModule,
    NbCardModule, NbIconModule, NbInputModule,
    NbListModule, NbPopoverModule, NbProgressBarModule, NbRadioModule,
    NbRouteTabsetModule, NbSelectModule, NbSpinnerModule,
    NbStepperModule,
    NbTabsetModule, NbTagModule, NbUserModule,
} from '@nebular/theme';

import {ThemeModule} from '../../@theme/theme.module';
import {LayoutRoutingModule} from './layout-routing.module';
import {LayoutComponent} from './layout.component';
import {CompaniesListComponent} from './companies-list/companies-list.component';
import {CompaniesService, RecommendCompanyService} from '../../@core/mock/companies.service';
import {RecommendCompaniesComponent} from './recommend-companies/recommend-companies.component';
import {CompaniesComponent} from './companies-list/companies/companies.component';
import {StacksService} from '../../@core/mock/stacks.service';


@NgModule({
    imports: [
        FormsModule,
        ReactiveFormsModule,
        ThemeModule,
        NbTabsetModule,
        NbRouteTabsetModule,
        NbStepperModule,
        NbCardModule,
        NbButtonModule,
        NbListModule,
        NbAccordionModule,
        NbUserModule,
        LayoutRoutingModule,
        NbTagModule,
        NbSpinnerModule,
        NbRadioModule,
        NbPopoverModule,
        NbAutocompleteModule,
        NbInputModule,
        NbSelectModule,
        NbActionsModule,
        NbProgressBarModule,
        NbBadgeModule,
        NbAlertModule,
        NbIconModule,
        NbButtonGroupModule,
    ],
    declarations: [
        LayoutComponent,
        CompaniesListComponent,
        CompaniesComponent,
        RecommendCompaniesComponent,
    ],
    providers: [
        CompaniesService,
        RecommendCompanyService,
        StacksService,
    ],
})
export class LayoutModule {
}
