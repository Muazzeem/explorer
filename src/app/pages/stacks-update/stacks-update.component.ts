import {Component, OnInit, ChangeDetectionStrategy, ViewChild} from '@angular/core';
import {NbTagComponent, NbTagInputAddEvent} from '@nebular/theme';
import {Observable, of} from 'rxjs';
import {map} from 'rxjs/operators';
import {ApiService} from '../../@core/mock/api.service';
import {UserService} from '../../@core/mock/users.service';
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
}
