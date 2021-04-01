import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbAccordionModule, NbButtonModule, NbCardModule, NbListModule, NbRouteTabsetModule, NbStepperModule, NbTabsetModule, NbTagModule, NbUserModule, } from '@nebular/theme';
import { ThemeModule } from '../../@theme/theme.module';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { InfiniteListComponent } from './infinite-list/infinite-list.component';
import { NewsPostComponent } from './infinite-list/news-post/news-post.component';
import { NewsService } from './news.service';
import { RecommendCompaniesComponent } from './recommend-companies/recommend-companies.component';
let LayoutModule = class LayoutModule {
};
LayoutModule = __decorate([
    NgModule({
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
        ],
        declarations: [
            LayoutComponent,
            InfiniteListComponent,
            NewsPostComponent,
            RecommendCompaniesComponent,
        ],
        providers: [
            NewsService,
        ],
    })
], LayoutModule);
export { LayoutModule };
//# sourceMappingURL=layout.module.js.map