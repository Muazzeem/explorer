import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {UserService} from '../../@core/mock/users.service';

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
    userProfile: any;

    constructor(private userService: UserService) {
    }

    ngOnInit(): void {
        this.userService.getProfile();
    }

}
