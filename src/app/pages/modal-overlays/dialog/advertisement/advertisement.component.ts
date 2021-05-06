import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {NbDialogRef} from '@nebular/theme';

@Component({
    selector: 'ngx-advertisement',
    templateUrl: './advertisement.component.html',
    styleUrls: ['advertisement.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdvertisementComponent {

    constructor(protected ref: NbDialogRef<AdvertisementComponent>) {
    }

    dismiss() {
        this.ref.close();
    }

}
