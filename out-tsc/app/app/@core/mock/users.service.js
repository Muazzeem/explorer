import { __decorate, __metadata } from "tslib";
import { BehaviorSubject, ReplaySubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { UserData } from '../data/users';
import { distinctUntilChanged, map } from 'rxjs/operators';
import { ApiService } from './api.service';
import { JwtService } from './jwt.service';
let UserService = class UserService extends UserData {
    constructor(apiService, jwtService) {
        super();
        this.apiService = apiService;
        this.jwtService = jwtService;
        this.stacksUrl = `/api/user/stacks`;
        this.userUrl = `/api/user/user-info`;
        this.info = [];
        this.currentUserSubject = new BehaviorSubject({});
        this.currentUser = this.currentUserSubject.asObservable().pipe(distinctUntilChanged());
        this.isAuthenticatedSubject = new ReplaySubject(1);
        this.isAuthenticated = this.isAuthenticatedSubject.asObservable();
    }
    getUsers() {
        throw new Error('Method not implemented.');
    }
    getStacks() {
        return this.apiService.get(this.stacksUrl);
    }
    updateStacks() {
        return this.apiService.put(this.stacksUrl, {});
    }
    getProfile() {
        return this.apiService.get(this.userUrl);
    }
    populate() {
        // If JWT detected, attempt to get & store user's info
        if (this.jwtService.getToken()) {
            this.apiService.get(this.userUrl)
                .subscribe(data => this.setAuth(data), err => this.purgeAuth());
        }
        else {
            // Remove any potential remnants of previous auth states
            this.purgeAuth();
        }
    }
    setAuth(user) {
        // Set current user data into observable
        this.currentUserSubject.next(user);
        // Set isAuthenticated to true
        this.isAuthenticatedSubject.next(true);
    }
    // tslint:disable-next-line:typedef
    purgeAuth() {
        // Remove JWT from localstorage
        this.jwtService.destroyToken();
        // Set current user to an empty object
        this.currentUserSubject.next({});
        // Set auth status to false
        this.isAuthenticatedSubject.next(false);
    }
    getCurrentUser() {
        return this.currentUserSubject.value;
    }
    // Update the user on the server (email, pass, etc)
    update(user) {
        console.warn('User ' + user);
        return this.apiService
            .put('/api/user/user-info', user)
            .pipe(map(data => {
            // Update the currentUser observable
            this.currentUserSubject.next(data.user);
            return data.user;
        }));
    }
    getContacts() {
        return undefined;
    }
    getRecentUsers() {
        return undefined;
    }
};
UserService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [ApiService, JwtService])
], UserService);
export { UserService };
//# sourceMappingURL=users.service.js.map