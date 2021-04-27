import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by">
      Created with ♥ by <b>Fractalslab</b> 2021
    </span>
    <div class="socials">
    </div>
  `,
})
export class FooterComponent {
}
