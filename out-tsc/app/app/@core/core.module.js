var CoreModule_1;
import { __decorate, __metadata, __param } from "tslib";
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbAuthModule, NbDummyAuthStrategy } from '@nebular/auth';
import { NbSecurityModule, NbRoleProvider } from '@nebular/security';
import { of as observableOf } from 'rxjs';
import { throwIfAlreadyLoaded } from './module-import-guard';
import { AnalyticsService, LayoutService, PlayerService, SeoService, StateService, } from './utils';
import { UserData } from './data/users';
import { UserService } from './mock/users.service';
const socialLinks = [
    {
        url: 'https://github.com/akveo/nebular',
        target: '_blank',
        icon: 'github',
    },
    {
        url: 'https://www.facebook.com/akveo/',
        target: '_blank',
        icon: 'facebook',
    },
    {
        url: 'https://twitter.com/akveo_inc',
        target: '_blank',
        icon: 'twitter',
    },
];
const DATA_SERVICES = [
    { provide: UserData, useClass: UserService },
];
export class NbSimpleRoleProvider extends NbRoleProvider {
    getRole() {
        // here you could provide any role based on any auth flow
        return observableOf('guest');
    }
}
export const NB_CORE_PROVIDERS = [
    ...DATA_SERVICES,
    ...NbAuthModule.forRoot({
        strategies: [
            NbDummyAuthStrategy.setup({
                name: 'email',
                delay: 3000,
            }),
        ],
        forms: {
            login: {
                socialLinks: socialLinks,
            },
            register: {
                socialLinks: socialLinks,
            },
        },
    }).providers,
    NbSecurityModule.forRoot({
        accessControl: {
            guest: {
                view: '*',
            },
            user: {
                parent: 'guest',
                create: '*',
                edit: '*',
                remove: '*',
            },
        },
    }).providers,
    {
        provide: NbRoleProvider, useClass: NbSimpleRoleProvider,
    },
    AnalyticsService,
    LayoutService,
    PlayerService,
    SeoService,
    StateService,
];
let CoreModule = CoreModule_1 = class CoreModule {
    constructor(parentModule) {
        throwIfAlreadyLoaded(parentModule, 'CoreModule');
    }
    static forRoot() {
        return {
            ngModule: CoreModule_1,
            providers: [
                ...NB_CORE_PROVIDERS,
            ],
        };
    }
};
CoreModule = CoreModule_1 = __decorate([
    NgModule({
        imports: [
            CommonModule,
        ],
        exports: [
            NbAuthModule,
        ],
        declarations: [],
    }),
    __param(0, Optional()), __param(0, SkipSelf()),
    __metadata("design:paramtypes", [CoreModule])
], CoreModule);
export { CoreModule };
//# sourceMappingURL=core.module.js.map