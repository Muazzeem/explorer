import { __awaiter, __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';
import { SocialAuthService } from 'angularx-social-login';
import { FacebookLoginProvider, GoogleLoginProvider } from 'angularx-social-login';
import { UserService } from '../../@core/mock/users.service';
import { ApiService } from '../../@core/mock/api.service';
import { ToastrService } from '../service/toastr.service';
import { NbDialogRef } from '@nebular/theme';
let SignUpComponent = class SignUpComponent {
    constructor(userService, apiService, authService, toastrService, ref) {
        this.userService = userService;
        this.apiService = apiService;
        this.authService = authService;
        this.toastrService = toastrService;
        this.ref = ref;
        this.loginURL = `/api/user/get-token`;
        this.currentSocialUserSubject = new BehaviorSubject({});
        this.currentSocialUser = this.currentSocialUserSubject.asObservable().pipe(distinctUntilChanged());
    }
    ngOnInit() {
        this.currentSocialUser.subscribe(data => {
            this.apiService.post(this.loginURL, data).subscribe(
            // tslint:disable-next-line:no-shadowed-variable
            data => {
                localStorage.clear();
                localStorage.setItem('token', data.token);
                this.userService.populate();
            });
        });
    }
    // tslint:disable-next-line:typedef
    signInWithFB() {
        this.authService.signIn(FacebookLoginProvider.PROVIDER_ID).then((user) => __awaiter(this, void 0, void 0, function* () {
            yield this.currentSocialUserSubject.next({ provider: user.provider, token: user.authToken });
            this.toastrService.showToast('Welcome ' + user.name, '');
            this.ref.close();
        }));
    }
    // tslint:disable-next-line:typedef
    signInWithGoogle() {
        this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then((user) => __awaiter(this, void 0, void 0, function* () {
            yield this.currentSocialUserSubject.next({ provider: user.provider, token: user.idToken });
            this.toastrService.showToast('Welcome ' + user.name, '');
            this.ref.close();
        }));
    }
};
SignUpComponent = __decorate([
    Component({
        selector: 'ngx-sign-up',
        templateUrl: './sign-up.component.html',
        styleUrls: ['./sign-up.component.scss'],
    }),
    __metadata("design:paramtypes", [UserService,
        ApiService,
        SocialAuthService,
        ToastrService,
        NbDialogRef])
], SignUpComponent);
export { SignUpComponent };
//# sourceMappingURL=sign-up.component.js.map