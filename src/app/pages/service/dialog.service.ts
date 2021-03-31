import {Injectable} from '@angular/core';
import {NbDialogService} from '@nebular/theme';
import {ShowcaseDialogComponent} from '../modal-overlays/dialog/showcase-dialog/showcase-dialog.component';

@Injectable({
    providedIn: 'root',
})
export class DialogService {

    constructor(private dialogService: NbDialogService) {
    }

    open() {
        this.dialogService.open(ShowcaseDialogComponent);
    }
}
