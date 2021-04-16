import {Component, OnInit, ChangeDetectionStrategy, ViewChild} from '@angular/core';
import {NbTagComponent} from '@nebular/theme';
import {Observable, of} from 'rxjs';
import {StacksService} from '../../@core/mock/stacks.service';

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

    constructor(private stackService: StacksService) {
    }


    ngOnInit(): void {
        this.options = ['Option 1', 'Option 2', 'Option 3'];
        this.filteredOptions$ = of(this.options);
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
