import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { NbActionsModule, NbButtonModule, NbCardModule, NbTabsetModule, NbUserModule, NbRadioModule, NbSelectModule, NbListModule, NbIconModule, } from '@nebular/theme';
import { NgxEchartsModule } from 'ngx-echarts';
import { ThemeModule } from '../../@theme/theme.module';
import { DashboardComponent } from './dashboard.component';
import { FormsModule } from '@angular/forms';
import { ModalOverlaysModule } from '../modal-overlays/modal-overlays.module';
import { ChartsComponent } from './charts/charts.component';
import { ChartsModule } from 'ng2-charts';
let DashboardModule = class DashboardModule {
};
DashboardModule = __decorate([
    NgModule({
        imports: [
            FormsModule,
            ThemeModule,
            NbCardModule,
            NbUserModule,
            NbButtonModule,
            NbTabsetModule,
            NbActionsModule,
            NbRadioModule,
            NbSelectModule,
            NbListModule,
            NbIconModule,
            NbButtonModule,
            NgxEchartsModule,
            ModalOverlaysModule,
            ChartsModule,
        ],
        declarations: [
            DashboardComponent,
            ChartsComponent,
        ],
    })
], DashboardModule);
export { DashboardModule };
//# sourceMappingURL=dashboard.module.js.map