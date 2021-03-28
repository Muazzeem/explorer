import {Component, OnInit} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {distinctUntilChanged} from 'rxjs/operators';
import {UserService} from '../../@core/mock/users.service';
import {ApiService} from '../../@core/mock/api.service';


@Component({
    selector: 'ngx-sign-up',
    templateUrl: './sign-up.component.html',
    styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
    loginURL = `/api/user/get-token`;
    token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6IjEwNjAyNjQ5MzY2MTQxODgwMjg3MyIsImV4cCI6MTcwMzMxMzc5NH0.t5-wkFuT4-LTru4sUozWuKKslppGZ8xLOY7DuRyifVI';
    private currentSocialUserSubject = new BehaviorSubject<any>({} as any);
    public currentSocialUser = this.currentSocialUserSubject.asObservable().pipe(distinctUntilChanged());

    constructor(private userService: UserService,
                private apiService: ApiService) {
    }

    ngOnInit(): void {
        console.warn('aaa');
        this.currentSocialUser.subscribe(data => {
            this.apiService.post(this.loginURL, data).subscribe(
                // tslint:disable-next-line:no-shadowed-variable
                data => {
                    localStorage.clear();
                    localStorage.setItem('token', this.token);
                    this.userService.populate();
                },
            );
        });


    }

}
