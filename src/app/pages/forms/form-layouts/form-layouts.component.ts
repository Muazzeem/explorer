import {Component, OnInit} from '@angular/core';
import {environment} from '../../../../environments/environment';
import {NgRecaptcha3Service} from 'ng-recaptcha3';
import {ApiService} from '../../../@core/mock/api.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ToastrService} from '../../service/toastr.service';
import {User} from '../../../@core/models';
import {UserService} from '../../../@core/mock/users.service';

@Component({
    selector: 'ngx-form-layouts',
    styleUrls: ['./form-layouts.component.scss'],
    templateUrl: './form-layouts.component.html',
})
export class FormLayoutsComponent implements OnInit {
    user: User = {} as User;
    feedbacks = new FormGroup({
        email: new FormControl('', [
            Validators.required,
            Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
        comment: new FormControl('', Validators.required),
    });
    contact = `/api/user/contact`;
    SITE_KEY = environment.recaptchaKey;
    recapture: any[];

    constructor(private apiService: ApiService,
                private toastrService: ToastrService,
                private userService: UserService,
                private recaptcha3: NgRecaptcha3Service) {
    }

    onSubmit() {
        this.recaptcha3.getToken().then(token => {
                this.recapture = token;
                const formData = {
                    email: this.feedbacks.value.email,
                    comment: this.feedbacks.value.comment, token: this.recapture,
                };
                this.apiService.post(this.contact, formData)
                    .subscribe(
                        data => {
                            this.toastrService.showToast('Thanks! ', 'We received your feedback');
                            this.feedbacks.reset();
                        });
            },
        );
    }

    ngOnInit(): void {
        Object.assign(this.user, this.userService.getCurrentUser());
        this.feedbacks.patchValue(this.user);
        this.recaptcha3.init(this.SITE_KEY).then(status => {
            console.warn(status);
        });

    }

    get email() {
        return this.feedbacks.get('email');
    }

    get feedback() {
        return this.feedbacks.get('comment');
    }
}
