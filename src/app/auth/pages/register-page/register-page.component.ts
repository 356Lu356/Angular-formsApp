import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [],
  template: `<p>registerPage works!</p>`,
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterPageComponent { }
