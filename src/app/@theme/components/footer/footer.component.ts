import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by">
      Created with ♥ by <b>Fractalslab</b> 2021
    </span>
    <div class="socials">
      <img routerLink="/pages/forms/layouts" src="https://img.icons8.com/fluent/35/000000/feedback-hub.png"/>
    </div>
  `,
})
export class FooterComponent {
}
