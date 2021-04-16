import {Component, OnInit, ChangeDetectionStrategy, ViewChild} from '@angular/core';
import {NbTagComponent} from '@nebular/theme';
import {Observable, of} from 'rxjs';
import {StacksService} from '../../@core/mock/stacks.service';
import {ApiService} from '../../@core/mock/api.service';

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
    trees: any;

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
        console.warn(this.trees);
    }

    onTagRemove(tagToRemove: NbTagComponent): void {
        this.trees.delete(tagToRemove.text);
    }

    onTagAdd({value, input}): void {
        this.trees = this.stackService.onTagAdd({value, input});
    }

    onChange() {
        this.stackService.onChange();
    }

    onSelectionChange($event) {
        this.stackService.onSelectionChange($event);
    }
}
