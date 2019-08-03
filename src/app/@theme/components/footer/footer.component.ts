import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by">Thanks <b><a href="https://akveo.com" target="_blank">Akveo</a></b></span>
    <div class="socials">
      <a href="./pages/contacts" target="_blank" class="ion ion-email ng-star-inserted"></a>
      <a href="https://www.linkedin.com/in/maximeclement-iot/" target="_blank" class="ion ion-social-linkedin" style="margin-left: 10px;"></a>
    </div>
  `,
})
export class FooterComponent {
}
