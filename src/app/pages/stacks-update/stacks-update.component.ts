import {Component, OnInit, ChangeDetectionStrategy, ViewChild} from '@angular/core';
import {NbTagComponent} from '@nebular/theme';
import {Observable, of} from 'rxjs';
import {StacksService} from '../../@core/mock/stacks.service';
import {ApiService} from '../../@core/mock/api.service';
import {map} from 'rxjs/operators';
import {UserService} from '../../@core/mock/users.service';
import {Router} from '@angular/router';
import {User} from '../../@core/models';

@Component({
    selector: 'ngx-stacks-update',
    templateUrl: './stacks-update.component.html',
    styleUrls: ['./stacks-update.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StacksUpdateComponent implements OnInit {
    options: string[];
    user: User = {} as User;
    filteredOptions$: Observable<string[]>;
    stackList = '/api/valid-tags';
    @ViewChild('autoInput') input;
    userStacks: Set<string> = new Set();
    userInfo: any;

    constructor(private stackService: StacksService,
                private apiService: ApiService,
                private userService: UserService,
                private router: Router,
    ) {
    }

    ngOnInit(): void {
        this.apiService.get(this.stackList).subscribe((data: any) => {
            this.options = data.stacks;
            this.filteredOptions$ = of(this.options);
            this.userInfo = this.userService.getCurrentUser();
        });
    }

    submit() {
        this.updateUser({'stacks': Array.from(this.userStacks)});
        this.userService
            .updateStacks({'stacks': Array.from(this.userStacks)}).subscribe();
    }

    updateUser(values: Object) {
        Object.assign(this.user, values);
    }

    onTagRemove(tagToRemove: NbTagComponent): void {
        this.userStacks.delete(tagToRemove.text);
    }

    onTagAdd({value, input}): void {
        this.userStacks = this.stackService.onTagAdd({value, input});
    }

    private filter(value: string): string[] {
        const filterValue = value.toLowerCase();
        return this.options.filter(optionValue => optionValue.toLowerCase().includes(filterValue));
    }

    getFilteredOptions(value: string): Observable<string[]> {
        return of(value).pipe(
            map(filterString => this.filter(filterString)),
        );
    }

    onChange() {
        this.filteredOptions$ = this.getFilteredOptions(this.input.nativeElement.value);
    }

    onSelectionChange($event) {
        this.filteredOptions$ = this.getFilteredOptions($event);
    }
}
