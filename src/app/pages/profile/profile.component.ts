import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {UserService} from '../../@core/mock/users.service';
import {concatMap, tap} from 'rxjs/operators';
import {ActivatedRoute} from '@angular/router';
import {Profile, User} from '../../@core/models';

@Component({
    selector: 'ngx-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    styles: [`
        :host nb-tab {
            padding: 1.25rem;
        }
    `],
})
export class ProfileComponent implements OnInit {
    profile: any;
    currentUser: User;
    user: User = {} as User;
    isUser: boolean;

    constructor(private userService: UserService,
                private route: ActivatedRoute,
    ) {
    }

    currentStacks: [];

    userStacksLists() {
        this.userService.getStacks().subscribe(
            data => {
                this.currentStacks = data;
                const sorted = this.currentStacks.sort();
                console.warn(this.currentStacks);
            },
        );

    }

    ngOnInit() {
        this.route.data.pipe(
            concatMap((data) => {
                this.profile = data;
                // Load the current user's data.
                return this.userService.currentUser.pipe(tap(
                    (userData: User) => {
                        this.currentUser = userData;
                        this.isUser = (this.currentUser.username === this.profile.username);
                    },
                ));
            }),
        ).subscribe();
        console.warn(this.userService.getRecentUsers());
    }

}
