import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NbButtonModule, NbCardModule, NbCheckboxModule, NbDialogModule, NbInputModule, NbPopoverModule, NbSelectModule, NbTabsetModule, NbTooltipModule, NbWindowModule, } from '@nebular/theme';
// modules
import { ThemeModule } from '../../@theme/theme.module';
// components
import { ShowcaseDialogComponent } from './dialog/showcase-dialog/showcase-dialog.component';
import { LogoutdialogDialogComponent } from './dialog/log-out-dialog/log-out-dialog.component';
import { PagesModule } from '../pages.module';
const COMPONENTS = [
    ShowcaseDialogComponent,
    LogoutdialogDialogComponent,
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
let ModalOverlaysModule = class ModalOverlaysModule {
};
ModalOverlaysModule = __decorate([
    NgModule({
        imports: [
            ...MODULES,
            PagesModule,
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
], ModalOverlaysModule);
export { ModalOverlaysModule };
//# sourceMappingURL=modal-overlays.module.js.map