import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { NbMediaBreakpointsService, NbMenuService, NbSidebarService, NbThemeService } from '@nebular/theme';
import { LayoutService } from '../../../@core/utils';
import { Subject } from 'rxjs';
import { DialogService } from '../../../pages/service/dialog.service';
import { UserService } from '../../../@core/mock/users.service';
import { Router } from '@angular/router';
let HeaderComponent = class HeaderComponent {
    constructor(sidebarService, menuService, themeService, layoutService, breakpointService, dialog, userService, route) {
        this.sidebarService = sidebarService;
        this.menuService = menuService;
        this.themeService = themeService;
        this.layoutService = layoutService;
        this.breakpointService = breakpointService;
        this.dialog = dialog;
        this.userService = userService;
        this.route = route;
        this.destroy$ = new Subject();
        this.userPictureOnly = false;
        this.themes = [
            {
                value: 'default',
                name: 'Light',
            },
            {
                value: 'dark',
                name: 'Dark',
            },
            {
                value: 'cosmic',
                name: 'Cosmic',
            },
            {
                value: 'corporate',
                name: 'Corporate',
            },
        ];
        this.currentTheme = 'default';
        this.userMenu = [{ icon: 'person', title: 'Profile', link: '/pages/profile' },
            { icon: 'settings', title: 'Settings', link: '/pages/settings' }];
    }
    login() {
        this.dialog.open();
    }
    ngOnInit() {
        this.currentTheme = this.themeService.currentTheme;
        this.userService.currentUser.subscribe(user => {
            this.user = user.profile;
        });
    }
    ngOnDestroy() {
        this.dialog.logOut();
    }
    changeTheme(themeName) {
        this.themeService.changeTheme(themeName);
    }
    toggleSidebar() {
        this.sidebarService.toggle(true, 'menu-sidebar');
        this.layoutService.changeLayoutSize();
        return false;
    }
    navigateHome() {
        this.menuService.navigateHome();
        return false;
    }
};
HeaderComponent = __decorate([
    Component({
        selector: 'ngx-header',
        styleUrls: ['./header.component.scss'],
        templateUrl: './header.component.html',
    }),
    __metadata("design:paramtypes", [NbSidebarService,
        NbMenuService,
        NbThemeService,
        LayoutService,
        NbMediaBreakpointsService,
        DialogService,
        UserService,
        Router])
], HeaderComponent);
export { HeaderComponent };
//# sourceMappingURL=header.component.js.map