import { Component } from '@angular/core';
import {
  NbComponentStatus,
  NbGlobalPhysicalPosition,
  NbGlobalPosition,
  NbToastrService,
  NbToastrConfig,
} from '@nebular/theme';

@Component({
  selector: 'ngx-toastr',
  styleUrls: ['./toastr.component.scss'],
  templateUrl: './toastr.component.html',
})
export class ToastrComponent {
  constructor(private toastrService: NbToastrService) {}

  config: NbToastrConfig;

  index = 1;
  destroyByClick = true;
  duration = 2000;
  position: NbGlobalPosition = NbGlobalPhysicalPosition.TOP_RIGHT;
  preventDuplicates = false;
  status: NbComponentStatus = 'primary';

  title = 'HI there!';
  content = `I'm cool toaster!`;

  makeToast() {
    this.showToast(this.status, this.title, this.content);
  }

  private showToast(type: NbComponentStatus, title: string, body: string) {
    const config = {
      status: type,
      destroyByClick: this.destroyByClick,
      duration: this.duration,
      position: this.position,
      preventDuplicates: this.preventDuplicates,
    };
    const titleContent = title ? `. ${title}` : '';

    this.index += 1;
    this.toastrService.show(
      body,
      `Toast ${this.index}${titleContent}`,
      config);
  }
}
