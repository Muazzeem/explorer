import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
    NbBadgeModule,
    NbButtonModule,
    NbCardModule,
    NbCheckboxModule,
    NbDialogModule, NbIconModule,
    NbInputModule,
    NbPopoverModule,
    NbSelectModule,
    NbTabsetModule,
    NbTooltipModule,
    NbWindowModule,
} from '@nebular/theme';

// modules
import {ThemeModule} from '../../@theme/theme.module';

// components
import {ShowcaseDialogComponent} from './dialog/showcase-dialog/showcase-dialog.component';
import {LogoutdialogDialogComponent} from './dialog/log-out-dialog/log-out-dialog.component';
import {PagesModule} from '../pages.module';
import {AdvertisementComponent} from './dialog/advertisement/advertisement.component';


const COMPONENTS = [
    ShowcaseDialogComponent,
    LogoutdialogDialogComponent,
    AdvertisementComponent,
];

const ENTRY_COMPONENTS = [
    ShowcaseDialogComponent,
];

const MODULES = [
    FormsModule,
    ThemeModule,
    NbDialogModule.forChild(),
    NbWindowModule.forChild(),
    NbCardModule,
    NbCheckboxModule,
    NbTabsetModule,
    NbPopoverModule,
    NbButtonModule,
    NbInputModule,
    NbSelectModule,
    NbTooltipModule,
];

const SERVICES = [];

@NgModule({
    imports: [
        ...MODULES,
        PagesModule,
        NbBadgeModule,
    ],
    declarations: [
        ...COMPONENTS,
    ],
    providers: [
        ...SERVICES,
    ],
    entryComponents: [
        ...ENTRY_COMPONENTS,
    ],
    exports: [],
})
export class ModalOverlaysModule {
}
