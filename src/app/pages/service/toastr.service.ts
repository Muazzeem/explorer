import {Injectable} from '@angular/core';
import {
    NbGlobalPhysicalPosition,
    NbGlobalPosition,
    NbToastrConfig,
    NbToastrService,
} from '@nebular/theme';

@Injectable({
    providedIn: 'root',
})
export class ToastrService {

    constructor(private toastrService: NbToastrService) {
    }


    config: NbToastrConfig;
    duration = 2000;
    position: NbGlobalPosition = NbGlobalPhysicalPosition.TOP_RIGHT;

    showToast(title: string, body: string) {
        const config = {
            status: 'primary',
            duration: this.duration,
            position: this.position,
        };
        const titleContent = title ? ` ${title}` : '';
        this.toastrService.success(
            body,
            `${titleContent}`,
            config);
    }
}
