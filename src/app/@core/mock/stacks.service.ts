import {Injectable} from '@angular/core';
import {NbTagInputAddEvent} from '@nebular/theme';

@Injectable({
    providedIn: 'root',
})
export class StacksService {

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
}
