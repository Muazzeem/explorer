import {of as observableOf, Observable, BehaviorSubject, ReplaySubject} from 'rxjs';
import {Injectable} from '@angular/core';
import {Contacts, RecentUsers, User, UserData} from '../data/users';
import {distinctUntilChanged, map} from 'rxjs/operators';
import {ApiService} from './api.service';
import {JwtService} from './jwt.service';


@Injectable()
export class UserService extends UserData {
    getUsers(): Observable<User[]> {
        throw new Error('Method not implemented.');
    }
    stacksUrl = `/api/user/stacks`;
    userUrl = `/api/user/user-info`;
    info = [];

    private currentUserSubject = new BehaviorSubject<any>({} as any);
    public currentUser = this.currentUserSubject.asObservable().pipe(distinctUntilChanged());
    private isAuthenticatedSubject = new ReplaySubject<boolean>(1);
    public isAuthenticated = this.isAuthenticatedSubject.asObservable();

    constructor(private apiService: ApiService, private jwtService: JwtService) {
        super();
    }
    getStacks(): Observable<any> {
        return this.apiService.get(this.stacksUrl);
    }

    updateStacks(stacks): Observable<any> {
        return this.apiService.put(this.stacksUrl, stacks);
    }

    getProfile(): Observable<any> {
        return this.apiService.get(this.userUrl);
    }

    populate() {
        // If JWT detected, attempt to get & store user's info
        if (this.jwtService.getToken()) {
            this.apiService.get(this.userUrl)
                .subscribe(
                    data => this.setAuth(data),
                    err => this.purgeAuth(),
                );
        } else {
            // Remove any potential remnants of previous auth states
            this.purgeAuth();
        }
    }

    setAuth(user: any) {
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
        this.currentUserSubject.next({} as any);
        // Set auth status to false
        this.isAuthenticatedSubject.next(false);
    }

    getCurrentUser(): any {
        return this.currentUserSubject.value;
    }

    // Update the user on the server (email, pass, etc)
    update(user): Observable<any> {
        return this.apiService
            .put('/api/user/user-info', user)
            .pipe(map(data => {
                // Update the currentUser observable
                this.currentUserSubject.next(data.user);
                return data.user;
            }));
    }

    getContacts(): Observable<Contacts[]> {
        return undefined;
    }

    getRecentUsers(): Observable<RecentUsers[]> {
        return undefined;
    }
}
