import {Component, OnInit} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {distinctUntilChanged} from 'rxjs/operators';
import {SocialAuthService} from 'angularx-social-login';
import {FacebookLoginProvider, GoogleLoginProvider} from 'angularx-social-login';
import {UserService} from '../../@core/mock/users.service';
import {ApiService} from '../../@core/mock/api.service';
import {ToastrService} from '../service/toastr.service';
import {NbDialogRef} from '@nebular/theme';
import {LogoutdialogDialogComponent} from '../modal-overlays/dialog/log-out-dialog/log-out-dialog.component';
import {Router} from '@angular/router';

@Component({
    selector: 'ngx-sign-up',
    templateUrl: './sign-up.component.html',
    styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
    loginURL = `/api/user/get-token`;
    private currentUserSubject = new BehaviorSubject<any>({} as any);
    public currentUser = this.currentUserSubject.asObservable().pipe(distinctUntilChanged());
    constructor(private userService: UserService,
                private apiService: ApiService,
                private authService: SocialAuthService,
                private toastrService: ToastrService,
                protected ref: NbDialogRef<LogoutdialogDialogComponent>,
                private router: Router,
    ) {
    }
    ngOnInit(): void {
        this.currentUserSubject.subscribe(data => {
            this.apiService.post(this.loginURL, data).subscribe(
                // tslint:disable-next-line:no-shadowed-variable
                data => {
                    localStorage.clear();
                    localStorage.setItem('token', data.token);
                    this.userService.populate();
                },
            );
        });
    }
    signInWithFB() {
        this.authService.signIn(FacebookLoginProvider.PROVIDER_ID).then(async user => {
            await this.currentUserSubject.next({provider: user.provider, token: user.authToken});
            this.toastrService.showToast('Welcome ' + user.name, '');
            this.ref.close();
            await this.router.navigateByUrl('pages/dashboard');
        });
    }
    signInWithGoogle() {
        this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then(async user => {
            await this.currentUserSubject.next({provider: user.provider, token: user.idToken});
            this.toastrService.showToast('Welcome ' + user.name, '');
            this.ref.close();
            await this.router.navigateByUrl('pages/dashboard');
        });
    }
}
