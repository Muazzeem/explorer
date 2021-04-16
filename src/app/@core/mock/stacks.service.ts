import {Injectable, OnInit, ViewChild} from '@angular/core';
import {NbTagInputAddEvent} from '@nebular/theme';
import {Observable, of} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class StacksService implements OnInit {
    options: string[];
    filteredOptions$: Observable<string[]>;

    @ViewChild('autoInput') input;

    constructor() {
    }

    trees: Set<string> = new Set();

    onTagAdd({value, input}: NbTagInputAddEvent): Set<string> {
        if (value) {
            this.trees.add(value);
        }
        input.nativeElement.value = '';
        return this.trees;
    }

    ngOnInit() {
        this.options = ['Option 1', 'Option 2', 'Option 3'];
        this.filteredOptions$ = of(this.options);
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
