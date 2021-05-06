import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
    NbActionsModule,
    NbLayoutModule,
    NbMenuModule,
    NbSearchModule,
    NbSidebarModule,
    NbUserModule,
    NbContextMenuModule,
    NbButtonModule,
    NbSelectModule,
    NbIconModule,
    NbThemeModule, NbPopoverModule,
} from '@nebular/theme';
import {NbEvaIconsModule} from '@nebular/eva-icons';

import {
    FooterComponent,
    HeaderComponent,
    TinyMCEComponent,
} from './components';

import {
    OneColumnLayoutComponent,
    ThreeColumnsLayoutComponent,
    TwoColumnsLayoutComponent,
} from './layouts';
import {RouterModule} from '@angular/router';
import {AppShowAuthedDirective} from '../@core/mock/app-show-authed.directive';


const NB_MODULES = [
    NbLayoutModule,
    NbMenuModule,
    NbUserModule,
    NbActionsModule,
    NbSearchModule,
    NbSidebarModule,
    NbContextMenuModule,
    NbButtonModule,
    NbSelectModule,
    NbIconModule,
    NbEvaIconsModule,
];
const COMPONENTS = [
    HeaderComponent,
    FooterComponent,
    TinyMCEComponent,
    OneColumnLayoutComponent,
    ThreeColumnsLayoutComponent,
    TwoColumnsLayoutComponent,
];

@NgModule({
    imports: [CommonModule, ...NB_MODULES, RouterModule, NbPopoverModule],
    exports: [CommonModule, ...COMPONENTS, AppShowAuthedDirective],
    declarations: [...COMPONENTS, AppShowAuthedDirective],
})
export class ThemeModule {
    static forRoot(): ModuleWithProviders<ThemeModule> {
        return {
            ngModule: ThemeModule,
            providers: [
                ...NbThemeModule.forRoot(
                    {
                        name: 'default',
                    },
                ).providers,
            ],
        };
    }
}
