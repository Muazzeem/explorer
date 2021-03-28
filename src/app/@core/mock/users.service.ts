import {of as observableOf, Observable, BehaviorSubject, ReplaySubject} from 'rxjs';
import {Injectable} from '@angular/core';
import {Contacts, RecentUsers, UserData} from '../data/users';
import {distinctUntilChanged, map} from 'rxjs/operators';
import {ApiService} from './api.service';
import {JwtService} from './jwt.service';


@Injectable()
export class UserService extends UserData {
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

    private time: Date = new Date;

    private users = {
        nick: {name: 'Muazzem Hossain', picture: 'assets/images/nick.png'},
    };
    private types = {
        mobile: 'mobile',
    };
    private contacts: Contacts[] = [
        {user: this.users.nick, type: this.types.mobile},
    ];
    private recentUsers: RecentUsers[] = [
        {user: this.users.nick, type: this.types.mobile, time: this.time.setHours(5, 29)},
    ];

    getUsers(): Observable<any> {
        return observableOf(this.users);
    }

    getContacts(): Observable<Contacts[]> {
        return observableOf(this.contacts);
    }

    getRecentUsers(): Observable<RecentUsers[]> {
        return observableOf(this.recentUsers);
    }

    getStacks(): Observable<any> {
        return this.apiService.get(this.stacksUrl);
    }

    updateStacks(): Observable<any> {
        return this.apiService.put(this.stacksUrl, {});
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

    attemptAuth(type, credentials): Observable<any> {
        const route = (type === 'login') ? '/login' : '';
        return this.apiService.post('/users' + route, {user: credentials})
            .pipe(map(
                data => {
                    this.setAuth(data.user);
                    return data;
                },
            ));
    }

    getCurrentUser(): any {
        return this.currentUserSubject.value;
    }

    // Update the user on the server (email, pass, etc)
    update(user): Observable<any> {
        return this.apiService
            .put('/user', {user})
            .pipe(map(data => {
                // Update the currentUser observable
                this.currentUserSubject.next(data.user);
                return data.user;
            }));
    }
}
