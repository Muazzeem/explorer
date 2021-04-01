import { __decorate, __metadata } from "tslib";
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { UserService } from '../../@core/mock/users.service';
import { concatMap, tap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
let ProfileComponent = class ProfileComponent {
    constructor(userService, route) {
        this.userService = userService;
        this.route = route;
    }
    userStacksLists() {
        this.userService.getStacks().subscribe(data => {
            this.currentStacks = data;
            const sorted = this.currentStacks.sort();
        });
    }
    ngOnInit() {
        this.route.data.pipe(concatMap((data) => {
            // Load the current user's data.
            return this.userService.currentUser.pipe(tap((userData) => {
                this.currentUser = userData;
            }));
        })).subscribe();
        this.userStacksLists();
    }
};
ProfileComponent = __decorate([
    Component({
        selector: 'ngx-profile',
        templateUrl: './profile.component.html',
        styleUrls: ['./profile.component.scss'],
        changeDetection: ChangeDetectionStrategy.OnPush,
        styles: [`
        :host nb-tab {
            padding: 1.25rem;
        }
    `],
    }),
    __metadata("design:paramtypes", [UserService,
        ActivatedRoute])
], ProfileComponent);
export { ProfileComponent };
//# sourceMappingURL=profile.component.js.map