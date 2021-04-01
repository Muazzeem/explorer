import {Component, Input} from '@angular/core';
import {NbDialogRef} from '@nebular/theme';
import {Router} from '@angular/router';
import {UserService} from '../../../../@core/mock/users.service';

@Component({
    selector: 'ngx-showcase-dialog',
    templateUrl: 'log-out-dialog.component.html',
    styleUrls: ['log-out-dialog.component.scss'],
})
export class LogoutdialogDialogComponent {

    @Input() title: string;

    constructor(protected ref: NbDialogRef<LogoutdialogDialogComponent>,
                private userService: UserService,
                private route: Router,
    ) {
    }

    dismiss() {
        this.ref.close();
    }

    logout() {
        this.userService.purgeAuth();
        this.route.navigateByUrl('/');
        this.ref.close();
    }
}
