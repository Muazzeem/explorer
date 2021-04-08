import {Component, OnInit} from '@angular/core';
import {environment} from '../../../../environments/environment';
import {NgRecaptcha3Service} from 'ng-recaptcha3';
import {ApiService} from '../../../@core/mock/api.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ToastrService} from '../../service/toastr.service';

@Component({
    selector: 'ngx-form-layouts',
    styleUrls: ['./form-layouts.component.scss'],
    templateUrl: './form-layouts.component.html',
})
export class FormLayoutsComponent implements OnInit {

    feedbacks = new FormGroup({
        email: new FormControl('', [
            Validators.required,
            Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
        feedback: new FormControl('', Validators.required),
    });

    contact = `/api/user/contact`;
    SITE_KEY = environment.recaptchaKey;
    recapture: any[];

    constructor(private apiService: ApiService,
                private toastrService: ToastrService,
                private recaptcha3: NgRecaptcha3Service) {
    }

    onSubmit() {
        this.recaptcha3.getToken().then(token => {
                this.recapture = token;
                const formData = {
                    email: this.feedbacks.value.email,
                    comment: this.feedbacks.value.feedback, token: this.recapture,
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
        this.recaptcha3.init(this.SITE_KEY).then(status => {
            console.warn(status);
        });

    }

    // tslint:disable-next-line:typedef
    get email() {
        return this.feedbacks.get('email');
    }

    // tslint:disable-next-line:typedef
    get feedback() {
        return this.feedbacks.get('feedback');
    }

}
