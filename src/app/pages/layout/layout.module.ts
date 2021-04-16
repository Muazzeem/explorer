import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
    NbAccordionModule, NbActionsModule, NbAlertModule, NbAutocompleteModule, NbBadgeModule,
    NbButtonModule,
    NbCardModule, NbInputModule,
    NbListModule, NbPopoverModule, NbProgressBarModule, NbRadioModule,
    NbRouteTabsetModule, NbSelectModule, NbSpinnerModule,
    NbStepperModule,
    NbTabsetModule, NbTagModule, NbUserModule,
} from '@nebular/theme';

import {ThemeModule} from '../../@theme/theme.module';
import {LayoutRoutingModule} from './layout-routing.module';
import {LayoutComponent} from './layout.component';
import {InfiniteListComponent} from './infinite-list/infinite-list.component';
import {CompaniesService, RecommendCompanyService} from '../../@core/mock/companies.service';
import {RecommendCompaniesComponent} from './recommend-companies/recommend-companies.component';
import {NewsPostComponent} from './infinite-list/news-post/news-post.component';
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
    ],
    declarations: [
        LayoutComponent,
        InfiniteListComponent,
        NewsPostComponent,
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
