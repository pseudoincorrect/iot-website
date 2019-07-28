import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by">Thanks <b><a href="https://akveo.com" target="_blank">Akveo</a></b> 2019</span>
    <span>
      maximeclemlent6
      <img src="assets/app_icons/at-sign.png" alt="at" style="width:25px;height:25px;">
      gmail.com
    </span>
  `,
})
export class FooterComponent {
}
