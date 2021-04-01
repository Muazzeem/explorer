import {Component, OnDestroy, OnInit} from '@angular/core';
import {NbMediaBreakpointsService, NbMenuService, NbSidebarService, NbThemeService} from '@nebular/theme';
import {LayoutService} from '../../../@core/utils';
import {Subject} from 'rxjs';
import {DialogService} from '../../../pages/service/dialog.service';
import {UserService} from '../../../@core/mock/users.service';
import {Router} from '@angular/router';

@Component({
    selector: 'ngx-header',
    styleUrls: ['./header.component.scss'],
    templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit, OnDestroy {

    private destroy$: Subject<void> = new Subject<void>();
    userPictureOnly: boolean = false;
    user: any;

    themes = [
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

    currentTheme = 'default';

    userMenu = [{icon: 'person', title: 'Profile', link: '/pages/profile'},
        {icon: 'settings', title: 'Settings', link: '/pages/settings'}];

    constructor(private sidebarService: NbSidebarService,
                private menuService: NbMenuService,
                private themeService: NbThemeService,
                private layoutService: LayoutService,
                private breakpointService: NbMediaBreakpointsService,
                private dialog: DialogService,
                private userService: UserService,
                private route: Router,
    ) {
    }

    login() {
        this.dialog.open();
    }

    ngOnInit(): void {
        this.currentTheme = this.themeService.currentTheme;
        this.userService.currentUser.subscribe(user => {
            this.user = user.profile;
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
