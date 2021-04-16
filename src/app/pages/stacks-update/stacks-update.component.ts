import {Component, OnInit, ChangeDetectionStrategy, ViewChild} from '@angular/core';
import {NbTagComponent} from '@nebular/theme';
import {Observable, of} from 'rxjs';
import {StacksService} from '../../@core/mock/stacks.service';
import {ApiService} from '../../@core/mock/api.service';
import {map} from "rxjs/operators";

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
    userStacks: any;

    constructor(private stackService: StacksService,
                private apiService: ApiService,
    ) {
    }
    ngOnInit(): void {
        this.apiService.get(this.stackList).subscribe((data: any) => {
            this.options = data.stacks;
            this.filteredOptions$ = of(this.options);
        });
    }
    submit() {
        console.warn(this.userStacks);
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
