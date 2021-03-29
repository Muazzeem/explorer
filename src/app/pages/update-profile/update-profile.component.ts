import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {UserService} from '../../@core/mock/users.service';
import {Router} from '@angular/router';

@Component({
    selector: 'ngx-update-profile',
    templateUrl: './update-profile.component.html',
    styleUrls: ['./update-profile.component.scss'],
})
export class UpdateProfileComponent implements OnInit {
    user: any;
    isSubmitting = false;
    errors: Object = {};
    settingsForm: FormGroup;

    constructor(private fb: FormBuilder, private userService: UserService, private router: Router) {
        this.settingsForm = this.fb.group({
            image: '',
            name: '',
            email: '',
            phone: '',
            address: '',
            github: '',
            linkedin: '',
        });
    }

    ngOnInit() {
        // Object.assign(this.user, this.userService.getCurrentUser());
        // this.settingsForm.patchValue(this.user);
    }

    submitForm() {
        console.warn(this.settingsForm.value);
        // this.isSubmitting = true;
        // this.updateUser(this.settingsForm.value);
        //
        // this.userService
        //     .update(this.user)
        //     .subscribe(
        //         updatedUser => this.router.navigateByUrl('/pages/profile'),
        //         err => {
        //             this.errors = err;
        //             this.isSubmitting = false;
        //         },
        //     );
    }

    updateUser(values: Object) {
        Object.assign(this.user, values);
    }
}
