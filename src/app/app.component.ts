/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import {Component, OnInit} from '@angular/core';
import {UserService} from './@core/mock/users.service';

@Component({
    selector: 'ngx-app',
    template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit {

    constructor(private userService: UserService) {
    }

    ngOnInit(): void {
        this.userService.populate();
    }
}
