import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
    selector: 'ngx-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    styles: [`
        :host nb-tab {
            padding: 1.25rem;
        }
    `],
})
export class ProfileComponent implements OnInit {

    constructor() {
    }

    ngOnInit(): void {
    }

}
