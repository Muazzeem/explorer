import {Component, OnInit, ChangeDetectionStrategy, ViewChild} from '@angular/core';
import {NbTagComponent, NbTagInputAddEvent} from '@nebular/theme';
import {Observable, of} from 'rxjs';
import {map} from 'rxjs/operators';
import {ApiService} from '../../@core/mock/api.service';
import {UserService} from '../../@core/mock/users.service';

@Component({
    selector: 'ngx-stacks-update',
    templateUrl: './stacks-update.component.html',
    styleUrls: ['./stacks-update.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StacksUpdateComponent implements OnInit {
    options: string[];
    currentStacks: [];
    filteredOptions$: Observable<string[]>;
    stackList = '/api/valid-tags';
    @ViewChild('autoInput') input;

    constructor(private apiService: ApiService, private userService: UserService) {
    }
    stacks: Set<string> = new Set();

    onTagRemove(tagToRemove: NbTagComponent): void {
        this.stacks.delete(tagToRemove.text);
    }

    onTagAdd({value, input}: NbTagInputAddEvent): void {
        if (value) {
            this.stacks.add(value);
        }
        input.nativeElement.value = '';
        console.warn(this.stacks);
    }

    ngOnInit(): void {
        this.apiService.get(this.stackList).subscribe((data: any) => {
            this.filteredOptions$ = of(this.options);
            this.userStacksLists();
        });
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

    userStacksLists() {
        this.userService.getStacks().subscribe(
            data => {
                this.currentStacks = data;
                console.warn(this.currentStacks);
                const sorted = this.currentStacks.sort();
            },
        );

    }

    submit() {
        console.warn(this.stacks);
    }
}
