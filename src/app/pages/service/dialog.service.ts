import {Injectable} from '@angular/core';
import {NbDialogService} from '@nebular/theme';
import {ShowcaseDialogComponent} from '../modal-overlays/dialog/showcase-dialog/showcase-dialog.component';
import {LogoutdialogDialogComponent} from '../modal-overlays/dialog/log-out-dialog/log-out-dialog.component';

@Injectable({
    providedIn: 'root',
})
export class DialogService {
    constructor(private dialogService: NbDialogService) {
    }
    open() {
        this.dialogService.open(ShowcaseDialogComponent);
    }
    logOut() {
        this.dialogService.open(LogoutdialogDialogComponent);
    }
}
