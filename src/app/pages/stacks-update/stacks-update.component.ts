import {Component, OnInit, ChangeDetectionStrategy, ViewChild} from '@angular/core';
import {NbTagComponent, NbTagInputAddEvent} from '@nebular/theme';
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
        // this.userService
        //     .updateStacks({'stacks': Array.from(this.userStacks)}).subscribe();
    }

    onTagRemove(tagToRemove: NbTagComponent): void {
        this.userStacks.delete(tagToRemove.text);
    }

    onTagAdd({value, input}: NbTagInputAddEvent): void {
        if (value) {
            this.userStacks.add(value);
        }
        input.nativeElement.value = '';
    }
}
