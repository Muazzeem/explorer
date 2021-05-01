import {Component, OnDestroy, OnInit} from '@angular/core';
import {NbMediaBreakpointsService, NbMenuService, NbSidebarService, NbThemeService} from '@nebular/theme';
import {LayoutService} from '../../../@core/utils';
import {DialogService} from '../../../pages/service/dialog.service';
import {UserService} from '../../../@core/mock/users.service';
import {Router} from '@angular/router';

@Component({
    selector: 'ngx-header',
    styleUrls: ['./header.component.scss'],
    templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit, OnDestroy {
    userPictureOnly: boolean = false;
    user: any;

    userMenu = [
        {
            icon: 'person',
            title: 'Profile',
            link: '/pages/profile',
        },
    ];

    constructor(private sidebarService: NbSidebarService,
                private menuService: NbMenuService,
                private themeService: NbThemeService,
                private layoutService: LayoutService,
                private breakpointService: NbMediaBreakpointsService,
                private dialog: DialogService,
                private userService: UserService,
    ) {
    }

    login() {
        this.dialog.open();
    }

    ngOnInit(): void {
        this.userService.currentUser.subscribe(user => {
            this.user = user;
        });
    }

    ngOnDestroy() {
        this.dialog.logOut();
    }

    changeTheme(themeName: string) {
        this.themeService.changeTheme(themeName);
    }

    toggleSidebar(): boolean {
        this.sidebarService.toggle(true, 'menu-sidebar');
        this.layoutService.changeLayoutSize();

        return false;
    }

    navigateHome() {
        this.menuService.navigateHome();
        return false;
    }
}
