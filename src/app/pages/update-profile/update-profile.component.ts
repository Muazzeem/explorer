import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {UserService} from '../../@core/mock/users.service';
import {Router} from '@angular/router';
import {User} from '../../@core/models';
import {ToastrService} from '../service/toastr.service';

@Component({
    selector: 'ngx-update-profile',
    templateUrl: './update-profile.component.html',
    styleUrls: ['./update-profile.component.scss'],
})
export class UpdateProfileComponent implements OnInit {
    user: User = {} as User;
    isSubmitting = false;
    errors: Object = {};
    settingsForm: FormGroup;

    constructor(private fb: FormBuilder,
                private userService: UserService,
                private router: Router,
                private toastrService: ToastrService) {
        this.settingsForm = this.fb.group({
            name: '',
            email: '',
            phone: '',
            address: '',
        });
    }

    ngOnInit() {
        Object.assign(this.user, this.userService.getCurrentUser());
        this.settingsForm.patchValue(this.user['profile']);
    }

    submitForm() {
        this.isSubmitting = true;
        // update the model
        this.updateUser(this.settingsForm.value);

        this.userService
            .update(this.user['profile'])
            .subscribe(
                () => this.router.navigateByUrl('pages/profile'),
                err => {
                    this.errors = err;
                    this.isSubmitting = false;
                },
            );
        this.toastrService.showToast('We are update your profile', '');
    }

    updateUser(values: Object) {
        Object.assign(this.user, values);
    }
}
