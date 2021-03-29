import {Component, OnInit, ChangeDetectionStrategy, ViewChild} from '@angular/core';
import {NbTagComponent, NbTagInputAddEvent} from '@nebular/theme';
import {Observable, of} from 'rxjs';
import {map} from 'rxjs/operators';
import {ApiService} from '../../@core/mock/api.service';

@Component({
    selector: 'ngx-stacks-update',
    templateUrl: './stacks-update.component.html',
    styleUrls: ['./stacks-update.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StacksUpdateComponent implements OnInit {
    options: string[];
    filteredOptions$: Observable<string[]>;
    stackList = '/api/valid-tags';
    @ViewChild('autoInput') input;

    constructor(private apiService: ApiService) {
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
            this.options = data.stacks;
            this.filteredOptions$ = of(this.options);
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

}
